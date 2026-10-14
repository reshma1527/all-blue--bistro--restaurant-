import React from 'react';
import { BOUNTY_REVIEWS } from '../data/restaurantData';

export const ChefStorySection: React.FC = () => {
  const getBadgeBorder = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-[#ffc880]/40',
          titleColor: 'text-[#ffc880]',
          glow: 'bg-[#ffc880]/10',
        };
      case 'secondary':
        return {
          border: 'border-[#55d8e1]/40',
          titleColor: 'text-[#55d8e1]',
          glow: 'bg-[#55d8e1]/10',
        };
      case 'tertiary':
        return {
          border: 'border-[#ff9a98]/40',
          titleColor: 'text-[#ff9a98]',
          glow: 'bg-[#ff9a98]/10',
        };
      case 'gold':
      default:
        return {
          border: 'border-[#ffb955]/40',
          titleColor: 'text-[#ffc880]',
          glow: 'bg-[#f5a623]/10',
        };
    }
  };

  return (
    <section id="chef-story-section" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Lore & Stats */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-2 text-[#ffc880] font-['Montserrat'] text-xs uppercase tracking-widest mb-2 font-bold">
            <span className="material-symbols-outlined text-base">restaurant</span>
            The Legend of the Galley
          </div>

          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl text-[#d6e3fe] mb-6 leading-tight font-bold">
            A Culinary Odyssey Beyond the Calm Belt
          </h2>

          <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d7c3ae] leading-relaxed">
            <p>
              Born on the floating ocean restaurants of East Blue, our head pirate chef swore an oath
              to discover the{' '}
              <strong className="text-[#ffc880] font-semibold">All Blue</strong>—the legendary ocean
              where the sea currents of North, South, East, and West unite.
            </p>
            <p>
              Instead of claiming gold, he hoarded spice jars from the desert merchants of Alabasta,
              black cast-iron woks forged in the fires of Wano, and antique pasta cutters preserved in
              the canal vaults of Water Seven.
            </p>
            <p className="italic text-[#55d8e1] pt-1 border-l-2 border-[#55d8e1]/50 pl-3">
              “We don&apos;t feed people to merely survive. A meal on this galleon is a passport to
              every continent across the Grand Line.”
            </p>
          </div>

          {/* Highlights */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[#28354a]">
            <div>
              <div className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#ffc880] font-bold">
                12+
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#d7c3ae] mt-0.5">
                Years Sailing Galley
              </div>
            </div>
            <div className="h-10 w-px bg-[#28354a]" />
            <div>
              <div className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#55d8e1] font-bold">
                48
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#d7c3ae] mt-0.5">
                Secret Spices Blended
              </div>
            </div>
            <div className="h-10 w-px bg-[#28354a]" />
            <div>
              <div className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#ff9a98] font-bold">
                100%
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#d7c3ae] mt-0.5">
                Fresh Sea Catch Daily
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Bounty Review Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BOUNTY_REVIEWS.map((review) => {
            const styling = getBadgeBorder(review.badgeColor);
            return (
              <div
                key={review.id}
                className={`p-5 rounded-xl bg-[#1d2a3e] border-2 ${styling.border} shadow-xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div
                  className={`absolute -right-4 -top-4 w-16 h-16 ${styling.glow} rounded-full blur-xl pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between border-b border-[#28354a] pb-2 mb-3">
                    <span
                      className={`font-['Montserrat'] text-[11px] uppercase tracking-widest ${styling.titleColor} font-bold`}
                    >
                      {review.title}
                    </span>
                    <span className="flex text-[#f5a623] text-xs tracking-widest">★★★★★</span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-[13px] text-[#d6e3fe] italic leading-relaxed">
                    “{review.quote}”
                  </p>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between border-t border-[#28354a]">
                  <span className="font-['Montserrat'] text-[13px] text-[#d6e3fe] font-bold">
                    {review.character}
                  </span>
                  <span className="font-['Montserrat'] text-[11px] text-[#55d8e1] font-mono">
                    {review.bounty}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
