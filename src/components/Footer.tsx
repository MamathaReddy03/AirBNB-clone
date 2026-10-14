import React from 'react';
import { Globe } from 'lucide-react';
import { Separator } from './ui/separator';

const FOOTER_COLS = [
  {
    heading: 'Support',
    links: ['Help Center', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report a concern'],
  },
  {
    heading: 'Hosting',
    links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Airbnb-friendly apartments'],
  },
  {
    heading: 'Airbnb',
    links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards', 'Airbnb.org emergency stays'],
  },
  {
    heading: 'Explore Goa',
    links: ['Candolim Beach retreats', 'Calangute luxury villas', 'Aguada coastal stays', 'Goa homes with Jacuzzi', 'North Goa romantic stays'],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fafaf9] border-t border-[#e8e8e8] text-[#1a1a1a] text-sm mt-4">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10 pt-12 pb-8">
        {/* 4 Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="space-y-4">
              {/* DM Serif for column headings — not ALL CAPS */}
              <h4 className="font-display text-base text-[#1a1a1a]">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#484848] hover:text-[#1a1a1a] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#717171]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="text-[#1a1a1a] font-medium">© 2026 Airbnb, Inc.</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline hover:text-[#1a1a1a] transition-colors">Privacy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline hover:text-[#1a1a1a] transition-colors">Terms</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline hover:text-[#1a1a1a] transition-colors">Sitemap</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline hover:text-[#1a1a1a] transition-colors">Company details</a>
          </div>

          <div className="flex items-center gap-5 font-semibold text-[#1a1a1a] text-[13px]">
            <button className="flex items-center gap-1.5 hover:underline transition-colors">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              English (US)
            </button>
            <button className="hover:underline transition-colors">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
