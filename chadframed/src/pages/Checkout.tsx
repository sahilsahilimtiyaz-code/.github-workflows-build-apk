import { useState } from "react";


import { useNavigate, Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export const Checkout = () => {
  // Optimization: Select specific state to prevent unnecessary re-renders when other cart state changes
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'IN',
    postalCode: '',
  });

  const hasPhysicalItems = items.some(item => item.product.type === 'physical');
  const total = getTotal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock processing
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-obsidian pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-syne text-2xl text-on-surface mb-4">NO ITEMS PENDING</h2>
          <Link to="/shop" className="font-jetbrains text-electric hover:text-ice">
            RETURN TO ARSENAL
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Form Section */}
        <div className="lg:col-span-7 xl:col-span-8">
          <h1 className="font-syne font-bold text-3xl text-on-surface mb-12 uppercase tracking-tight">
            Checkout Protocol
          </h1>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact Info */}
            <section>
              <h2 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase border-b border-border pb-4">
                01 // Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Shipping Info (Conditional) */}
            {hasPhysicalItems && (
              <section>
                <h2 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase border-b border-border pb-4">
                  02 // Shipping Logistics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">Delivery Coordinates (Address)</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="postalCode" className="block font-jetbrains text-[10px] tracking-widest text-outline mb-2 uppercase">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full bg-charcoal border border-border text-on-surface font-inter text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* Payment Placeholder */}
            <section>
              <h2 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase border-b border-border pb-4">
                {hasPhysicalItems ? '03' : '02'} // Secure Payment
              </h2>
              <div className="bg-charcoal border border-border p-8 flex flex-col items-center justify-center text-center">
                <p className="font-jetbrains text-sm text-on-surface-variant mb-2">PAYMENT GATEWAY PLACEHOLDER</p>
                <p className="font-inter text-xs text-outline">Real payment details are not collected in this environment.</p>
              </div>
            </section>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-electric text-obsidian font-jetbrains font-bold tracking-[0.05em] py-6 uppercase hover:bg-ice transition-all box-shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'PROCESSING...' : `AUTHORIZE TRANSACTION (₹${total.toLocaleString('en-IN')})`}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-32 bg-charcoal border border-border p-8">
            <h2 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-8 uppercase border-b border-border pb-4">
              Manifest
            </h2>

            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto hide-scrollbar">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                  <div className="w-16 h-20 bg-obsidian border border-border flex-shrink-0">
                    <img src={item.product.images[0]} alt="" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-syne font-bold text-sm text-on-surface leading-tight mb-1">
                      {item.product.name}
                    </h3>
                    <p className="font-jetbrains text-[10px] text-outline mb-2">
                      QTY: {item.quantity.toString().padStart(2, '0')}
                    </p>
                    <p className="font-jetbrains text-xs text-on-surface">
                      ₹{((item.variantId ? item.product.variants?.find(v => v.id === item.variantId)?.price || item.product.price : item.product.price) * item.quantity).toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4 font-jetbrains text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>SUBTOTAL</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              {hasPhysicalItems && (
                <div className="flex justify-between text-on-surface-variant">
                  <span>SHIPPING</span>
                  <span>CALCULATED</span>
                </div>
              )}
              <div className="flex justify-between text-on-surface font-bold text-lg pt-4 border-t border-border/50">
                <span>TOTAL</span>
                <span className="text-electric">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
