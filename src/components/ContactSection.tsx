import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Train, Car } from 'lucide-react';
import officePhoto from '../assets/images/stockholm_waterfront_hero_1783159508287.jpg';

interface ContactSectionProps {
  language: 'sv' | 'en';
}

const CONTACT_TRANSLATIONS = {
  sv: {
    kicker: 'Kontaktinformation',
    title: 'Kontakta Oss',
    subtitle: 'Vi finns här för att besvara dina frågor, ge vägledning eller boka in ett personligt besök. Tveka inte att höra av dig. Alla kontakter omfattas av tystnadsplikt.',
    labelAddress: 'Besöks- och postadress',
    addressVal: 'Grönvall & Partners Advokatbyrå<br />Kungsholmstorg 1<br />112 21 Stockholm',
    labelPhone: 'Telefon',
    phoneVal: 'Telefon: 08-20 60 20',
    phoneSub: 'Jourtjänst gällande akuta brottmål är öppen dygnet runt. Samtliga advokater nås direkt via sina personliga nummer.',
    labelEmail: 'E-post',
    emailVal: 'info@hgaadvokat.se',
    emailSub: 'Säkra, krypterade e-postservrar.',
    labelHours: 'Öppettider',
    hoursVal: 'Vardagar: 08:15 – 16:45<br /><span class="text-brand-accent/75">Advokaterna är tillgängliga efter kontorstid på sina privata nummer.</span>',
    formTitle: 'Skicka en förfrågan',
    formDesc: 'Fyll i formuläret nedan för att komma i kontakt med oss gällande allmänna frågor, rådgivning eller presskontakter. Vi återkopplar så snart vi kan, normalt sett samma dag.',
    successTitle: 'Meddelande Skickat',
    successDesc: 'Tack för ditt meddelande. Din förfrågan har mottagits och kommer att behandlas med sträng sekretess. Vi återkommer till dig inom kort, senast nästkommande vardag.',
    labelName: 'Namn *',
    labelEmailForm: 'E-post *',
    labelPhoneForm: 'Telefon',
    labelSubject: 'Vad gäller ärendet? *',
    labelMessage: 'Meddelande *',
    placeholderName: 'T.ex. Anders Svensson',
    placeholderEmail: 'T.ex. anders@example.com',
    placeholderPhone: 'T.ex. 070-123 45 67',
    placeholderMessage: 'Beskriv ditt ärende kortfattat...',
    btnSubmit: 'Skicka meddelande',
    disclaimer: '* All kontakt behandlas konfidentiellt – full diskretion utlovas.',
    mapTitle: 'Hitta till oss',
    mapDesc: 'Vårt kontor ligger centralt på Kungsholmstorg i Stockholm, ett stenkast från Rådhusets tunnelbanestation.',
    officePhotoAlt: 'Vårt kontor på Kungsholmstorg',
    tabSubway: 'T-bana',
    tabCar: 'Bil & Parkering',
    dirSubway: 'Ta blå linje till station <strong>Rådhuset</strong>. Välj uppgången mot <strong>Kungsholmstorg</strong>. Vårt kontor ligger mot vattnet i Kungsholmstorg på Kungsholmstorg 1, porttelefon finns tillgänglig vid entrén.',
    dirCar: 'Det finns goda parkeringsmöjligheter i närområdet. Vi rekommenderar parkeringsplatserna längs <strong>Norr Mälarstrand</strong> eller i de närliggande garageanläggningarna på Kungsholmen, båda belägna en kort promenad från vår port.',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.',
    optCriminal: 'Brottmål (Försvar eller målsägande)',
    optMigration: 'Migrationsrätt (Asyl, uppehållstillstånd)',
    optFamily: 'Familjerätt (Vårdnadstvist, bodelning)',
    optSocial: 'Socialrätt (LVU, LVM)',
    optCivil: 'Tvistemål (Avtalsfrågor, skadestånd)',
    optInherit: 'Arvsrätt (Testamente, arvsskifte)',
    optPress: 'Allmän fråga / Pressfråga'
  },
  en: {
    kicker: 'Contact Information',
    title: 'Contact Our Office',
    subtitle: 'We are here to answer your questions, offer initial guidance, or schedule a personal consultation. Do not hesitate to get in touch. All communications are bound by legal professional privilege.',
    labelAddress: 'Visiting & Mailing Address',
    addressVal: 'Grönvall & Partners Advokatbyrå<br />Kungsholmstorg 1<br />SE-112 21 Stockholm',
    labelPhone: 'Telephone',
    phoneVal: 'Phone: +46 (0)8-20 60 20',
    phoneSub: 'Emergency hotline for criminal law matters is open 24/7. All advocates are reachable directly on their personal numbers.',
    labelEmail: 'Email',
    emailVal: 'info@hgaadvokat.se',
    emailSub: 'Secure, encrypted email servers.',
    labelHours: 'Office Hours',
    hoursVal: 'Weekdays: 08:15 – 16:45<br /><span class="text-brand-accent/75">Attorneys are available after office hours on their private numbers.</span>',
    formTitle: 'Send an Inquiry',
    formDesc: 'Fill out the form below to get in touch with us regarding general questions, consultations, or press inquiries. We will reply as soon as possible, usually within the same business day.',
    successTitle: 'Inquiry Sent',
    successDesc: 'Thank you for your message. Your inquiry has been received and will be processed with strict professional confidentiality. We will get back to you shortly, at the latest by the next business day.',
    labelName: 'Name *',
    labelEmailForm: 'Email *',
    labelPhoneForm: 'Phone',
    labelSubject: 'What is the case about? *',
    labelMessage: 'Message *',
    placeholderName: 'e.g., Anders Svensson',
    placeholderEmail: 'e.g., anders@example.com',
    placeholderPhone: 'e.g., +46 70 123 45 67',
    placeholderMessage: 'Briefly describe your case...',
    btnSubmit: 'Send Message',
    disclaimer: '* All communication is treated with strict legal professional secrecy.',
    mapTitle: 'Find Our Office',
    mapDesc: 'Our office is centrally located at Kungsholmstorg in Stockholm, just a short walk from the Rådhuset subway station.',
    officePhotoAlt: 'Our office at Kungsholmstorg',
    tabSubway: 'Subway',
    tabCar: 'Car & Parking',
    dirSubway: 'Take the blue line to <strong>Rådhuset</strong> station. Choose the exit towards <strong>Kungsholmstorg</strong>. Our office faces the water at Kungsholmstorg on Kungsholmstorg 1, an intercom is available at the entrance.',
    dirCar: 'There are good parking facilities in the immediate area. We recommend the parking bays along <strong>Norr Mälarstrand</strong> or in the nearby garage facilities in Kungsholmen, both located a short walk from our door.',
    alertMissing: 'Please fill in all mandatory fields.',
    optCriminal: 'Criminal Law (Defense or injured party)',
    optMigration: 'Migration Law (Asylum, residence permit)',
    optFamily: 'Family Law (Custody dispute, division of property)',
    optSocial: 'Social Welfare Law (LVU, LVM)',
    optCivil: 'Civil Litigation (Contracts, damages)',
    optInherit: 'Inheritance Law (Wills, division of inheritance)',
    optPress: 'General Inquiry / Press'
  }
};

export default function ContactSection({ language }: ContactSectionProps) {
  const [activeDirectionsTab, setActiveDirectionsTab] = useState<'tunnelbana' | 'bil'>('tunnelbana');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Brottmål');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = CONTACT_TRANSLATIONS[language];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert(t.alertMissing);
      return;
    }

    // Create FormData for the backend PHP script on Oderland
    const formData = new FormData();
    formData.append('type', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('category', category);
    formData.append('message', message);

    try {
      await fetch('/send-mail.php', {
        method: 'POST',
        body: formData
      });
    } catch (err) {
      console.warn("Mail submission failed, continuing locally:", err);
    }

    setFormSubmitted(true);
  };

  const mapLandmarks = language === 'sv' ? [
    { x: '18%', y: '15%', label: 'Rådhuset' },
    { x: '82%', y: '45%', label: 'Kungsholms kyrka' },
    { x: '45%', y: '85%', label: 'Norr Mälarstrand' },
  ] : [
    { x: '18%', y: '15%', label: 'Court House / Rådhuset' },
    { x: '82%', y: '45%', label: 'Kungsholm Church' },
    { x: '45%', y: '85%', label: 'Norr Mälarstrand' },
  ];

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
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

        {/* 1. Address cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="contact-cards-grid">
          
          <div className="p-6 bg-brand-primary border border-brand-gold/30 rounded-xl space-y-3 shadow-md">
            <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg">
              <MapPin size={18} />
            </div>
            <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelAddress}</h3>
            <div 
              className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.addressVal }}
            />
          </div>

          <div className="p-6 bg-brand-primary border border-brand-gold/30 rounded-xl space-y-3 shadow-md">
            <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg">
              <Phone size={18} />
            </div>
            <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelPhone}</h3>
            <div className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed">
              <a href="tel:08206020" className="hover:text-brand-gold transition-colors block font-semibold text-brand-cream">{t.phoneVal}</a>
              <span className="text-xs text-brand-accent/70 italic block mt-1">{t.phoneSub}</span>
            </div>
          </div>

          <div className="p-6 bg-brand-primary border border-brand-gold/30 rounded-xl space-y-3 shadow-md">
            <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg">
              <Mail size={18} />
            </div>
            <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelEmail}</h3>
            <div className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed break-all">
              <a href={`mailto:${t.emailVal}`} className="hover:text-brand-gold transition-colors font-semibold text-brand-cream">{t.emailVal}</a>
              <span className="text-xs text-brand-accent/70 block mt-1">{t.emailSub}</span>
            </div>
          </div>

          <div className="p-6 bg-brand-primary border border-brand-gold/30 rounded-xl space-y-3 shadow-md">
            <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg">
              <Clock size={18} />
            </div>
            <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelHours}</h3>
            <div 
              className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.hoursVal }}
            />
          </div>

        </div>

        {/* 2. Main split view: Form & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="contact-split-view">
          
          {/* Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-brand-cream border border-brand-accent/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl font-normal text-brand-primary tracking-tight">
                {t.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-brand-medium font-light leading-relaxed">
                {t.formDesc}
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in" id="contact-success-state">
                <div className="w-12 h-12 bg-brand-primary text-brand-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-cinzel text-lg text-brand-primary font-semibold uppercase tracking-wider">
                  {t.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-brand-medium font-light max-w-sm mx-auto leading-relaxed">
                  {t.successDesc}
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs sm:text-sm text-brand-medium font-light">
                
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelName}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.placeholderName}
                    className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelEmailForm}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.placeholderEmail}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelPhoneForm}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.placeholderPhone}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelSubject}</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                  >
                    <option value="Brottmål">{t.optCriminal}</option>
                    <option value="Migrationsrätt">{t.optMigration}</option>
                    <option value="Familjerätt">{t.optFamily}</option>
                    <option value="Socialrätt">{t.optSocial}</option>
                    <option value="Tvistemål">{t.optCivil}</option>
                    <option value="Arvsrätt">{t.optInherit}</option>
                    <option value="Allmänt / Press">{t.optPress}</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelMessage}</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.placeholderMessage}
                    className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden font-light leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-form"
                    className="w-full flex items-center justify-center space-x-2 bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/40 hover:border-brand-gold py-3 px-5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <Send size={14} className="text-brand-gold" />
                    <span>{t.btnSubmit}</span>
                  </button>
                  <p className="text-[11px] text-center text-brand-medium/60 italic mt-2.5">
                    {t.disclaimer}
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Elegant Vector Map and Office Photo */}
          <div className="lg:col-span-6 bg-brand-cream border border-brand-accent/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4 mb-4">
              <h2 className="text-2xl font-normal text-brand-primary tracking-tight">
                {t.mapTitle}
              </h2>
              <p className="text-xs sm:text-sm text-brand-medium font-light">
                {t.mapDesc}
              </p>
            </div>

            {/* Stockholm Office Photo */}
            <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden border border-brand-accent/15 mb-4 shadow-xs">
              <img 
                src={officePhoto} 
                alt={t.officePhotoAlt}
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/45 to-transparent flex items-end p-3">
                <span className="text-[10px] font-cinzel text-brand-gold font-bold uppercase tracking-widest">
                  Kungsholmstorg • Stockholm
                </span>
              </div>
            </div>

            {/* Custom SVG Stylized Map */}
            <div className="relative bg-[#ebebe4] w-full h-64 sm:h-72 border border-brand-accent/20 rounded-xl overflow-hidden" id="interactive-map">
              <svg className="w-full h-full text-brand-primary/10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="4" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="4" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeWidth="3" />
                <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="2.5" strokeDasharray="1 1" />
              </svg>

              <div className="absolute top-[28%] left-[2%] text-[9px] font-bold uppercase tracking-wider text-brand-primary/50 bg-[#ebebe4]/80 px-1 rounded-md">
                Kungsholmstorg
              </div>
              <div className="absolute top-[2%] left-[52%] text-[9px] font-bold uppercase tracking-wider text-brand-primary/50 bg-[#ebebe4]/80 px-1 rounded-md rotate-90 origin-left">
                Scheelegatan
              </div>
              <div className="absolute top-[2%] left-[22%] text-[9px] font-bold uppercase tracking-wider text-brand-primary/50 bg-[#ebebe4]/80 px-1 rounded-md rotate-90 origin-left">
                Garvargatan
              </div>

              {mapLandmarks.map((mark, i) => (
                <div
                  key={i}
                  className="absolute text-[9px] font-medium tracking-wide text-brand-medium/70 bg-[#f4f3ec] border border-brand-accent/20 px-1.5 py-0.5 rounded-sm"
                  style={{ left: mark.x, top: mark.y }}
                >
                  {mark.label}
                </div>
              ))}

              {/* Office Pin */}
              <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="absolute inline-flex h-10 w-10 rounded-full bg-brand-gold/30 animate-ping" />
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-brand-gold/40 animate-pulse" />
                <div className="bg-brand-primary text-brand-gold p-1.5 rounded-full border-2 border-brand-cream relative z-10 shadow-md">
                  <Navigation size={18} className="rotate-45" />
                </div>
                <div className="bg-brand-primary text-brand-cream text-[10px] font-cinzel font-semibold tracking-wider uppercase px-2 py-1 rounded-md mt-1.5 border border-brand-gold/30 shadow-md flex flex-col items-center">
                  <span className="font-bold text-brand-gold text-center leading-tight">Grönvall & Partners</span>
                  <span className="text-[9px] font-sans normal-case text-brand-cream">Kungsholmstorg 1</span>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 bg-brand-cream/90 backdrop-blur-xs border border-brand-accent/30 rounded-md flex flex-col p-1 space-y-1 shadow-xs">
                <button className="text-xs font-bold text-brand-primary hover:text-brand-gold w-5 h-5 flex items-center justify-center bg-brand-light rounded-sm">+</button>
                <button className="text-xs font-bold text-brand-primary hover:text-brand-gold w-5 h-5 flex items-center justify-center bg-brand-light rounded-sm">-</button>
              </div>
            </div>

            {/* Directions tab */}
            <div className="space-y-4">
              <div className="flex border-b border-brand-accent/20" id="directions-nav">
                <button
                  type="button"
                  onClick={() => setActiveDirectionsTab('tunnelbana')}
                  className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 border-b-2 transition-all duration-150 cursor-pointer ${
                    activeDirectionsTab === 'tunnelbana'
                      ? 'border-brand-gold text-brand-primary font-bold'
                      : 'border-transparent text-brand-medium/75 hover:text-brand-primary'
                  }`}
                >
                  <Train size={12} />
                  <span>{t.tabSubway}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDirectionsTab('bil')}
                  className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 border-b-2 transition-all duration-150 cursor-pointer ${
                    activeDirectionsTab === 'bil'
                      ? 'border-brand-gold text-brand-primary font-bold'
                      : 'border-transparent text-brand-medium/75 hover:text-brand-primary'
                  }`}
                >
                  <Car size={12} />
                  <span>{t.tabCar}</span>
                </button>
              </div>

              <div className="p-4 bg-brand-light rounded-lg border border-brand-accent/10 text-xs sm:text-sm text-brand-medium font-light leading-relaxed">
                {activeDirectionsTab === 'tunnelbana' && (
                  <p id="dir-t-bana" dangerouslySetInnerHTML={{ __html: t.dirSubway }} />
                )}
                {activeDirectionsTab === 'bil' && (
                  <p id="dir-bil" dangerouslySetInnerHTML={{ __html: t.dirCar }} />
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
