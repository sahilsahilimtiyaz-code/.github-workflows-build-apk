
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-charcoal pt-24 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="font-syne font-bold text-3xl tracking-tighter text-on-surface mb-6 block">
            CHADFRAMED
          </Link>
          <p className="text-on-surface-variant font-inter max-w-sm">
            High-performance aesthetics and structural mastery. Engineered for the discerning few.
          </p>
        </div>

        <div>
          <h4 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase">
            Shop
          </h4>
          <ul className="space-y-4 font-inter text-sm text-on-surface-variant">
            <li><Link to="/shop" className="hover:text-electric transition-colors">All Products</Link></li>
            <li><Link to="/workouts" className="hover:text-electric transition-colors">Workout Programs</Link></li>
            <li><Link to="/shop?category=Aesthetics" className="hover:text-electric transition-colors">Aesthetics</Link></li>
            <li><Link to="/shop?category=Tools" className="hover:text-electric transition-colors">Tools</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase">
            Support
          </h4>
          <ul className="space-y-4 font-inter text-sm text-on-surface-variant">
            <li><Link to="/faq" className="hover:text-electric transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-electric transition-colors">Contact</Link></li>
            <li><Link to="/shipping" className="hover:text-electric transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/terms" className="hover:text-electric transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center font-jetbrains text-xs text-outline">
        <p>&copy; {new Date().getFullYear()} CHADFRAMED. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-on-surface transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-on-surface transition-colors">TWITTER</a>
        </div>
      </div>
    </footer>
  );
};
