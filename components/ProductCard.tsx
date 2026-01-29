import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = Math.round(((product.regularPrice - product.memberPrice) / product.regularPrice) * 100);
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-navy/20 transition-all duration-300 relative flex flex-col h-full">
      
      {/* Scarcity Badge - Flashing for urgency */}
      {product.stockLeft < 6 && (
        <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-sm animate-pulse">
          Só {product.stockLeft} Restantes!
        </div>
      )}

      {/* Discount Badge - Member Exclusive */}
      <div className="absolute top-3 right-3 z-10 bg-navy text-gold text-[10px] font-bold px-2 py-1 rounded shadow-sm flex flex-col items-center leading-tight">
        <span>{discount}%</span>
        <span className="text-[8px] uppercase">OFF</span>
      </div>

      {/* Image Container with Hover Effect */}
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <button className="w-full bg-gold text-navy font-bold py-2.5 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-yellow-400 hover:scale-[1.02] transition-all text-xs uppercase tracking-wider">
             <ShoppingCart size={16} /> Comprar Agora
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase mb-1">{product.category}</div>
        <h3 className="font-heading font-semibold text-gray-800 text-sm leading-snug mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600 font-bold">{product.rating}</span>
          <span className="text-[10px] text-gray-400">({product.reviews} avaliações)</span>
        </div>

        {/* Pricing Anchor - Psychology: Regular vs Member */}
        <div className="mt-auto pt-3 border-t border-dashed border-gray-200">
           <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                 <span className="text-xs text-gray-400 line-through">
                  R$ {product.regularPrice.toFixed(2).replace('.', ',')}
                 </span>
                 <span className="text-[9px] text-gray-500 font-medium">Preço Comum</span>
              </div>
              
              <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                   <div className="flex items-baseline gap-1">
                     <span className="text-xs text-navy font-bold">R$</span>
                     <span className="text-xl font-extrabold text-navy">
                      {product.memberPrice.toFixed(2).replace('.', ',')}
                     </span>
                   </div>
                 </div>
                 <div className="bg-navy/10 px-2 py-1 rounded text-[9px] font-bold text-navy uppercase tracking-wider">
                   Membro
                 </div>
              </div>
           </div>
           
           <p className="text-[10px] text-green-600 font-bold mt-1.5 flex items-center gap-1">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
             Economize R$ {(product.regularPrice - product.memberPrice).toFixed(2).replace('.', ',')} com Plano
           </p>
        </div>
      </div>
    </div>
  );
};