import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../lib/LanguageContext';

export function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-[#F5F5F0] overflow-hidden">
      {/* REMOVED Marquee at top - creates visual rest after About section */}

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-['Archivo_Black'] font-black uppercase mb-4 leading-[1.05]"
          >
            {t.location.title} <span className="text-[#2E4600] underline decoration-[#E25822] decoration-wavy">{t.location.titleLocation}</span>
          </motion.h2>
          <p className="text-xl font-bold leading-relaxed">{t.location.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 border-4 border-black bg-white p-2 md:p-4 shadow-[12px_12px_0px_0px_#2E4600]">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-full min-h-[400px] border-2 border-black overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1729954343553-4d84b18cc22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjb3R0YWdlJTIwY3plY2glMjBjb3VudHJ5c2lkZSUyMG9sZCUyMGhvdXNlfGVufDF8fHx8MTc2NjUyNTMxMnww&ixlib=rb-4.1.0&q=80&w=800"
              alt="The Old House"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-transparent transition-all duration-500">
                <span className="text-white text-3xl font-black uppercase border-4 border-white px-6 py-2 transform -rotate-12 group-hover:opacity-0 transition-opacity backdrop-blur-md">
                  {t.location.hqLabel}
                </span>
            </div>
            {/* Blinking Indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 px-3 py-1 rounded-full border border-[#CCFF00]">
              <motion.div 
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-[#CCFF00]"
              />
              <span className="text-[#CCFF00] font-mono text-xs font-bold uppercase">Live Cam (Fake)</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 space-y-8 bg-[#CCFF00] relative overflow-hidden"
          >
            {/* Background Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase mb-2 flex items-center gap-2">
                <MapPin className="w-8 h-8" /> {t.location.addressTitle}
              </h3>
              <p className="text-2xl font-bold font-mono leading-relaxed">
                Kytlice 42<br/>
                407 45 Kytlice<br/>
                Czech Republic
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase mb-2 flex items-center gap-2">
                <Navigation className="w-8 h-8" /> {t.location.fromPragueTitle}
              </h3>
              <p className="text-xl font-bold leading-relaxed">
                {t.location.fromPragueTime}
              </p>
              <p className="text-lg opacity-80 mt-2 leading-relaxed">
                {t.location.fromPragueDesc}
              </p>
            </div>

            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-black text-[#F5F5F0] p-6 transform rotate-1 transition-transform relative z-10 border-2 border-white cursor-help"
            >
              <h4 className="text-xl font-black uppercase mb-2 text-[#E25822]">{t.location.tipTitle}</h4>
              <p className="font-medium italic leading-relaxed">
                {t.location.tipDesc}
              </p>
            </motion.div>

            <motion.a 
              href="https://maps.google.com/?q=Kytlice" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center bg-[#E25822] text-white font-['Archivo_Black'] font-black uppercase py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all relative z-10 group"
            >
              <span className="flex items-center justify-center gap-2">
                {t.location.openMaps} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}