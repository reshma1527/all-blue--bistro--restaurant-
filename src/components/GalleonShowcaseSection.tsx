import React from 'react';
import { GALLEON_SHOWCASES } from '../data/restaurantData';

interface GalleonShowcaseProps {
  onSelectCuisine: (cuisine: 'indian' | 'chinese' | 'italian') => void;
}

export const GalleonShowcaseSection: React.FC<GalleonShowcaseProps> = ({ onSelectCuisine }) => {
  const getAccentClasses = (accent: 'primary' | 'secondary' | 'tertiary') => {
    switch (accent) {
      case 'primary':
        return {
          cardBorder: 'border-[#ffc880]/30 hover:border-[#ffc880]/70',
          badgeBg: 'bg-[#f5a623] text-[#644000]',
          iconColor: 'text-[#ffc880]',
          tagColor: 'text-[#ffc880]',
        };
      case 'tertiary':
        return {
          cardBorder: 'border-[#ff9a98]/30 hover:border-[#ff9a98]/70',
          badgeBg: 'bg-[#ffdad8] text-[#410007]',
          iconColor: 'text-[#ff9a98]',
          tagColor: 'text-[#ff9a98]',
        };
      case 'secondary':
      default:
        return {
          cardBorder: 'border-[#55d8e1]/30 hover:border-[#55d8e1]/70',
          badgeBg: 'bg-[#00acb4] text-[#00393c]',
          iconColor: 'text-[#55d8e1]',
          tagColor: 'text-[#55d8e1]',
        };
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full">
      <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#55d8e1] font-['Montserrat'] text-[11px] sm:text-xs tracking-widest uppercase font-bold">
            <span className="material-symbols-outlined text-base">explore</span>
            Grand Line Spice Route Map
          </div>
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl text-[#d6e3fe] mt-1.5 font-bold">
            Three Legendary Galleons of Taste
          </h2>
        </div>
        <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d7c3ae] max-w-md">
          Curated recipes from our maritime fleet, forged in charcoal embers, flaming woks, and
          rustic stone hearths.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {GALLEON_SHOWCASES.map((showcase) => {
          const styling = getAccentClasses(showcase.accent);
          const cuisineKey = showcase.id.startsWith('indian')
            ? 'indian'
            : showcase.id.startsWith('chinese')
            ? 'chinese'
            : 'italian';

          return (
            <div
              key={showcase.id}
              onClick={() => onSelectCuisine(cuisineKey)}
              className={`group relative flex flex-col bg-[#1d2a3e]/90 rounded-2xl overflow-hidden border ${styling.cardBorder} transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 cursor-pointer`}
            >
              {/* Media Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0e1c2f]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  alt={showcase.imageAlt}
                  src={showcase.imageUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2a3e] via-transparent to-black/35" />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full ${styling.badgeBg} font-['Montserrat'] text-[11px] uppercase tracking-wider font-bold shadow-md`}
                >
                  {showcase.routeTitle}
                </span>
              </div>

              {/* Content Block */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className={`flex items-center gap-2 ${styling.iconColor}`}>
                    <span className="material-symbols-outlined text-lg">{showcase.icon}</span>
                    <h3 className="font-['Montserrat'] text-[17px] font-bold text-[#d6e3fe] group-hover:text-[#ffc880] transition-colors">
                      {showcase.title}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-sm text-[#d7c3ae] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-[13px] text-[#d7c3ae] mb-5 leading-relaxed">
                  {showcase.description}
                </p>

                {/* Dish Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#28354a]">
                  {showcase.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md bg-[#132033] text-[11px] font-medium ${styling.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
