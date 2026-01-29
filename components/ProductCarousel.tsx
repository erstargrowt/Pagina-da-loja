import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ 
  title, 
  subtitle, 
  products,
  bgColor = "bg-white"
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-12 ${bgColor} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-1 uppercase tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-gray-500 font-medium">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Navigation Controls */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 hover:bg-navy hover:text-white transition-colors text-navy"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-200 hover:bg-navy hover:text-white transition-colors text-navy"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[260px] md:min-w-[280px] snap-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex justify-center md:hidden">
            <span className="text-xs text-gray-400">Deslize para ver mais</span>
        </div>
      </div>
    </section>
  );
};