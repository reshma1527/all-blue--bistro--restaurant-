import React, { useState } from 'react';
import { maritimeSoundtrack } from '../utils/audio';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReserve: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReserve,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const toggleSound = () => {
    const playing = maritimeSoundtrack.toggle();
    setIsAudioPlaying(playing);
  };

  const handleNavClick = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-40 bg-[#061426]/90 backdrop-blur-xl shadow-[0_4px_24px_-2px_rgba(6,20,38,0.85)] border-b border-[#28354a]/60">
      <div className="h-16 md:h-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg bg-[#132033] hover:bg-[#1d2a3e] text-[#ffc880] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero-section', 'home');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <img
              alt="All Blue Bistro Crest"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XxZaxTV1_Tnp3Wp3GlYAzRP9KHcvRmIC39pCw-Yx_ijXwLU9jzofxfkIl6eKgt6qH2v3gcHZUoPoVFzSbd-AEnbedJtcODShaFl3inHQvTdC0Koop_fjkEL6MqOV3Z2ykWs88H6oHth90n_l0ejqDnnwsP-2QSTmpjA2HGWFQPjq7uyEudM4IPGy7W0I-ea-ZO7FXxcX03pI85TKKZHV6M-jBy1nwtXStPezUfMtJYfmyVh6lMoOt9RMU"
            />
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] text-base sm:text-[21px] text-[#ffc880] tracking-wide leading-none font-bold group-hover:text-[#ffddb4] transition-colors">
                All Blue Bistro
              </span>
              <span className="font-['Montserrat'] text-[10px] sm:text-[11px] text-[#55d8e1] tracking-widest uppercase mt-0.5 opacity-90 font-semibold">
                Grand Line Haven
              </span>
            </div>
          </a>
        </div>

        {/* Nav Links Zone (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNavClick('hero-section', 'home')}
            className={`font-['Montserrat'] text-[14px] uppercase tracking-wider transition-all duration-200 ${
              activeNav === 'home'
                ? 'text-[#ffc880] font-bold drop-shadow-[0_0_12px_rgba(245,166,35,0.45)]'
                : 'text-[#d7c3ae] hover:text-[#ffc880]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('menu-catalog', 'menu')}
            className={`font-['Montserrat'] text-[14px] uppercase tracking-wider transition-all duration-200 ${
              activeNav === 'menu'
                ? 'text-[#ffc880] font-bold drop-shadow-[0_0_12px_rgba(245,166,35,0.45)]'
                : 'text-[#d7c3ae] hover:text-[#ffc880]'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => handleNavClick('menu-catalog', 'specials')}
            className={`font-['Montserrat'] text-[14px] uppercase tracking-wider transition-all duration-200 ${
              activeNav === 'specials'
                ? 'text-[#ffc880] font-bold drop-shadow-[0_0_12px_rgba(245,166,35,0.45)]'
                : 'text-[#d7c3ae] hover:text-[#ffc880]'
            }`}
          >
            Grand Line Specials
          </button>
          <button
            onClick={() => handleNavClick('chef-story-section', 'about')}
            className={`font-['Montserrat'] text-[14px] uppercase tracking-wider transition-all duration-200 ${
              activeNav === 'about'
                ? 'text-[#ffc880] font-bold drop-shadow-[0_0_12px_rgba(245,166,35,0.45)]'
                : 'text-[#d7c3ae] hover:text-[#ffc880]'
            }`}
          >
            About the Chef
          </button>
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Ambient Sea Soundtrack Toggle */}
          <button
            onClick={toggleSound}
            title={isAudioPlaying ? 'Mute Ocean Ambiance' : 'Play Ocean Ambiance'}
            aria-label="Toggle Ocean Soundscape"
            className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center ${
              isAudioPlaying
                ? 'bg-[#00acb4]/20 border-[#55d8e1] text-[#55d8e1] shadow-[0_0_12px_rgba(85,216,225,0.4)] animate-pulse'
                : 'bg-[#132033] border-[#28354a] text-[#d7c3ae] hover:text-[#ffc880] hover:border-[#ffc880]/40'
            }`}
          >
            <span className="material-symbols-outlined text-[19px]">
              {isAudioPlaying ? 'waves' : 'volume_up'}
            </span>
          </button>

          {/* Table Reservation Button */}
          <button
            onClick={onOpenReserve}
            id="header-reserve-btn"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-[#55d8e1]/50 text-[#55d8e1] hover:bg-[#55d8e1] hover:text-[#003739] font-['Montserrat'] text-[11px] sm:text-[12px] font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.98] shadow-[0_0_10px_rgba(85,216,225,0.15)]"
          >
            <span className="material-symbols-outlined text-sm">table_restaurant</span>
            <span className="hidden sm:inline">Reserve Table</span>
            <span className="sm:hidden">Reserve</span>
          </button>

          {/* Cart Icon & Badge */}
          <button
            onClick={onOpenCart}
            aria-label="Open Galley Cart"
            className="relative p-2 sm:p-2.5 rounded-full bg-[#1d2a3e] hover:bg-[#28354a] text-[#d7c3ae] hover:text-[#ffc880] transition-colors flex items-center justify-center cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[22px]">shopping_bag</span>
            <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 bg-[#f5a623] text-[#644000] font-['Montserrat'] font-bold text-[11px] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(245,166,35,0.6)] group-hover:scale-110 transition-transform">
              {cartCount}
            </span>
          </button>

          {/* Primary CTA (Desktop) */}
          <button
            onClick={onOpenCart}
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#f5a623] hover:bg-[#ffb955] text-[#644000] font-['Montserrat'] text-[13px] font-bold uppercase tracking-wider shadow-[0_0_16px_rgba(245,166,35,0.4)] hover:shadow-[0_0_24px_rgba(245,166,35,0.6)] transition-all active:scale-[0.98]"
          >
            Order Now
          </button>

          {/* Pirate Crew Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileCard(!showProfileCard)}
              aria-label="Pirate Profile"
              className="w-8 h-8 rounded-full bg-[#ffc880] hover:bg-[#ffddb4] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(255,200,128,0.3)]"
            >
              <span className="material-symbols-outlined text-[#452b00] text-[18px]">person</span>
            </button>

            {/* Quick Profile Dropdown */}
            {showProfileCard && (
              <div className="absolute right-0 top-11 w-64 p-4 rounded-xl bg-[#0e1c2f] border border-[#ffc880]/30 shadow-[0_12px_32px_rgba(0,0,0,0.8)] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-[#28354a]">
                  <div className="w-10 h-10 rounded-full bg-[#f5a623] flex items-center justify-center text-[#644000] font-bold font-['Montserrat'] text-base">
                    🏴‍☠️
                  </div>
                  <div>
                    <h5 className="font-['Montserrat'] text-sm font-bold text-[#ffc880]">Straw Hat Crew</h5>
                    <span className="text-[11px] text-[#55d8e1] font-mono">Bounty VIP Diner</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2 text-xs text-[#d7c3ae]">
                  <div className="flex justify-between">
                    <span>Berries Balance:</span>
                    <span className="text-[#ffc880] font-bold font-mono">∞ Berries</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Favorite Sea:</span>
                    <span className="text-[#55d8e1]">All Blue Convergence</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loyalty Rank:</span>
                    <span className="text-[#ff9a98]">Grand Fleet Commander</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowProfileCard(false);
                    onOpenReserve();
                  }}
                  className="w-full mt-3 py-2 text-center text-xs font-['Montserrat'] uppercase tracking-wider font-bold rounded-lg bg-[#1d2a3e] hover:bg-[#28354a] text-[#ffc880] border border-[#ffc880]/30 transition-colors"
                >
                  Book Captain&apos;s Quarters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#28354a] bg-[#0e1c2f]/98 backdrop-blur-2xl px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('hero-section', 'home')}
              className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                activeNav === 'home'
                  ? 'bg-[#132033] text-[#ffc880] border-l-2 border-[#ffc880]'
                  : 'text-[#d7c3ae] hover:bg-[#132033]'
              }`}
            >
              <span className="material-symbols-outlined text-lg">sailing</span>
              Home Galleon
            </button>
            <button
              onClick={() => handleNavClick('menu-catalog', 'menu')}
              className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                activeNav === 'menu'
                  ? 'bg-[#132033] text-[#ffc880] border-l-2 border-[#ffc880]'
                  : 'text-[#d7c3ae] hover:bg-[#132033]'
              }`}
            >
              <span className="material-symbols-outlined text-lg">restaurant_menu</span>
              Daily Provisions Menu
            </button>
            <button
              onClick={() => handleNavClick('menu-catalog', 'specials')}
              className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                activeNav === 'specials'
                  ? 'bg-[#132033] text-[#ffc880] border-l-2 border-[#ffc880]'
                  : 'text-[#d7c3ae] hover:bg-[#132033]'
              }`}
            >
              <span className="material-symbols-outlined text-lg">local_fire_department</span>
              Grand Line Specials
            </button>
            <button
              onClick={() => handleNavClick('chef-story-section', 'about')}
              className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                activeNav === 'about'
                  ? 'bg-[#132033] text-[#ffc880] border-l-2 border-[#ffc880]'
                  : 'text-[#d7c3ae] hover:bg-[#132033]'
              }`}
            >
              <span className="material-symbols-outlined text-lg">person</span>
              About the Chef &amp; Lore
            </button>
          </div>

          <div className="pt-3 border-t border-[#28354a] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="flex-1 py-2.5 px-3 rounded-lg bg-[#1d2a3e] border border-[#55d8e1]/40 text-[#55d8e1] font-['Montserrat'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">table_restaurant</span>
              Reserve Quarters
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex-1 py-2.5 px-3 rounded-lg bg-[#f5a623] text-[#644000] font-['Montserrat'] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(245,166,35,0.4)]"
            >
              <span className="material-symbols-outlined text-sm">shopping_bag</span>
              View Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
