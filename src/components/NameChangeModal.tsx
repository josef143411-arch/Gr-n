import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X, Sparkles } from 'lucide-react';

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
      title: 'Vi har bytt namn',
      subtitle: 'Hansson Grönvall blir Grönvall & Partners',
      p1: 'Hansson Grönvall Advokatbyrå har bytt namn till ',
      strongName: 'Grönvall & Partners Advokatbyrå',
      p2: '.',
      p3: 'Varmt välkommen till vår nya digitala hemvist.',
      closeBtn: 'Stäng och fortsätt',
      dontShow: 'Visa inte detta meddelande igen',
    },
    en: {
      title: 'We have changed our name',
      subtitle: 'Hansson Grönvall is now Grönvall & Partners',
      p1: 'Hansson Grönvall Law Firm has changed its name to ',
      strongName: 'Grönvall & Partners Law Firm',
      p2: '.',
      p3: 'A warm welcome to our new digital home.',
      closeBtn: 'Close and continue',
      dontShow: 'Do not show this message again',
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
            className="absolute inset-0 bg-brand-dark/65 backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-brand-cream border border-brand-gold/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 flex flex-col space-y-6 overflow-hidden text-brand-dark"
            id="name-change-modal-container"
          >
            {/* Elegant visual highlight on top */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-gold to-brand-primary" />

            {/* Header section with Close Button */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-brand-primary/10 text-brand-gold rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold block">
                    {language === 'sv' ? 'Nyhet & Tillkännagivande' : 'News & Announcement'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-normal text-brand-primary tracking-tight mt-0.5">
                    {t.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full text-brand-medium/60 hover:text-brand-primary hover:bg-brand-light/60 transition-colors duration-150 cursor-pointer focus:outline-hidden"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Main content body */}
            <div className="space-y-4 text-sm sm:text-base text-brand-medium font-light leading-relaxed">
              <p className="text-justify">
                {t.p1}<strong className="font-semibold text-brand-primary">{t.strongName}</strong>{t.p2}
              </p>
              <p className="font-serif italic text-brand-gold text-xs sm:text-sm pt-1">
                {t.p3}
              </p>
            </div>

            {/* Footer with action & checkbox */}
            <div className="pt-4 border-t border-brand-accent/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* "Don't show again" checkbox */}
              <label className="flex items-center space-x-2.5 cursor-pointer text-xs text-brand-medium/80 select-none group">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="rounded-xs border-brand-accent/50 text-brand-primary focus:ring-brand-gold focus:ring-1 focus:ring-offset-0 bg-transparent h-4 w-4 accent-brand-primary cursor-pointer"
                />
                <span className="group-hover:text-brand-primary transition-colors duration-150">
                  {t.dontShow}
                </span>
              </label>

              {/* Action Button */}
              <button
                onClick={handleClose}
                className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/25 hover:border-brand-gold px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap text-center"
              >
                {t.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
