import React, { useState } from 'react';

export const DeveloperSpecDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 w-full">
      <div className="p-6 rounded-2xl bg-[#0e1c2f] border border-[#28354a]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#55d8e1] text-2xl">terminal</span>
            <div>
              <h4 className="font-['Montserrat'] text-base sm:text-lg text-[#d6e3fe] font-bold">
                Developer Ready: Code Architecture &amp; Deployment Guide
              </h4>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#d7c3ae]">
                Self-contained React + TypeScript state, LocalStorage sync, and multi-cuisine filtering engine.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="toggle-tech-guide"
            className="px-4 py-2 rounded-lg bg-[#28354a] text-[#55d8e1] hover:text-[#ffc880] font-['Montserrat'] text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>{isOpen ? 'Hide Spec' : 'View Spec'}</span>
            <span
              className={`material-symbols-outlined text-sm transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            id="tech-guide-content"
            className="mt-6 pt-6 border-t border-[#28354a] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-[#d7c3ae] animate-in fade-in duration-200"
          >
            <div className="p-4 rounded-xl bg-[#020e21] border border-[#28354a]/60">
              <div className="text-[#ffc880] font-bold mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">folder</span> 1. File Structure
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>
                  <span className="text-[#d6e3fe]">App.tsx</span> (Root State &amp; Orchestrator)
                </li>
                <li>
                  <span className="text-[#d6e3fe]">restaurantData.ts</span> (Typed Menu &amp; Lore)
                </li>
                <li>
                  <span className="text-[#d6e3fe]">CartDrawer.tsx</span> (Live Tax &amp; Delivery Math)
                </li>
                <li>
                  <span className="text-[#d6e3fe]">localStorage</span> (Key: &apos;all_blue_cart&apos;)
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#020e21] border border-[#28354a]/60">
              <div className="text-[#55d8e1] font-bold mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">rocket_launch</span> 2. Local Setup &amp; Run
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Run with modern Vite dev server:</li>
                <li className="text-[#d6e3fe] font-semibold">npm run dev</li>
                <li>
                  Open in browser: <span className="text-[#ffc880]">http://localhost:3000</span>
                </li>
                <li>Hot reloading &amp; TypeScript checked</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#020e21] border border-[#28354a]/60">
              <div className="text-[#ff9a98] font-bold mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">cloud_upload</span> 3. Instant Deployment
              </div>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Production optimized bundling:</li>
                <li className="text-[#d6e3fe]">npm run build</li>
                <li>Ready for Cloud Run, Vercel, or Netlify</li>
                <li>Zero external CSS runtime bloat</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
