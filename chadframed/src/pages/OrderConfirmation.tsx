
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export const OrderConfirmation = () => {
  // Use state initializer callback to prevent impure calls during render
  const [orderNumber] = useState(() => `CF-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-24 h-24 border border-electric rounded-full mx-auto flex items-center justify-center mb-12 relative bg-electric/5">
          <div className="absolute inset-0 border border-electric rounded-full animate-ping opacity-20" />
          <Check size={40} className="text-electric" />
        </div>

        <h1 className="font-syne font-bold text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
          Transaction <br /> Authorized
        </h1>

        <p className="font-jetbrains text-sm text-outline tracking-widest mb-12 uppercase">
          MANIFEST REF: {orderNumber}
        </p>

        <div className="bg-charcoal border border-border p-8 mb-12 text-left">
          <p className="font-inter text-on-surface-variant leading-relaxed">
            Your request has been processed. Encrypted confirmation details have been dispatched to your terminal. Physical assets will be deployed shortly. Digital access protocols are now active in your account.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/account"
            className="bg-electric text-obsidian font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 uppercase hover:bg-ice transition-all box-shadow-glow"
          >
            ACCESS ACCOUNT
          </Link>
          <Link
            to="/shop"
            className="border border-border text-on-surface font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 uppercase hover:border-electric hover:text-electric transition-colors"
          >
            CONTINUE BROWSING
          </Link>
        </div>
      </div>
    </div>
  );
};
