
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowRight, Clock, Dumbbell, Activity } from 'lucide-react';

export const Workouts = () => {
  const workoutPrograms = products.filter(p => p.type === 'digital' && p.category === 'Programs');

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric/5 via-obsidian to-obsidian -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24 max-w-3xl border-l border-electric pl-8">
          <h1 className="font-syne font-bold text-4xl md:text-6xl tracking-tight text-on-surface mb-6 uppercase">
            Architectural <br /> Protocols
          </h1>
          <p className="font-inter text-lg text-on-surface-variant leading-relaxed">
            Digital infrastructure for physical remodeling. Engineered progression models designed to build structural symmetry and aesthetic dominance.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 gap-12">
          {workoutPrograms.map(program => (
            <div key={program.id} className="group relative bg-charcoal border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Image Section */}
              <div className="lg:col-span-5 relative aspect-square lg:aspect-auto bg-obsidian">
                <img
                  src={program.images[0]}
                  alt={program.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-jetbrains text-[10px] tracking-[0.2em] text-electric uppercase px-3 py-1 border border-electric/30 bg-electric/5">
                      {program.category}
                    </span>
                    <span className="font-jetbrains text-sm text-outline">
                      {program.id}
                    </span>
                  </div>

                  <h2 className="font-syne font-bold text-3xl md:text-4xl text-on-surface mb-6 uppercase">
                    {program.name}
                  </h2>
                  <p className="font-inter text-on-surface-variant mb-12 max-w-xl">
                    {program.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div>
                      <Clock size={16} className="text-electric mb-2" />
                      <p className="font-jetbrains text-[10px] text-outline tracking-widest uppercase mb-1">Duration</p>
                      <p className="font-jetbrains text-xs text-on-surface uppercase">{program.specifications.Duration}</p>
                    </div>
                    <div>
                      <Activity size={16} className="text-electric mb-2" />
                      <p className="font-jetbrains text-[10px] text-outline tracking-widest uppercase mb-1">Difficulty</p>
                      <p className="font-jetbrains text-xs text-on-surface uppercase">{program.specifications.Difficulty}</p>
                    </div>
                    <div className="col-span-2">
                      <Dumbbell size={16} className="text-electric mb-2" />
                      <p className="font-jetbrains text-[10px] text-outline tracking-widest uppercase mb-1">Equipment</p>
                      <p className="font-jetbrains text-xs text-on-surface uppercase">{program.specifications.Equipment}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border pt-8">
                  <p className="font-jetbrains text-2xl text-on-surface mb-6 sm:mb-0">
                    ₹{program.price.toLocaleString('en-IN')}
                  </p>
                  <Link
                    to={`/workouts/${program.slug}`}
                    className="w-full sm:w-auto bg-transparent border border-border text-on-surface font-jetbrains font-bold text-sm tracking-[0.05em] py-4 px-8 inline-flex justify-center items-center group-hover:border-electric group-hover:text-electric transition-colors"
                  >
                    INSPECT PROTOCOL <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
