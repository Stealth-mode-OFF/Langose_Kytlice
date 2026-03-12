import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, X } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import langosImage from "figma:asset/78989dc8601e0b006eadafeae60230e938dc8e3f.png";
import kocourImage from "figma:asset/9966d766ce1a195867974ed7bf6eade3ba77119c.png";
import sinImage from "figma:asset/de70cd89364fd45f060b066e46a7c6fd2196e31e.png";

const MENU_DATA = [
  {
    id: 1,
    key: 'bastard',
    price: "145 CZK",
    image: langosImage
  },
  {
    id: 2,
    key: 'kocour',
    price: "210 CZK",
    image: kocourImage
  },
  {
    id: 3,
    key: 'sin',
    price: "120 CZK",
    image: sinImage
  }
] as const;

const DRINK_DATA = [
  {
    category: "BEER / PIVO",
    items: [
      { name: "Kytlický Ležák 11°", price: "55 CZK", desc: "Local gold. No hangover promised." },
      { name: "Radegast Ratar", price: "49 CZK", desc: "Bitter as life." }
    ]
  },
  {
    category: "SHOTS / PANÁKY",
    items: [
      { name: "Jägermeister", price: "60 CZK", desc: "Ice cold (-18°C)" },
      { name: "Slivovice Žufánek", price: "75 CZK", desc: "Moravian medicine" }
    ]
  },
  {
    category: "COCKTAILS",
    items: [
      { name: "Skinny Bitch", price: "120 CZK", desc: "Vodka, Soda, Lime. 2026 Classic." },
      { name: "Kytlice Mule", price: "135 CZK", desc: "Vodka, Ginger Beer, Lime, Chilli" }
    ]
  }
];

export function Menu() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Subtle Static Background Pattern - NO ANIMATION */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #000 2px, transparent 2.5px)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-6xl md:text-8xl font-['Archivo_Black'] font-black uppercase text-black mb-4 relative z-10 leading-[1.05]">
              {t.menu.titleLine1}<br />
              <span className="text-[#E25822]">{t.menu.titleLine2}</span>
            </h2>
            {/* Slower rotating star */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -right-16 text-[#CCFF00] z-0 opacity-70"
            >
              <Star size={120} fill="currentColor" stroke="black" strokeWidth={3} />
            </motion.div>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mt-8 max-w-2xl mx-auto italic text-gray-800 leading-relaxed"
          >
            {t.menu.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_DATA.map((data, index) => {
            const itemTranslation = t.menu.items[data.key as keyof typeof t.menu.items];
            return (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 100, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -20, rotate: index % 2 === 0 ? 2 : -2, scale: 1.02, zIndex: 10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_#E25822] transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden border-b-4 border-black relative">
                   <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
                    {itemTranslation.tags.map((tag, i) => (
                      <motion.span 
                        key={tag} 
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="bg-[#CCFF00] text-black text-xs font-black uppercase px-2 py-1 border-2 border-black transform rotate-2 shadow-[2px_2px_0px_0px_black]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <img 
                    src={data.image} 
                    alt={itemTranslation.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-['Archivo_Black'] font-black uppercase leading-tight w-2/3 group-hover:text-[#E25822] transition-colors">{itemTranslation.name}</h3>
                    <div className="relative">
                      <span className="text-xl font-['Archivo_Black'] font-black text-black relative z-10">{data.price}</span>
                      <span className="absolute inset-0 bg-[#CCFF00] transform -rotate-3 scale-110 z-0" />
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-700 leading-relaxed flex-1">
                    {itemTranslation.desc}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-black text-white font-['Archivo_Black'] font-black uppercase py-4 hover:bg-[#E25822] transition-colors border-2 border-transparent hover:border-black shadow-none hover:shadow-[4px_4px_0px_0px_black]"
                  >
                    {t.menu.cta}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="inline-block bg-[#F5F5F0] text-black text-xl font-['Archivo_Black'] font-black uppercase px-8 py-4 border-4 border-black hover:bg-black hover:text-[#CCFF00] transition-colors shadow-[8px_8px_0px_0px_black]"
          >
            {t.menu.pdf}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5, y: 100 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0.8, rotate: 5, y: 100 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#F5F5F0] border-4 border-black shadow-[16px_16px_0px_0px_#E25822] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,black,black_10px,#CCFF00_10px,#CCFF00_20px)] border-b-4 border-black" />
              
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 bg-black text-[#CCFF00] hover:bg-[#E25822] hover:text-white transition-colors border-2 border-black z-20"
              >
                <X size={24} strokeWidth={3} />
              </button>

              <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
                <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-['Archivo_Black'] font-black uppercase leading-none mb-2">
                    SEASONAL<br/><span className="text-[#E25822]">POP-UP MENU</span>
                  </h3>
                  <p className="font-bold text-gray-500 uppercase tracking-widest">Spring / Summer 2026</p>
                </div>

                <div className="space-y-12">
                  {/* Langosz Section inside Modal */}
                  <div>
                    <h4 className="text-2xl font-['Archivo_Black'] font-black bg-black text-[#CCFF00] inline-block px-4 py-1 mb-6 transform -rotate-1 shadow-[4px_4px_0px_0px_#E25822]">
                      LANGOSZ / JÍDLO
                    </h4>
                    <ul className="space-y-6">
                      {MENU_DATA.map((data) => {
                        const itemTranslation = t.menu.items[data.key as keyof typeof t.menu.items];
                        return (
                          <li key={data.key} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b-2 border-dashed border-gray-300 pb-2">
                            <div>
                              <span className="text-xl font-bold uppercase block md:inline">{itemTranslation.name}</span>
                              <span className="text-sm font-medium text-gray-500 md:ml-2">{itemTranslation.desc}</span>
                            </div>
                            <span className="text-xl font-['Archivo_Black'] font-black whitespace-nowrap">{data.price}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {DRINK_DATA.map((category) => (
                    <div key={category.category}>
                      <h4 className="text-2xl font-['Archivo_Black'] font-black bg-black text-[#CCFF00] inline-block px-4 py-1 mb-6 transform -rotate-1 shadow-[4px_4px_0px_0px_#E25822]">
                        {category.category}
                      </h4>
                      <ul className="space-y-6">
                        {category.items.map((item) => (
                          <li key={item.name} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b-2 border-dashed border-gray-300 pb-2">
                            <div>
                              <span className="text-xl font-bold uppercase block md:inline">{item.name}</span>
                              <span className="text-sm font-medium text-gray-500 md:ml-2">{item.desc}</span>
                            </div>
                            <span className="text-xl font-['Archivo_Black'] font-black whitespace-nowrap">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  <div className="mt-8 p-4 border-2 border-black bg-[#CCFF00] text-center transform rotate-1">
                     <p className="font-bold uppercase text-sm">All prices include VAT and bad mood tax.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}