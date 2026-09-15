import React, { useState, useEffect } from 'react';
import { Cookie, Settings } from 'lucide-react';

interface CookieConsentProps {
  language: 'sv' | 'en';
  onOpenSettings: () => void;
  consentState: { necessary: boolean; analytics: boolean } | null;
  onConsentChange: (consent: { necessary: boolean; analytics: boolean }) => void;
}

const CONSENT_TRANSLATIONS = {
  sv: {
    title: 'Information om cookies & GDPR',
    desc: 'Vi använder cookies för att webbplatsen ska fungera optimalt samt för anonym besöksstatistik. Genom att klicka ”Godkänn alla” samtycker du till vår cookiepolicy i enlighet med GDPR. Du kan även anpassa dina val eller neka valfria cookies.',
    btnDeny: 'Neka',
    btnCustomize: 'Anpassa',
    btnAccept: 'Godkänn alla'
  },
  en: {
    title: 'Information on Cookies & GDPR',
    desc: 'We use cookies to optimize your experience and analyze anonymous visitor statistics. By clicking "Accept All", you consent to our use of cookies in accordance with GDPR. You can also customize your choices or reject optional cookies.',
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
      }, 1000);
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
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-brand-dark border border-brand-gold/30 text-brand-cream p-5 rounded-xs shadow-2xl animate-in slide-in-from-bottom-5 duration-300"
      id="cookie-consent-banner"
    >
      <div className="flex items-start space-x-3">
        <Cookie className="text-brand-gold shrink-0 mt-0.5 animate-pulse" size={22} />
        <div className="space-y-2">
          <h4 className="font-cinzel text-xs font-semibold tracking-wider uppercase text-brand-gold">
            {t.title}
          </h4>
          <p className="text-xs text-brand-accent/80 font-light leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-brand-accent/15">
        <button
          onClick={handleDenyAll}
          className="text-[10px] uppercase tracking-widest font-medium py-2 px-1 text-brand-accent/70 hover:text-brand-cream hover:bg-white/5 border border-brand-accent/20 hover:border-brand-accent/40 rounded-xs transition-colors cursor-pointer text-center"
        >
          {t.btnDeny}
        </button>
        <button
          onClick={onOpenSettings}
          className="text-[10px] uppercase tracking-widest font-medium py-2 px-1 text-brand-accent/70 hover:text-brand-cream hover:bg-white/5 border border-brand-accent/20 hover:border-brand-accent/40 rounded-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-1"
        >
          <Settings size={10} />
          {t.btnCustomize}
        </button>
        <button
          onClick={handleAcceptAll}
          className="text-[10px] uppercase tracking-widest font-semibold py-2 px-1 bg-brand-gold text-brand-dark hover:bg-brand-cream hover:text-brand-dark transition-colors duration-200 rounded-xs cursor-pointer text-center"
        >
          {t.btnAccept}
        </button>
      </div>
    </div>
  );
}
