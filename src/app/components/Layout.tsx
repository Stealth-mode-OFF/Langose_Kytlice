import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Marquee } from './ui/Marquee';
import { cn } from '../../lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { href: '#menu', label: t.nav.eat },
    { href: '#about', label: t.nav.kocour },
    { href: '#location', label: t.nav.findUs },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0] border-b-4 border-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            <div className="flex-shrink-0 flex items-center">
              <motion.a 
                href="#" 
                whileHover={{ rotate: 2, scale: 1.05 }}
                className="text-2xl md:text-3xl font-['Archivo_Black'] font-black tracking-tighter uppercase transform -rotate-2 bg-black text-[#CCFF00] px-4 py-2 shadow-[4px_4px_0px_0px_#E25822] hover:shadow-[6px_6px_0px_0px_#E25822] transition-shadow"
              >
                KYTLICE LANGOSZ
              </motion.a>
            </div>

            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
               <LanguageSwitcher />
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-['Archivo_Black'] font-bold text-black hover:text-[#E25822] transition-colors uppercase italic relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#E25822] transition-all group-hover:w-full" />
                </a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E25822] text-white px-6 py-2 font-['Archivo_Black'] font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_#CCFF00] hover:border-black transition-all"
              >
                {t.nav.orderNow}
              </motion.button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-[#E25822] p-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_black] active:translate-y-1 active:shadow-none transition-all"
              >
                {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#CCFF00] border-b-4 border-black overflow-hidden flex flex-col items-center justify-center z-40"
            >
              <div className="flex flex-col items-center gap-8 w-full px-8 pb-32">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-['Archivo_Black'] font-black uppercase text-black hover:text-[#E25822] hover:scale-110 transition-transform"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="w-full max-w-xs bg-black text-white text-2xl font-['Archivo_Black'] font-bold uppercase py-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-2"
                >
                  {t.nav.orderNow}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <ScrollToTop />
    </>
  );
}

function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setVisible(latest > 0.2);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 bg-black text-[#CCFF00] p-4 border-4 border-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_#E25822] transition-shadow"
        >
          <ArrowUp size={32} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-[#F5F5F0] border-t-8 border-[#CCFF00] relative overflow-hidden">
      {/* Slow, consistent Marquee */}
      <div className="bg-[#E25822] py-2 border-b-4 border-black transform rotate-1 scale-105 origin-left">
        <Marquee className="text-black font-['Archivo_Black'] font-black text-xl uppercase tracking-widest" repeat={10} duration={90}>
          FOLLOW THE CAT • EAT LANGOSZ • DRINK BEER • NO REGRETS • 
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12 relative z-10">
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="inline-block"
          >
            <h3 className="text-5xl font-['Archivo_Black'] font-black text-[#CCFF00] uppercase italic leading-none shadow-[4px_4px_0px_0px_#E25822] bg-black px-2 border-2 border-[#CCFF00]">
              Kytlice<br/>Langosz
            </h3>
          </motion.div>
          <p className="text-xl font-bold max-w-xs leading-relaxed">{t.footer.tagline}</p>
          <div className="flex space-x-4">
            <motion.a href="#" whileHover={{ y: -5, color: '#E25822' }} className="bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00]"><Instagram size={28} /></motion.a>
            <motion.a href="#" whileHover={{ y: -5, color: '#E25822' }} className="bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0px_0px_#CCFF00]"><Facebook size={28} /></motion.a>
          </div>
        </div>
        
        <div>
          <h4 className="text-3xl font-['Archivo_Black'] font-black mb-6 uppercase text-[#E25822] flex items-center gap-2">
            <MapPin className="animate-bounce" /> {t.footer.visitUs}
          </h4>
          <div className="bg-[#1a1a1a] p-6 border-l-4 border-[#CCFF00]">
            <p className="text-lg font-bold font-mono leading-relaxed">
              Kytlice 42<br />
              Bohemian Switzerland<br />
              Czech Republic
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-3xl font-['Archivo_Black'] font-black mb-6 uppercase text-[#E25822]">{t.footer.openHours}</h4>
          <ul className="text-lg font-bold space-y-4">
            <li className="flex justify-between border-b border-gray-800 pb-2 hover:border-[#CCFF00] transition-colors group">
              <span className="group-hover:text-[#CCFF00] transition-colors">{t.location.fri}</span>
              <span>16:00 - 22:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2 hover:border-[#CCFF00] transition-colors group text-[#CCFF00]">
              <span className="group-hover:text-white transition-colors">{t.location.sat}</span>
              <span>12:00 - 23:00 {t.location.party}</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2 hover:border-[#CCFF00] transition-colors group">
              <span className="group-hover:text-[#CCFF00] transition-colors">{t.location.sun}</span>
              <span>11:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pb-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm uppercase tracking-widest text-gray-500 font-bold">
        <span>{t.footer.copyright}</span>
        <span className="text-[#E25822]">Made with grease & love</span>
      </div>
    </footer>
  );
}