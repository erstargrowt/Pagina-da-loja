import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { Users, Truck, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">
            Quem Somos
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            StarGrowth: Conectando Você ao Melhor do Mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
             <img 
               src="https://picsum.photos/id/6/800/600" 
               alt="Equipe StarGrowth" 
               className="rounded-lg shadow-2xl"
             />
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-l-4 border-gold hidden md:block">
               <div className="text-4xl font-bold text-navy mb-1">10k+</div>
               <div className="text-gray-500 text-sm">Clientes Satisfeitos</div>
             </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy">Nossa História</h3>
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {ABOUT_TEXT.history}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Truck className="text-navy mb-2" />
                <h4 className="font-bold text-sm">Logística Rápida</h4>
                <p className="text-xs text-gray-500">Entrega em todo Brasil</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Heart className="text-navy mb-2" />
                <h4 className="font-bold text-sm">Feito com Amor</h4>
                <p className="text-xs text-gray-500">Curadoria especial</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="bg-navy rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-8">Por que confiar na StarGrowth?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                   <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Users size={20} className="text-gold"/>
                   </div>
                   <h4 className="font-bold mb-2">Compromisso</h4>
                   <p className="text-sm text-gray-300">Foco total na sua satisfação</p>
                </div>
                <div>
                   <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                     <ShieldCheckIcon />
                   </div>
                   <h4 className="font-bold mb-2">Segurança</h4>
                   <p className="text-sm text-gray-300">Dados 100% protegidos</p>
                </div>
                 <div>
                   <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                     <LightbulbIcon />
                   </div>
                   <h4 className="font-bold mb-2">Inovação</h4>
                   <p className="text-sm text-gray-300">Tendências globais</p>
                </div>
                 <div>
                   <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                     <MessageCircleIcon />
                   </div>
                   <h4 className="font-bold mb-2">Transparência</h4>
                   <p className="text-sm text-gray-300">Suporte humanizado</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// Helper icons for this file
const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
)
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-2.2-1.8-4-4-4-2.2 0-4 1.8-4 4 0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
)
const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
)
