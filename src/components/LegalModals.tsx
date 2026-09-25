import React, { useState, useEffect } from 'react';
import { X, Shield, Settings, Lock } from 'lucide-react';

interface ModalProps {
  language: 'sv' | 'en';
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ language, isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isSv = language === 'sv';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-brand-cream border border-brand-gold/30 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        id="privacy-policy-modal"
      >
        {/* Header - Premium Brand Styled */}
        <div className="p-6 border-b border-brand-gold/20 flex items-center justify-between bg-brand-primary text-brand-cream relative shrink-0">
          {/* Subtle gold line accent under header */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/10 via-brand-gold to-brand-gold/10" />
          
          <div>
            <h2 className="font-cinzel text-base sm:text-lg font-semibold tracking-widest text-brand-cream uppercase">
              {isSv ? 'Integritetspolicy & GDPR' : 'Privacy Policy & GDPR'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-accent/80 hover:text-brand-gold p-2 rounded-full hover:bg-white/5 transition-all duration-200 cursor-pointer border border-transparent hover:border-brand-gold/20"
            aria-label={isSv ? 'Stäng' : 'Close'}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content - Continuous Running Text (Löpande text) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm sm:text-[15px] leading-relaxed text-brand-dark/95 font-sans font-light scrollbar-thin">
          {isSv ? (
            <>
              <p className="font-semibold text-brand-primary text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-brand-gold/20 pb-2">
                <Lock size={12} className="text-brand-gold-dark" />
                Senast uppdaterad: 5 juli 2026
              </p>

              <p>
                Grönvall &amp; Partners Advokatbyrå AB (”vi”, ”oss”, ”advokatbyrån”) värnar om din personliga integritet och strävar efter att alltid skydda dina personuppgifter på bästa sätt. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med dataskyddsförordningen (GDPR, EU 2016/679) samt de särskilda regler som följer av Advokatsamfundets vägledande regler om god advokatsed.
              </p>

              <p>
                Vi samlar i huvudsak in personuppgifter direkt från dig, men även från andra källor i samband med våra uppdrag. De kategorier av uppgifter vi behandlar omfattar kontaktuppgifter såsom namn, personnummer, adress, e-postadress och telefonnummer. I samband med ditt ärende samlar vi även in klientärendebaserad information, vilket inkluderar sakomständigheter, bakgrundsinformation, motpartsdetaljer och annan information som är absolut nödvändig för att kunna utreda, hantera och driva ditt rättsliga ärende. I vissa mål, till exempel brottmål eller vårdnadstvister, kan vi även behandla känsliga personuppgifter såsom hälsa, facktillhörighet eller lagöverträdelser om det krävs för att kunna fastställa, göra gällande eller försvara rättsliga anspråk. När du besöker vår webbplats samlas även tekniska data in via cookies, såsom din IP-adress och enhetsinformation.
              </p>

              <p>
                Ändamålet med vår behandling är i första hand att kunna utföra jävskontroller, penningtvättskontroller, upprätta avtal samt tillvarata dina intressen under ärendets gång, där den lagliga grunden är fullgörande av avtal, rättslig förpliktelse samt god advokatsed. Vi behandlar även personuppgifter för att besvara frågor via kontaktformulär, administrera mötesbokningar samt upprätthålla en god service, med intresseavvägning som laglig grund.
              </p>

              <p>
                Som advokatbyrå omfattas vi av en lagstadgad och strikt tystnadsplikt. Vi lämnar aldrig ut personuppgifter till utomstående, såvida det inte uttryckligen överenskommits med dig, är absolut nödvändigt för att tillvarata dina intressen i ärendet gentemot domstol eller motpart, eller om det föreligger en direkt lagstadgad skyldighet. Enligt Advokatsamfundets vägledande regler är vi skyldiga att bevara handlingar och information som samlats in i ett ärende under en period om minst tio år från det att ärendet slutfördes. Tekniska data och allmänna kontaktförfrågningar raderas däremot så snart ändamålet med kontakten har uppfyllts eller senast efter tolv månader.
              </p>

              <p>
                Enligt dataskyddsförordningen har du rätt till registerutdrag för att få information om de uppgifter vi behandlar om dig, rätt att begära rättelse av felaktiga uppgifter samt rätt till begränsning av behandlingen. Du har även rätt att begära radering, men vänligen notera att advokatbyråns lagstadgade skyldigheter att bevara klientakter under minst tio år har företräde framför rätten att bli glömd. Vi vidtar alla lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller manipulering, och all kommunikation sker via krypterad anslutning.
              </p>

              <p className="border-t border-brand-gold/15 pt-5 text-xs text-brand-dark/75">
                Vid frågor gällande vår personuppgiftsbehandling är du alltid välkommen att kontakta oss. Personuppgiftsansvarig är Grönvall &amp; Partners Advokatbyrå AB, med postadress Kungsholmstorg 1, 112 21 Stockholm, och e-postadress <a href="mailto:info@gronvallpartners.se" className="text-brand-gold hover:text-brand-primary font-semibold underline decoration-brand-gold transition-colors">info@gronvallpartners.se</a>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-brand-primary text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-brand-gold/20 pb-2">
                <Lock size={12} className="text-brand-gold-dark" />
                Last updated: July 5, 2026
              </p>

              <p>
                Grönvall &amp; Partners Advokatbyrå AB ("we", "us", "the law firm") protects your personal privacy and strives to always secure your personal data in the best way. This policy describes how we collect, use, and safeguard your personal data in accordance with the General Data Protection Regulation (GDPR, EU 2016/679) and the specific professional rules issued by the Swedish Bar Association.
              </p>

              <p>
                We collect personal data primarily directly from you, but also from other sources in connection with our assignments. The categories of data we process include contact details such as name, personal identity number, address, email address, and phone number. In connection with your matter, we also collect client-related case details, which include the facts of the case, background information, opposing party details, and other information strictly necessary to investigate, handle, and litigate your legal matter. In some matters, such as criminal cases or family custody disputes, we may also process sensitive personal data such as health, union membership, or criminal offenses if required to establish, exercise, or defend legal claims. When you visit our website, technical data is also collected via cookies, including your IP address and device specifications.
              </p>

              <p>
                The primary purpose of our data processing is to perform conflict checks and anti-money laundering controls, establish retainer contracts, and protect your interests during the representation, where the legal basis is the performance of a contract, compliance with legal obligations, and the rules of the Swedish Bar Association. We also process personal data to answer inquiries through contact forms, manage consultations, and maintain high standards of service, under the legal basis of legitimate interests.
              </p>

              <p>
                As an advocacy firm, we are bound by statutory legal professional privilege and secrecy. We never disclose personal data to third parties unless explicitly agreed upon with you, required to assert your interests in the matter before courts or to opposing counsel, or mandated directly by law. In accordance with the rules of the Swedish Bar Association, we are obliged to store files and information collected in a client matter for a period of at least ten years from the date of the matter's conclusion. Technical data and general contact inquiries are purged once the purpose of contact is fulfilled, or at the latest after twelve months.
              </p>

              <p>
                Under the General Data Protection Regulation, you have the right to access (register extract) to receive information about the data we process, the right to demand rectification of inaccurate data, and the right to demand restriction of processing. You also have the right to request erasure, but please note that our statutory duty to store case files for ten years takes precedence over the right to be forgotten. We deploy all appropriate technical and organizational safety measures to shield your personal records from unauthorized access, loss, or alteration, and all server communications are secured through encrypted channels.
              </p>

              <p className="border-t border-brand-gold/15 pt-5 text-xs text-brand-dark/75">
                If you have any questions regarding our processing of personal data, you are always welcome to contact us. The data controller is Grönvall &amp; Partners Advokatbyrå AB, with postal address Kungsholmstorg 1, SE-112 21 Stockholm, and email address <a href="mailto:info@gronvallpartners.se" className="text-brand-gold hover:text-brand-primary font-semibold underline decoration-brand-gold transition-colors">info@gronvallpartners.se</a>.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-brand-gold/15 flex justify-end bg-brand-cream rounded-b-2xl shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-brand-primary text-brand-cream hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-transparent rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0"
          >
            {isSv ? 'Jag förstår' : 'I understand'}
          </button>
        </div>
      </div>
    </div>
  );
}

interface CookieModalProps extends ModalProps {
  onConsentChange: (consent: { necessary: boolean; analytics: boolean }) => void;
}

export function CookieSettingsModal({ language, isOpen, onClose, onConsentChange }: CookieModalProps) {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const saved = localStorage.getItem('cookie-consent-settings');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setAnalyticsConsent(!!parsed.analytics);
        } catch (e) {
          // ignore
        }
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isSv = language === 'sv';

  const handleSave = () => {
    const settings = { necessary: true, analytics: analyticsConsent };
    localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
    localStorage.setItem('cookie-consent-given', 'true');
    onConsentChange(settings);
    onClose();
  };

  const handleAcceptAll = () => {
    const settings = { necessary: true, analytics: true };
    localStorage.setItem('cookie-consent-settings', JSON.stringify(settings));
    localStorage.setItem('cookie-consent-given', 'true');
    onConsentChange(settings);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-brand-cream border border-brand-gold/30 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        id="cookie-settings-modal"
      >
        {/* Header - Premium Brand Styled */}
        <div className="p-6 border-b border-brand-gold/20 flex items-center justify-between bg-brand-primary text-brand-cream relative shrink-0">
          {/* Subtle gold line accent under header */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-gold/10 via-brand-gold to-brand-gold/10" />

          <div>
            <h2 className="font-cinzel text-base sm:text-lg font-semibold tracking-widest text-brand-cream uppercase">
              {isSv ? 'Cookie-inställningar' : 'Cookie Settings'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-accent/80 hover:text-brand-gold p-2 rounded-full hover:bg-white/5 transition-all duration-200 cursor-pointer border border-transparent hover:border-brand-gold/20"
            aria-label={isSv ? 'Stäng' : 'Close'}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-brand-dark/90 font-light scrollbar-thin">
          <p className="text-brand-dark/85 font-sans leading-relaxed">
            {isSv 
              ? 'Vi använder cookies för att optimera din upplevelse på vår webbplats och för att analysera vår besöksstatistik. Genom att hantera dina inställningar nedan kan du välja vilka cookies du vill tillåta. Vänligen notera att vissa grundläggande webbplatsfunktioner kräver absolut nödvändiga cookies för att fungera.'
              : 'We use cookies to optimize your experience on our website and to analyze visitor statistics. By configuring your preferences below, you can choose which cookies to allow. Please note that certain essential website features require strictly necessary cookies to operate.'}
          </p>

          <div className="space-y-4">
            {/* Category 1: Necessary */}
            <div className="flex items-start justify-between p-4 bg-white/70 border border-brand-gold/15 rounded-xl shadow-xs hover:bg-white/90 transition-all duration-300">
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-primary text-xs uppercase tracking-widest">
                    {isSv ? 'Nödvändiga Cookies' : 'Strictly Necessary Cookies'}
                  </span>
                  <span className="text-[9px] bg-brand-primary/10 text-brand-primary/80 border border-brand-primary/15 px-2 py-0.5 rounded-full uppercase font-medium tracking-wider scale-[0.95]">
                    {isSv ? 'Alltid aktiva' : 'Always Active'}
                  </span>
                </div>
                <p className="text-xs text-brand-dark/70 font-light font-sans">
                  {isSv 
                    ? 'Dese cookies krävs för att möjliggöra grundläggande funktioner såsom säker sidnavigering, jävskontrolls-inställningar, språkval samt lagring av dina cookie-inställningar. Webbplatsen kan inte fungera korrekt utan dessa.'
                    : 'These cookies are required to enable basic features such as secure page navigation, conflict-of-interest configurations, language preferences, and storing your cookie settings. The website cannot function properly without these.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <div className="w-10 h-6 bg-brand-gold/25 border border-brand-gold/40 rounded-full flex items-center px-1 justify-end opacity-85">
                  <div className="w-4 h-4 bg-brand-primary rounded-full shadow-xs" />
                </div>
              </div>
            </div>

            {/* Category 2: Analytics */}
            <div 
              className={`flex items-start justify-between p-4 border rounded-xl hover:shadow-xs transition-all duration-300 cursor-pointer select-none ${
                analyticsConsent 
                  ? 'bg-brand-gold/5 border-brand-gold/40' 
                  : 'bg-white/70 border-brand-gold/15 hover:border-brand-gold/30 hover:bg-white/95'
              }`}
              onClick={() => setAnalyticsConsent(!analyticsConsent)}
            >
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-primary text-xs uppercase tracking-widest">
                    {isSv ? 'Analys & Prestanda' : 'Analytics & Performance'}
                  </span>
                  <span className="text-[9px] bg-brand-gold/20 text-brand-primary border border-brand-gold/20 px-2 py-0.5 rounded-full uppercase font-medium tracking-wider scale-[0.95]">
                    {isSv ? 'Valfri' : 'Optional'}
                  </span>
                </div>
                <p className="text-xs text-brand-dark/70 font-light font-sans">
                  {isSv 
                    ? 'Används för att anonymt samla in besöksstatistik och mäta sidprestanda (t.ex. vilka undersidor som besöks mest och hur lång tid användare spenderar). Detta hjälper oss att förbättra informationen för framtida besökare.'
                    : 'Used to anonymously collect visitor statistics and measure page performance (e.g., which subpages are visited most and how much time users spend). This helps us improve website information and usability for future visitors.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <button
                  type="button"
                  className={`w-10 h-6 rounded-full p-[3px] transition-colors duration-300 focus:outline-hidden border ${
                    analyticsConsent 
                      ? 'bg-brand-primary border-brand-primary' 
                      : 'bg-brand-accent/20 border-brand-gold/20'
                  }`}
                  aria-pressed={analyticsConsent}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
                      analyticsConsent ? 'translate-x-4 bg-brand-gold' : 'translate-x-0 bg-brand-medium'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Category 3: Marketing */}
            <div className="flex items-start justify-between p-4 bg-brand-dark/5 border border-dashed border-brand-gold/20 rounded-xl opacity-75">
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-primary/50 text-xs uppercase tracking-widest">
                    {isSv ? 'Marknadsföring & Profilering' : 'Marketing & Profiling'}
                  </span>
                  <span className="text-[9px] bg-brand-dark/10 text-brand-dark/50 px-2 py-0.5 rounded-full uppercase font-medium tracking-wider scale-[0.95]">
                    {isSv ? 'Används ej' : 'Not used'}
                  </span>
                </div>
                <p className="text-xs text-brand-accent/70 font-light font-sans">
                  {isSv 
                    ? 'Vi samlar inte in eller delar data för marknadsföringsändamål och har inga tredjepartsspårare för annonser på vår webbplats. Din sekretess är vår högsta prioritet.'
                    : 'We do not collect or share data for marketing or advertising purposes, and operate no third-party tracking pixels on our website. Your absolute privacy is our highest priority.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <span className="text-[11px] text-brand-primary/50 italic font-medium tracking-wide">
                  {isSv ? 'Ej tillämplig' : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-brand-gold/15 flex flex-col sm:flex-row gap-4 justify-between bg-brand-cream rounded-b-2xl items-center shrink-0">
          <button 
            onClick={onClose}
            className="text-xs text-brand-primary hover:text-brand-gold underline decoration-brand-gold/50 hover:decoration-brand-gold tracking-wide transition-all duration-200 cursor-pointer text-center sm:text-left font-semibold py-1 px-3 rounded-md hover:bg-brand-primary/5"
          >
            {isSv ? 'Avbryt' : 'Cancel'}
          </button>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button 
              onClick={handleSave}
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-bold bg-brand-cream border border-brand-primary/40 text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary transition-all duration-300 rounded-lg cursor-pointer hover:shadow-xs w-full sm:w-auto text-center"
            >
              {isSv ? 'Spara valda' : 'Save selected'}
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-xs uppercase tracking-widest font-bold bg-brand-primary text-brand-cream hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 border border-transparent rounded-lg cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0 w-full sm:w-auto text-center"
            >
              {isSv ? 'Godkänn alla' : 'Accept all'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
