import React from 'react';
import { AgeProvider } from './context/AgeContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { BeerCatalog } from './components/BeerCatalog';
import { StoryManifesto } from './components/StoryManifesto';
import { PacksSection } from './components/PacksSection';
import { ContactB2B } from './components/ContactB2B';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { AgeModal } from './components/AgeModal';
import { ToastContainer } from './components/ToastContainer';

export function App() {
  return (
    <AgeProvider>
      <CartProvider>
        <ToastProvider>
          <div className="min-h-screen w-full flex flex-col justify-between bg-[#121114] text-[#e5e1e4] overflow-visible">
            
            {/* Global Overlays */}
            <AgeModal />
            <CartDrawer />
            <ToastContainer />

            {/* Header / Navbar */}
            <Navbar />

            {/* Main Application Sections */}
            <main className="w-full flex-grow">
              <Hero />
              <Ticker />
              <BeerCatalog />
              <StoryManifesto />
              <PacksSection />
              <ContactB2B />
            </main>

            {/* Institutional Footer */}
            <Footer />

          </div>
        </ToastProvider>
      </CartProvider>
    </AgeProvider>
  );
}

export default App;
