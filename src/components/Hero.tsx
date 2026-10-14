import React from 'react';

interface HeroProps {
  onOpenCart: () => void;
  onOpenReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCart, onOpenReserve }) => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full -mt-16 md:-mt-20 pt-24 sm:pt-28 md:pt-36 pb-14 sm:pb-20 lg:pb-28 overflow-hidden bg-[#020e21]"
    >
      {/* Background with Luminosity Scrim */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANFRjGE2McbavF1lF1LfCfGobG_ni5b4J2tQ7Jhvx2gldKRGD_vJD3WJCDeMSAcqEPppeT6amHogAstZSktQtB9D3HfX_J1i0a23q3Mt-CXSLr-2VVMjDR9J6gBhSK5uqbGRi4sdzXYIO4bGM3ShlwIRquOBn0EjEB8M5RZQSZY_ZMZEcxOMYeRMjUwk7yoi7u9MIFaDyo23rO5vIPGyP5s0OHVeER7m1-x3vEWEyqvcTPztf0oXStRA')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-[#061426]/85 to-[#061426]/95" />

      {/* Atmospheric Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#55d8e1]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#ffc880]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Mystic Oceans Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d2a3e]/90 border border-[#55d8e1]/40 backdrop-blur-md shadow-[0_0_15px_rgba(85,216,225,0.25)] mb-6 transition-transform hover:scale-105">
          <span className="material-symbols-outlined text-[#55d8e1] text-sm">sailing</span>
          <span className="font-['Montserrat'] text-[11px] sm:text-[12px] uppercase tracking-widest text-[#55d8e1] font-bold">
            East Blue • Grand Line • All Four Seas
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-['Playfair_Display'] text-3xl sm:text-5xl md:text-6xl text-[#ffc880] max-w-4xl tracking-tight leading-tight sm:leading-none drop-shadow-[0_4px_24px_rgba(245,166,35,0.4)]">
          Set Sail for the Taste of the All Blue!
        </h1>

        {/* Subhead */}
        <p className="font-['Playfair_Display'] text-lg sm:text-2xl text-[#d7c3ae] font-normal mt-3.5 max-w-3xl">
          Your Next Great Food Adventure Begins Here!
        </p>

        {/* Description */}
        <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-lg text-[#d6e3fe] max-w-2xl mt-4 opacity-90 leading-relaxed px-2">
          Where four mystic seas converge to bring you legendary Indian spiced gravies, smoky
          Chinese wok-hei fires, and artisanal Italian woodfired treasures under one pirate flag.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-lg sm:max-w-none px-4">
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#f5a623] text-[#644000] font-['Montserrat'] text-[13px] font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,166,35,0.5)] hover:shadow-[0_0_30px_rgba(245,166,35,0.7)] hover:bg-[#ffb955] transition-all active:scale-[0.98] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">restaurant_menu</span>
            Explore The Menu
          </button>

          <button
            onClick={onOpenReserve}
            id="hero-reserve-btn"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#1d2a3e] border border-[#ffc880]/50 text-[#ffc880] font-['Montserrat'] text-[13px] font-bold uppercase tracking-wider hover:bg-[#f5a623] hover:text-[#644000] transition-all shadow-[0_0_15px_rgba(245,166,35,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">table_restaurant</span>
            Reserve a Galleon Table
          </button>

          <button
            onClick={onOpenCart}
            id="hero-cart-btn"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#1d2a3e] border border-[#55d8e1]/40 text-[#55d8e1] font-['Montserrat'] text-[13px] font-bold uppercase tracking-wider hover:bg-[#55d8e1] hover:text-[#003739] transition-all shadow-[0_0_15px_rgba(85,216,225,0.2)] active:scale-[0.98] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
            Open Galley Cart
          </button>
        </div>

        {/* Highlights Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl mt-12 sm:mt-16 bg-[#132033]/70 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#ffc880]/20 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col items-center p-2 sm:p-3 text-center">
            <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#ffc880] font-bold">
              4 Oceans
            </span>
            <span className="font-['Montserrat'] text-[11px] sm:text-xs uppercase tracking-wider text-[#55d8e1] mt-1 font-semibold">
              Convergence of Flavor
            </span>
          </div>

          <div className="flex flex-col items-center p-2 sm:p-3 text-center border-l border-[#28354a]/60">
            <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#ffc880] font-bold">
              3 Traditions
            </span>
            <span className="font-['Montserrat'] text-[11px] sm:text-xs uppercase tracking-wider text-[#55d8e1] mt-1 font-semibold">
              Indian • Chinese • Italian
            </span>
          </div>

          <div className="flex flex-col items-center p-2 sm:p-3 text-center border-t md:border-t-0 md:border-l border-[#28354a]/60 pt-3 md:pt-2">
            <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#ffc880] font-bold">
              10,000+
            </span>
            <span className="font-['Montserrat'] text-[11px] sm:text-xs uppercase tracking-wider text-[#55d8e1] mt-1 font-semibold">
              Happy Pirates Fed
            </span>
          </div>

          <div className="flex flex-col items-center p-2 sm:p-3 text-center border-t md:border-t-0 border-l border-[#28354a]/60 pt-3 md:pt-2">
            <div className="flex items-center gap-1.5 text-[#ffc880]">
              <span className="material-symbols-outlined text-2xl text-[#f5a623]" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold">
                4.9 / 5.0
              </span>
            </div>
            <span className="font-['Montserrat'] text-[11px] sm:text-xs uppercase tracking-wider text-[#55d8e1] mt-1 font-semibold">
              Grand Line Renown
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
