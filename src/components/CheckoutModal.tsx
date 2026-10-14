import React, { useState, useEffect } from 'react';
import { CartItem } from '../data/restaurantData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderSuccess,
}) => {
  const [pirateName, setPirateName] = useState('Roronoa Zoro');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [cabin, setCabin] = useState('Pier 4, Berth 12');
  const [portCoords, setPortCoords] = useState('East Blue Bay Dock, Slip 7');
  const [cookingNotes, setCookingNotes] = useState('Extra wok-hei aroma and mint chutney');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'marine_express' | 'berries'>('cod');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderCode, setOrderCode] = useState('#ALLBLUE-8492');
  const [etaMinutes, setEtaMinutes] = useState(30);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const delivery = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 40;
  const grandTotal = subtotal + tax + delivery;

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `#ALLBLUE-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderCode(randomCode);
    setEtaMinutes(Math.floor(25 + Math.random() * 12));
    setIsSuccess(true);
    onOrderSuccess();
  };

  if (!isOpen) return null;

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      <div
        id="checkout-modal-card"
        className="bg-[#0e1c2f] max-w-xl w-full rounded-2xl border border-[#ffc880]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 my-4"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#1d2a3e] border-b border-[#28354a] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc880] text-2xl">local_shipping</span>
            <h3 className="font-['Playfair_Display'] text-lg sm:text-xl text-[#ffc880] font-bold">
              Captain&apos;s Dispatch Coordinates
            </h3>
          </div>
          <button
            onClick={onClose}
            id="close-checkout-modal"
            className="p-1.5 rounded-full hover:bg-[#28354a] text-[#d7c3ae] hover:text-[#d6e3fe] cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {!isSuccess ? (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div>
              <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1 font-semibold">
                Diner Pirate Name
              </label>
              <input
                type="text"
                value={pirateName}
                onChange={(e) => setPirateName(e.target.value)}
                placeholder="e.g. Roronoa Zoro"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-[#020e21] border border-[#28354a] text-[#d6e3fe] focus:border-[#55d8e1] outline-none font-['Plus_Jakarta_Sans'] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1 font-semibold">
                  Den Den Mushi (Phone)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#020e21] border border-[#28354a] text-[#d6e3fe] focus:border-[#55d8e1] outline-none font-['Plus_Jakarta_Sans'] text-sm"
                />
              </div>

              <div>
                <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1 font-semibold">
                  Cabin / Harbor Mooring
                </label>
                <input
                  type="text"
                  value={cabin}
                  onChange={(e) => setCabin(e.target.value)}
                  placeholder="Pier 4, Berth 12"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-[#020e21] border border-[#28354a] text-[#d6e3fe] focus:border-[#55d8e1] outline-none font-['Plus_Jakarta_Sans'] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1 font-semibold">
                Delivery Port Coordinates
              </label>
              <textarea
                rows={2}
                value={portCoords}
                onChange={(e) => setPortCoords(e.target.value)}
                placeholder="Harbor address or docking landmark..."
                className="w-full px-4 py-2.5 rounded-lg bg-[#020e21] border border-[#28354a] text-[#d6e3fe] focus:border-[#55d8e1] outline-none font-['Plus_Jakarta_Sans'] text-sm resize-none"
              />
            </div>

            <div>
              <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1 font-semibold">
                Galley Cooking Instructions
              </label>
              <input
                type="text"
                value={cookingNotes}
                onChange={(e) => setCookingNotes(e.target.value)}
                placeholder="e.g. Extra spicy Schezwan sauce, crispy pizza crust..."
                className="w-full px-4 py-2.5 rounded-lg bg-[#020e21] border border-[#28354a] text-[#d6e3fe] focus:border-[#55d8e1] outline-none font-['Plus_Jakarta_Sans'] text-sm"
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block font-['Montserrat'] text-[11px] uppercase tracking-wider text-[#55d8e1] mb-1.5 font-semibold">
                Payment Channel
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-['Montserrat'] font-bold transition-all text-center ${
                    paymentMethod === 'cod'
                      ? 'border-[#ffc880] bg-[#1d2a3e] text-[#ffc880]'
                      : 'border-[#28354a] bg-[#020e21] text-[#d7c3ae]'
                  }`}
                >
                  Pay on Docking
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('marine_express')}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-['Montserrat'] font-bold transition-all text-center ${
                    paymentMethod === 'marine_express'
                      ? 'border-[#55d8e1] bg-[#1d2a3e] text-[#55d8e1]'
                      : 'border-[#28354a] bg-[#020e21] text-[#d7c3ae]'
                  }`}
                >
                  UPI / Cards
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('berries')}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-['Montserrat'] font-bold transition-all text-center ${
                    paymentMethod === 'berries'
                      ? 'border-[#ff9a98] bg-[#1d2a3e] text-[#ff9a98]'
                      : 'border-[#28354a] bg-[#020e21] text-[#d7c3ae]'
                  }`}
                >
                  Pirate Berries ฿
                </button>
              </div>
            </div>

            {/* Simulated Payment Notice */}
            <div className="p-3.5 rounded-lg bg-[#020e21] border border-[#ffc880]/20 text-xs text-[#d7c3ae] flex items-start gap-2">
              <span className="material-symbols-outlined text-[#ffc880] text-base shrink-0 mt-0.5">
                info
              </span>
              <span>
                Payment Gateway Ready: Integrated for <strong>Razorpay, Stripe &amp; WhatsApp Dispatch</strong> in live backend mode. Clicking below dispatches the order to galley fire pits.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[#f5a623] hover:bg-[#ffb955] text-[#644000] font-['Montserrat'] text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(245,166,35,0.4)] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span className="material-symbols-outlined">done_all</span>
              Confirm Galley Order (₹{grandTotal})
            </button>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#00acb4]/20 text-[#55d8e1] flex items-center justify-center mb-4 border border-[#55d8e1]/40 shadow-[0_0_20px_rgba(85,216,225,0.3)]">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h4 className="font-['Playfair_Display'] text-2xl text-[#ffc880] font-bold">
              Feast Underway, Pirate!
            </h4>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d6e3fe] mt-2 max-w-sm leading-relaxed">
              Your order has reached the galley woks and tandoor. Dispatch vessel is setting sail via Marine Express!
            </p>

            <div className="p-4 rounded-xl bg-[#020e21] w-full mt-6 text-left text-xs font-mono text-[#d7c3ae] space-y-2 border border-[#28354a]">
              <div className="flex justify-between items-center">
                <span>Log Code:</span>
                <span className="text-[#ffc880] font-bold">{orderCode}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>ETA:</span>
                <span className="text-[#55d8e1] font-bold">{etaMinutes} - {etaMinutes + 7} Minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Mooring Location:</span>
                <span className="text-[#d6e3fe]">{cabin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Payment Mode:</span>
                <span className="text-[#d6e3fe] capitalize">
                  {paymentMethod === 'cod' ? 'Pay on Docking / Marine COD' : paymentMethod === 'marine_express' ? 'UPI / Online Verified' : 'Pirate Berry Vault'}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[#28354a]">
                <span>Total Settled:</span>
                <span className="text-[#ffc880] font-bold text-sm">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-8 py-2.5 rounded-lg bg-[#1d2a3e] hover:bg-[#28354a] text-[#d6e3fe] hover:text-[#ffc880] font-['Montserrat'] text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
            >
              Return to Deck
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
