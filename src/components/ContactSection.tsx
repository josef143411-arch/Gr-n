import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation, Train, Car } from 'lucide-react';

interface ContactSectionProps {
  language: 'sv' | 'en';
}

const CONTACT_TRANSLATIONS = {
  sv: {
    kicker: 'Kontaktinformation',
    title: 'Kontakta oss',
    subtitle: 'Vi finns här för att besvara dina frågor, ge vägledning eller boka in ett personligt besök. Tveka inte att höra av dig. Alla kontakter omfattas av tystnadsplikt.',
    labelAddress: 'Besöks- och postadress',
    addressVal: 'Grönvall & Partners Advokatbyrå<br />Kungsholmstorg 1<br />112 21 Stockholm',
    labelPhone: 'Telefon',
    phoneVal: 'Telefon: 08-20 60 20',
    phoneSub: 'Jourtjänst gällande akuta brottmål är öppen dygnet runt. Samtliga advokater nås direkt via sina personliga nummer.',
    labelEmail: 'E-post',
    emailVal: 'info@gronvallpartners.se',
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
    dirSubway: 'Ta blå linje till station <strong>Rådhuset</strong>. Välj uppgången mot <strong>Kungsholmstorg</strong> och promenera några minuter till <strong>Kungsholmstorg 1</strong>. Porttelefon finns tillgänglig vid entrén.',
    dirCar: 'Det finns goda parkeringsmöjligheter i närområdet, bland annat parkering med <strong>Taxa 3</strong> och <strong>Taxa 2</strong> i direkt närhet. Vi rekommenderar även parkeringsplatserna längs <strong>Norr Mälarstrand</strong>.',
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
    emailVal: 'info@gronvallpartners.se',
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
    dirSubway: 'Take the blue line to <strong>Rådhuset</strong> station. Choose the exit towards <strong>Kungsholmstorg</strong> and walk a few minutes to <strong>Kungsholmstorg 1</strong>. An intercom is available at the entrance.',
    dirCar: 'There are good parking facilities in the immediate area, including parking with <strong>Rate 3 (Taxa 3)</strong> and <strong>Rate 2 (Taxa 2)</strong> in the direct vicinity. We also recommend the parking bays along <strong>Norr Mälarstrand</strong>.',
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
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stockholmTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Stockholm" });
      const date = new Date(stockholmTime);
      const day = date.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      const openTimeInMinutes = 8 * 60 + 15; // 08:15
      const closeTimeInMinutes = 16 * 60 + 45; // 16:45

      const isWeekday = day >= 1 && day <= 5;
      const isOpen = isWeekday && currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes;
      
      setIsOpenNow(isOpen);
    } catch (e) {
      setIsOpenNow(null);
    }
  }, []);

  const scrollToMap = () => {
    const mapEl = document.getElementById('interactive-map');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      mapEl.classList.add('ring-4', 'ring-brand-gold/70', 'scale-[1.01]', 'transition-all', 'duration-300');
      setTimeout(() => {
        mapEl.classList.remove('ring-4', 'ring-brand-gold/70', 'scale-[1.01]');
      }, 1500);
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" id="contact-cards-grid">
          
          {/* Address Card */}
          <div 
            onClick={scrollToMap}
            className="group p-6 bg-brand-primary border border-brand-gold/30 rounded-xl flex flex-col justify-between shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-brand-gold h-full"
          >
            <div className="space-y-3">
              <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg transition-colors group-hover:bg-brand-gold group-hover:text-brand-primary">
                <MapPin size={18} />
              </div>
              <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelAddress}</h3>
              <div 
                className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.addressVal }}
              />
            </div>
            <div className="pt-4 border-t border-brand-cream/10 mt-auto text-[11px] text-brand-gold/80 font-medium group-hover:text-brand-gold transition-colors flex items-center justify-between">
              <span>{language === 'sv' ? 'Visa på kartan' : 'View on map'}</span>
              <span>→</span>
            </div>
          </div>

          {/* Phone Card */}
          <div 
            onClick={() => window.open('tel:08206020', '_self')}
            className="group p-6 bg-brand-primary border border-brand-gold/30 rounded-xl flex flex-col justify-between shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-brand-gold h-full"
          >
            <div className="space-y-3">
              <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg transition-colors group-hover:bg-brand-gold group-hover:text-brand-primary">
                <Phone size={18} />
              </div>
              <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelPhone}</h3>
              <div className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed">
                <span className="block font-semibold text-brand-cream text-sm hover:text-brand-gold transition-colors">{t.phoneVal}</span>
                <span className="text-xs text-brand-accent/70 italic block mt-1">{t.phoneSub}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-cream/10 mt-auto text-[11px] text-brand-gold/80 font-medium group-hover:text-brand-gold transition-colors flex items-center justify-between">
              <span>{language === 'sv' ? 'Ring oss nu' : 'Call us now'}</span>
              <span>→</span>
            </div>
          </div>

          {/* Email Card */}
          <div 
            onClick={() => window.open(`mailto:${t.emailVal}`, '_self')}
            className="group p-6 bg-brand-primary border border-brand-gold/30 rounded-xl flex flex-col justify-between shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-brand-gold h-full"
          >
            <div className="space-y-3">
              <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg transition-colors group-hover:bg-brand-gold group-hover:text-brand-primary">
                <Mail size={18} />
              </div>
              <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelEmail}</h3>
              <div className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed break-all">
                <span className="font-semibold text-brand-cream hover:text-brand-gold transition-colors">{t.emailVal}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-cream/10 mt-auto text-[11px] text-brand-gold/80 font-medium group-hover:text-brand-gold transition-colors flex items-center justify-between">
              <span>{language === 'sv' ? 'Skicka e-post' : 'Send email'}</span>
              <span>→</span>
            </div>
          </div>

          {/* Hours Card */}
          <div 
            className="p-6 bg-brand-primary border border-brand-gold/30 rounded-xl flex flex-col justify-between shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg h-full"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-brand-cream/10 text-brand-gold inline-block rounded-lg">
                  <Clock size={18} />
                </div>
                {isOpenNow !== null && (
                  <div>
                    {isOpenNow ? (
                      <span className="inline-flex items-center text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {language === 'sv' ? '● Öppet' : '● Open'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-[10px] bg-amber-500/10 text-amber-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-amber-500/20">
                        {language === 'sv' ? '● Stängt' : '● Closed'}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <h3 className="font-cinzel text-brand-gold font-semibold text-sm uppercase tracking-wider">{t.labelHours}</h3>
              <div 
                className="text-xs sm:text-sm text-brand-cream/90 font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.hoursVal }}
              />
            </div>
            <div className="pt-4 border-t border-brand-cream/10 mt-auto text-[11px] text-brand-accent/70 italic">
              {isOpenNow ? (
                <span>{language === 'sv' ? 'Välkommen att ringa eller besöka oss' : 'Welcome to call or visit us'}</span>
              ) : (
                <span>{language === 'sv' ? 'Jourtelefonen är öppen dygnet runt' : '24/7 emergency hotline is open'}</span>
              )}
            </div>
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
                    className="w-full flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark border border-brand-gold-dark/20 py-3 px-5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Send size={14} className="text-brand-dark" />
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

            {/* Google Maps Interactive Map */}
            <div className="relative w-full h-80 sm:h-96 border border-brand-accent/20 rounded-xl overflow-hidden shadow-xs bg-[#ebebe4] mb-6" id="interactive-map">
              <iframe
                title="Grönvall & Partners Advokatbyrå"
                src="https://maps.google.com/maps?q=Kungsholmstorg%201,%20112%2021%20Stockholm&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
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
