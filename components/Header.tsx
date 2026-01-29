import React from 'react';
import { Search, ShoppingCart, User, Menu, Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar - High Contrast */}
      <div className="bg-navy text-white py-2 text-center text-xs md:text-sm font-semibold tracking-wide px-4">
        🔥 OFERTA DO DIA: Frete Grátis acima de R$ 200
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold">
                  <Star fill="#FFD700" size={24} />
                </div>
                <span className="font-heading font-bold text-2xl text-navy tracking-tight">
                  StarGrowth
                </span>
              </div>
            </div>

            {/* Search Bar - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="w-full h-11 pl-4 pr-12 rounded-lg border-2 border-gray-100 focus:border-navy focus:ring-0 transition-all outline-none bg-gray-50 text-sm"
              />
              <button className="absolute right-0 top-0 h-11 w-12 bg-navy rounded-r-lg flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
                <Search size={18} />
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center cursor-pointer group">
                <User className="text-navy group-hover:text-opacity-80 transition-colors" size={24} />
                <span className="text-[10px] text-gray-500 font-medium mt-1">Conta</span>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer group">
                <ShoppingCart className="text-navy group-hover:text-opacity-80 transition-colors" size={24} />
                <span className="absolute -top-1 -right-1 bg-gold text-navy text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] text-gray-500 font-medium mt-1">Carrinho</span>
              </div>
              
              {/* Mobile Menu Trigger */}
              <div className="md:hidden">
                <Menu className="text-navy" size={24} />
              </div>
            </div>
          </div>
          
          {/* Mobile Search - Visible only on small screens */}
          <div className="md:hidden pb-4">
             <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-200 bg-gray-50 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};