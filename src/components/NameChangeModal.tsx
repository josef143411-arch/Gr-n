import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface NameChangeModalProps {
  language: 'sv' | 'en';
}

export default function NameChangeModal({ language }: NameChangeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('name-change-modal-dismissed');
    if (!isDismissed) {
      // Small timeout to let the page load gracefully before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('name-change-modal-dismissed', 'true');
    }
    setIsOpen(false);
  };

  const content = {
    sv: {
      kicker: 'OFFICIELLT TILLKÄNNAGIVANDE',
      title: 'NYTT NAMN & NY HEMSIDA',
      p1: 'Hansson Grönvall Advokatbyrå har bytt namn till ',
      strongName: 'Grönvall & Partners Advokatbyrå',
      p2: '.',
      closeBtn: 'Stäng meddelande',
      dontShow: 'Visa inte detta meddelande igen',
      lawFirm: 'ADVOKATBYRÅ',
    },
    en: {
      kicker: 'OFFICIAL ANNOUNCEMENT',
      title: 'NEW NAME & NEW WEBSITE',
      p1: 'Hansson Grönvall Law Firm has changed its name to ',
      strongName: 'Grönvall & Partners Law Firm',
      p2: '.',
      closeBtn: 'Close notice',
      dontShow: 'Do not show this message again',
      lawFirm: 'LAW FIRM',
    }
  };

  const t = content[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" id="name-change-modal-overlay">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-dark/75 backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-md bg-brand-cream border-4 border-double border-brand-gold/40 rounded-xl p-8 sm:p-10 shadow-2xl z-10 flex flex-col items-center text-center text-brand-dark overflow-hidden"
            id="name-change-modal-container"
          >
            {/* Elegant close button in the top corner */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-brand-medium/55 hover:text-brand-primary hover:bg-brand-light/60 transition-colors duration-150 cursor-pointer focus:outline-hidden"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Luxurious Logo - Exactly matching the Header logo */}
            <div className="mb-6 flex flex-col items-center select-none shrink-0 pointer-events-none">
              <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-brand-primary text-center whitespace-nowrap">
                GRÖNVALL <span className="elegant-ampersand text-[0.9em] text-brand-gold mx-0.5 inline-block align-baseline transform -translate-y-[0.05em]">&amp;</span> PARTNERS
              </span>
              <div className="h-[1px] bg-brand-gold/60 w-full mt-0.5 mb-0.5" />
              <span 
                className="text-[8px] uppercase tracking-[0.25em] text-brand-medium font-sans font-semibold text-center block w-full whitespace-nowrap"
                style={{ paddingLeft: '0.25em' }}
              >
                {t.lawFirm}
              </span>
            </div>

            {/* Header section */}
            <div className="space-y-2 mb-4 w-full">
              <h2 className="text-lg sm:text-xl font-cinzel font-medium text-brand-primary tracking-[0.1em] uppercase mt-1">
                {t.title}
              </h2>
              {/* Elegant divider with a small gold diamond */}
              <div className="w-24 h-[1px] bg-brand-gold/40 mx-auto my-3 relative after:content-['◆'] after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-1.5 after:text-[7px] after:text-brand-gold after:bg-brand-cream after:px-2" />
            </div>

            {/* Main content body - compact and elegant */}
            <div className="text-xs sm:text-sm text-brand-medium font-light leading-relaxed mb-6 max-w-xs sm:max-w-sm">
              <p className="text-center font-serif italic text-brand-primary/95">
                {t.p1}<strong className="font-semibold text-brand-gold not-italic">{t.strongName}</strong>{t.p2}
              </p>
            </div>

            {/* Footer with action & checkbox */}
            <div className="w-full pt-4 border-t border-brand-accent/20 flex flex-col items-center gap-4">
              {/* Action Button - Elegant outline style */}
              <button
                onClick={handleClose}
                className="w-full bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/30 hover:border-brand-gold px-6 py-2.5 rounded-lg text-[10px] font-cinzel font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer text-center"
              >
                {t.closeBtn}
              </button>

              {/* "Don't show again" checkbox */}
              <label className="flex items-center space-x-2 cursor-pointer text-[10px] text-brand-medium/70 select-none group">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="rounded-xs border-brand-accent/50 text-brand-primary focus:ring-brand-gold focus:ring-1 focus:ring-offset-0 bg-transparent h-3.5 w-3.5 accent-brand-primary cursor-pointer"
                />
                <span className="group-hover:text-brand-primary transition-colors duration-150">
                  {t.dontShow}
                </span>
              </label>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
