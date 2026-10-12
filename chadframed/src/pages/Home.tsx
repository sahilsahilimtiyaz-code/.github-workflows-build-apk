
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export const Home = () => {
  const featuredProduct = products.find(p => p.id === 'prd_01');
  const physicalProducts = products.filter(p => p.type === 'physical').slice(0, 4);

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center border-b border-border overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(#252C36 1px, transparent 1px), linear-gradient(90deg, #252C36 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />

        {/* Cinematic Lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[128px] z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ice/10 rounded-full blur-[150px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] tracking-[-0.03em] text-on-surface mb-8 uppercase">
              Obsidian <br /> Performance
            </h1>
            <p className="font-inter text-lg text-on-surface-variant max-w-xl mb-12 border-l border-border pl-6 py-2">
              High-performance aesthetic engineering. Precision tools and formulations for structural mastery and cognitive focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/shop"
                className="bg-electric text-obsidian font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 inline-flex justify-center items-center hover:bg-ice transition-all box-shadow-glow"
              >
                EXPLORE ARSENAL <ArrowRight size={18} className="ml-3" />
              </Link>
              <Link
                to="/workouts"
                className="border border-border text-on-surface font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 inline-flex justify-center items-center hover:border-electric hover:text-electric transition-colors"
              >
                ACCESS PROTOCOLS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            {featuredProduct && (
              <div className="relative aspect-[3/4] bg-charcoal border border-border overflow-hidden group">
                <img
                  src={featuredProduct.images[0]}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="font-jetbrains text-xs tracking-widest text-electric mb-2">FEATURED ASSET</p>
                      <h3 className="font-syne font-bold text-2xl text-on-surface">{featuredProduct.name}</h3>
                    </div>
                    <Link
                      to={`/product/${featuredProduct.slug}`}
                      className="w-12 h-12 bg-obsidian border border-border flex items-center justify-center hover:border-electric hover:text-electric transition-colors"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 border-b border-border bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16 border-b border-border pb-8">
            <div>
              <h2 className="font-syne font-bold text-4xl tracking-tight text-on-surface mb-2 uppercase">Physical Assets</h2>
              <p className="font-jetbrains text-sm text-outline tracking-widest">TACTICAL // CLINICAL</p>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center space-x-2 text-electric hover:text-ice transition-colors font-jetbrains text-sm">
              <span>VIEW ALL</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {physicalProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Link to="/shop" className="sm:hidden mt-8 flex items-center justify-center w-full py-4 border border-border text-on-surface hover:text-electric transition-colors font-jetbrains text-sm">
            <span>VIEW ALL ASSETS</span>
          </Link>
        </div>
      </section>

      {/* Protocol Section (Digital) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-charcoal border-l border-border -z-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-jetbrains text-xs tracking-widest text-electric mb-6 border-l-2 border-electric pl-4">DIGITAL INFRASTRUCTURE</p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl tracking-tight text-on-surface mb-8 uppercase">
              Architectural <br /> Protocols
            </h2>
            <p className="font-inter text-on-surface-variant leading-relaxed mb-10 max-w-md">
              Reject the subjective. Our digital protocols provide engineered roadmaps for physical symmetry, structural load capacity, and aesthetic harmony.
            </p>
            <ul className="space-y-4 font-jetbrains text-sm text-on-surface mb-12">
              <li className="flex items-center space-x-4"><span className="text-electric">01 //</span> <span>HYPERTROPHY MAPPING</span></li>
              <li className="flex items-center space-x-4"><span className="text-electric">02 //</span> <span>SYMMETRY CALIBRATION</span></li>
              <li className="flex items-center space-x-4"><span className="text-electric">03 //</span> <span>LOAD PROGRESSION</span></li>
            </ul>
            <Link
              to="/workouts"
              className="bg-on-surface text-obsidian font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 inline-flex hover:bg-electric hover:text-obsidian transition-colors"
            >
              INITIALIZE PROTOCOL
            </Link>
          </div>

          <div className="relative aspect-square bg-obsidian border border-border p-8 flex flex-col justify-between group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex justify-between">
              <span className="font-jetbrains text-xs text-outline">SECURE CONNECTION</span>
              <span className="font-jetbrains text-xs text-electric animate-pulse">ACTIVE</span>
            </div>

            <div className="relative z-10 text-center">
              <div className="w-24 h-24 border border-electric/30 rounded-full mx-auto flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 border border-electric rounded-full animate-[spin_4s_linear_infinite]" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%)' }} />
                <span className="font-syne text-3xl text-on-surface">P1</span>
              </div>
              <h3 className="font-syne font-bold text-2xl text-on-surface mb-2 tracking-tight">PROJECT SYMMETRY</h3>
              <p className="font-jetbrains text-xs text-outline tracking-widest">12 WEEK CYCLE</p>
            </div>

            <div className="relative z-10 flex justify-between items-end">
              <div className="font-jetbrains text-[10px] text-outline space-y-1">
                <p>STATUS: UNLOCKED</p>
                <p>ACCESS: IMMEDIATE</p>
              </div>
              <Link to="/workouts" className="w-10 h-10 bg-electric text-obsidian flex items-center justify-center hover:bg-ice transition-colors">
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
