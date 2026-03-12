import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Zap, Star } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import { Marquee } from './ui/Marquee';

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Subtle Parallax - NO ZOOM */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1625290969658-ce5b60978430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXBzdGVyJTIwY3Jvd2QlMjBvdXRkb29yJTIwcGFydHklMjBldmVuaW5nJTIwd2FybSUyMGxpZ2h0fGVufDF8fHx8MTc2NjUyNTMxMnww&ixlib=rb-4.1.0&q=80&w=1920" 
          alt="Party at Kytlice" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </motion.div>

      {/* Floating Elements - Subtle */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 md:top-32 md:right-32 z-20 text-[#CCFF00] hidden md:block opacity-70"
      >
        <Star size={80} fill="currentColor" className="drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 z-20 hidden md:block opacity-80"
      >
        <div className="bg-[#E25822] text-white p-4 transform -rotate-12 border-4 border-white shadow-[8px_8px_0px_0px_black]">
          <Zap size={40} fill="yellow" stroke="black" />
        </div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-16 pb-32">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 relative"
        >
          <span className="inline-block bg-[#CCFF00] text-black text-xl md:text-2xl font-black px-6 py-2 uppercase tracking-widest border-4 border-black shadow-[4px_4px_0px_0px_white]">
            {t.hero.since}
          </span>
        </motion.div>
        
        {/* STATIC Headline - NO scroll fade, better line-height */}
        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-['Archivo_Black'] font-black text-[#F5F5F0] uppercase tracking-tighter leading-[1.05] mb-12 drop-shadow-2xl"
        >
          <motion.span 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            {t.hero.titleLine1} <span className="text-[#E25822]">{t.hero.titleLine2}</span>
          </motion.span>
          <motion.span 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="block"
          >
            {t.hero.titleLine3}
          </motion.span>
          <motion.span 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#E25822]"
          >
            {t.hero.titleLine4}
          </motion.span>
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl font-bold italic mb-12 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/20"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA - NO animations on hover, just scale */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#E25822] text-white text-2xl md:text-3xl font-['Archivo_Black'] font-black uppercase px-12 py-6 border-4 border-white shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_#CCFF00] hover:border-[#CCFF00] transition-all"
        >
          {t.hero.cta}
        </motion.button>
      </div>

      {/* Marquee - Far from headline, very slow */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#CCFF00] border-t-4 border-black py-3 transform rotate-1 scale-110 origin-bottom">
        <Marquee className="text-black font-['Archivo_Black'] font-black text-2xl uppercase tracking-widest" repeat={10} duration={90}>
           LANGOSZ • BEER • CHAOS • KYTLICE • OIL • GARLIC • HEAVY METAL • 
        </Marquee>
      </div>
    </motion.section>
  );
}