import { useState, useEffect } from "react";


import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Optimization: Use selectors to prevent re-renders on unrelated store changes
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'WORKOUTS', path: '/workouts' },
    { name: 'STORY', path: '/story' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-border py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-on-surface hover:text-electric transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-syne font-bold text-2xl tracking-tighter text-on-surface hover:text-shadow-glow transition-all"
        >
          CHADFRAMED
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-jetbrains text-sm tracking-widest transition-colors relative group ${
                location.pathname === link.path ? 'text-electric' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-electric transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/account" className="hidden lg:block text-on-surface-variant hover:text-electric transition-colors">
            <User size={20} />
          </Link>
          <button
            onClick={openCart}
            className="text-on-surface hover:text-electric transition-colors flex items-center space-x-2 font-jetbrains text-sm"
          >
            <ShoppingBag size={20} />
            <span className="hidden sm:inline">[ {totalItems.toString().padStart(2, '0')} ]</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-obsidian/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 pt-24' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-syne text-3xl font-bold tracking-tight transition-colors ${
                location.pathname === link.path ? 'text-electric text-shadow-glow' : 'text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/account"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-jetbrains text-sm tracking-widest text-on-surface-variant hover:text-electric transition-colors mt-8"
          >
            ACCOUNT
          </Link>
        </div>
      </div>
    </nav>
  );
};
