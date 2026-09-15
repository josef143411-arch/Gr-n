import React, { useState, useEffect } from 'react';
import { X, Shield, Settings } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      <div 
        className="relative bg-brand-cream border border-brand-gold/30 rounded-xs w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="privacy-policy-modal"
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-gold/15 flex items-center justify-between bg-brand-dark text-brand-cream rounded-t-xs">
          <div className="flex items-center space-x-3">
            <Shield className="text-brand-gold shrink-0" size={24} />
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-semibold tracking-wider">
                {isSv ? 'Integritetspolicy & GDPR' : 'Privacy Policy & GDPR'}
              </h2>
              <p className="text-[10px] text-brand-accent/60 uppercase tracking-widest mt-0.5">
                {isSv ? 'Grönvall & Partners Advokatbyrå' : 'Grönvall & Partners Law Firm'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-accent/70 hover:text-brand-gold p-1.5 rounded-full hover:bg-brand-cream/5 transition-colors cursor-pointer"
            aria-label={isSv ? 'Stäng' : 'Close'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-brand-dark/95 font-light">
          {isSv ? (
            <>
              <div>
                <p className="font-medium text-brand-primary mb-2">Senast uppdaterad: 5 juli 2026</p>
                <p>
                  Grönvall & Partners Advokatbyrå AB (”vi”, ”oss”, ”advokatbyrån”) värnar om din personliga integritet och strävar efter att alltid skydda dina personuppgifter på bästa sätt. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med dataskyddsförordningen (GDPR, EU 2016/679) samt de särskilda regler som följer av Advokatsamfundets vägledande regler om god advokatsed.
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  1. Vilka uppgifter vi samlar in
                </h3>
                <p className="mb-2">
                  Vi samlar i huvudsak in personuppgifter direkt från dig, men även från andra källor i samband med våra uppdrag. Vi behandlar följande kategorier av uppgifter:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-dark/80">
                  <li><strong>Kontaktuppgifter:</strong> Namn, personnummer, adress, e-postadress, telefonnummer.</li>
                  <li><strong>Klientärendebaserad information:</strong> Sakomständigheter, bakgrundsinformation, motpartsdetaljer och annan information som är absolut nödvändig för att utreda, hantera och driva ditt rättsliga ärende.</li>
                  <li><strong>Känsliga personuppgifter:</strong> I vissa mål (t.ex. brottmål eller vårdnadstvister) behandlar vi känsliga personuppgifter (såsom hälsa, facktillhörighet eller lagöverträdelser) om det krävs för att kunna fastställa, göra gällande eller försvara rättsliga anspråk.</li>
                  <li><strong>Tekniska data:</strong> IP-adress, enhetsinformation samt användardata via cookies när du besöker vår webbplats.</li>
                </ul>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  2. Syfte och laglig grund för behandling
                </h3>
                <p className="mb-2">
                  Vi behandlar dina personuppgifter för följande ändamål:
                </p>
                <div className="space-y-2.5">
                  <div className="bg-brand-gold/5 p-3 rounded-xs border border-brand-gold/10">
                    <p className="font-medium text-brand-primary text-xs">A. Utförande och administration av klientuppdrag</p>
                    <p className="text-xs text-brand-dark/80 mt-1">
                      Vi behandlar personuppgifter för att utföra jävskontroller, penningtvättskontroller, upprätta avtal samt tillvarata dina intressen under ärendets gång. 
                      <br /><strong>Laglig grund:</strong> Fullgörande av avtal, rättslig förpliktelse (penningtvättslagstiftning) samt god advokatsed.
                    </p>
                  </div>
                  <div className="bg-brand-gold/5 p-3 rounded-xs border border-brand-gold/10">
                    <p className="font-medium text-brand-primary text-xs">B. Kommunikation och bokningar</p>
                    <p className="text-xs text-brand-dark/80 mt-1">
                      För att besvara frågor via kontaktformulär, boka möten och administrera din kontakt med oss.
                      <br /><strong>Laglig grund:</strong> Intresseavvägning (vårt berättigade intresse att tillhandahålla god service).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  3. Tystnadsplikt och utlämnande av uppgifter
                </h3>
                <p>
                  As advokatbyrå omfattas vi av en lagstadgad <strong>tystnadsplikt</strong>. Vi lämnar aldrig ut personuppgifter till utomstående, såvida det inte uttryckligen överenskommits med dig, är absolut nödvändigt för att tillvarata dina intressen i ärendet (t.ex. gentemot domstol eller motpart), eller om det föreligger en direkt lagstadgad skyldighet.
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  4. Hur länge sparar vi dina uppgifter?
                </h3>
                <p>
                  Enligt Advokatsamfundets vägledande regler om god advokatsed är vi skyldiga att bevara handlingar och information som samlats in i ett ärende under en period om <strong>minst 10 år</strong> från det att ärendet slutfördes. Tekniska data och allmänna kontaktförfrågningar raderas så snart ändamålet med kontakten har uppfyllts (eller senast efter 12 månader).
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  5. Dina rättigheter under GDPR
                </h3>
                <p className="mb-2">
                  Enligt dataskyddsförordningen har du följande rättigheter:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-dark/80">
                  <li><strong>Registerutdrag:</strong> Rätt att få information om och tillgång till de personuppgifter vi behandlar om dig.</li>
                  <li><strong>Rättelse:</strong> Rätt att begära att felaktiga eller ofullständiga uppgifter korrigeras.</li>
                  <li><strong>Radering (”Rätten att bli glömd”):</strong> Rätt att begära radering. <em>Vänligen notera att advokatbyråns lagstadgade skyldigheter att bevara klientakter (10 år) har företräde framför raderingsrätten under lagringstiden.</em></li>
                  <li><strong>Begränsning:</strong> Rätt att kräva att behandlingen av dina uppgifter begränsas.</li>
                </ul>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  6. Datasekretess och säkerhet
                </h3>
                <p>
                  Vi vidtar alla lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust, förstörelse eller manipulering. All kommunikation med våra servrar sker via krypterad anslutning (SSL/TLS).
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4 bg-brand-dark/5 p-4 rounded-xs">
                <h4 className="font-cinzel text-brand-primary font-semibold text-xs tracking-wide uppercase mb-1">Kontaktuppgifter för GDPR-frågor</h4>
                <p className="text-xs">
                  Personuppgiftsansvarig: Grönvall & Partners Advokatbyrå AB<br />
                  Postadress: Kungsholmstorg 1, 112 21 Stockholm<br />
                  E-post: <a href="mailto:info@hgaadvokat.se" className="text-brand-gold underline hover:text-brand-primary font-semibold">info@hgaadvokat.se</a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="font-medium text-brand-primary mb-2">Last updated: July 5, 2026</p>
                <p>
                  Grönvall & Partners Advokatbyrå AB ("we", "us", "the law firm") protects your personal privacy and strives to always secure your personal data in the best way. This policy describes how we collect, use, and safeguard your personal data in accordance with the General Data Protection Regulation (GDPR, EU 2016/679) and the specific professional rules issued by the Swedish Bar Association.
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  1. What data we collect
                </h3>
                <p className="mb-2">
                  We collect personal data primarily directly from you, but also from other sources in connection with our assignments. We process the following categories of data:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-dark/80">
                  <li><strong>Contact Details:</strong> Name, personal identity number, address, email address, phone number.</li>
                  <li><strong>Client-Related Matter Data:</strong> Facts of the case, background information, opposing party details, and other information strictly necessary to investigate, handle, and litigate your legal matter.</li>
                  <li><strong>Sensitive Personal Data:</strong> In some cases (e.g., criminal cases or family custody disputes), we process sensitive personal data (such as health information, union membership, or criminal offenses) if required to establish, exercise, or defend legal claims.</li>
                  <li><strong>Technical Data:</strong> IP address, device specifications, and usage data via cookies when you visit our website.</li>
                </ul>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  2. Purpose and legal basis for processing
                </h3>
                <p className="mb-2">
                  We process your personal data for the following purposes:
                </p>
                <div className="space-y-2.5">
                  <div className="bg-brand-gold/5 p-3 rounded-xs border border-brand-gold/10">
                    <p className="font-medium text-brand-primary text-xs">A. Execution and Administration of Client Assignments</p>
                    <p className="text-xs text-brand-dark/80 mt-1">
                      We process personal data to perform conflict checks, anti-money laundering controls, draft retainer contracts, and defend your rights throughout the case.
                      <br /><strong>Legal basis:</strong> Performance of a contract, legal obligation (anti-money laundering laws), and Swedish Bar Association rules.
                    </p>
                  </div>
                  <div className="bg-brand-gold/5 p-3 rounded-xs border border-brand-gold/10">
                    <p className="font-medium text-brand-primary text-xs">B. Communication and Appointments</p>
                    <p className="text-xs text-brand-dark/80 mt-1">
                      To answer inquiries through contact forms, schedule consultations, and manage your interactions with us.
                      <br /><strong>Legal basis:</strong> Legitimate interests (our interest in providing professional, secure service).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  3. Secrecy & Professional Confidentiality
                </h3>
                <p>
                  As an advocacy firm, we are bound by statutory <strong>legal professional privilege and secrecy</strong>. We never disclose personal data to third parties unless explicitly agreed upon with you, required to assert your interests in the matter (such as before courts or to opposing counsel), or mandated directly by law.
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  4. For how long do we retain your data?
                </h3>
                <p>
                  In accordance with the rules of the Swedish Bar Association, we are obliged to store files and information collected in a client matter for a period of <strong>at least 10 years</strong> from the date of the matter\'s conclusion. Technical data and general contact inquiries are purged once the purpose of contact is fulfilled (or at the latest after 12 months).
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  5. Your rights under GDPR
                </h3>
                <p className="mb-2">
                  Under the General Data Protection Regulation, you have the following rights:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-dark/80">
                  <li><strong>Access (Register Extract):</strong> The right to be informed about and request a copy of the personal data we process about you.</li>
                  <li><strong>Rectification:</strong> The right to demand correction of inaccurate or incomplete information.</li>
                  <li><strong>Erasure ("Right to be Forgotten"):</strong> The right to request deletion of your data. <em>Please note that our statutory duty to store case files (10 years) takes precedence over the right to erasure during that statutory storage period.</em></li>
                  <li><strong>Restriction:</strong> The right to demand restriction of the processing of your data.</li>
                </ul>
              </div>

              <div className="border-t border-brand-gold/10 pt-4">
                <h3 className="font-cinzel text-brand-primary font-semibold tracking-wide text-xs uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full inline-block"></span>
                  6. Data Security and Integrity
                </h3>
                <p>
                  We deploy all appropriate technical and organizational safety measures to shield your personal records from unauthorized access, loss, destruction, or alteration. All communication with our servers is secured through encrypted channels (SSL/TLS).
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-4 bg-brand-dark/5 p-4 rounded-xs">
                <h4 className="font-cinzel text-brand-primary font-semibold text-xs tracking-wide uppercase mb-1">Contact for GDPR Queries</h4>
                <p className="text-xs">
                  Data Controller: Grönvall & Partners Advokatbyrå AB<br />
                  Postal Address: Kungsholmstorg 1, SE-112 21 Stockholm<br />
                  Email: <a href="mailto:info@hgaadvokat.se" className="text-brand-gold underline hover:text-brand-primary font-semibold">info@hgaadvokat.se</a>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-brand-gold/15 flex justify-end bg-brand-cream rounded-b-xs">
          <button 
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200 border border-brand-dark rounded-xs cursor-pointer"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      <div 
        className="relative bg-brand-cream border border-brand-gold/30 rounded-xs w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="cookie-settings-modal"
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-gold/15 flex items-center justify-between bg-brand-dark text-brand-cream rounded-t-xs">
          <div className="flex items-center space-x-3">
            <Settings className="text-brand-gold shrink-0 animate-spin-slow" size={24} />
            <div>
              <h2 className="font-cinzel text-lg sm:text-xl font-semibold tracking-wider">
                {isSv ? 'Cookie-inställningar' : 'Cookie Settings'}
              </h2>
              <p className="text-[10px] text-brand-accent/60 uppercase tracking-widest mt-0.5">
                {isSv ? 'Hantera din integritet & samtycke' : 'Manage your privacy & consent'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-brand-accent/70 hover:text-brand-gold p-1.5 rounded-full hover:bg-brand-cream/5 transition-colors cursor-pointer"
            aria-label={isSv ? 'Stäng' : 'Close'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-brand-dark/95 font-light">
          <p>
            {isSv 
              ? 'Vi använder cookies för att optimera din upplevelse på vår webbplats och för att analysera vår besöksstatistik. Genom att hantera dina inställningar nedan kan du välja vilka cookies du vill tillåta. Vänligen notera att vissa grundläggande webbplatsfunktioner kräver absolut nödvändiga cookies för att fungera.'
              : 'We use cookies to optimize your experience on our website and to analyze visitor statistics. By configuring your preferences below, you can choose which cookies to allow. Please note that certain essential website features require strictly necessary cookies to operate.'}
          </p>

          <div className="space-y-4">
            {/* Category 1: Necessary */}
            <div className="flex items-start justify-between p-4 bg-white border border-brand-gold/15 rounded-xs">
              <div className="space-y-1 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-primary text-xs uppercase tracking-wider">
                    {isSv ? 'Nödvändiga Cookies' : 'Strictly Necessary Cookies'}
                  </span>
                  <span className="text-[9px] bg-brand-dark/10 text-brand-dark/65 px-1.5 py-0.5 rounded-full uppercase font-medium">
                    {isSv ? 'Alltid aktiva' : 'Always Active'}
                  </span>
                </div>
                <p className="text-xs text-brand-dark/70 font-light">
                  {isSv 
                    ? 'Dessa cookies krävs för att möjliggöra grundläggande funktioner såsom säker sidnavigering, jävskontrolls-inställningar, språkval samt lagring av dina cookie-inställningar. Webbplatsen kan inte fungera korrekt utan dessa.'
                    : 'These cookies are required to enable basic features such as secure page navigation, conflict-of-interest configurations, language preferences, and storing your cookie settings. The website cannot function properly without these.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <div className="w-10 h-6 bg-brand-gold/20 border border-brand-gold/40 rounded-full flex items-center px-1 justify-end opacity-80">
                  <div className="w-4 h-4 bg-brand-gold rounded-full" />
                </div>
              </div>
            </div>

            {/* Category 2: Analytics */}
            <div 
              className="flex items-start justify-between p-4 bg-white border border-brand-gold/15 rounded-xs hover:border-brand-gold/35 transition-colors cursor-pointer select-none"
              onClick={() => setAnalyticsConsent(!analyticsConsent)}
            >
              <div className="space-y-1 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-primary text-xs uppercase tracking-wider">
                    {isSv ? 'Analys & Prestanda' : 'Analytics & Performance'}
                  </span>
                  <span className="text-[9px] bg-brand-gold/20 text-brand-primary px-1.5 py-0.5 rounded-full uppercase font-medium">
                    {isSv ? 'Valfri' : 'Optional'}
                  </span>
                </div>
                <p className="text-xs text-brand-dark/70 font-light">
                  {isSv 
                    ? 'Används för att anonymt samla in besöksstatistik och mäta sidprestanda (t.ex. vilka undersidor som besöks mest och hur lång tid användare spenderar). Detta hjälper oss att förbättra informationen för framtida besökare.'
                    : 'Used to anonymously collect visitor statistics and measure page performance (e.g., which subpages are visited most and how much time users spend). This helps us improve website information and usability for future visitors.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <button
                  type="button"
                  className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-hidden ${
                    analyticsConsent ? 'bg-brand-gold' : 'bg-brand-accent/20'
                  }`}
                  aria-pressed={analyticsConsent}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-xs transform transition-transform duration-200 ${
                      analyticsConsent ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Category 3: Marketing */}
            <div className="flex items-start justify-between p-4 bg-brand-accent/5 border border-dashed border-brand-accent/20 rounded-xs">
              <div className="space-y-1 pr-4">
                <div className="flex items-center space-x-2">
                  <span className="font-cinzel font-semibold text-brand-accent/60 text-xs uppercase tracking-wider">
                    {isSv ? 'Marknadsföring & Profilering' : 'Marketing & Profiling'}
                  </span>
                  <span className="text-[9px] bg-brand-accent/10 text-brand-accent/50 px-1.5 py-0.5 rounded-full uppercase font-medium">
                    {isSv ? 'Används ej' : 'Not used'}
                  </span>
                </div>
                <p className="text-xs text-brand-accent/60 font-light">
                  {isSv 
                    ? 'Vi samlar inte in eller delar data för marknadsföringsändamål och har inga tredjepartsspårare för annonser på vår webbplats. Din sekretess är vår högsta prioritet.'
                    : 'We do not collect or share data for marketing or advertising purposes, and operate no third-party tracking pixels on our website. Your absolute privacy is our highest priority.'}
                </p>
              </div>
              <div className="flex items-center h-5 mt-1">
                <span className="text-xs text-brand-accent/40 italic">
                  {isSv ? 'Ej tillämplig' : 'Not applicable'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-brand-gold/15 flex flex-col sm:flex-row gap-3 justify-between bg-brand-cream rounded-b-xs">
          <button 
            onClick={onClose}
            className="text-xs text-brand-dark hover:text-brand-gold underline transition-colors cursor-pointer text-center sm:text-left py-2 px-1"
          >
            {isSv ? 'Avbryt' : 'Cancel'}
          </button>
          <div className="flex flex-col sm:flex-row gap-2">
            <button 
              onClick={handleSave}
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-brand-cream border border-brand-dark text-brand-dark hover:bg-brand-dark/5 transition-colors duration-200 rounded-xs cursor-pointer"
            >
              {isSv ? 'Spara valda' : 'Save selected'}
            </button>
            <button 
              onClick={handleAcceptAll}
              className="px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200 border border-brand-dark rounded-xs cursor-pointer"
            >
              {isSv ? 'Godkänn alla' : 'Accept all'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
