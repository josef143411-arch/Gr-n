import React from 'react';
import { ShieldCheck, Landmark, CheckCircle, Info, ArrowRight } from 'lucide-react';

interface FinancingProps {
  setActiveTab: (tab: string) => void;
  language: 'sv' | 'en';
}

const FINANCING_TRANSLATIONS = {
  sv: {
    kicker: 'Ekonomisk trygghet i ditt ärende',
    title: 'Finansiering & Rättshjälp',
    intro: 'Vi hjälper dig att kartlägga dina möjligheter till rättsskydd genom dina försäkringar eller rättshjälp.',
    rSkyddTitle: 'Rättsskydd',
    rSkyddSub: 'Försäkringsskydd',
    rSkyddDesc: 'I de allra flesta hemförsäkringar, villahemförsäkringar och företagsförsäkringar ingår ett så kallat rättsskydd. Detta rättsskydd kan användas för att täcka dina kostnader för ett juridiskt ombud om du hamnar i en tvist (till exempel rörande vårdnad, köp- eller avtalsrätt).',
    rSkyddBullet1: 'Täcker i regel 80 % av dina totala ombudskostnader.',
    rSkyddBullet2: 'Du betalar endast självrisken på 20 % av kostnaden.',
    rSkyddBullet3: 'Gäller för tvister där det tvistiga värdet överstiger ett halvt prisbasbelopp, men omfattar även andra tvister såsom vårdnadstvister.',
    rSkyddNotice: 'Vi sköter allt det praktiska: Vi utreder om din försäkring täcker tvisten och skickar in ansökan samt sköter all kontakt med ditt försäkringsbolag under ärendets gång.',
    rHjälpTitle: 'Rättshjälp',
    rHjälpSub: 'Ekonomiskt stöd',
    rHjälpDesc: 'Om du saknar en gällande försäkring som innehåller rättsskydd, och inte heller borde ha haft en sådan (till exempel om du varit oförsäkrad av godtagbara skäl), kan du under vissa förutsättningar beviljas rättshjälp enligt rättshjälpslagen.',
    rHjälpBullet1: 'Kräver att ditt ekonomiska underlag (beräknat på din inkomst med hänsyn till eventuell försörjningsskyldighet för barn samt skulder) understiger 260 000 kr per år.',
    rHjälpBullet2: 'Staten täcker resterande kostnader, mot att du betalar en rättshjälpsavgift på 2–40 % baserat på din ekonomi.',
    rHjälpNotice: 'Det är domstolen eller Rättshjälpsmyndigheten som prövar och beslutar om rättshjälp. Vi bistår dig med hela ansökningsförfarandet och ser till att underlagen blir korrekta.',
    ctaTitle: 'Har du frågor om finansieringen av ditt ärende?',
    ctaDesc: 'Vi gör alltid en kostnadsfri granskning av dina möjligheter till rättsskydd eller rättshjälp vid vårt första möte. Tveka inte att höra av dig för personlig vägledning.',
    ctaContact: 'Kontakta oss direkt',
    ctaBook: 'Boka ett möte online',
  },
  en: {
    kicker: 'Financial security in your case',
    title: 'Financing & Legal Aid',
    intro: 'We help you explore your options for legal protection through your insurance or state-sponsored legal aid.',
    rSkyddTitle: 'Legal Protection',
    rSkyddSub: 'Insurance Coverage',
    rSkyddDesc: 'The vast majority of home, villa, and business insurance policies include a legal protection clause. This coverage can be used to cover your costs for a legal representative if you end up in a dispute (for example, regarding custody, contract, or consumer law).',
    rSkyddBullet1: 'Generally covers 80% of your total legal representation costs.',
    rSkyddBullet2: 'You only pay the deductible of 20% of the cost.',
    rSkyddBullet3: 'Applies to disputes where the disputed value exceeds half a price base amount, but also covers other disputes such as custody trials.',
    rSkyddNotice: 'We handle everything practical: We assess if your insurance covers the dispute, file the application, and handle all contact with your insurance provider throughout the case.',
    rHjälpTitle: 'Legal Aid',
    rHjälpSub: 'State Financial Aid',
    rHjälpDesc: 'If you lack active insurance that includes legal protection, and could not reasonably have been expected to have one (for example, if you were uninsured for valid reasons), you may under certain conditions be granted state legal aid.',
    rHjälpBullet1: 'Requires that your annual financial basis (calculated from your income taking into account child support obligations and debts) is under SEK 260,000 per year.',
    rHjälpBullet2: 'The state covers the remaining costs, while you pay a legal aid contribution of 2–40% based on your financial situation.',
    rHjälpNotice: 'The court or the Legal Aid Authority reviews and decides on legal aid. We assist you with the entire application process and ensure all documents are correct.',
    ctaTitle: 'Do you have questions about financing your case?',
    ctaDesc: 'We always conduct a free assessment of your options for legal protection or legal aid at our first meeting. Do not hesitate to contact us for personal guidance.',
    ctaContact: 'Contact us directly',
    ctaBook: 'Book a meeting online',
  }
};

export default function Financing({ setActiveTab, language }: FinancingProps) {
  const f = FINANCING_TRANSLATIONS[language];

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-brand-cream animate-fade-in" id="financing-section">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold block mb-3">
            {f.kicker}
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-brand-primary tracking-tight mb-6">
            {f.title}
          </h1>
          <p className="text-base sm:text-lg text-brand-medium leading-relaxed">
            {f.intro}
          </p>
          <div className="h-[2px] bg-brand-gold/40 w-24 mx-auto mt-8" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Rättsskydd Card */}
          <div className="bg-white p-8 rounded-xl border border-brand-accent/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand-light rounded-md text-brand-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary font-bold">{f.rSkyddTitle}</h2>
                  <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">{f.rSkyddSub}</p>
                </div>
              </div>
              <p className="text-brand-dark/95 text-sm leading-relaxed mb-4 text-justify">
                {f.rSkyddDesc}
              </p>
              <ul className="space-y-2.5 text-sm text-brand-medium mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{f.rSkyddBullet1}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{f.rSkyddBullet2}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{f.rSkyddBullet3}</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-brand-light/50 border-l-4 border-brand-gold text-xs text-brand-primary rounded-r-md flex items-start space-x-3 mt-4">
              <Info size={16} className="text-brand-gold shrink-0 mt-0.5" />
              <span>{f.rSkyddNotice}</span>
            </div>
          </div>

          {/* Rättshjälp Card */}
          <div className="bg-white p-8 rounded-xl border border-brand-accent/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-brand-light rounded-md text-brand-primary">
                  <Landmark size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-brand-primary font-bold">{f.rHjälpTitle}</h2>
                  <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">{f.rHjälpSub}</p>
                </div>
              </div>
              <p className="text-brand-dark/95 text-sm leading-relaxed mb-4 text-justify">
                {f.rHjälpDesc}
              </p>
              <ul className="space-y-2.5 text-sm text-brand-medium mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{f.rHjälpBullet1}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{f.rHjälpBullet2}</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-brand-light/50 border-l-4 border-brand-gold text-xs text-brand-primary rounded-r-md flex items-start space-x-3 mt-4">
              <Info size={16} className="text-brand-gold shrink-0 mt-0.5" />
              <span>{f.rHjälpNotice}</span>
            </div>
          </div>

        </div>

        {/* Call to action */}
        <div className="bg-white border border-brand-accent/20 p-8 md:p-12 text-center rounded-xl shadow-xs max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif text-brand-primary mb-4">{f.ctaTitle}</h3>
          <p className="text-brand-medium text-xs sm:text-sm max-w-2xl mx-auto mb-8 text-justify">
            {f.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-brand-primary hover:bg-brand-medium text-brand-cream px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm cursor-pointer"
            >
              {f.ctaContact}
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className="bg-transparent hover:bg-brand-light text-brand-primary border border-brand-primary/20 hover:border-brand-primary px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              {f.ctaBook}
              <ArrowRight size={14} className="text-brand-gold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
