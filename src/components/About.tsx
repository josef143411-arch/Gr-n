import React from 'react';
import { Scale, EyeOff, Shield, HeartHandshake, Award, FileCheck } from 'lucide-react';
import stockholmHero from '../assets/images/stockholm_hero_1783253924010.jpg';

interface AboutProps {
  language: 'sv' | 'en';
}

const ABOUT_TRANSLATIONS = {
  sv: {
    kicker: 'Vår historia',
    title: 'Grönvall & Partners',
    welcomeText: 'Välkommen till Grönvall & Partners. Vi företräder klienter i hela landet med utgångspunkt från vårt huvudkontor i Stockholm.',
    historyTitle: 'Vår historia',
    historyP1: 'Grönvall & Partners har sina rötter i Lagerling & Hansson Advokatbyrå, som grundades 2004 av advokaterna Johan Hansson och Björn Lagerling. Sedan starten har byrån vuxit till en väletablerad verksamhet med ett starkt renommé inom framför allt brottmål, samtidigt som den även erbjuder kvalificerad juridisk rådgivning inom bland annat familjerätt, arvsrätt, migrationsrätt och socialrätt.',
    historyP2: 'Under mer än två decennier har byrån byggt sin verksamhet på hög juridisk kompetens, personligt engagemang och ett nära samarbete med sina klienter. Namnbytet till Grönvall & Partners markerar ett nytt kapitel i byråns utveckling – med samma värderingar, samma kvalitet och samma ambition att erbjuda förstklassig juridisk rådgivning och ett engagerat biträde i varje uppdrag.',
    valuesTitle: 'Våra Värderingar',
    valuesSub: 'Vår etiska kompass styr varje beslut vi tar och varje åtgärd vi vidtar för att tillvarata din rätt.',
    value1Title: 'Ovillkorlig integritet',
    value1Desc: 'Diskretion är inte en preferens för oss – det är en grundpelare. Vi skyddar dina intressen med strikt lagstadgad tystnadsplikt och kompromisslös yrkesetik.',
    value2Title: 'Högsta juridiska kvalitet',
    value2Desc: 'Juridiskt hantverk kräver millimeterprecision. Vi genomför minutiösa förberedelser och djupgående analyser inför varje enskild förhandling.',
    value3Title: 'Oberoende och lojalitet',
    value3Desc: 'Vi agerar i alla lägen med fullständigt oberoende och absolut lojalitet mot vår klient. Vi tillvaratar dina intressen med högsta professionalitet, uthållighet och beslutsamhet.',
    value4Title: 'Mänskligt engagemang',
    value4Desc: 'Bakom varje akt finns en människa eller en verksamhet i behov av genuint stöd. Vi lyssnar aktivt och anpassar strategin efter dina unika behov.',
    methodTitle: 'Vår Process i 4 Steg',
    step1Title: 'Inledande Konsultation',
    step1Desc: 'Vi gör en första sekretessbelagd analys av ditt ärende och dina behov.',
    step2Title: 'Strategiutveckling',
    step2Desc: 'Vi lägger upp en taktiskt genomtänkt handlingsplan baserad på gällande rätt och rättspraxis.',
    step3Title: 'Minutiösa Förberedelser',
    step3Desc: 'Vi sammanställer bevisning, granskar motpartens argument och säkrar alla juridiska detaljer.',
    step4Title: 'Processföring',
    step4Desc: 'Vi företräder dig i domstol eller inför myndigheter med absolut skärpa, integritet och pondus.',
    approachTitle: 'Vårt arbetssätt',
    approachP1: 'Vi tror inte på standardiserade lösningar. Varje ärende som anförtros Grönvall & Partners tilldelas en eller flera medarbetare utifrån ärendets karaktär och komplexitet. Genom nära samarbete och löpande kvalitetssäkring säkerställer vi att varje juridisk frågeställning analyseras grundligt och ur flera perspektiv.',
    approachP2: 'Vårt arbetssätt präglas av ett kompromisslöst fokus på detaljer. Vi genomför noggranna analyser av det juridiska och faktiska underlaget, identifierar möjligheter och risker samt granskar motpartens argumentation med stor precision. När ett ärende omfattar myndighetsutredningar eller annan bevisning lägger vi särskild vikt vid att upptäcka eventuella brister och oklarheter. Denna metodiska och proaktiva arbetsprocess gör att vi kan företräda våra klienter effektivt i såväl tvister och förhandlingar som brottmål, myndighetsärenden och andra komplexa juridiska frågor.',
    approachP3: 'Utöver byråns egen samlade kompetens har vi tillgång till ett brett nätverk av externa specialister, däribland IT- och telekomingenjörer, forensiker, revisorer och rättsläkare. Genom att kombinera juridisk expertis med kvalificerad specialistkunskap har vi de resurser som krävs för att hantera även de mest omfattande och komplexa ärendena.'
  },
  en: {
    kicker: 'Our Story',
    title: 'Grönvall & Partners',
    welcomeText: 'Welcome to Grönvall & Partners. We represent clients nationwide from our head office in Stockholm.',
    historyTitle: 'Our History',
    historyP1: 'Grönvall & Partners has its roots in Lagerling & Hansson Law Firm, founded in 2004 by attorneys Johan Hansson and Björn Lagerling. Since inception, the firm has grown to a well-established practice with a strong reputation primarily in criminal defense, while also offering high-quality legal counsel in areas such as family law, inheritance law, migration law, and social welfare law.',
    historyP2: 'For more than two decades, the firm has built its operations on supreme legal competency, personal commitment, and close cooperation with clients. The rename to Grönvall & Partners marks a new chapter in the firm\'s evolution – with the same values, the same quality, and the same ambition to offer first-class legal advice and committed advocacy in every case.',
    valuesTitle: 'Our Values',
    valuesSub: 'Our ethical compass guides every decision we make and every action we take to defend your rights.',
    value1Title: 'Unconditional Integrity',
    value1Desc: 'Discretion is not a preference for us – it is a cornerstone. We protect your interests with strict statutory confidentiality and uncompromising professional ethics.',
    value2Title: 'Supreme Legal Quality',
    value2Desc: 'Legal craft requires millimeter precision. We execute meticulous preparations and in-depth analyses before every negotiation or court session.',
    value3Title: 'Independence & Loyalty',
    value3Desc: 'We act at all times with complete independence and absolute loyalty to our client. We safeguard your interests with the highest professionalism, perseverance, and determination.',
    value4Title: 'Human Empathy & Commitment',
    value4Desc: 'Behind every file is a human being or a business in need of genuine support. We listen actively and adapt our strategy to your unique circumstances.',
    methodTitle: 'Our 4-Step Process',
    step1Title: 'Initial Consultation',
    step1Desc: 'We perform an initial, fully confidential analysis of your case and goals.',
    step2Title: 'Strategy Formulation',
    step2Desc: 'We design a tactically sound plan of action based on statutory law and legal precedents.',
    step3Title: 'Rigorous Preparation',
    step3Desc: 'We gather evidence, review counterarguments, and secure every single legal detail.',
    step4Title: 'Representation',
    step4Desc: 'We represent you in court or before government agencies with supreme focus, integrity, and command.',
    approachTitle: 'Our Work Ethics',
    approachP1: 'We do not believe in standardized solutions. Every case entrusted to Grönvall & Partners is assigned to one or more associates based on the case type and complexity. Through close collaboration and continuous quality checks, we ensure that every legal issue is thoroughly evaluated.',
    approachP2: 'Our approach is characterized by an uncompromising focus on details. We analyze both the legal framework and factual grounds, identify opportunities and risks, and dissect opposing arguments with precision. When investigations or evidence are key, we pay extra attention to detecting loopholes or inconsistencies.',
    approachP3: 'In addition to our collective internal expertise, we have access to a broad network of external specialists, including IT and telecommunication engineers, forensic experts, auditors, and medical examiners. Combining legal expertise with specialized scientific knowledge grants us the resources to handle even the most massive and complex legal matters.'
  }
};

export default function About({ language }: AboutProps) {
  const t = ABOUT_TRANSLATIONS[language];

  const values = [
    {
      icon: Shield,
      title: t.value1Title,
      description: t.value1Desc
    },
    {
      icon: Award,
      title: t.value2Title,
      description: t.value2Desc
    },
    {
      icon: EyeOff,
      title: t.value3Title,
      description: t.value3Desc
    },
    {
      icon: HeartHandshake,
      title: t.value4Title,
      description: t.value4Desc
    }
  ];

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="about-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
            {t.kicker}
          </span>
          <h1 className="text-4xl sm:text-5xl font-normal text-brand-primary tracking-tight">
            {language === 'sv' ? 'Välkommen till Grönvall ' : 'Welcome to Grönvall '}
            <span className="elegant-ampersand text-[0.95em] text-brand-gold select-none inline-block transform -translate-y-[0.02em]">&amp;</span> Partners
          </h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
        </div>

        {/* Stockholm visual landscape banner */}
        <div className="relative h-64 sm:h-80 md:h-[380px] w-full rounded-xl overflow-hidden border border-brand-accent/20 shadow-md">
          <img 
            src={stockholmHero} 
            alt="Stockholms skyline och water front"
            className="w-full h-full object-cover filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="space-y-1">
              <p className="text-brand-cream/90 text-xs sm:text-sm font-light max-w-lg">
                {t.welcomeText}
              </p>
            </div>
          </div>
        </div>

        {/* 1. Vår Historia */}
        <section className="max-w-3xl space-y-6" id="history-section">
          <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
            {t.historyTitle}
          </h2>
          <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
            {t.historyP1}
          </p>
          <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
            {t.historyP2}
          </p>
        </section>

        {/* 2. Vision & Värderingar */}
        <section className="space-y-12" id="values-section">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
              {t.valuesTitle}
            </h2>
            <p className="text-sm text-brand-medium/70 font-light max-w-xl mx-auto">
              {t.valuesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="p-8 bg-brand-primary border border-brand-gold/20 rounded-xl hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 space-y-4 group">
                  <div className="p-3 bg-brand-gold/10 text-brand-gold inline-block rounded-md transition-colors duration-300 group-hover:bg-brand-gold/20">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-cinzel text-base font-semibold text-brand-gold">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-cream/95 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Vårt Arbetssätt */}
        <section className="max-w-3xl space-y-6" id="working-method-section">
          <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
            {t.approachTitle}
          </h2>
          <div className="space-y-6 text-sm sm:text-base text-brand-medium font-light leading-relaxed">
            <p>
              {t.approachP1}
            </p>
            <p>
              {t.approachP2}
            </p>
            <p>
              {t.approachP3}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
