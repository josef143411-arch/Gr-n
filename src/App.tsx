import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import StaffSection from './components/StaffSection';
import ArticlesSection from './components/ArticlesSection';
import Retrials from './components/Retrials';
import CareersSection from './components/CareersSection';
import BookingSection from './components/BookingSection';
import NotariusPublicus from './components/NotariusPublicus';
import { ARTICLES } from './data';
import { Article } from './types';
import CookieConsent from './components/CookieConsent';
import { PrivacyPolicyModal, CookieSettingsModal } from './components/LegalModals';
import NameChangeModal from './components/NameChangeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [articles, setArticles] = useState<Article[]>(ARTICLES);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [consentState, setConsentState] = useState<{ necessary: boolean; analytics: boolean } | null>(null);

  const [language, setLanguage] = useState<'sv' | 'en'>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved === 'en' || saved === 'sv') ? saved : 'sv';
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent-settings');
    if (saved) {
      try {
        setConsentState(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleLanguageChange = (lang: 'sv' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('app-language', lang);
  };

  const handleAddArticle = (newArticle: Article) => {
    setArticles([newArticle, ...articles]);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            setActiveTab={setActiveTab}
            setSelectedArticleId={setSelectedArticleId}
            language={language}
          />
        );
      case 'about':
        return <About language={language} />;
      case 'staff':
        return <StaffSection language={language} />;
      case 'articles':
        return (
          <ArticlesSection
            articles={articles}
            onAddArticle={handleAddArticle}
            selectedArticleId={selectedArticleId}
            setSelectedArticleId={setSelectedArticleId}
            language={language}
          />
        );
      case 'retrials':
        return <Retrials language={language} />;
      case 'notarius':
        return <NotariusPublicus language={language} />;
      case 'careers':
        return <CareersSection language={language} />;
      case 'booking':
        return <BookingSection language={language} />;
      case 'contact':
        return <ContactSectionBridge language={language} />;
      default:
        return (
          <Home
            setActiveTab={setActiveTab}
            setSelectedArticleId={setSelectedArticleId}
            language={language}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-gold/30 selection:text-brand-primary" id="app-root">
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language}
        setLanguage={handleLanguageChange}
      />

      {/* Main Content Area */}
      <main className="grow" id="main-content">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenPrivacy={() => setShowPrivacyModal(true)}
        onOpenCookies={() => setShowCookieModal(true)}
        language={language}
      />

      {/* GDPR & Cookie Consent Overlay Banner */}
      <CookieConsent 
        onOpenSettings={() => setShowCookieModal(true)}
        consentState={consentState}
        onConsentChange={setConsentState}
        language={language}
      />

      {/* Legal Modals */}
      <PrivacyPolicyModal 
        isOpen={showPrivacyModal} 
        onClose={() => setShowPrivacyModal(false)} 
        language={language}
      />

      <CookieSettingsModal 
        isOpen={showCookieModal} 
        onClose={() => setShowCookieModal(false)} 
        onConsentChange={setConsentState}
        language={language}
      />

      {/* Name change announcement popup */}
      <NameChangeModal language={language} />
    </div>
  );
}

// Simple bridge to avoid import issues or missing imports for Contact
import ContactSection from './components/ContactSection';
interface BridgeProps {
  language: 'sv' | 'en';
}
function ContactSectionBridge({ language }: BridgeProps) {
  return <ContactSection language={language} />;
}
