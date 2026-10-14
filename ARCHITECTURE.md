# Vacation-Rental Marketplace System Architecture (Airbnb Scale)

## 1. Executive Summary
This document outlines the high-level architecture and scaling strategy for a production-scale vacation-rental marketplace (similar to Airbnb) supporting:
- **150M+ Monthly Active Users**
- **10M+ Global Property Listings**
- **100,000+ Concurrent Search Queries per Second**
- **Sub-100ms Search & Availability Latency**
- **High-Consistency, Zero Double-Booking Guarantee**

---

## 2. High-Level Architectural Topology

```
                         [ Global Users (Web, Mobile Apps) ]
                                         │
                                         ▼
                      [ Anycast DNS + Cloudflare Edge / CDN ]
              (DDoS Protection, WebP/AVIF Image Resizing, Edge Caching)
                                         │
                                         ▼
                   [ Envoy / Kong API Gateway & Load Balancers ]
            (SSL Termination, Rate Limiting, JWT Auth, GraphQL Federation)
                                         │
       ┌──────────────────┬──────────────┴─────┬──────────────────┬──────────────┐
       ▼                  ▼                    ▼                  ▼              ▼
[Search & Discovery] [Listing Catalog] [Availability & Pricing] [Booking Saga] [Review Service]
 (Elasticsearch)       (PostgreSQL)      (Redis Bitmaps)         (CockroachDB)   (DynamoDB)
       │                  │                    │                  │              │
       └──────────────────┴──────────────┬─────┴──────────────────┴──────────────┘
                                         ▼
                     [ Apache Kafka Event Streaming Mesh ]
                        (CDC via Debezium Connector)
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
      [ Notification Workers ]                        [ Analytics & Data Lake ]
      (Twilio, SendGrid, APNs)                        (Snowflake / BigQuery)
```

---

## 3. Scaling Strategy by Domain

### 3.1 Frontend Architecture & CDN
- **Framework**: Hybrid Next.js / Vite React Server Components (RSC).
- **Listing Page Rendering (ISR)**: Static listing snapshots regenerated incrementally upon host modifications, served directly from CDN edge nodes.
- **Dynamic Reservation State**: Hydrated client-side with optimistic UI and continuous background synchronization.
- **Media Delivery**: Cloudinary / Imgix dynamic image pipeline converting high-resolution photo submissions into WebP/AVIF srcsets cached on Cloudflare Edge.

### 3.2 Backend Microservices & API Gateway
- **GraphQL Federation**: A single unified GraphQL supergraph federating specialized domain subgraphs:
  - **Listing Catalog Service**: Property details, amenities, sleeping arrangements, house rules.
  - **Availability & Pricing Engine**: Calculates real-time prices based on seasonality, guest count, weekend surcharges, and discount promotions.
  - **Booking & Checkout Orchestrator**: Distributed Saga Pattern handling multi-step reservations.
- **Inter-Service Communication**: gRPC with Protocol Buffers for sub-millisecond internal RPCs.

### 3.3 Availability & High-Concurrency Calendar Locking
- **Bit-Level Availability Representation**: Each listing's calendar year is stored as a 365-bit bitfield in Redis Enterprise.
  - Checking 7-day availability for a date range requires a single bitwise `GETBIT` / `BITFIELD` operation executed in **< 0.5ms**.
- **Distributed Locks with Redlock**: When a guest initiates checkout, a distributed Redis lock with a 15-minute TTL is acquired across the date range to prevent double-booking race conditions.

### 3.4 Search & Geo-Spatial Discovery Strategy
- **Elasticsearch Cluster**: Inverted indices with `geo_point` coordinate fields and Uber H3 hexagonal spatial indexing.
- **Bounding-Box Map Queries**: Map panning queries execute geo-bounding queries filtered by price, bedrooms, jacuzzi/amenities with sub-50ms latency.
- **Change Data Capture (CDC)**: Debezium captures Postgres write-ahead logs (WAL) and publishes updates to Apache Kafka, streaming real-time catalog changes into Elasticsearch in < 100ms.

### 3.5 Database & Storage Tier
| Domain | Primary Storage | Rationale |
|---|---|---|
| **Listing & Host Profiles** | PostgreSQL (Amazon Aurora Multi-Region) | Relational integrity, ACID compliance, geographically partitioned by host country. |
| **Active Reservations & Payments** | CockroachDB / Google Cloud Spanner | Globally distributed ACID transactions with serializable isolation. |
| **Availability Calendar** | Redis Enterprise Cluster | In-memory bitmap data structures with sub-millisecond read/write latency. |
| **Reviews & Feedback** | Amazon DynamoDB / ScyllaDB | High-throughput, key-value document store with append-only access pattern. |
| **Raw Media & Documents** | AWS S3 / Cloud Storage | 99.999999999% durability with multi-region replication. |

### 3.6 Infrastructure, Deployment & Observability
- **Kubernetes (EKS / GKE)**: Multi-cluster deployment across US, Europe, and Asia-Pacific regions.
- **Autoscaling (KEDA)**: Horizontal Pod Autoscaler triggered on incoming HTTP request rates and Kafka lag metrics.
- **GitOps Deployment**: ArgoCD for progressive canary rollouts (5% → 25% → 100%) with automated rollbacks if latency or HTTP 5xx errors increase.
- **Observability**: Distributed tracing with OpenTelemetry and Jaeger, Grafana metric dashboards, and centralized Datadog logging.

---

## 4. Sequence of Prompts for AI-Assisted Workflow

1. **Prompt 1 (Requirement Decomposition & Visual Spec)**:
   > "Analyze the PlayPower take-home assignment PDF for the Airbnb listing clone: Romantic Jacuzzi 1BHK Candolim | Mirashya UG10. Extract all required views (Listing Page, Photo Tour overlay, and Lightbox), required interactions, typography, layout hierarchy, and non-functional constraints."

2. **Prompt 2 (Data Modeling & Authentic Asset Assembly)**:
   > "Construct standard TypeScript interfaces for ListingData, Photo, Review, AmenityItem, HostInfo, and ReservationDetails. Populate realistic data for Candolim Goa 1BHK apartment with private jacuzzi, 24 authentic high-res room photos, 38 categorized amenities, and 8 verified reviews."

3. **Prompt 3 (Component-Driven Frontend Implementation)**:
   > "Implement modular React components with Tailwind CSS utility styling:
   > - Header with authentic Airbnb SVG logo and search pill
   > - 5-photo Hero Gallery with rounded borders and 'Show all photos' badge
   > - Sticky reservation card with dynamic date pricing, guest popover, and price calculation
   > - 2-month interactive datepicker calendar with range preview
   > - Full Reviews section with 6 rating breakdown bars and search modal
   > - Interactive Candolim Goa map location section"

4. **Prompt 4 (Overlay Views: Photo Tour & Lightbox Parity)**:
   > "Build Screen 2 (Photo Tour) with category filtering and organized photo cards, and Screen 3 (Lightbox) with keyboard navigation (←/→/Esc), counter, smooth motion transitions, and interactive thumbnail strip."

5. **Prompt 5 (Production Architecture Blueprint & Documentation)**:
   > "Author the comprehensive production-scale vacation-rental marketplace system architecture diagram and markdown specification covering frontend, backend, storage, search, and deployment."
