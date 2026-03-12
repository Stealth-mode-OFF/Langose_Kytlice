import React from 'react';
import { Navigation, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Location } from './components/Location';
import { LanguageProvider } from '../lib/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#F5F5F0] font-['Inter'] selection:bg-[#CCFF00] selection:text-black">
        <Navigation />
        <main className="relative">
          <Hero />
          <Menu />
          <About />
          <Location />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
