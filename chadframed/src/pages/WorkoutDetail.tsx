
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Download, Video, FileText } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';

export const WorkoutDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  // Optimization: Select specific state to prevent unnecessary re-renders when other cart state changes
  const addItem = useCartStore((state) => state.addItem);

  const program = products.find(p => p.slug === slug && p.type === 'digital');

  if (!program) {
    return (
      <div className="min-h-screen bg-obsidian pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-syne text-2xl text-on-surface mb-4">PROTOCOL NOT FOUND</h2>
          <button onClick={() => navigate('/workouts')} className="font-jetbrains text-electric hover:text-ice">
            RETURN TO ARCHIVE
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(program, 1);
  };

  const includes = [
    'Comprehensive 12-week progression model',
    'Detailed video exercise library',
    'Nutritional guidelines for hypertrophy',
    'Printable PDF tracking sheets',
    'Lifetime access to protocol updates'
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-24">
      {/* Header */}
      <div className="border-b border-border bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <button
            onClick={() => navigate('/workouts')}
            className="flex items-center text-on-surface-variant hover:text-electric transition-colors font-jetbrains text-xs tracking-widest uppercase"
          >
            <ArrowLeft size={16} className="mr-2" />
            Protocols
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="relative border-b border-border bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-jetbrains text-[10px] tracking-[0.2em] text-electric uppercase px-3 py-1 border border-electric/30 bg-electric/5">
                DIGITAL ACCESS
              </span>
              <span className="font-jetbrains text-xs text-outline tracking-widest">
                ID: {program.id}
              </span>
            </div>

            <h1 className="font-syne font-bold text-5xl lg:text-7xl text-on-surface mb-8 uppercase tracking-tight leading-[1.1]">
              {program.name}
            </h1>

            <p className="font-inter text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg border-l-2 border-electric pl-6">
              {program.description}
            </p>

            <div className="flex items-center space-x-8">
              <p className="font-jetbrains text-3xl text-on-surface">
                ₹{program.price.toLocaleString('en-IN')}
              </p>
              <button
                onClick={handleAddToCart}
                className="bg-electric text-obsidian font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-12 uppercase hover:bg-ice transition-all box-shadow-glow"
              >
                INITIALIZE ACCESS
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-charcoal border border-border relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center relative z-10">
                <FileText size={64} className="mx-auto text-on-surface/20 mb-4" />
                <p className="font-jetbrains text-sm text-outline tracking-widest">ENCRYPTED ARCHIVE</p>
              </div>

              {/* Technical framing lines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-electric" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-electric" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-electric" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-electric" />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h3 className="font-syne font-bold text-2xl text-on-surface mb-8 uppercase border-b border-border pb-4">
              Protocol Overview
            </h3>
            <p className="font-inter text-on-surface-variant leading-relaxed">
              This protocol is engineered to systematically overload the musculature required for optimal physical proportions. It ignores generic fitness advice in favor of targeted structural remodeling. The program is divided into three distinct phases, each building upon the load capacity and neurological adaptations of the previous.
            </p>
          </section>

          <section>
            <h3 className="font-syne font-bold text-2xl text-on-surface mb-8 uppercase border-b border-border pb-4">
              Assets Included
            </h3>
            <ul className="space-y-6">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded bg-electric/10 text-electric flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="font-inter text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-charcoal border border-border p-8">
            <h4 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase">
              Technical Specs
            </h4>
            <dl className="space-y-6 font-jetbrains text-sm">
              {Object.entries(program.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-outline text-xs mb-1 uppercase tracking-widest">{key}</dt>
                  <dd className="text-on-surface">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-electric/5 border border-electric/20 p-8">
            <h4 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-electric mb-4 uppercase">
              Digital Delivery
            </h4>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
              Upon initialization, encrypted access links will be dispatched to your provided terminal (email). Access is instantaneous.
            </p>
            <div className="flex space-x-4">
              <Download size={20} className="text-outline" />
              <Video size={20} className="text-outline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
