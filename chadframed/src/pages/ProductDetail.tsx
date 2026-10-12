import { useState } from "react";


import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCartStore();

  const product = products.find(p => p.slug === slug);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-obsidian pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-syne text-2xl text-on-surface mb-4">ASSET NOT FOUND</h2>
          <button onClick={() => navigate('/shop')} className="font-jetbrains text-electric hover:text-ice">
            RETURN TO CATALOG
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="min-h-screen bg-obsidian pt-24">
      {/* Navigation Bar */}
      <div className="border-b border-border bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-on-surface-variant hover:text-electric transition-colors font-jetbrains text-xs tracking-widest uppercase"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-charcoal border border-border relative overflow-hidden group">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 font-jetbrains text-[10px] tracking-[0.2em] text-outline">
                FIG. {(activeImage + 1).toString().padStart(2, '0')}
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-square border transition-colors ${
                      activeImage === idx ? 'border-electric' : 'border-border hover:border-outline'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover opacity-80" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-12 border-b border-border pb-12">
              <div className="flex justify-between items-start mb-4">
                <p className="font-jetbrains text-xs tracking-widest text-electric uppercase">
                  {product.category} // {product.type}
                </p>
                <p className="font-jetbrains text-xs tracking-widest text-outline">
                  ID: {product.id}
                </p>
              </div>
              <h1 className="font-syne font-bold text-4xl lg:text-5xl text-on-surface mb-6 uppercase tracking-tight">
                {product.name}
              </h1>
              <p className="font-jetbrains text-2xl text-on-surface mb-8">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <p className="font-inter text-on-surface-variant leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Purchase Controls */}
            <div className="mb-12">
              <div className="flex items-center space-x-6 mb-8">
                <span className="font-jetbrains text-xs tracking-widest text-on-surface-variant uppercase">
                  Quantity
                </span>
                <div className="flex items-center border border-border bg-charcoal">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 text-on-surface-variant hover:text-electric transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-jetbrains text-sm w-12 text-center text-on-surface">
                    {quantity.toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 text-on-surface-variant hover:text-electric transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.availability === 'out_of_stock'}
                className={`w-full py-6 font-jetbrains font-bold tracking-[0.05em] uppercase transition-all ${
                  product.availability === 'out_of_stock'
                    ? 'bg-surface-bright text-outline cursor-not-allowed border border-border'
                    : 'bg-electric text-obsidian hover:bg-ice hover:box-shadow-glow'
                }`}
              >
                {product.availability === 'out_of_stock' ? 'UNAVAILABLE' : 'ADD TO BAG'}
              </button>
            </div>

            {/* Specifications */}
            <div className="border-t border-border pt-12 mt-auto">
              <h3 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase">
                Technical Specifications
              </h3>
              <dl className="grid grid-cols-1 gap-4 font-jetbrains text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-3 py-3 border-b border-border/50">
                    <dt className="text-on-surface-variant col-span-1">{key}</dt>
                    <dd className="text-on-surface col-span-2 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
