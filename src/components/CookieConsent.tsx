import React, { useState, useEffect } from 'react';
import { Cookie, Settings, ShieldAlert } from 'lucide-react';

interface CookieConsentProps {
  language: 'sv' | 'en';
  onOpenSettings: () => void;
  consentState: { necessary: boolean; analytics: boolean } | null;
  onConsentChange: (consent: { necessary: boolean; analytics: boolean }) => void;
}

const CONSENT_TRANSLATIONS = {
  sv: {
    title: 'Cookies & Integritetsskydd',
    desc: 'Vi använder cookies för att optimera webbplatsens funktioner samt för anonym besöksstatistik. Genom att samtycka godkänner du vår cookiepolicy i enlighet med GDPR. Du kan anpassa dina inställningar eller neka valfria cookies.',
    btnDeny: 'Neka',
    btnCustomize: 'Anpassa val',
    btnAccept: 'Godkänn alla'
  },
  en: {
    title: 'Cookies & Privacy Protection',
    desc: 'We use cookies to optimize website features and analyze anonymous visitor statistics. By giving consent, you agree to our cookie policy in accordance with GDPR. You can customize your settings or reject optional cookies.',
    btnDeny: 'Decline',
    btnCustomize: 'Customize',
    btnAccept: 'Accept All'
  }
};

export default function CookieConsent({ language, onOpenSettings, consentState, onConsentChange }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isConsentGiven = localStorage.getItem('cookie-consent-given');
    if (!isConsentGiven) {
      // Show with a slight delay for elegant entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [consentState]);

  if (!isVisible) return null;

  const t = CONSENT_TRANSLATIONS[language];

  const handleAcceptAll = () => {
    const settings = { necessary: true, analytics: true };
    localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
    localStorage.setItem('cookie-consent-given', 'true');
    onConsentChange(settings);
    setIsVisible(false);
  };

  const handleDenyAll = () => {
    const settings = { necessary: true, analytics: false };
    localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
    localStorage.setItem('cookie-consent-given', 'true');
    onConsentChange(settings);
    setIsVisible(false);
  };

  return (
    <div 
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-brand-dark/95 backdrop-blur-md border border-brand-gold/30 text-brand-cream p-6 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-6 duration-500 relative overflow-hidden"
      id="cookie-consent-banner"
    >
      {/* Elegantly styled absolute glass element */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl pointer-events-none" />

      <div className="flex items-start space-x-4">
        <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl shrink-0 shadow-inner border border-brand-gold/25 relative">
          <Cookie className="animate-spin-slow" size={20} style={{ animationDuration: '20s' }} />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
          </span>
        </div>
        <div className="space-y-1.5">
          <h4 className="font-cinzel text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold flex items-center gap-1.5">
            {t.title}
          </h4>
          <p className="text-[11px] sm:text-xs text-brand-accent/90 font-light font-sans leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-brand-gold/15">
        <button
          onClick={handleDenyAll}
          className="text-[10px] uppercase tracking-widest font-semibold py-2.5 px-2 text-brand-accent/80 hover:text-brand-cream bg-white/5 hover:bg-white/10 border border-brand-gold/15 hover:border-brand-gold/30 rounded-lg transition-all duration-300 cursor-pointer text-center"
        >
          {t.btnDeny}
        </button>
        <button
          onClick={onOpenSettings}
          className="text-[10px] uppercase tracking-widest font-semibold py-2.5 px-2 text-brand-accent/80 hover:text-brand-cream bg-white/5 hover:bg-white/10 border border-brand-gold/15 hover:border-brand-gold/30 rounded-lg transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-1.5"
        >
          <Settings size={11} className="opacity-80" />
          {t.btnCustomize}
        </button>
        <button
          onClick={handleAcceptAll}
          className="text-[10px] uppercase tracking-widest font-bold py-2.5 px-2 bg-brand-gold text-brand-dark hover:bg-brand-cream hover:text-brand-dark transition-all duration-300 rounded-lg cursor-pointer text-center shadow-md hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0"
        >
          {t.btnAccept}
        </button>
      </div>
    </div>
  );
}
