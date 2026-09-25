import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: 'sv' | 'en';
  setLanguage: (lang: 'sv' | 'en') => void;
}

export default function Header({ activeTab, setActiveTab, language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language].nav;
  const tc = TRANSLATIONS[language].common;

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'staff', label: t.staff },
    { id: 'articles', label: t.articles },
    { id: 'retrials', label: t.retrials },
    { id: 'notarius', label: t.notarius },
    { id: 'careers', label: t.careers },
    { id: 'contact', label: t.contact },
  ];

  const visibleNavItems = [
    { id: 'about', label: t.about },
    { id: 'staff', label: t.staff },
    { id: 'contact', label: t.contact },
  ];

  const menuNavItems = [
    { id: 'home', label: t.home },
    { id: 'articles', label: t.articles },
    { id: 'retrials', label: t.retrials },
    { id: 'notarius', label: t.notarius },
    { id: 'careers', label: t.careers },
  ];

  const isMenuTabActive = menuNavItems.some(item => item.id === activeTab);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-brand-primary/95 backdrop-blur-md border-b border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center gap-4">
          {/* Elegant Logo adapted for Green Background */}
          <div 
            className="flex flex-col items-center cursor-pointer group select-none shrink-0"
            onClick={() => handleNavClick('home')}
            id="header-logo"
          >
            <span className="font-cinzel text-xs sm:text-xs md:text-sm lg:text-base font-semibold tracking-wider text-brand-cream group-hover:text-brand-gold transition-colors duration-300 text-center whitespace-nowrap">
              GRÖNVALL <span className="elegant-ampersand text-[0.9em] text-brand-gold mx-0.5 inline-block align-baseline transform -translate-y-[0.05em] select-none">&amp;</span> PARTNERS
            </span>
            <div className="h-[1px] bg-brand-gold/60 w-full mt-0.5 mb-0.5 group-hover:bg-brand-gold transition-colors duration-300" />
            <span 
              className="text-[8px] uppercase tracking-[0.25em] text-brand-accent font-sans font-semibold text-center block w-full whitespace-nowrap"
              style={{ paddingLeft: '0.25em' }}
            >
              {t.lawFirm}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center lg:space-x-1 xl:space-x-2 ml-auto lg:mr-6 xl:mr-8" id="desktop-nav">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`lg:px-2.5 xl:px-4 lg:py-1 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 relative whitespace-nowrap cursor-pointer ${
                  activeTab === item.id
                    ? 'text-brand-gold font-semibold'
                    : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-brand-gold rounded-full" />
                )}
              </button>
            ))}

            {/* Elegant Dropdown for Rest of Items */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                id="nav-dropdown-trigger"
                className={`lg:px-2.5 xl:px-4 lg:py-1 text-xs xl:text-sm font-medium tracking-wide transition-all duration-200 relative whitespace-nowrap flex items-center gap-1 cursor-pointer select-none ${
                  isMenuTabActive
                    ? 'text-brand-gold font-semibold'
                    : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
              >
                <span>{language === 'sv' ? 'Meny' : 'Menu'}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${menuOpen ? 'rotate-180 text-brand-gold' : 'text-brand-cream/60'}`} />
                {isMenuTabActive && (
                  <span className="absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-brand-gold rounded-full" />
                )}
              </button>

              {menuOpen && (
                <div 
                  className="absolute right-0 mt-3 w-56 bg-brand-primary border border-brand-gold/30 rounded-sm shadow-xl z-50 py-1.5 animate-fade-in"
                  id="header-nav-dropdown"
                >
                  <div className="py-1">
                    {menuNavItems.map((item) => (
                      <button
                        key={item.id}
                        id={`dropdown-nav-${item.id}`}
                        onClick={() => {
                          handleNavClick(item.id);
                          setMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-xs xl:text-sm font-medium transition-all duration-150 cursor-pointer ${
                          activeTab === item.id
                            ? 'bg-brand-cream/10 text-brand-gold font-semibold border-l-2 border-brand-gold'
                            : 'text-brand-cream/90 hover:bg-brand-cream/5 hover:text-brand-gold'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Elegant Language Switcher for Desktop */}
          <div className="hidden lg:flex items-center select-none bg-brand-dark/25 p-0.5 rounded-md border border-brand-gold/25 text-[11px] font-sans font-semibold shrink-0 ml-1">
            <button
              onClick={() => setLanguage('sv')}
              className={`px-2 py-0.5 rounded-xs transition-all duration-200 tracking-wider cursor-pointer ${
                language === 'sv' 
                  ? 'bg-brand-gold text-brand-dark font-bold' 
                  : 'text-brand-cream/80 hover:text-brand-gold'
              }`}
            >
              SV
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-xs transition-all duration-200 tracking-wider cursor-pointer ${
                language === 'en' 
                  ? 'bg-brand-gold text-brand-dark font-bold' 
                  : 'text-brand-cream/80 hover:text-brand-gold'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu toggle & Language switcher */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Elegant Language Switcher for Mobile */}
            <div className="flex items-center select-none bg-brand-dark/25 p-0.5 rounded-md border border-brand-gold/25 text-[10px] font-sans font-semibold shrink-0">
              <button
                onClick={() => setLanguage('sv')}
                className={`px-2.5 py-0.5 rounded-xs transition-all duration-200 tracking-wider cursor-pointer ${
                  language === 'sv' 
                    ? 'bg-brand-gold text-brand-dark font-bold' 
                    : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
              >
                SV
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-xs transition-all duration-200 tracking-wider cursor-pointer ${
                  language === 'en' 
                    ? 'bg-brand-gold text-brand-dark font-bold' 
                    : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-cream hover:text-brand-gold focus:outline-hidden"
              id="mobile-menu-toggle"
              aria-label="Meny"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-gold/20 bg-brand-primary divide-y divide-brand-cream/10 shadow-lg animate-fade-in" id="mobile-nav-drawer">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-sm transition-all duration-150 ${
                    activeTab === item.id
                      ? 'bg-brand-cream/10 text-brand-gold font-semibold border-l-4 border-brand-gold'
                      : 'text-brand-cream/90 hover:bg-brand-cream/5 hover:text-brand-gold'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
