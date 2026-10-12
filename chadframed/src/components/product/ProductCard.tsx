
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // ⚡ Bolt: Use specific selector to prevent unnecessary re-renders when other cart state changes
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative bg-charcoal border border-border overflow-hidden flex flex-col h-full">
      {/* Status Ribbon */}
      <div className="absolute top-0 left-0 w-full z-10 px-4 py-3 flex justify-between items-center bg-gradient-to-b from-obsidian/80 to-transparent">
        <span className="font-jetbrains text-[10px] tracking-[0.15em] text-outline uppercase">
          {product.category} // {product.type}
        </span>
        {product.availability === 'out_of_stock' && (
          <span className="font-jetbrains text-[10px] tracking-widest text-error">SOLD OUT</span>
        )}
      </div>

      {/* Image Container */}
      <Link to={`/product/${product.slug}`} className="relative aspect-[4/5] bg-obsidian overflow-hidden block">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between bg-charcoal border-t border-border relative z-20">
        <div>
          <Link to={`/product/${product.slug}`}>
            <h3 className="font-syne font-bold text-xl text-on-surface mb-2 tracking-tight group-hover:text-electric transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="font-jetbrains text-sm text-on-surface-variant">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Quick Add Button (Visible on Hover) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          disabled={product.availability === 'out_of_stock'}
          className={`absolute bottom-0 left-0 w-full p-4 font-jetbrains text-sm font-bold tracking-[0.05em] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${
            product.availability === 'out_of_stock'
              ? 'bg-surface-bright text-outline cursor-not-allowed'
              : 'bg-electric text-obsidian hover:bg-ice hover:box-shadow-glow'
          }`}
        >
          {product.availability === 'out_of_stock' ? 'UNAVAILABLE' : 'QUICK ADD'}
        </button>
      </div>
    </div>
  );
};
