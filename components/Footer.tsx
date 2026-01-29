import React from 'react';
import { Star, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { TERMS_TEXT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy">
                  <Star fill="#104479" size={18} />
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  StarGrowth
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Sua jornada para uma vida melhor começa aqui. Produtos premium, preços justos e confiança total.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-gold transition-colors"><Instagram size={20}/></a>
                <a href="#" className="hover:text-gold transition-colors"><Facebook size={20}/></a>
                <a href="#" className="hover:text-gold transition-colors"><Twitter size={20}/></a>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">Produtos</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Clube StarGrowth</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
             <h4 className="text-white font-bold mb-6">Ajuda</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
           <div>
             <h4 className="text-white font-bold mb-6">Contato</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-center gap-2">
                 <Mail size={16} className="text-gold"/>
                 suporte@stargrowth.com.br
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-black font-bold">W</span>
                 (11) 99999-9999
               </li>
               <li className="text-gray-500 text-xs mt-4">
                 Seg à Sex: 09h às 18h
               </li>
             </ul>
           </div>
        </div>

        {/* Terms Snippet */}
        <div className="border-t border-gray-800 pt-8 pb-8">
           <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Termos de Uso (Resumo)</h5>
           <p className="text-xs text-gray-600 leading-relaxed text-justify">
             {TERMS_TEXT}
           </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2024 StarGrowth E-commerce. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
             {/* Simple Payment Placeholders using text for demo */}
             <span className="text-xs border border-gray-600 px-2 py-1 rounded">VISA</span>
             <span className="text-xs border border-gray-600 px-2 py-1 rounded">Mastercard</span>
             <span className="text-xs border border-gray-600 px-2 py-1 rounded">PIX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};