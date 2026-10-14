import React, { useState } from 'react';
import {
  X, Network, Server, Database, Cloud, Search, Shield, Zap,
  Layers, Download, Check, Cpu, GitBranch, ArrowRight, Activity
} from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'diagram' | 'strategy' | 'ai-workflow'>('diagram');
  const [copiedDoc, setCopiedDoc] = useState(false);

  if (!isOpen) return null;

  const handleCopyMarkdown = () => {
    const markdownContent = `# Production-Scale Vacation Rental Marketplace Architecture (Airbnb Scale)
... (Full architecture blueprint included in ARCHITECTURE.md) ...`;
    navigator.clipboard.writeText(markdownContent);
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 md:p-6 backdrop-blur-xs">
      <div className="bg-white w-full max-w-6xl rounded-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#ebebeb] flex items-center justify-between bg-neutral-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF385C] rounded-lg">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base md:text-lg font-bold">
                Vacation-Rental Marketplace System Architecture
              </h2>
              <p className="text-xs text-neutral-400">
                Production-scale distributed blueprint for 100M+ users, high-concurrency availability & booking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="px-6 bg-neutral-800 text-neutral-300 flex items-center gap-6 text-xs md:text-sm font-semibold border-b border-neutral-700">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'diagram'
                ? 'border-[#FF385C] text-white'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Interactive Architecture Map</span>
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'strategy'
                ? 'border-[#FF385C] text-white'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>Scaling Strategy (Frontend, Backend, Storage)</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-workflow')}
            className={`py-3 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'ai-workflow'
                ? 'border-[#FF385C] text-white'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>AI Workflow & Subagent Configs</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-neutral-50 text-neutral-800">
          {activeTab === 'diagram' && (
            <div className="space-y-6">
              {/* Architecture Diagram Canvas */}
              <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm space-y-8">
                {/* Layer 1: Edge & Clients */}
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    <span>Layer 1: Global Edge & Clients</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50">
                      <div className="font-bold text-sm text-neutral-900">Web SPA / Next.js SSR</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Dynamic server-side rendering for listing SEO + Client hydration with optimistic UI updates.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50">
                      <div className="font-bold text-sm text-neutral-900">Mobile (iOS / Android)</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Native mobile client apps with offline listing caching and push notifications.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50">
                      <div className="font-bold text-sm text-neutral-900">Cloudflare Edge / Anycast CDN</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Static asset caching, WebP/AVIF dynamic image resizing, SSL termination, DDoS protection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-[2px] bg-neutral-300" />
                </div>

                {/* Layer 2: API Gateway & Service Mesh */}
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Layer 2: API Gateway & Orchestration (Envoy / GraphQL Federation)</span>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="font-bold text-neutral-900">GraphQL Gateway:</span> Supergraph query federation across microservices.
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900">Auth & Token Introspection:</span> JWT validation & OAuth 2.0 sessions.
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900">Rate Limiter:</span> Token bucket algorithm protecting against scraping.
                    </div>
                    <div>
                      <span className="font-bold text-neutral-900">Service Mesh (Istio):</span> Mutual TLS & circuit-breaker resilience.
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-[2px] bg-neutral-300" />
                </div>

                {/* Layer 3: Microservices Domain Core */}
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#FF385C] mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    <span>Layer 3: Core Domain Microservices</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                      <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                        <Search className="w-4 h-4 text-[#FF385C]" />
                        <span>Search & Discovery</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Geo-spatial bounding box search, dynamic ranking, filter aggregations via Elasticsearch.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                      <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#FF385C]" />
                        <span>Availability & Pricing</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        High-throughput calendar bitmap locks, dynamic night pricing, minimum stay validator.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                      <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#FF385C]" />
                        <span>Booking Saga Service</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Two-phase commit booking orchestrator, idempotency keys, Stripe/payment integration.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                      <div className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#FF385C]" />
                        <span>Review & Trust Score</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Double-blind review disclosure, sentiment analysis, Superhost qualification pipeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-6 w-[2px] bg-neutral-300" />
                </div>

                {/* Layer 4: Storage & Data Tier */}
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    <span>Layer 4: Distributed Storage & Caching Layer</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                      <div className="font-bold text-sm text-neutral-900">PostgreSQL / Aurora</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Relational listing catalog, host profiles, sharded by host geography.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                      <div className="font-bold text-sm text-neutral-900">Redis Enterprise</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Calendar availability bitmaps, temporary 15-min reservation locks, hot queries.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                      <div className="font-bold text-sm text-neutral-900">Elasticsearch Cluster</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Geo-spatial indexes (geo_point), real-time pricing and amenity filtering.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
                      <div className="font-bold text-sm text-neutral-900">Kafka & Object Storage</div>
                      <p className="text-xs text-neutral-600 mt-1">
                        Async event streaming + S3 image store with multi-region replication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'strategy' && (
            <div className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <span>Frontend Architecture & Performance</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 leading-relaxed">
                    <li><strong>Hybrid Rendering:</strong> Static generation for popular listings with on-demand incremental static regeneration (ISR) when host updates amenities.</li>
                    <li><strong>Image Delivery Pipeline:</strong> AVIF/WebP formats with responsive srcsets and priority loading for the hero gallery.</li>
                    <li><strong>Optimistic UI:</strong> Immediate feedback on booking and wishlisting with background reconciliation.</li>
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <span>High-Concurrency Availability & Locking</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 leading-relaxed">
                    <li><strong>Bit-Level Calendar Representation:</strong> Each day represented as a bit in Redis bitfield, allowing checking 365 days of availability in 1 Redis command (&lt;1ms).</li>
                    <li><strong>Distributed Reservation Locks:</strong> Redlock algorithm ensures two guests cannot book the same dates simultaneously.</li>
                    <li><strong>Saga Pattern:</strong> Manages distributed checkout flow (Hold Inventory → Process Stripe Charge → Confirm Booking → Issue Push Notification).</li>
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Search className="w-5 h-5 text-rose-600" />
                    <span>Geo-Spatial Search at Scale</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 leading-relaxed">
                    <li><strong>Geo-Hashing:</strong> ElasticSearch inverted index using H3 hexagonal hierarchical spatial indexing.</li>
                    <li><strong>Change Data Capture (CDC):</strong> Debezium connector streams Postgres property updates into Kafka and indexes them into ElasticSearch in &lt;100ms.</li>
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3">
                  <h3 className="font-bold text-base text-neutral-900 flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-amber-600" />
                    <span>Deployment & CI/CD Strategy</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 leading-relaxed">
                    <li><strong>Kubernetes Multi-Region:</strong> Deployed on EKS/GKE with KEDA autoscaling based on Kafka consumer lag and HTTP RPS.</li>
                    <li><strong>Canary Deployments:</strong> Argo Rollouts with 5% → 25% → 100% traffic shift verified by automated Datadog error-rate analysis.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai-workflow' && (
            <div className="space-y-6 text-sm">
              <div className="p-5 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <h3 className="font-bold text-base text-neutral-900 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-600" />
                  <span>AI-Native Workflow, Coding Agents & Subagent Configuration</span>
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  As requested in the Playpower take-home assignment specification, this clone was engineered using an AI-native agentic development methodology utilizing specialized agent roles:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2">
                    <span className="font-bold text-neutral-900">UI / Visual Fidelity Subagent</span>
                    <p className="text-neutral-600">
                      Focused on pixel-level matching: Airbnb typography scale, 5-photo hero collage layout, spacing math, rounded corner nesting, and authentic Airbnb icons.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2">
                    <span className="font-bold text-neutral-900">Interaction & State Subagent</span>
                    <p className="text-neutral-600">
                      Orchestrated the 3 core views (Listing Page, Photo Tour overlay, and Lightbox), keyboard navigation (←/→/Esc), and interactive reservation pricing engine.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-2">
                    <span className="font-bold text-neutral-900">Architecture Subagent</span>
                    <p className="text-neutral-600">
                      Designed the distributed vacation-rental systems blueprint (Geo-search, Redlock calendar booking saga, Kafka CDC, multi-region database topology).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#ebebeb] bg-white flex items-center justify-between text-xs text-neutral-500">
          <div>
            System Architecture Blueprint · Documented in repository <code className="bg-neutral-100 px-1.5 py-0.5 rounded font-mono text-neutral-800">ARCHITECTURE.md</code>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#222222] hover:bg-black text-white rounded-lg font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
