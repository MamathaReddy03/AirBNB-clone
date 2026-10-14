import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Mail, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { ListingData } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: ListingData;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, listing }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ebebeb] pb-4">
          <h3 className="font-bold text-lg text-[#222222]">Share this place</h3>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full hover:bg-[#f7f7f7] text-[#717171] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Listing Preview Card */}
        <div className="flex items-center gap-4 p-3.5 rounded-xl border border-[#dddddd] bg-[#fafafa]">
          <img
            src={listing.photos[0].url}
            alt={listing.title}
            className="w-18 h-18 rounded-lg object-cover flex-shrink-0"
          />
          <div className="space-y-0.5 overflow-hidden">
            <h4 className="font-semibold text-sm text-[#222222] truncate">
              {listing.title}
            </h4>
            <p className="text-xs text-[#717171]">
              Entire serviced apartment in Candolim, India
            </p>
            <div className="text-xs font-semibold text-[#222222] pt-0.5">
              ★ {listing.rating} · {listing.reviewCount} reviews · Superhost
            </div>
          </div>
        </div>

        {/* Share Options Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Copy link */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#dddddd] hover:bg-[#f7f7f7] transition-all text-left text-sm font-semibold text-[#222222]"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-[#222222]">
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </div>
            <span>{copied ? 'Link copied!' : 'Copy Link'}</span>
          </button>

          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              `Check out this romantic Jacuzzi apartment in Candolim, Goa: ${currentUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#dddddd] hover:bg-[#f7f7f7] transition-all text-left text-sm font-semibold text-[#222222]"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span>WhatsApp</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:?subject=${encodeURIComponent(listing.title)}&body=${encodeURIComponent(
              `Check out this Airbnb listing: ${currentUrl}`
            )}`}
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#dddddd] hover:bg-[#f7f7f7] transition-all text-left text-sm font-semibold text-[#222222]"
          >
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Mail className="w-4 h-4" />
            </div>
            <span>Email</span>
          </a>

          {/* Twitter / X */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Check out this romantic Jacuzzi apartment in Candolim, Goa: ${currentUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-[#dddddd] hover:bg-[#f7f7f7] transition-all text-left text-sm font-semibold text-[#222222]"
          >
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800">
              <Twitter className="w-4 h-4" />
            </div>
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </div>
  );
};
