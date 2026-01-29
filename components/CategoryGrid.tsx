import React from 'react';
import { Watch, ChefHat, BookOpen, Dog, Smile, ShoppingBasket } from 'lucide-react';
import { CATEGORIES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  Watch: <Watch size={24} />,
  ChefHat: <ChefHat size={24} />,
  BookOpen: <BookOpen size={24} />,
  Dog: <Dog size={24} />,
  Smile: <Smile size={24} />,
  ShoppingBasket: <ShoppingBasket size={24} />,
};

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-6 gap-6 md:gap-8 pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group flex flex-col items-center min-w-[80px] cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-navy shadow-sm group-hover:shadow-lg group-hover:border-gold group-hover:text-gold transition-all duration-300 transform group-hover:-translate-y-1">
                {IconMap[cat.iconName]}
              </div>
              <span className="mt-3 text-[10px] md:text-xs font-bold text-gray-700 text-center uppercase tracking-wide group-hover:text-navy transition-colors whitespace-nowrap">
                {cat.name}
              </span>
              {cat.name.includes("Supermercado") && (
                <span className="text-[8px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-bold mt-1">
                  EM BREVE
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};