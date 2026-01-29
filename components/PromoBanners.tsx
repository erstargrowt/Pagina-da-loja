import React from 'react';
import { Timer, Truck, ArrowRight } from 'lucide-react';

export const LimitedTimeOffer: React.FC = () => {
  return (
    <section className="bg-navy py-3 px-4 sm:px-6 lg:px-8 border-y-4 border-gold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-lg animate-pulse">
            <Timer className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Ofertas por Tempo Limitado</h3>
            <p className="text-gold text-xs font-bold">Termina em: 04:59:59</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
          <Truck className="text-gold" size={20} />
          <span className="text-white font-semibold text-sm">
            Frete Grátis nas compras acima de <span className="text-gold font-bold">R$ 200,00</span>
          </span>
        </div>

        <button className="bg-white text-navy font-bold py-2 px-6 rounded-full hover:bg-gold transition-colors text-sm uppercase">
          Aproveitar Agora
        </button>
      </div>
    </section>
  );
};

export const FashionBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] group">
            <img 
              src="https://picsum.photos/id/445/1920/800" 
              alt="Moda Exclusiva" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl">
              <span className="text-gold font-bold tracking-[0.2em] text-sm mb-2 uppercase">
                Coleção Premium
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                ESTILO QUE <br/>DEFINE VOCÊ
              </h2>
              <p className="text-gray-200 text-lg mb-8 max-w-md">
                Descubra nossa nova linha de moda exclusiva. Peças únicas para quem não abre mão da elegância e conforto.
              </p>
              <button className="w-fit bg-gold text-navy font-bold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-white transition-all uppercase tracking-wide">
                Ver Coleção <ArrowRight size={18} />
              </button>
            </div>
         </div>
       </div>
    </section>
  );
};