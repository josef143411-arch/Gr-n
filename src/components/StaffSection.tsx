import React from 'react';
import { Mail, Phone, BookOpen, Globe } from 'lucide-react';
import { STAFF_MEMBERS } from '../data';

interface StaffSectionProps {
  language: 'sv' | 'en';
  setActiveTab?: (tab: string) => void;
}

const STAFF_TRANSLATIONS = {
  sv: {
    kicker: 'Vårt Team',
    title: 'Våra Medarbetare',
    subtitle: 'Möt våra skickliga advokater och jurister. Varje medarbetare delar vår hängivenhet för juridisk precision, orubblig integritet och omsorg om klienten.',
    partnersHeading: 'Delägare',
    associatesHeading: 'Medarbetare',
    officeSharingHeading: 'I kontorsgemenskap',
    specialtiesLabel: 'Specialområden',
    educationLabel: 'Utbildning & Meriter',
    languagesLabel: 'Språk',
    showMore: 'Visa fullständiga meriter',
    showLess: 'Visa färre',
    ctaTitle: 'Söker du biträde av en specifik medarbetare?',
    ctaDesc: 'Du kan uttrycka önskemål om att få din rådgivning eller ditt försvar lett av en viss advokat eller jurist när du kontaktar oss. Vi gör alltid vårt yttersta för att tillgodose dina önskemål.',
    ctaBtn: 'Kontakta oss',
  },
  en: {
    kicker: 'Our Team',
    title: 'Our Professionals',
    subtitle: 'Meet our highly skilled attorneys and legal experts. Each associate shares our commitment to legal precision, unwavering integrity, and client care.',
    partnersHeading: 'Partners',
    associatesHeading: 'Associates',
    officeSharingHeading: 'In Office Association',
    specialtiesLabel: 'Specialties',
    educationLabel: 'Education & Credentials',
    languagesLabel: 'Languages',
    showMore: 'View full credentials',
    showLess: 'Show less',
    ctaTitle: 'Looking for a specific attorney?',
    ctaDesc: 'You can request to have your consultation or defense led by a specific attorney or associate when contacting us. We always do our utmost to accommodate your wishes.',
    ctaBtn: 'Contact us',
  }
};

const LOCALIZED_STAFF_MEMBERS = {
  sv: {
    'staff-1': {
      title: 'Advokat / Delägare',
      bio: 'Robin arbetar med brottmål. Han besitter gedigen erfarenhet av medialt uppmärksammade rättegångar, och uppträder regelbundet i domstol som försvarare i krävande brottmål. Robin åtar sig uppdrag som offentlig och privat försvarare samt som målsägandebiträde.',
      specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Organiserad brottslighet', 'Grov brottslighet', 'Medialt uppmärksammade mål', 'Målsägandebiträde'],
      education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
    },
    'staff-josef': {
      title: 'Advokat / Delägare',
      bio: 'Josef är advokat med omfattande erfarenhet av kvalificerade och komplexa brottmål. Han har omfattande erfarenhet av att företräda klienter i medialt uppmärksammade mål samt mål rörande organiserad brottslighet och ekonomisk brottslighet. Josef åtar sig uppdrag som offentlig och privat försvarare samt som målsägandebiträde och särskild företrädare för barn.\n\nHan anlitas även regelbundet som ombud i komplicerade vårdnadstvister. Han åtar sig även uppdrag som offentligt biträde i mål enligt LVU, LPT och LVM.',
      specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Tvångsmål (LVU, LPT, LVM)', 'Ekomål (försvarare)', 'Organiserad brottslighet', 'Grov brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn', 'Vårdnadstvister & Familjerätt', 'Tvistemål'],
      education: ['Juristexamen (LL.M.)', 'Kandidatexamen i kriminologi', 'Ledamot av Sveriges advokatsamfund'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)', 'Arabiska (Flytande)']
    },
    'staff-katja': {
      title: 'Advokat / Delägare',
      bio: 'Katja är advokat med omfattande erfarenhet av kvalificerade brottmål samt tvångsmål och psykiatrimål enligt LVU, LPT, LVM och LRV. Hon företräder regelbundet klienter i medialt uppmärksammade mål samt mål rörande grov och organiserad brottslighet och ekomål.\n\nKatja åtar sig även regelbundet uppdrag som målsägandebiträde och särskild företrädare för barn.',
      specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Tvångsmål (LVU, LPT, LVM, LRV)', 'Ekomål (försvarare)', 'Organiserad brottslighet', 'Grov brottslighet', 'Medialt uppmärksammade mål', 'Målsägandebiträde', 'Särskild företrädare för barn'],
      education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
    },
    'staff-kevin': {
      title: 'Advokat / Notarius Publicus',
      bio: 'Kevin är advokat och Notarius Publicus, specialiserad på brottmål, tvångsmål (LVU, LPT, LVM) och familjerätt. Han åtar sig uppdrag som offentlig och privat försvarare, samt som målsägandebiträde och särskild företrädare för barn.',
      specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Notarius Publicus', 'Tvångsmål (LVU, LPT, LVM)', 'Organiserad brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn', 'Familjerätt (Vårdnad, boende, umgänge)'],
      education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)', 'Bosniska (Flytande)']
    },
    'staff-rosanna': {
      title: 'Paralegal',
      bio: 'Rosanna är paralegal hos oss och det är oftast henne du kommer i kontakt med när du först kommer i kontakt med oss. Hon ansvarar för vårt inledande klientmottagande, koordinerar ärenden och ger administrativt och praktiskt stöd till våra advokater.',
      specialties: ['Klientmottagande', 'Ärendekoordinering', 'Administrativt stöd'],
      education: ['Paralegal-utbildning'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
    },
    'staff-johan': {
      title: 'Advokat',
      bio: 'Johan Hansson bedriver advokatverksamhet i kontorsgemenskap med Grönvall & Partners. Han har gedigen erfarenhet av brottmål och åtar sig regelbundet uppdrag som offentlig och privat försvarare samt målsägandebiträde. Han är även specialiserad på bouppteckningar, arvstvister och familjerätt.',
      specialties: ['Bouppteckningar', 'Arvstvister', 'Brottmål (Offentlig/Privat försvarare)', 'Tvistemål', 'Affärsjuridik', 'Målsägandebiträde'],
      education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
    },
    'staff-jessica': {
      title: 'Advokatassistent',
      bio: 'Jessica Löfquist arbetar som advokatassistent i kontorsgemenskapen med Grönvall & Partners. Hon bistår advokaterna med administrativ support, klientkontakter, domstolskommunikation samt löpande ärendehantering.',
      specialties: ['Administrativ support', 'Klientmottagande', 'Ärendehantering', 'Domstolskommunikation'],
      education: [],
      languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
    }
  },
  en: {
    'staff-1': {
      title: 'Attorney / Partner',
      bio: 'Robin works with criminal defense. He possesses solid experience of media-profiled trials, and regularly appears in court as defense counsel in demanding criminal cases. Robin accepts appointments as public and private defense counsel, as well as counsel for injured parties.',
      specialties: ['Criminal Defense (Public/Private defense)', 'Organized Crime', 'Major Felonies', 'High-profile Cases', 'Counsel for Injured Parties'],
      education: ['Master of Laws (LL.M.)', 'Member of the Swedish Bar Association'],
      languages: ['Swedish (Native)', 'English (Fluent)']
    },
    'staff-josef': {
      title: 'Attorney / Partner',
      bio: 'Josef is an attorney with extensive experience in qualified and complex criminal cases. He has extensive experience representing clients in high-profile and media-reported cases as well as cases concerning organized crime and white-collar/financial crime. Josef accepts appointments as public and private defense counsel, as well as counsel for injured parties and special representative for children.\n\nHe is also regularly engaged as counsel in complex custody disputes. He also accepts appointments as public counsel in cases under LVU, LPT, and LVM.',
      specialties: ['Criminal Defense (Public/Private)', 'Compulsory Care (LVU, LPT, LVM)', 'White-Collar / Financial Crimes (Defense)', 'Organized Crime', 'Major Offences', 'Counsel for Injured Parties', 'Special Representative for Children', 'Custody Disputes & Family Law', 'Civil Litigation'],
      education: ['Master of Laws (LL.M.)', 'Bachelor of Science in Criminology', 'Member of the Swedish Bar Association'],
      languages: ['Swedish (Native)', 'English (Fluent)', 'Arabic (Fluent)']
    },
    'staff-katja': {
      title: 'Attorney / Partner',
      bio: 'Katja is an attorney with extensive experience in qualified criminal cases as well as compulsory care and forensic psychiatric care cases under LVU, LPT, LVM, and LRV. She regularly represents clients in high-profile cases as well as cases concerning serious and organized crime and financial crimes.\n\nKatja also regularly accepts appointments as counsel for injured parties and as a special representative for children.',
      specialties: ['Criminal Defense (Public/Private)', 'Compulsory Care (LVU, LPT, LVM, LRV)', 'White-Collar / Financial Crimes (Defense)', 'Organized Crime', 'Major Offences', 'High-profile Cases', 'Counsel for Injured Parties', 'Special Representative for Children'],
      education: ['Master of Laws (LL.M.)', 'Member of the Swedish Bar Association'],
      languages: ['Swedish (Native)', 'English (Fluent)']
    },
    'staff-kevin': {
      title: 'Attorney / Notary Public',
      bio: 'Kevin is an attorney and Notary Public, specializing in criminal defense, compulsory care cases (LVU, LPT, LVM), and family law. He accepts appointments as public and private defense counsel, as well as counsel for injured parties and special representative for children.',
      specialties: ['Criminal Defense (Public/Private)', 'Notary Public', 'Compulsory Care (LVU, LPT, LVM)', 'Organized Crime', 'Counsel for Injured Parties', 'Special Representative for Children', 'Family Law (Custody, residence, visitation)'],
      education: ['Master of Laws (LL.M.)', 'Member of the Swedish Bar Association'],
      languages: ['Swedish (Native)', 'English (Fluent)', 'Bosnian (Fluent)']
    },
    'staff-rosanna': {
      title: 'Paralegal',
      bio: 'Rosanna is our paralegal and is usually the first person you come into contact with when submitting an inquiry. She is responsible for our initial client reception, coordinates cases, and provides administrative and practical support to our attorneys.',
      specialties: ['Client Reception', 'Case Coordination', 'Administrative Support'],
      education: ['Paralegal Diploma'],
      languages: ['Swedish (Native)', 'English (Fluent)']
    },
    'staff-johan': {
      title: 'Attorney at Law',
      bio: 'Johan Hansson practices law in an office sharing association with Grönvall & Partners. He has extensive experience in criminal cases and regularly accepts appointments as public and private defense counsel, as well as counsel for injured parties. He is also specialized in estate distributions, inheritance disputes, and family law.',
      specialties: ['Estate Distributions', 'Inheritance Disputes', 'Criminal Defense (Public/Private)', 'Civil Litigation', 'Business Law', 'Counsel for Injured Parties'],
      education: ['Master of Laws (LL.M.)', 'Member of the Swedish Bar Association'],
      languages: ['Swedish (Native)', 'English (Fluent)']
    },
    'staff-jessica': {
      title: 'Legal Assistant',
      bio: 'Jessica Löfquist works as a legal assistant within the office sharing association with Grönvall & Partners. She assists the attorneys with administrative support, client relations, court correspondence, and ongoing case management.',
      specialties: ['Administrative Support', 'Client Relations', 'Case Management', 'Court Correspondence'],
      education: [],
      languages: ['Swedish (Native)', 'English (Fluent)']
    }
  }
};

export default function StaffSection({ language, setActiveTab }: StaffSectionProps) {
  const t = STAFF_TRANSLATIONS[language];

  // Get full list of localized staff members
  const staffData = STAFF_MEMBERS.map((member) => {
    const loc = (LOCALIZED_STAFF_MEMBERS[language] as any)[member.id] || {};
    return {
      ...member,
      title: loc.title || member.title,
      bio: loc.bio || member.bio,
      specialties: loc.specialties || member.specialties,
      education: loc.education || member.education,
      languages: loc.languages || member.languages,
    };
  });

  const regularStaff = staffData.filter((member) => !member.isOfficeSharing);
  const officeSharingStaff = staffData.filter((member) => member.isOfficeSharing);

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="staff-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
            {t.kicker}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary tracking-tight">
            {t.title}
          </h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto" />
          <p className="text-sm sm:text-base text-brand-medium font-light">
            {t.subtitle}
          </p>
        </div>

        {/* Regular Staff Section - All Medarbetare (including Delägare) */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularStaff.map((staff) => {
              return (
                <div
                  key={staff.id}
                  id={`staff-card-${staff.id}`}
                  className="bg-brand-cream border border-brand-accent/20 rounded-xl hover:border-brand-gold/50 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    {/* Large image for staff */}
                    <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] xl:aspect-[3/4] overflow-hidden rounded-lg border border-brand-gold/15 shadow-xs bg-brand-light">
                      <img
                        src={staff.imageUrl}
                        alt={staff.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-normal text-brand-primary group-hover:text-brand-gold transition-colors duration-200">
                        {staff.name}
                      </h3>
                      <div className="inline-block bg-brand-primary/5 text-brand-gold-dark font-cinzel text-xs font-medium px-3 py-1 rounded-xs uppercase tracking-wider">
                        {staff.title}
                      </div>
                      
                      {/* Direct Contacts */}
                      <div className="pt-2.5 space-y-1.5 text-xs text-brand-medium font-light border-t border-brand-accent/10 mt-2">
                        {staff.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone size={12} className="text-brand-gold shrink-0" />
                            <a href={`tel:${staff.phone.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors duration-150">
                              {staff.phone}
                            </a>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <Mail size={12} className="text-brand-gold shrink-0" />
                          <a href={`mailto:${staff.email}`} className="hover:text-brand-gold transition-colors duration-150 break-all">
                            {staff.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Biography */}
                    <p className="text-xs sm:text-sm text-brand-medium font-light leading-relaxed">
                      {staff.bio}
                    </p>

                    {/* Permanent credentials section */}
                    <div className="pt-4 border-t border-brand-accent/25 space-y-4 animate-fade-in" id={`staff-credentials-${staff.id}`}>
                      {/* Education list */}
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-brand-primary/80">
                          <BookOpen size={12} className="text-brand-gold" />
                          <span>{t.educationLabel}</span>
                        </div>
                        <ul className="list-disc pl-4 text-xs text-brand-medium space-y-1 font-light">
                          {staff.education.map((edu, i) => (
                            <li key={i}>{edu}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Languages */}
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-brand-primary/80">
                          <Globe size={12} className="text-brand-gold" />
                          <span>{t.languagesLabel}</span>
                        </div>
                        <p className="text-xs text-brand-medium font-light">
                          {staff.languages.join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Office Sharing Section */}
        {officeSharingStaff.length > 0 && (
          <div className="space-y-8 pt-8">
            <div className="border-b border-brand-accent/20 pb-4">
              <h2 className="font-cinzel text-xl sm:text-2xl font-normal text-brand-primary tracking-wide">
                {t.officeSharingHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeSharingStaff.map((staff) => {
                return (
                  <div
                    key={staff.id}
                    id={`staff-card-${staff.id}`}
                    className="bg-brand-cream border border-brand-accent/20 rounded-xl hover:border-brand-gold/50 shadow-xs hover:shadow-md transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
                      {/* Large image for staff */}
                      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] xl:aspect-[3/4] overflow-hidden rounded-lg border border-brand-gold/15 shadow-xs bg-brand-light">
                        <img
                          src={staff.imageUrl}
                          alt={staff.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-normal text-brand-primary group-hover:text-brand-gold transition-colors duration-200">
                          {staff.name}
                        </h3>
                        <div className="inline-block bg-brand-primary/5 text-brand-gold-dark font-cinzel text-xs font-medium px-3 py-1 rounded-md uppercase tracking-wider">
                          {staff.title}
                        </div>
                        
                        {/* Direct Contacts */}
                        <div className="pt-2.5 space-y-1.5 text-xs text-brand-medium font-light border-t border-brand-accent/10 mt-2">
                          {staff.phone && (
                            <div className="flex items-center space-x-2">
                              <Phone size={12} className="text-brand-gold shrink-0" />
                              <a href={`tel:${staff.phone.replace(/\s+/g, '')}`} className="hover:text-brand-gold transition-colors duration-150">
                                {staff.phone}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Mail size={12} className="text-brand-gold shrink-0" />
                            <a href={`mailto:${staff.email}`} className="hover:text-brand-gold transition-colors duration-150 break-all">
                              {staff.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Biography */}
                      <p className="text-xs sm:text-sm text-brand-medium font-light leading-relaxed">
                        {staff.bio}
                      </p>

                      {/* Permanent credentials section */}
                      <div className="pt-4 border-t border-brand-accent/25 space-y-4 animate-fade-in" id={`staff-credentials-${staff.id}`}>
                        {/* Education list */}
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-brand-primary/80">
                            <BookOpen size={12} className="text-brand-gold" />
                            <span>{t.educationLabel}</span>
                          </div>
                          <ul className="list-disc pl-4 text-xs text-brand-medium space-y-1 font-light">
                            {staff.education.map((edu, i) => (
                              <li key={i}>{edu}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Languages */}
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-brand-primary/80">
                            <Globe size={12} className="text-brand-gold" />
                            <span>{t.languagesLabel}</span>
                          </div>
                          <p className="text-xs text-brand-medium font-light">
                            {staff.languages.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Contact CTA card */}
        <div className="bg-brand-primary text-brand-cream p-8 sm:p-12 rounded-xl border border-brand-gold/20 flex flex-col md:flex-row justify-between items-center gap-6 mt-16 shadow-lg">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-cinzel text-xl text-brand-gold">
              {t.ctaTitle}
            </h3>
            <p className="text-sm text-brand-accent/80 font-light leading-relaxed">
              {t.ctaDesc}
            </p>
          </div>
          <button
            onClick={() => {
              if (setActiveTab) {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            {t.ctaBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
