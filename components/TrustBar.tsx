import React from 'react';
import { ShieldCheck, RefreshCw, BadgeDollarSign } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="border-t border-b border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div className="flex items-center justify-center py-6 gap-4">
            <ShieldCheck className="text-navy" size={32} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-navy text-sm">SITE 100% SEGURO</span>
              <span className="text-xs text-gray-500">Dados criptografados</span>
            </div>
          </div>

          <div className="flex items-center justify-center py-6 gap-4">
            <RefreshCw className="text-navy" size={32} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-navy text-sm">DEVOLUÇÃO GRÁTIS</span>
              <span className="text-xs text-gray-500">Em até 7 dias úteis</span>
            </div>
          </div>

          <div className="flex items-center justify-center py-6 gap-4">
            <BadgeDollarSign className="text-navy" size={32} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-navy text-sm">CASHBACK ATIVO</span>
              <span className="text-xs text-gray-500">Dinheiro de volta na conta</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};