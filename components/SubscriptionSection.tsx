import React from 'react';
import { Check } from 'lucide-react';

export const SubscriptionSection: React.FC = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-gold opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-wider text-sm uppercase mb-2 block">
            Clube StarGrowth
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            O Plano que se Paga Sozinho
          </h2>
          <p className="text-gray-300 text-lg">
            Junte-se a milhares de membros inteligentes que economizam até 30% em todas as compras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">Visitante</h3>
            <div className="text-3xl font-heading font-bold mb-6">R$ 0<span className="text-sm font-normal text-gray-400">/mês</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} /> Acesso a produtos
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} /> Preço Comum
              </li>
              <li className="flex items-center gap-3 text-gray-500 line-through">
                Frete Grátis
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-navy transition-colors">
              Continuar Grátis
            </button>
          </div>

          {/* Premium Plan - Highlighted */}
          <div className="bg-white rounded-2xl p-8 text-navy shadow-2xl transform md:-translate-y-4 border-4 border-gold relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy font-bold px-4 py-1 rounded-full text-sm">
              MAIS POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Membro Star</h3>
            <div className="text-4xl font-heading font-bold mb-2">R$ 19,90<span className="text-sm font-normal text-gray-500">/mês</span></div>
            <p className="text-green-600 text-sm font-semibold mb-6">Economia média de R$ 150/mês</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 font-medium">
                <div className="bg-green-100 p-1 rounded-full"><Check size={16} className="text-green-600" /></div>
                Até 30% OFF em tudo
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="bg-green-100 p-1 rounded-full"><Check size={16} className="text-green-600" /></div>
                Frete Grátis ilimitado
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="bg-green-100 p-1 rounded-full"><Check size={16} className="text-green-600" /></div>
                Cashback em dobro
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="bg-green-100 p-1 rounded-full"><Check size={16} className="text-green-600" /></div>
                Ofertas antecipadas
              </li>
            </ul>
            <button className="w-full py-4 rounded-lg bg-gold text-navy font-bold shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all text-lg">
              ASSINAR AGORA
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">Anual</h3>
            <div className="text-3xl font-heading font-bold mb-6">R$ 199<span className="text-sm font-normal text-gray-400">/ano</span></div>
            <div className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs font-bold mb-6">
              2 MESES GRÁTIS
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} /> Todos benefícios Mensal
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} /> Kit de Boas-vindas
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check size={18} /> Prioridade no Suporte
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-navy transition-colors">
              Assinar Anual
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};