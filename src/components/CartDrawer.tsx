import React from 'react';
import { CartItem } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onOpenCheckout,
}) => {
  const totalItemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const delivery = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const grandTotal = subtotal === 0 ? 0 : subtotal + tax + delivery;

  const scrollToMenu = () => {
    onClose();
    const el = document.getElementById('menu-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        id="cart-drawer-backdrop"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-over Drawer */}
      <aside
        id="cart-drawer"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:max-w-md bg-[#0e1c2f] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-l border-[#ffc880]/20 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-[#1d2a3e] border-b border-[#28354a] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc880] text-2xl">shopping_bag</span>
            <div>
              <h3 className="font-['Playfair_Display'] text-lg sm:text-xl text-[#ffc880] font-bold leading-none">
                Galley Treasure Cart
              </h3>
              <span
                id="drawer-item-count"
                className="font-['Montserrat'] text-[11px] text-[#55d8e1] uppercase tracking-wider font-semibold"
              >
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-cart-btn"
            className="p-2 rounded-full hover:bg-[#28354a] text-[#d7c3ae] hover:text-[#d6e3fe] transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Drawer Items Container */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#132033] flex items-center justify-center text-[#ffc880]/40 mb-4 border border-[#28354a]">
                <span className="material-symbols-outlined text-4xl">anchor</span>
              </div>
              <p className="font-['Playfair_Display'] text-xl text-[#d6e3fe] font-bold">
                Your treasure chest is empty!
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#d7c3ae] max-w-xs mt-1.5 leading-relaxed">
                Cast your net in the menu above and load your provisions for the voyage.
              </p>
              <button
                onClick={scrollToMenu}
                id="cart-empty-browse-btn"
                className="mt-6 px-6 py-2.5 rounded-lg bg-[#f5a623] text-[#644000] font-['Montserrat'] text-xs uppercase font-bold tracking-wider hover:bg-[#ffb955] transition-all cursor-pointer shadow-[0_0_12px_rgba(245,166,35,0.3)]"
              >
                Browse Galley Menu
              </button>
            </div>
          ) : (
            /* Item Rows */
            <div className="space-y-3">
              {cart.map((item) => {
                const itemTotal = item.price * item.qty;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#132033] border border-[#28354a] gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Montserrat'] text-sm font-bold text-[#d6e3fe] truncate">
                        {item.name}
                      </h4>
                      <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#ffc880] font-semibold">
                        ₹{item.price} each
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center bg-[#1d2a3e] rounded-lg p-1 shrink-0">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-[#d6e3fe] hover:text-[#ffc880] rounded font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="px-2 font-['Montserrat'] text-xs text-[#d6e3fe] font-bold tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-[#d6e3fe] hover:text-[#ffc880] rounded font-bold text-xs"
                      >
                        +
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="text-right shrink-0">
                      <div className="font-['Montserrat'] text-sm text-[#d6e3fe] font-bold tabular-nums">
                        ₹{itemTotal}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-xs text-[#ffb4ab] hover:underline flex items-center gap-0.5 mt-1 justify-end cursor-pointer"
                        title="Remove dish"
                      >
                        <span className="material-symbols-outlined text-xs">delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Drawer Summary Section */}
        <div
          id="cart-summary-section"
          className={`p-5 bg-[#020e21] border-t border-[#28354a] flex flex-col gap-3 ${
            cart.length === 0 ? 'opacity-40 pointer-events-none' : ''
          }`}
        >
          <div className="flex justify-between text-xs sm:text-sm text-[#d7c3ae]">
            <span>Galley Subtotal</span>
            <span className="font-semibold text-[#d6e3fe] tabular-nums">₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-xs sm:text-sm text-[#d7c3ae]">
            <span>GST &amp; Galley Taxes (5%)</span>
            <span className="text-[#d6e3fe] tabular-nums">₹{tax}</span>
          </div>

          <div className="flex justify-between text-xs sm:text-sm text-[#d7c3ae]">
            <span className="flex items-center gap-1.5">
              Log Pose Delivery
              {subtotal >= 500 && (
                <span className="text-[10px] text-[#55d8e1] font-bold uppercase tracking-wide">
                  (Free &gt; ₹500)
                </span>
              )}
            </span>
            <span className={`tabular-nums ${delivery === 0 ? 'text-[#55d8e1] font-bold' : 'text-[#d6e3fe]'}`}>
              {delivery === 0 ? 'FREE' : `₹${delivery}`}
            </span>
          </div>

          <div className="pt-2 border-t border-[#28354a] flex justify-between items-baseline">
            <span className="font-['Montserrat'] text-base sm:text-lg text-[#d6e3fe] font-bold">
              Grand Total
            </span>
            <span className="font-['Playfair_Display'] text-2xl text-[#ffc880] font-bold tabular-nums">
              ₹{grandTotal}
            </span>
          </div>

          <button
            onClick={() => {
              if (cart.length > 0) {
                onOpenCheckout();
              }
            }}
            id="open-checkout-modal-btn"
            disabled={cart.length === 0}
            className="w-full mt-2 py-3.5 rounded-lg bg-[#f5a623] hover:bg-[#ffb955] text-[#644000] font-['Montserrat'] text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-[0_0_15px_rgba(245,166,35,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-lg">sailing</span>
            Proceed to Maritime Checkout
          </button>
        </div>
      </aside>
    </>
  );
};
