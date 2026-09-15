import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Instagram, Facebook, Linkedin } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
  language: 'sv' | 'en';
}

const FOOTER_TRANSLATIONS = {
  sv: {
    tagline: 'Handplockade advokater. Skarp juridisk kompetens. Personligt engagemang och fullständig diskretion – alltid med dina intressen i fokus.',
    quickLinks: 'Snabblänkar',
    contactDetails: 'Kontaktuppgifter',
    companyInfo: 'Bolagsinformation',
    openingHours: 'Öppettider',
    weekdays: 'Vardagar: 08:15 – 16:45',
    noLunchClose: 'Ingen lunchstängt',
    emergencyNotice: 'Jourtjänst gällande akuta brottmål är öppen dygnet runt. Samtliga advokater nås direkt via sina personliga nummer.',
    rightsReserved: 'Alla rättigheter förbehållna.',
    consumerInfo: 'Konsumentinformation: Är du missnöjd med en tjänst som advokatbyrån tillhandahållit kan du under vissa förutsättningar vända dig till Advokatsamfundets konsumenttvistnämnd för att få saken prövad. Besök <a href="https://www.advokatsamfundet.se/konsumenttvistnamnden" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">konsumenttvistnamnden.se</a> för mer information.',
    firmName: 'Grönvall & Partners Advokatbyrå',
  },
  en: {
    tagline: 'Handpicked lawyers. Sharp legal competence. Personal commitment and complete discretion – always with your interests in focus.',
    quickLinks: 'Quick Links',
    contactDetails: 'Contact Details',
    companyInfo: 'Company Information',
    openingHours: 'Opening Hours',
    weekdays: 'Weekdays: 08:15 AM – 04:45 PM',
    noLunchClose: 'No lunch closing',
    emergencyNotice: 'Emergency service for urgent criminal matters is open 24/7. All attorneys can be reached directly via their personal numbers.',
    rightsReserved: 'All rights reserved.',
    consumerInfo: 'Consumer Information: If you are dissatisfied with a service provided by the law firm, you may under certain conditions turn to the Swedish Bar Association\'s Consumer Disputes Board to have the matter reviewed. Visit <a href="https://www.advokatsamfundet.se/konsumenttvistnamnden" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">advokatsamfundet.se</a> for more information.',
    firmName: 'Grönvall & Partners Law Firm',
  }
};

export default function Footer({ setActiveTab, onOpenPrivacy, onOpenCookies, language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const t = TRANSLATIONS[language].nav;
  const tc = TRANSLATIONS[language].common;
  const ft = FOOTER_TRANSLATIONS[language];

  const handleLinkClick = (tabId: string) => {
    if (tabId === 'financing') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('financing-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-brand-cream/90 border-t border-brand-gold/20" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Values */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-center cursor-pointer group select-none w-fit" onClick={() => handleLinkClick('home')}>
              <span className="font-cinzel text-sm sm:text-base lg:text-lg font-semibold tracking-widest text-brand-cream group-hover:text-brand-gold transition-colors duration-300 text-center whitespace-nowrap">
                GRÖNVALL <span className="elegant-ampersand text-[0.95em] text-brand-gold mx-1 inline-block align-baseline transform -translate-y-[0.05em] select-none">&amp;</span> PARTNERS
              </span>
              <div className="h-[1.5px] bg-brand-gold/60 w-full mt-1 mb-0.5 group-hover:bg-brand-gold transition-colors duration-300" />
              <span 
                className="text-[10px] uppercase tracking-[0.35em] text-brand-accent/60 font-sans font-semibold text-center block w-full whitespace-nowrap"
                style={{ paddingLeft: '0.35em' }}
              >
                {t.lawFirm}
              </span>
            </div>
            <p className="text-sm text-brand-accent/70 leading-relaxed font-light">
              {ft.tagline}
            </p>
            {/* Social media links */}
            <div className="flex items-center space-x-3 pt-2" id="social-links-footer">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent/60 hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Följ oss på Instagram"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent/60 hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Följ oss på Facebook"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent/60 hover:text-brand-gold hover:border-brand-gold hover:bg-white/5 transition-all duration-300"
                aria-label="Följ oss på LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-cinzel text-brand-gold text-sm font-semibold tracking-wider uppercase mb-5">
              {ft.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              {[
                { id: 'home', label: t.home },
                { id: 'about', label: t.about },
                { id: 'staff', label: t.staff },
                { id: 'financing', label: language === 'sv' ? 'Finansiering & Rättshjälp' : 'Financing & Legal Aid' },
                { id: 'articles', label: t.articles },
                { id: 'retrials', label: t.retrials },
                { id: 'careers', label: language === 'sv' ? 'Karriär / Sök jobb' : 'Careers / Jobs' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-brand-accent/70 hover:text-brand-gold transition-colors duration-200 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-cinzel text-brand-gold text-sm font-semibold tracking-wider uppercase mb-5">
              {ft.contactDetails}
            </h3>
            <ul className="space-y-4 text-sm font-light text-brand-accent/80">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {ft.firmName}<br />
                  Kungsholmstorg 1<br />
                  112 21 Stockholm
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <a href="tel:08206020" className="hover:text-brand-gold transition-colors duration-200">
                  {tc.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:info@hgaadvokat.se" className="hover:text-brand-gold transition-colors duration-200 break-all">
                  {tc.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-brand-accent/10">
              <p className="text-[11px] uppercase tracking-wider text-brand-gold font-medium mb-2.5">{ft.companyInfo}</p>
              <ul className="space-y-2 text-xs font-light text-brand-accent/70">
                <li className="flex justify-between sm:justify-start sm:space-x-2">
                  <span className="text-brand-accent/50">{language === 'sv' ? 'Org.nr:' : 'Org. No:'}</span>
                  <span className="font-mono">559095-1819</span>
                </li>
                <li className="flex justify-between sm:justify-start sm:space-x-2">
                  <span className="text-brand-accent/50">{language === 'sv' ? 'Bankgiro (arvoden):' : 'Bankgiro (fees):'}</span>
                  <span className="font-mono">5434-1284</span>
                </li>
                <li className="flex justify-between sm:justify-start sm:space-x-2">
                  <span className="text-brand-accent/50">{language === 'sv' ? 'Klientmedel:' : 'Client funds:'}</span>
                  <span className="font-mono">5557-7720</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Opening Hours & Notice */}
          <div>
            <h3 className="font-cinzel text-brand-gold text-sm font-semibold tracking-wider uppercase mb-5">
              {ft.openingHours}
            </h3>
            <ul className="space-y-3 text-sm font-light text-brand-accent/80 mb-6">
              <li className="flex items-start space-x-3">
                <Clock size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-brand-cream">{ft.weekdays}</p>
                  <p className="text-xs text-brand-accent/60 mt-0.5">{ft.noLunchClose}</p>
                </div>
              </li>
              <li className="text-xs text-brand-accent/60 leading-relaxed italic border-t border-brand-accent/10 pt-3">
                {ft.emergencyNotice}
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory & Copyright Bar */}
        <div className="border-t border-brand-accent/10 mt-12 pt-8 flex flex-col space-y-4 text-xs text-brand-accent/50 font-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="space-y-1 text-center md:text-left">
              <div>
                &copy; {currentYear} Grönvall &amp; Partners Advokatbyrå AB. {language === 'sv' ? 'Alla rättigheter förbehållna.' : 'All rights reserved.'}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-end text-xs font-light">
              <button 
                onClick={onOpenPrivacy}
                className="text-brand-accent/50 hover:text-brand-gold transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 font-light"
              >
                GDPR
              </button>
              <span className="text-brand-accent/20">|</span>
              <button 
                onClick={onOpenCookies}
                className="text-brand-accent/50 hover:text-brand-gold transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 font-light"
              >
                Cookies
              </button>
            </div>
          </div>
          
          <div 
            className="text-center md:text-left text-[11px] leading-relaxed border-t border-brand-accent/5 pt-4 text-brand-accent/40"
            dangerouslySetInnerHTML={{ __html: ft.consumerInfo }}
          />
        </div>
      </div>
    </footer>
  );
}
