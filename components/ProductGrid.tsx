import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';

export const ProductGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-heading font-bold text-navy mb-2">
              Ofertas em Destaque
            </h2>
            <p className="text-gray-500">
              Os produtos mais desejados com preços exclusivos para membros.
            </p>
          </div>
          <a href="#" className="hidden md:block text-navy font-semibold hover:text-gold transition-colors text-sm underline decoration-2 underline-offset-4">
            Ver todos os produtos
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="bg-white border-2 border-navy text-navy font-bold py-3 px-8 rounded-lg hover:bg-navy hover:text-white transition-colors">
            Ver Todos
          </button>
        </div>
      </div>
    </section>
  );
};