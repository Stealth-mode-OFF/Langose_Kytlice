import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'cs', label: 'CZ' },
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
  ] as const;

  return (
    <div className="flex items-center bg-black p-1 gap-1 border-2 border-black transform -rotate-1 shadow-[2px_2px_0px_0px_#CCFF00]">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            "relative px-3 py-1 font-['Archivo_Black'] font-black text-sm transition-all duration-200 uppercase tracking-wider",
            language === lang.code
              ? "bg-[#E25822] text-white"
              : "bg-transparent text-[#F5F5F0] hover:text-[#CCFF00]"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
