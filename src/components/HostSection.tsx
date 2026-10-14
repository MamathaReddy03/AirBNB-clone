import React, { useState } from 'react';
import { Award, ShieldCheck, MessageSquare, Star, Clock, CheckCircle2, X } from 'lucide-react';
import { HostInfo } from '../types';

interface HostSectionProps {
  host: HostInfo;
}

export const HostSection: React.FC<HostSectionProps> = ({ host }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setMessageText('');
      setIsContactModalOpen(false);
    }, 1800);
  };

  return (
    <div className="py-10 border-b border-[#ebebeb]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left: Host Info Card */}
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={host.avatar}
                alt={host.name}
                className="w-16 h-16 rounded-full object-cover border border-[#dddddd]"
              />
              {host.isSuperhost && (
                <div className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white p-1 rounded-full shadow-xs">
                  <Award className="w-4 h-4" />
                </div>
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#222222]">
                Hosted by {host.name}
              </h3>
              <p className="text-xs text-[#717171]">
                Joined in 2022 · {host.yearsHosting} years hosting
              </p>
            </div>
          </div>

          {/* Key Stats Badges */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#222222]">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#222222] text-[#222222]" />
              <span className="font-semibold">{host.rating}</span>
              <span className="text-[#717171]">({host.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-[#717171]">Identity verified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#FF385C]" />
              <span className="text-[#717171]">Superhost</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-[#484848] leading-relaxed">
            {host.bio}
          </p>

          {/* Co-hosts */}
          {host.coHosts && host.coHosts.length > 0 && (
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-[#717171] mb-2">
                Co-hosts
              </h4>
              <div className="flex items-center gap-4">
                {host.coHosts.map((coHost, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={coHost.avatar}
                      alt={coHost.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#dddddd]"
                    />
                    <span className="text-xs font-medium text-[#222222]">{coHost.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Host details */}
          <div className="space-y-2 text-sm text-[#222222] pt-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#717171]" />
              <span>Response rate: <strong>{host.responseRate}%</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#717171]" />
              <span>Responds <strong>{host.responseTime}</strong></span>
            </div>
          </div>

          {/* Contact Host Button */}
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-6 py-3 border border-[#222222] rounded-xl font-semibold text-sm text-[#222222] hover:bg-[#f7f7f7] transition-colors"
          >
            Contact Host
          </button>
        </div>

        {/* Right: Superhost description & Payment security badge */}
        <div className="w-full md:w-80 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 text-xs text-[#717171] leading-relaxed">
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-[#FF385C] flex-shrink-0" />
            <div>
              <h5 className="font-bold text-sm text-[#222222]">Mirashya is a Superhost</h5>
              <p className="mt-1">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-200" />

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <p>
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Host Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#ebebeb] pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={host.avatar}
                  alt={host.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#222222]">Contact {host.name}</h4>
                  <p className="text-xs text-[#717171]">Usually responds {host.responseTime}</p>
                </div>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#f7f7f7] text-[#717171]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {messageSent ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                <h5 className="font-bold text-base text-[#222222]">Message sent!</h5>
                <p className="text-xs text-[#717171]">
                  Mirashya Homes will receive your inquiry and reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Send a message
                  </label>
                  <textarea
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Hi Mirashya, I'm planning a romantic getaway in Candolim and had a question about the private jacuzzi and check-in time..."
                    className="w-full p-3 text-sm border border-[#dddddd] rounded-xl focus:outline-hidden focus:border-[#222222]"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-[#717171] hover:text-[#222222]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#FF385C] hover:bg-[#E00B41] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
