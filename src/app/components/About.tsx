import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../../lib/LanguageContext';
import kocourImage from "figma:asset/a3d0688fd16cfd12affcd798e9c6482b2a4716e1.png";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <motion.section id="about" ref={ref} className="py-24 bg-[#E25822] text-[#F5F5F0] overflow-hidden relative">
      {/* NO background text animation - just clean background */}
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative">
            <motion.div
              style={{ rotate }}
              className="relative z-10 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
            >
              <img 
                src={kocourImage}
                alt="Michal Kocour Tušer" 
                className="w-full h-auto grayscale contrast-125"
              />
              {/* Sticker on Image */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-[#CCFF00] text-black font-black uppercase p-4 text-center border-2 border-black rotate-12 shadow-[4px_4px_0px_0px_black]"
              >
                Legendary<br/>Status
              </motion.div>
            </motion.div>
            
            {/* Slower rotating SVG text */}
            <div className="absolute -top-12 -left-12 z-0">
               <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                width="200" 
                height="200" 
                viewBox="0 0 200 200"
               >
                 <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                 <text width="500">
                   <textPath xlinkHref="#curve" className="text-xl font-black uppercase fill-black tracking-widest">
                     {t.about.svgText}
                   </textPath>
                 </text>
               </motion.svg>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-['Archivo_Black'] font-black uppercase mb-8 leading-[1.0]"
            >
              {t.about.meet} <br/>
              <span className="text-black bg-[#CCFF00] px-2 transform -skew-x-12 inline-block shadow-[4px_4px_0px_0px_black]">{t.about.kocour}</span>
            </motion.h2>
            
            <div className="space-y-6 text-xl font-bold">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="leading-relaxed"
              >
                {t.about.p1}
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="leading-relaxed"
              >
                {t.about.p2} <span className="underline decoration-black decoration-4 hover:decoration-white transition-all">{t.about.p2highlight}</span>
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="leading-relaxed"
              >
                {t.about.p3}
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
              className="mt-12 flex gap-4"
            >
              <div className="bg-black p-4 text-[#CCFF00] font-mono text-sm border-2 border-[#CCFF00] shadow-[4px_4px_0px_0px_white]">
                {t.about.quote} <br/> {t.about.quoteAuthor}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}