import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { TrustBar } from './components/TrustBar';
import { SubscriptionSection } from './components/SubscriptionSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProductCarousel } from './components/ProductCarousel';
import { LimitedTimeOffer, FashionBanner } from './components/PromoBanners';
import { PRODUCTS } from './constants';

function App() {
  // Filter for Best Deals (e.g., > 30% discount logic or manually selected)
  const bestDeals = PRODUCTS.filter(p => ((p.regularPrice - p.memberPrice) / p.regularPrice) > 0.3);
  const fashionProducts = PRODUCTS.filter(p => p.category === "Moda Exclusiva");
  const allProducts = PRODUCTS;

  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Categories - Mobile First Circular */}
        <CategoryGrid />
        
        {/* Social Proof & Security */}
        <TrustBar />
        
        {/* Best Deals of the Week - Up to 30% OFF */}
        <ProductCarousel 
          title="Melhores Ofertas da Semana" 
          subtitle="Descontos imperdíveis de até 30% para membros"
          products={bestDeals}
        />

        {/* Limited Time Offer Banner */}
        <LimitedTimeOffer />

        {/* Fashion Section Banner */}
        <FashionBanner />

        {/* Fashion Carousel */}
        <ProductCarousel 
          title="Moda Exclusiva" 
          subtitle="Tendências que acabaram de chegar"
          products={fashionProducts}
          bgColor="bg-gray-50"
        />
        
        {/* All Products Carousel */}
        <ProductCarousel 
          title="Destaques da Loja" 
          subtitle="Nossa seleção completa para você"
          products={allProducts}
        />
        
        {/* Subscription / Membership CTA */}
        <SubscriptionSection />
        
        {/* About Us */}
        <AboutSection />
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="absolute right-full mr-3 bg-white text-gray-800 text-xs py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Conosco
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </a>
    </div>
  );
}

export default App;