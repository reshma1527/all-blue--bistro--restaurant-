import React, { useState, useMemo } from 'react';
import { MenuItem, MENU_ITEMS } from '../data/restaurantData';

interface MenuCatalogProps {
  onAddToCart: (item: MenuItem, qty: number) => void;
  onOpenDishDetail: (item: MenuItem) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const MenuCatalog: React.FC<MenuCatalogProps> = ({
  onAddToCart,
  onOpenDishDetail,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedEffect, setAddedEffect] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { id: 'all', label: 'All Dishes (9)' },
    { id: 'indian', label: 'Indian Specialties' },
    { id: 'chinese', label: 'Chinese Wok Delights' },
    { id: 'italian', label: 'Italian Classics' },
    { id: 'special', label: 'Chef Specials' },
    { id: 'veg', label: 'Vegetarian Only' },
  ];

  const handleQtyChange = (itemId: string, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities((prev) => {
      const current = prev[itemId] || 1;
      const next = Math.max(1, Math.min(20, current + delta));
      return { ...prev, [itemId]: next };
    });
  };

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const qty = quantities[item.id] || 1;
    onAddToCart(item, qty);

    // Trigger visual "Added!" feedback
    setAddedEffect((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedEffect((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);

    // Reset card quantity back to 1
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
  };

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((dish) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'veg') {
        matchesCategory = dish.isVeg;
      } else if (selectedCategory === 'special') {
        matchesCategory = dish.isSpecial;
      } else if (selectedCategory !== 'all') {
        matchesCategory = dish.category === selectedCategory;
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dish.name.toLowerCase().includes(q) ||
        dish.category.toLowerCase().includes(q) ||
        dish.description.toLowerCase().includes(q) ||
        dish.originSea.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="menu-catalog" className="w-full bg-[#0e1c2f]/80 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-['Montserrat'] text-[11px] sm:text-xs text-[#ffc880] uppercase tracking-widest font-bold">
              Captain&apos;s Daily Galley Log
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl text-[#d6e3fe] mt-1 font-bold">
              Galley Provisions &amp; Delicacies
            </h2>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-96 relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d7c3ae]/70">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by dish name, spice, or cuisine..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#020e21] text-[#d6e3fe] placeholder:text-[#d7c3ae]/50 border border-[#28354a] focus:border-[#55d8e1] focus:ring-1 focus:ring-[#55d8e1] outline-none transition-all font-['Plus_Jakarta_Sans'] text-sm sm:text-base shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#d7c3ae] hover:text-[#ffc880]"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full font-['Montserrat'] text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#00acb4] text-[#00393c] shadow-[0_0_12px_rgba(0,172,180,0.4)] scale-102'
                    : 'bg-[#1d2a3e] text-[#d7c3ae] hover:text-[#ffc880] hover:bg-[#28354a]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Result Counter & Reset Button */}
        <div className="flex items-center justify-between text-[#d7c3ae] text-xs sm:text-sm mt-3 mb-6">
          <span>
            Showing{' '}
            <strong className="text-[#ffc880] font-semibold">{filteredDishes.length}</strong> sea{' '}
            {filteredDishes.length === 1 ? 'dish' : 'dishes'}
          </span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={resetFilters}
              className="text-[#55d8e1] hover:underline cursor-pointer font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-xs">restart_alt</span>
              Reset Search Filters
            </button>
          )}
        </div>

        {/* Empty Search Result */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-16 px-4 bg-[#132033]/60 rounded-2xl border border-[#28354a]">
            <div className="w-16 h-16 rounded-full bg-[#1d2a3e] flex items-center justify-center text-[#ffc880]/60 mx-auto mb-3">
              <span className="material-symbols-outlined text-3xl">sentiment_dissatisfied</span>
            </div>
            <h4 className="font-['Playfair_Display'] text-xl text-[#d6e3fe] font-bold">
              No Provisions Match That Sea Route
            </h4>
            <p className="text-sm text-[#d7c3ae] mt-1">
              Try adjusting your spice criteria or search keyword.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-5 py-2 rounded-lg bg-[#f5a623] text-[#644000] font-['Montserrat'] text-xs font-bold uppercase tracking-wider hover:bg-[#ffb955]"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => {
            const currentQty = quantities[dish.id] || 1;
            const isAdded = addedEffect[dish.id] || false;

            return (
              <div
                key={dish.id}
                onClick={() => onOpenDishDetail(dish)}
                className="group bg-[#132033] rounded-2xl overflow-hidden border border-[#28354a] hover:border-[#ffc880]/50 transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Image and Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-[#020e21]">
                  <img
                    src={dish.imageUrl}
                    alt={dish.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />

                  {/* Cuisine Tag */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#28354a]/95 text-[#ffc880] font-['Montserrat'] text-[11px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    {dish.category}
                  </span>

                  {/* Spice Level Flame Indicators */}
                  <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-[#061426]/85 backdrop-blur-md px-2 py-0.5 rounded shadow">
                    {[1, 2, 3].map((lvl) => (
                      <span
                        key={lvl}
                        className={`material-symbols-outlined text-xs ${
                          lvl <= dish.spiceLevel ? 'text-[#ffb4ab]' : 'text-[#28354a]'
                        }`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        local_fire_department
                      </span>
                    ))}
                  </div>

                  {/* Veg / Non-Veg Pill */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-md">
                    {dish.isVeg ? (
                      <span className="flex items-center gap-1 bg-[#00acb4]/40 text-[#75f5fd] px-2 py-0.5 rounded-full border border-[#55d8e1]/40">
                        <span className="w-2 h-2 rounded-full bg-[#55d8e1]" /> Veg Special
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 bg-[#93000a]/70 text-[#ffdad6] px-2 py-0.5 rounded-full border border-[#ffb4ab]/40">
                        <span className="w-2 h-2 rounded-full bg-[#ffb4ab]" /> Non-Veg
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-['Playfair_Display'] text-lg sm:text-[19px] text-[#d6e3fe] font-bold group-hover:text-[#ffc880] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <span className="font-['Montserrat'] text-lg font-bold text-[#ffc880] shrink-0 tabular-nums">
                      ₹{dish.price}
                    </span>
                  </div>

                  <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-[13px] text-[#d7c3ae] mt-2 mb-4 flex-1 line-clamp-3 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Card Bottom Controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#28354a] gap-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-[#1d2a3e] rounded-lg p-1 shrink-0">
                      <button
                        onClick={(e) => handleQtyChange(dish.id, -1, e)}
                        className="w-7 h-7 flex items-center justify-center text-[#d6e3fe] hover:text-[#ffc880] rounded hover:bg-[#132033] font-bold text-sm"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2.5 font-['Montserrat'] font-bold text-xs text-[#d6e3fe] tabular-nums">
                        {currentQty}
                      </span>
                      <button
                        onClick={(e) => handleQtyChange(dish.id, 1, e)}
                        className="w-7 h-7 flex items-center justify-center text-[#d6e3fe] hover:text-[#ffc880] rounded hover:bg-[#132033] font-bold text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Add to Galley Cart Button */}
                    <button
                      onClick={(e) => handleAdd(dish, e)}
                      className={`flex-1 py-2 px-3 rounded-lg font-['Montserrat'] text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-1.5 shadow-[0_0_10px_rgba(245,166,35,0.3)] active:scale-[0.98] ${
                        isAdded
                          ? 'bg-[#00acb4] text-[#00393c]'
                          : 'bg-[#f5a623] hover:bg-[#ffb955] text-[#644000]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                      {isAdded ? 'Added!' : 'Add to Galley Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
