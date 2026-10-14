import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, Network } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

interface HeaderProps {
  onOpenArchitecture: () => void;
  onShare: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onScrollToCalendar: () => void;
  onOpenGuestPicker: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenArchitecture,
  onShare,
  isSaved,
  onToggleSave,
  onScrollToCalendar,
  onOpenGuestPicker,
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white border-b border-[#ebebeb] transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10 h-20 flex items-center justify-between gap-4">
        {/* Left: Airbnb Logo */}
        <div
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg
            className="h-8 w-auto text-[#FF385C]"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Airbnb"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.572-3.394 8.806-8.722 8.806-3.036 0-5.719-1.393-7.509-3.774l-.269-.374-.269.374c-1.79 2.381-4.473 3.774-7.509 3.774-5.328 0-8.722-4.234-8.722-8.806 0-1.12.302-2.305.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1zm0 2c-1.282 0-2.29.645-3.327 2.493l-.48 1.03c-1.928 3.78-6.07 12.456-7.042 14.724l-.136.331c-.571 1.206-.815 2.155-.815 3.016 0 3.633 2.656 6.806 6.722 6.806 2.492 0 4.745-1.189 6.273-3.238l.805-1.078.805 1.078c1.528 2.049 3.781 3.238 6.273 3.238 4.066 0 6.722-3.173 6.722-6.806 0-.861-.244-1.81-.815-3.016l-.136-.331c-.972-2.268-5.114-10.944-7.042-14.724l-.48-1.03C18.29 3.645 17.282 3 16 3zm0 13c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
          </svg>
          <span className="font-bold text-xl tracking-tight text-[#FF385C] hidden sm:inline select-none">
            airbnb
          </span>
        </div>

        {/* Center: Search pill */}
        <div className="flex items-center border border-[#dddddd] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-shadow cursor-pointer text-sm">
          <button className="font-semibold text-[#222222] px-2 text-xs md:text-sm hover:text-black">
            Anywhere
          </button>
          <span className="h-4 w-px bg-[#dddddd]" />
          <button
            onClick={onScrollToCalendar}
            className="font-semibold text-[#222222] px-2 text-xs md:text-sm hover:text-black"
          >
            Any week
          </button>
          <span className="h-4 w-px bg-[#dddddd]" />
          <button
            onClick={onOpenGuestPicker}
            className="text-[#717171] px-2 text-xs md:text-sm hover:text-black"
          >
            Add guests
          </button>
          <div className="bg-[#FF385C] text-white p-2 rounded-full ml-1.5 flex items-center justify-center shrink-0">
            <Search className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          {/* Architecture button — teal accent */}
          <button
            onClick={onOpenArchitecture}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#0D5C63]/30 bg-[#E8F4F5] text-[#0D5C63] hover:bg-[#d0eaec] font-medium text-xs md:text-sm transition-colors"
            title="View Production-Scale Vacation Rental Architecture Diagram"
          >
            <Network className="w-3.5 h-3.5" />
            <span className="hidden md:inline">System Architecture</span>
            <span className="md:hidden">Architecture</span>
          </button>

          <button className="hidden lg:block text-sm font-semibold text-[#222222] px-3.5 py-2.5 rounded-full hover:bg-neutral-100 transition-colors whitespace-nowrap">
            Airbnb your home
          </button>

          <button className="p-2.5 rounded-full hover:bg-neutral-100 text-[#222222] transition-colors hidden sm:flex items-center justify-center">
            <Globe className="w-4 h-4" />
          </button>

          {/* User profile dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2.5 border border-[#dddddd] rounded-full p-1.5 pl-3 hover:shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition-shadow bg-white"
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
            >
              <Menu className="w-4 h-4 text-[#222222]" />
              <Avatar size="sm" className="bg-[#717171]">
                <AvatarFallback className="bg-[#717171] text-white text-[11px]">
                  U
                </AvatarFallback>
              </Avatar>
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-[#ebebeb] py-2 z-50 text-sm">
                <button
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    onOpenArchitecture();
                  }}
                  className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 font-semibold text-[#0D5C63] flex items-center gap-2"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>System Architecture</span>
                </button>
                <div className="h-px bg-[#ebebeb] my-1" />
                <button className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 font-semibold text-[#222222]">
                  Sign up
                </button>
                <button className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 text-[#222222]">
                  Log in
                </button>
                <div className="h-px bg-[#ebebeb] my-1" />
                <button className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 text-[#222222]">
                  Airbnb your home
                </button>
                <button className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 text-[#222222]">
                  Host an experience
                </button>
                <button className="w-full text-left px-4 py-2.5 hover:bg-neutral-50 text-[#222222]">
                  Help Center
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
