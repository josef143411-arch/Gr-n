import React, { useState } from 'react';
import { ShieldCheck, Scale, FileText, CheckCircle, ArrowRight } from 'lucide-react';

interface RetrialsProps {
  language: 'sv' | 'en';
}

const RETRIALS_TRANSLATIONS = {
  sv: {
    kicker: 'Extraordinära rättsmedel',
    title: 'Resningsärenden',
    subtitle: 'Att få en dom prövad på nytt efter att den vunnit laga kraft är en av de absolut svåraste och mest krävande juridiska processerna. Vi på Grönvall & Partners har den unika kompetens och uthållighet som krävs.',
    introTitle: 'Rättvisa känner inga preskriptionstider',
    introP1: 'I det svenska rättssystemet är grundregeln att en dom som har vunnit laga kraft (vilket innebär att den inte längre kan överklagas på vanligt sätt) står fast. Detta kallas för domens rättskraft. Men det finns undantag. För de fall där det i efterhand visar sig att domstolen fattat ett uppenbart felaktigt beslut, finns möjligheten till resning.',
    introP2: 'Att beviljas resning av Högsta domstolen är dock extremt sällsynt. Ribban ligger oerhört högt. Det räcker inte med att hävda att domstolen gjort en felaktig värdering av de bevis som lades fram vid rättegången. Det krävs att man kan presentera substantiellt nya omständigheter eller bevis som inte tidigare har prövats, och som i sig gör att domen framstår som felaktig.',
    sidebarTitle: 'Grunder för Resning',
    sidebarItem1: 'Nya bevis eller omständigheter: Nya tekniska analyser, vittnesmål eller erkännanden som inte fanns under rättegången.',
    sidebarItem2: 'Falska bevis: Det bevisas att ett nyckelvittne ljugit eller att ett skriftligt dokument varit förfalskat.',
    sidebarItem3: 'Tjänstefel eller brott: Det framkommer att domare, nämndemän eller åklagare begått brottsliga handlingar eller grovt tjänstefel i målet.',
    processTitle: 'Hur vi arbetar med din resningsprocess',
    processSub: 'Ett framgångsrikt resningsärende är resultatet av noggrann analys, uthålligt efterforskningsarbete och en vattentät argumentation.',
    formSectionKicker: 'Kostnadsfri utvärdering',
    formSectionTitle: 'Skicka en sekretessbelagd förfrågan',
    formSectionDesc: 'Har du eller en närstående blivit dömd för ett allvarligt brott och anser att domen är orättfärdig? Beskriv fallet kortfattat.',
    formConfidentialNote: '* Vi garanterar absolut sekretess och tystnadsplikt under lagens strängaste villkor redan vid din första kontakt. Inga uppgifter delas någonsin med tredje part eller myndigheter.',
    formHandlingNote1: 'Strikt sekretessbelagd hantering',
    formHandlingNote2: 'Genomgång av erfarna jurister',
    successTitle: 'Förfrågan Mottagen',
    successDesc: 'Tack för ditt förtroende. Vi har tagit emot din förfrågan gällande resningsärende under full sekretess. En av våra advokater specialiserad på extraordinära rättsmedel kommer att kontakta dig personligen inom 24 timmar på vardagar.',
    labelName: 'Ditt Fullständiga Namn *',
    labelPhone: 'Telefonnummer',
    labelEmail: 'E-postadress *',
    labelDesc: 'Beskrivning av domen & fallet *',
    placeholderName: 'T.ex. Johan Andersson',
    placeholderPhone: 'T.ex. 070-123 45 67',
    placeholderEmail: 'T.ex. johan.andersson@example.com',
    placeholderDesc: 'Ange vilken domstol som dömde, vilket år, vilket brott det gäller, samt vad som är de NYA omständigheter eller bevis du vill anföra till stöd för resningsansökan...',
    btnSubmit: 'Skicka sekretessbelagd förfrågan',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.',
    phases: [
      {
        num: 'I',
        title: 'Inledande Granskning & Analys',
        description: 'Vi går igenom samtliga handlingar från den tidigare rättsprocessen: domar, förundersökningsprotokoll m.m.'
      },
      {
        num: 'II',
        title: 'Egenutredning',
        description: 'Eftersom resning kräver helt nya omständigheter eller bevis, räcker det inte med att hävda att domstolen dömde fel. Vi gör egna undersökningar, lokaliserar nya vittnen, konsulterar tekniska eller medicinska experter och tar fram ny skriftlig bevisning.'
      },
      {
        num: 'III',
        title: 'Formulering av Resningsansökan',
        description: 'Vi upprättar en gedigen skriftlig ansökan till Högsta domstolen. Ansökan måste på ett strukturerat och övertygande sätt påvisa att de nya bevisen eller omständigheterna med hög sannolikhet skulle ha lett till en frikännande dom vid en prövning.'
      },
      {
        num: 'IV',
        title: 'Högsta Domstolens Prövning',
        description: 'Högsta domstolen inhämtar vanligtvis yttrande från Riksåklagaren (RÅ). Vi bemöter därefter åklagarens yttrande. Om HD beviljar resning, undanröjs den gamla domen och målet tas upp till en helt ny rättegång i hovrätten eller tingsrätten.'
      }
    ]
  },
  en: {
    kicker: 'Extraordinary Legal Remedies',
    title: 'Retrial Petitions',
    subtitle: 'Having a closed, legally binding judgment reviewed again (resning) is one of the most demanding legal tasks. Grönvall & Partners possesses the unique legal expertise and stamina required to pursue these matters.',
    introTitle: 'Justice Knows No Statute of Limitations',
    introP1: 'In the Swedish legal system, the general rule is that a judgment that has gained legal force (which means it can no longer be appealed in the normal way) stands firm. This is called the legal force of the judgment (res judicata). But there are exceptions. For cases where it subsequently turns out that the court made an obviously incorrect decision, there is the possibility of a retrial (resning).',
    introP2: 'However, being granted a retrial by the Supreme Court is extremely rare. The bar is set incredibly high. It is not enough to argue that the court made an incorrect assessment of the evidence presented during the trial. It is required that you can present substantially new circumstances or evidence that has not been previously examined, which in itself makes the judgment appear false.',
    sidebarTitle: 'Grounds for a Retrial',
    sidebarItem1: 'New evidence or circumstances: New technical analyses, witness testimonies, or confessions that were not available during the trial.',
    sidebarItem2: 'False evidence: It is proved that a key witness lied or that a written document was forged.',
    sidebarItem3: 'Misconduct or crime: It is revealed that judges, jurors, or prosecutors committed criminal acts or gross misconduct in the case.',
    processTitle: 'Our Work Method in Retrial Cases',
    processSub: 'A successful retrial petition is the result of meticulous analysis, persistent investigative work, and airtight argumentation.',
    formSectionKicker: 'Complimentary Evaluation',
    formSectionTitle: 'Submit a Confidential Request',
    formSectionDesc: 'Have you or a loved one been convicted of a serious crime and believe the judgment is unjust? Briefly describe the case below.',
    formConfidentialNote: '* We guarantee absolute confidentiality and legal professional privilege under the strictest terms of law from your very first contact. No information is ever shared with third parties or government authorities.',
    formHandlingNote1: 'Handled with strict confidentiality',
    formHandlingNote2: 'Reviewed by experienced criminal defense lawyers',
    successTitle: 'Request Received',
    successDesc: 'Thank you for your trust. We have received your request regarding your retrial case under strict professional secrecy. One of our lawyers specializing in extraordinary legal remedies will contact you personally within 24 hours on business days.',
    labelName: 'Your Full Name *',
    labelPhone: 'Phone Number',
    labelEmail: 'Email Address *',
    labelDesc: 'Case & Verdict Description *',
    placeholderName: 'e.g., John Smith',
    placeholderPhone: 'e.g., +46 70 123 45 67',
    placeholderEmail: 'e.g., john.smith@example.com',
    placeholderDesc: 'State which court issued the verdict, which year, the crime involved, and the NEW circumstances or evidence you wish to present to support the retrial petition...',
    btnSubmit: 'Submit Confidential Inquiry',
    alertMissing: 'Please fill in all mandatory fields.',
    phases: [
      {
        num: 'I',
        title: 'Initial Review & Analysis',
        description: 'We read through all documents from the previous trial: the verdict, police inquiry protocol, judgment grounds, appeal court verdict, and witness hearings.'
      },
      {
        num: 'II',
        title: 'Inquest',
        description: 'Since a retrial requires entirely new circumstances or evidence, it is not enough to argue that the court was wrong. We conduct our own investigations, locate new witnesses, consult technical or medical experts, and secure new written proof.'
      },
      {
        num: 'III',
        title: 'Drafting the Retrial Petition',
        description: 'We construct a solid, structured written petition to the Supreme Court. The petition must clearly and convincingly demonstrate that the new evidence or circumstances would have highly likely resulted in an acquittal.'
      },
      {
        num: 'IV',
        title: 'Supreme Court Evaluation',
        description: 'The Supreme Court typically requests a response from the Chancellor of Justice or Prosecutor-General (Riksåklagaren). We then reply to the prosecutor\'s assessment. If the Supreme Court grants a retrial, the old judgment is vacated, and the case is reheard.'
      }
    ]
  }
};

export default function Retrials({ language }: RetrialsProps) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCaseDetails, setInquiryCaseDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = RETRIALS_TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryCaseDetails) {
      alert(t.alertMissing);
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="retrials-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
            {t.kicker}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary tracking-tight leading-tight">
            {t.title}
          </h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="text-base sm:text-lg text-brand-medium font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Informative Intro Row */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center" id="retrials-intro">
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl font-normal text-brand-primary tracking-tight">
              {t.introTitle}
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold" />
            <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
              {t.introP1}
            </p>
            <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
              {t.introP2}
            </p>
          </div>
          <div className="md:col-span-5 bg-brand-primary text-brand-cream p-8 rounded-xl space-y-4 shadow-lg border border-brand-gold/20">
            <h3 className="font-cinzel text-brand-gold text-base tracking-wider uppercase">
              {t.sidebarTitle}
            </h3>
            <ul className="space-y-3 text-xs font-light text-brand-accent/90 list-disc list-inside">
              <li className="leading-relaxed">
                <span className="ml-1">{t.sidebarItem1}</span>
              </li>
              <li className="leading-relaxed">
                <span className="ml-1">{t.sidebarItem2}</span>
              </li>
              <li className="leading-relaxed">
                <span className="ml-1">{t.sidebarItem3}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Process Flow */}
        <section className="space-y-12" id="retrials-process">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
              {t.processTitle}
            </h2>
            <p className="text-sm text-brand-medium/70 font-light max-w-xl mx-auto">
              {t.processSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.phases.map((phase, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-brand-primary border border-brand-gold/20 rounded-xl hover:border-brand-gold/55 hover:shadow-xl hover:scale-[1.015] hover:ring-1 hover:ring-brand-gold/30 transition-all duration-350 relative group"
              >
                <span className="font-cinzel text-3xl font-light text-brand-gold/40 group-hover:text-brand-gold absolute top-4 right-6 transition-all duration-350 group-hover:scale-105">
                  {phase.num}
                </span>
                <div className="space-y-3 pr-8">
                  <h3 className="font-cinzel text-base font-semibold text-brand-gold tracking-wide transition-colors group-hover:text-brand-gold-light">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-brand-cream/90 font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Confidential Evaluation Form */}
        <section className="bg-brand-light p-8 sm:p-12 border border-brand-accent/20 rounded-2xl" id="retrials-consultation">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
                  {t.formSectionKicker}
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
                  {t.formSectionTitle}
                </h2>
                <p className="text-sm text-brand-medium font-light leading-relaxed">
                  {t.formSectionDesc}
                </p>
                <p className="text-xs text-brand-medium/70 italic">
                  {t.formConfidentialNote}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-brand-accent/20">
                <div className="flex items-center space-x-3 text-xs text-brand-medium">
                  <ShieldCheck className="text-brand-gold shrink-0" size={16} />
                  <span>{t.formHandlingNote1}</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-brand-medium">
                  <FileText className="text-brand-gold shrink-0" size={16} />
                  <span>{t.formHandlingNote2}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-brand-cream border border-brand-accent/25 p-6 sm:p-8 rounded-xl shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in" id="retrial-success-message">
                  <div className="w-12 h-12 bg-brand-primary text-brand-gold rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="font-cinzel text-xl text-brand-primary font-semibold uppercase tracking-wider">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-brand-medium font-light max-w-md mx-auto leading-relaxed">
                    {t.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm text-brand-medium font-light">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelName}</label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder={t.placeholderName}
                        className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelPhone}</label>
                      <input
                        type="tel"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder={t.placeholderPhone}
                        className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelEmail}</label>
                    <input
                      type="email"
                      required
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      placeholder={t.placeholderEmail}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Case details */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelDesc}</label>
                    <textarea
                      required
                      rows={5}
                      value={inquiryCaseDetails}
                      onChange={(e) => setInquiryCaseDetails(e.target.value)}
                      placeholder={t.placeholderDesc}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden font-light leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-retrial-inquiry"
                      className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark border border-brand-gold-dark/20 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      {t.btnSubmit}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
