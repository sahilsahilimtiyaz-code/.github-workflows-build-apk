import { useState, useMemo } from "react";


import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category');
  const sortFilter = searchParams.get('sort') || 'featured';

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter && categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sorting
    switch (sortFilter) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Mock newest sorting since we don't have dates in the mock data
        result.reverse();
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [categoryFilter, sortFilter, searchQuery]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort: string) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-obsidian pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-border">
          <h1 className="font-syne font-bold text-4xl md:text-5xl tracking-tight text-on-surface mb-4 uppercase">
            Arsenal
          </h1>
          <p className="font-jetbrains text-sm text-outline tracking-widest">
            {filteredAndSortedProducts.length.toString().padStart(2, '0')} ASSETS ONLINE
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder="SEARCH CATALOG..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-charcoal border border-border text-on-surface font-jetbrains text-sm py-4 pl-12 pr-4 focus:outline-none focus:border-electric transition-colors"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          </div>

          {/* Controls */}
          <div className="flex w-full lg:w-auto items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex-1 flex items-center justify-center space-x-2 bg-charcoal border border-border py-4 font-jetbrains text-sm text-on-surface"
            >
              <SlidersHorizontal size={16} />
              <span>FILTERS</span>
            </button>

            <div className="relative flex-1 lg:flex-none">
              <select
                value={sortFilter}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full appearance-none bg-charcoal border border-border text-on-surface font-jetbrains text-sm py-4 pl-4 pr-12 focus:outline-none focus:border-electric transition-colors cursor-pointer"
              >
                <option value="featured">FEATURED</option>
                <option value="newest">NEWEST</option>
                <option value="price_asc">PRICE: LOW TO HIGH</option>
                <option value="price_desc">PRICE: HIGH TO LOW</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className={`lg:col-span-1 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-32">
              <h3 className="font-jetbrains text-xs font-bold tracking-[0.1em] text-on-surface mb-6 uppercase">
                Categories
              </h3>
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`font-inter text-sm transition-colors ${
                        (categoryFilter === category) || (!categoryFilter && category === 'All')
                          ? 'text-electric font-medium'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="py-24 text-center border border-border bg-charcoal">
                <p className="font-jetbrains text-sm text-on-surface-variant mb-4">NO ASSETS MATCH YOUR CRITERIA.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleCategoryChange('All');
                  }}
                  className="font-jetbrains text-xs text-electric hover:text-ice underline underline-offset-4"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {filteredAndSortedProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
