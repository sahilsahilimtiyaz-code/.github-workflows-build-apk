import { useState } from "react";


import { Package, Video, LogOut } from 'lucide-react';

export const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-obsidian pt-32 pb-24 flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-12">
            <h1 className="font-syne font-bold text-3xl text-on-surface mb-4 uppercase tracking-tight">
              Terminal Access
            </h1>
            <p className="font-jetbrains text-xs text-outline tracking-widest uppercase">
              AUTHENTICATION REQUIRED
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full bg-charcoal border border-border text-on-surface font-jetbrains text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="PASSWORD"
                required
                className="w-full bg-charcoal border border-border text-on-surface font-jetbrains text-sm py-4 px-4 focus:outline-none focus:border-electric transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-electric text-obsidian font-jetbrains font-bold tracking-[0.05em] py-4 uppercase hover:bg-ice transition-all box-shadow-glow"
            >
              INITIALIZE CONNECTION
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-8">
          <div>
            <h1 className="font-syne font-bold text-4xl text-on-surface mb-2 uppercase tracking-tight">
              Command Center
            </h1>
            <p className="font-jetbrains text-sm text-outline tracking-widest uppercase">
              USER: 0xCHAD
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="mt-6 md:mt-0 flex items-center space-x-2 text-on-surface-variant hover:text-error transition-colors font-jetbrains text-xs tracking-widest uppercase"
          >
            <LogOut size={16} />
            <span>TERMINATE SESSION</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Digital Access */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <Video size={24} className="text-electric" />
              <h2 className="font-syne font-bold text-2xl text-on-surface uppercase">Active Protocols</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-charcoal border border-border p-6 flex justify-between items-center group">
                <div>
                  <h3 className="font-syne font-bold text-lg text-on-surface mb-1">PROJECT SYMMETRY</h3>
                  <p className="font-jetbrains text-xs text-outline tracking-widest">12 WEEK CYCLE</p>
                </div>
                <button className="font-jetbrains text-xs text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                  ACCESS &rarr;
                </button>
              </div>
            </div>
          </section>

          {/* Order History */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <Package size={24} className="text-outline" />
              <h2 className="font-syne font-bold text-2xl text-on-surface uppercase">Logistics Manifest</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-charcoal border border-border p-6">
                <div className="flex justify-between items-start mb-4 border-b border-border/50 pb-4">
                  <div>
                    <p className="font-jetbrains text-xs text-outline mb-1">REF: CF-992014</p>
                    <p className="font-jetbrains text-sm text-on-surface">Oct 12, 2026</p>
                  </div>
                  <span className="font-jetbrains text-[10px] tracking-widest px-2 py-1 bg-surface-bright text-on-surface-variant uppercase border border-border">
                    Deployed
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-inter text-sm text-on-surface-variant">1x Under Eye Elixir</p>
                  <p className="font-jetbrains text-sm text-on-surface">₹12,499</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
