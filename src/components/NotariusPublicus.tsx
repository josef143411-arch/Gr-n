import React, { useState } from 'react';
import { ShieldCheck, FileCheck, FileText, CheckCircle, ArrowRight, PenTool } from 'lucide-react';

interface NotariusPublicusProps {
  language: 'sv' | 'en';
}

const NOTARIUS_TRANSLATIONS = {
  sv: {
    kicker: 'Länsstyrelsen förordnad',
    title: 'Notarius Publicus',
    subtitle: 'Vi erbjuder fullständiga tjänster inom Notarius Publicus. Vi hjälper dig att snabbt och säkert bestyrka underskrifter, kopior, fullmakter samt utfärda Apostille-stämpel för internationellt bruk.',
    introTitle: 'Officiell legitimering och bestyrkande',
    introP1: 'Notarius Publicus är en oberoende person som är förordnad av Länsstyrelsen för att övervaka, intyga och bekräfta giltigheten i olika juridiska handlingar, namnteckningar och behörigheter. Detta görs ofta för att dokumenten ska vara juridiskt giltiga i utlandet eller hos utländska myndigheter, domstolar och banker.',
    introP2: 'Grönvall & Partners har bred erfarenhet av Notarius Publicus-ärenden. Vi ser till att hanteringen sker skyndsamt och korrekt, så att dina dokument accepteras utan anmärkning över hela världen.',
    sidebarTitle: 'Våra Tjänster',
    sidebarItem1: 'Legitimering av namnteckningar: Vi intygar att rätt person har undertecknat en handling (måste signeras på plats framför oss).',
    sidebarItem2: 'Bestyrkande av kopior: Vi intygar med stämpel och underskrift att en kopia stämmer överens med originalet.',
    sidebarItem3: 'Utfärdande av Apostille: En förenklad legalisering enligt Haagkonventionen som intygar en svensk handlings äkthet för bruk i andra medlemsländer.',
    sidebarItem4: 'Fullmakter & Levnadsintyg: Vi bekräftar identiteter, utfärdar levnadsintyg (life certificates) samt intygar behörighet för bolagsföreträdare.',
    processTitle: 'Viktigt att tänka på inför ditt besök',
    processSub: 'För att din hantering ska gå så snabbt och smidigt som möjligt ber vi dig gå igenom följande checklista före ditt besök.',
    formSectionKicker: 'Boka tid eller ställ en fråga',
    formSectionTitle: 'Notarius Publicus Förfrågan',
    formSectionDesc: 'Fyll i formuläret nedan för att boka en tid eller ställa en fråga om dina dokument. Vi återkommer till dig så snart som möjligt.',
    successTitle: 'Förfrågan Mottagen',
    successDesc: 'Tack för din förfrågan gällande Notarius Publicus. Vi har tagit emot ditt meddelande och en av våra handläggare kommer att kontakta dig per telefon eller e-post inom kort för att bekräfta tid och detaljer.',
    labelName: 'Ditt Fullständiga Namn *',
    labelPhone: 'Telefonnummer',
    labelEmail: 'E-postadress *',
    labelService: 'Typ av tjänst *',
    labelDesc: 'Beskrivning av dokument & ärende *',
    placeholderName: 'T.ex. Karin Larsson',
    placeholderPhone: 'T.ex. 070-123 45 67',
    placeholderEmail: 'T.ex. karin.larsson@example.com',
    placeholderDesc: 'T.ex. Jag behöver få en namnteckning på en fullmakt bevittnad, samt två kopior av mitt pass bestyrkta inför ett fastighetsköp i Spanien...',
    btnSubmit: 'Skicka förfrågan',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.',
    serviceOptions: [
      'Välj tjänst...',
      'Legitimering av namnteckning',
      'Bestyrkande av kopia',
      'Utfärdande av Apostille',
      'Fullmakt / Levnadsintyg',
      'Annat ärende'
    ],
    phases: [
      {
        num: 'I',
        title: 'Giltig ID-handling',
        description: 'Du måste alltid kunna visa upp en giltig fysisk legitimation (svenskt körkort, svenskt pass, nationellt ID-kort eller giltigt utländskt pass). Digitalt ID godkänns ej.'
      },
      {
        num: 'II',
        title: 'Signera på plats',
        description: 'Om du ska få din namnteckning bevittnad får du inte skriva under i förväg. Signaturen måste göras personligen på plats framför Notarius Publicus.'
      },
      {
        num: 'III',
        title: 'Ta med original',
        description: 'Vid bestyrkande av kopior måste originaldokumentet alltid uppvisas i sin helhet. Vi kan inte godkänna inskannade kopior eller PDF-filer som original.'
      },
      {
        num: 'IV',
        title: 'Bolagshandlingar',
        description: 'Om du ska underteckna för ett företags räkning måste du ta med ett aktuellt registreringsbevis från Bolagsverket (inte äldre än 2-3 månader) som styrker din firmateckningsrätt.'
      }
    ]
  },
  en: {
    kicker: 'Appointed by County Board',
    title: 'Notary Public',
    subtitle: 'We offer comprehensive Notary Public services. We help you quickly and securely certify signatures, copies, powers of attorney, and issue Apostille stamps for international use.',
    introTitle: 'Official Authentication and Verification',
    introP1: 'A Notary Public (Notarius Publicus) is an independent official appointed by the County Administrative Board to monitor, certify, and confirm the authenticity and validity of various legal documents, signatures, and authorities. This is typically required for documents to be legally recognized abroad by foreign authorities, courts, and banks.',
    introP2: 'Grönvall & Partners has extensive experience in Notary Public matters. We ensure that your documents are handled swiftly and correctly, ensuring they are accepted without hesitation globally.',
    sidebarTitle: 'Our Services',
    sidebarItem1: 'Certification of signatures: We certify that the correct individual has signed a document (must be signed on-site in front of us).',
    sidebarItem2: 'Certification of copies: We verify and stamp copies to certify that they match the original document in its entirety.',
    sidebarItem3: 'Apostille certification: A simplified legalization under the Hague Convention certifying a Swedish public document\'s authenticity for use in other member states.',
    sidebarItem4: 'Powers of Attorney & Life Certificates: We verify identities, issue life certificates, and certify the signing authority of corporate officers.',
    processTitle: 'Important checklist prior to your visit',
    processSub: 'To ensure your appointment is as swift and seamless as possible, please review the checklist below before coming to our office.',
    formSectionKicker: 'Book an appointment or ask a question',
    formSectionTitle: 'Notary Public Inquiry',
    formSectionDesc: 'Fill in the form below to book an appointment or ask a question about your documents. We will get back to you as soon as possible.',
    successTitle: 'Inquiry Received',
    successDesc: 'Thank you for your Notary Public inquiry. We have received your message and one of our associates will contact you by phone or email shortly to confirm your booking and details.',
    labelName: 'Your Full Name *',
    labelPhone: 'Phone Number',
    labelEmail: 'Email Address *',
    labelService: 'Type of Service *',
    labelDesc: 'Description of documents & request *',
    placeholderName: 'e.g., Sarah Jenkins',
    placeholderPhone: 'e.g., +46 70 123 45 67',
    placeholderEmail: 'e.g., sarah.jenkins@example.com',
    placeholderDesc: 'e.g., I need my signature on a power of attorney witnessed, and two copies of my passport certified for a real estate purchase in Spain...',
    btnSubmit: 'Send Inquiry',
    alertMissing: 'Please fill in all mandatory fields.',
    serviceOptions: [
      'Select service...',
      'Signature certification',
      'Copy certification',
      'Apostille issuance',
      'Power of Attorney / Life Certificate',
      'Other request'
    ],
    phases: [
      {
        num: 'I',
        title: 'Valid Identification',
        description: 'You must always bring a valid physical ID (Swedish driver\'s license, Swedish passport, Swedish national ID, or a valid international passport). Digital ID is not accepted.'
      },
      {
        num: 'II',
        title: 'Sign on Premises',
        description: 'If you need your signature witnessed, do not sign the document beforehand. The signature must be written in person in front of the Notary Public.'
      },
      {
        num: 'III',
        title: 'Bring Originals',
        description: 'For certifying copies, the original document must always be presented. We cannot certify copies from scanned files, digital PDFs, or other copies.'
      },
      {
        num: 'IV',
        title: 'Corporate Authorities',
        description: 'If you are signing on behalf of a corporation, you must bring a fresh registration certificate (registreringsbevis) from Bolagsverket (no older than 3 months) proving your signing rights.'
      }
    ]
  }
};

export default function NotariusPublicus({ language }: NotariusPublicusProps) {
  const t = NOTARIUS_TRANSLATIONS[language];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [checkedPhases, setCheckedPhases] = useState<number[]>([]);

  const togglePhase = (idx: number) => {
    setCheckedPhases(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description || !formData.service) {
      setErrorMessage(t.alertMissing);
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream font-sans" id="notarius-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Area */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary tracking-tight leading-tight">
            {t.title}
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto" />
          <p className="text-base sm:text-lg text-brand-medium font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Content Layout: Services Info + Sidebar list of duties */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Main info text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
              {t.introP1}
            </p>
            <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
              {t.introP2}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-brand-light border border-brand-accent/15 rounded-lg flex items-start space-x-3">
                <FileCheck className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-brand-primary text-xs uppercase tracking-wider mb-1">Apostille</h4>
                  <p className="text-xs text-brand-medium font-light leading-relaxed">Internationellt erkänd legalisering enligt Haagkonventionen.</p>
                </div>
              </div>
              <div className="p-5 bg-brand-light border border-brand-accent/15 rounded-lg flex items-start space-x-3">
                <PenTool className="text-brand-gold shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-semibold text-brand-primary text-xs uppercase tracking-wider mb-1">Namnteckningar</h4>
                  <p className="text-xs text-brand-medium font-light leading-relaxed">Säker och officiell legitimering av underskrifter på plats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick list box */}
          <div className="lg:col-span-5 bg-brand-primary text-brand-cream p-8 rounded-xl space-y-5 shadow-lg border border-brand-gold/20">
            <h3 className="font-cinzel text-brand-gold text-base tracking-wider uppercase">
              {t.sidebarTitle}
            </h3>
            <div className="h-[1px] bg-brand-gold/30" />
            <ul className="space-y-4 text-xs font-light text-brand-cream/90 leading-relaxed">
              <li className="flex items-start space-x-3">
                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>{t.sidebarItem1}</span>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>{t.sidebarItem2}</span>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>{t.sidebarItem3}</span>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck size={16} className="text-brand-gold shrink-0 mt-0.5" />
                <span>{t.sidebarItem4}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Requirements Phases Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight font-cinzel">
              {t.processTitle}
            </h2>
            <p className="text-sm text-brand-medium/70 font-light leading-relaxed">
              {t.processSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.phases.map((phase, idx) => {
              const isChecked = checkedPhases.includes(idx);
              return (
                <div 
                  key={idx} 
                  onClick={() => togglePhase(idx)}
                  className={`p-6 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isChecked 
                      ? 'bg-brand-primary border-brand-gold shadow-xl scale-[1.01] ring-1 ring-brand-gold/30' 
                      : 'bg-brand-primary border-brand-gold/20 hover:border-brand-gold/40 hover:shadow-lg'
                  }`}
                >
                  <div className="absolute top-4 right-5 flex items-center space-x-2">
                    {isChecked ? (
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-500/20 animate-fade-in flex items-center space-x-1">
                        <span>✓</span>
                        <span>{language === 'sv' ? 'Klar' : 'Done'}</span>
                      </span>
                    ) : (
                      <span className="font-cinzel text-2xl font-light text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-300">
                        {phase.num}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 mt-4">
                    <h3 className="font-cinzel text-sm font-semibold text-brand-gold tracking-wide flex items-center justify-between">
                      <span>{phase.title}</span>
                    </h3>
                    <p className={`text-xs font-light leading-relaxed transition-all duration-300 ${
                      isChecked ? 'text-brand-cream/60 line-through decoration-brand-gold/35' : 'text-brand-cream/90'
                    }`}>
                      {phase.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-brand-cream/5 text-[10px] text-brand-gold/50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{isChecked ? (language === 'sv' ? 'Avmarkera' : 'Uncheck') : (language === 'sv' ? 'Klicka för att bocka av' : 'Click to check off')}</span>
                    <span>{isChecked ? '↺' : '✓'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Banner when all 4 are checked! */}
          {checkedPhases.length === t.phases.length && (
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-center text-xs sm:text-sm font-semibold tracking-wide animate-fade-in flex items-center justify-center space-x-2 shadow-md">
              <span>🎉</span>
              <span>{language === 'sv' ? 'Du är redo för ditt besök! Fyll i formuläret nedan för att boka din tid.' : 'You are fully prepared for your visit! Complete the form below to book your appointment.'}</span>
            </div>
          )}
        </div>

        {/* Interactive Consultation Form */}
        <section className="bg-brand-light p-8 sm:p-12 border border-brand-accent/20 rounded-2xl" id="notarius-consultation">
          {!isSubmitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
                  {t.formSectionKicker}
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight font-cinzel">
                  {t.formSectionTitle}
                </h2>
                <p className="text-sm text-brand-medium font-light leading-relaxed">
                  {t.formSectionDesc}
                </p>
                <div className="text-xs text-brand-medium/70 font-light space-y-2 pt-2">
                  <p>📍 Kungsholmstorg 1, 112 21 Stockholm</p>
                  <p>📞 08-20 60 20</p>
                  <p>✉️ info@gronvallpartners.se</p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4" id="notarius-booking-form">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-md border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-primary" htmlFor="np-name">
                        {t.labelName}
                      </label>
                      <input
                        type="text"
                        id="np-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.placeholderName}
                        className="w-full bg-brand-cream/50 text-brand-dark placeholder:text-brand-medium/40 border border-brand-accent/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-4 py-3 text-xs focus:outline-hidden transition-all duration-200"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-primary" htmlFor="np-phone">
                        {t.labelPhone}
                      </label>
                      <input
                        type="text"
                        id="np-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.placeholderPhone}
                        className="w-full bg-brand-cream/50 text-brand-dark placeholder:text-brand-medium/40 border border-brand-accent/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-4 py-3 text-xs focus:outline-hidden transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-primary" htmlFor="np-email">
                        {t.labelEmail}
                      </label>
                      <input
                        type="email"
                        id="np-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.placeholderEmail}
                        className="w-full bg-brand-cream/50 text-brand-dark placeholder:text-brand-medium/40 border border-brand-accent/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-4 py-3 text-xs focus:outline-hidden transition-all duration-200"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-primary" htmlFor="np-service">
                        {t.labelService}
                      </label>
                      <select
                        id="np-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-brand-cream/50 text-brand-dark border border-brand-accent/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-4 py-3 text-xs focus:outline-hidden transition-all duration-200"
                        required
                      >
                        {t.serviceOptions.map((opt, i) => (
                          <option key={i} value={i === 0 ? '' : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-primary" htmlFor="np-description">
                      {t.labelDesc}
                    </label>
                    <textarea
                      id="np-description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder={t.placeholderDesc}
                      rows={5}
                      className="w-full bg-brand-cream/50 text-brand-dark placeholder:text-brand-medium/40 border border-brand-accent/30 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-4 py-3 text-xs focus:outline-hidden transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    id="np-submit-btn"
                    className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-brand-dark border border-brand-gold-dark/20 px-8 py-3 rounded-md text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{t.btnSubmit}</span>
                    <ArrowRight size={14} className="text-brand-dark" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 max-w-xl mx-auto space-y-4" id="notarius-success">
              <div className="w-16 h-16 bg-brand-primary border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="text-brand-gold" size={32} />
              </div>
              <h3 className="font-cinzel text-2xl font-normal text-brand-primary">
                {t.successTitle}
              </h3>
              <p className="text-sm text-brand-medium font-light leading-relaxed">
                {t.successDesc}
              </p>
              <button
                onClick={() => {
                  setFormData({ name: '', phone: '', email: '', service: '', description: '' });
                  setIsSubmitted(false);
                }}
                id="np-back-btn"
                className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors duration-200 mt-4 cursor-pointer"
              >
                <span>Tillbaka</span>
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
