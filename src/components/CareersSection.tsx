import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, CheckCircle, UploadCloud, HeartHandshake, MapPin, Clock } from 'lucide-react';
import { CAREER_POSITIONS } from '../data';

interface CareersSectionProps {
  language: 'sv' | 'en';
}

const CAREERS_TRANSLATIONS = {
  sv: {
    kicker: 'Karriär hos Grönvall & Partners',
    title: 'Forma framtidens advokatbyrå',
    subtitle: 'Vi söker ständigt exceptionella talanger. Oavsett om du är en etablerad advokat med mångårig erfarenhet eller en nyutexaminerad jurist, erbjuder vi en intellektuellt stimulerande miljö.',
    tabPositions: 'Lediga tjänster ({count})',
    tabCulture: 'Arbeta hos oss',
    backBtn: '← Tillbaka till listan',
    departmentLabel: 'Avdelning:',
    requirementsLabel: 'Kravprofil',
    qualificationsLabel: 'Önskvärda kvalifikationer',
    ctaTitle: 'Intresserad av tjänsten som {title}?',
    ctaDesc: 'Vänligen skicka ditt CV, personligt brev samt relevanta betyg/betygsutdrag till <a href="mailto:info@gronvallpartners.se" class="text-brand-primary hover:text-brand-gold font-semibold">info@gronvallpartners.se</a>. Ange referens <strong>"GP - {title}"</strong> i ämnesraden. Vi rekryterar löpande.',
    disclaimer: '* Alla ansökningar och kontakter behandlas under fullständig diskretion.',
    readMoreBtn: 'Läs mer & Sök',
    cultureTitle: 'En kultur präglad av kvalitet & samarbete',
    cultureP1: 'På Grönvall & Partners tror vi inte på intern konkurrens eller orimliga faktureringskrav på bekostnad av hälsa och kvalitet. Vi är övertygade om att det bästa juridiska arbetet utförs i ett klimat där medarbetare stöttar varandra, delar kunskap och känner trygghet.',
    cultureP2: 'Vi erbjuder våra jurister kontinuerlig vidareutbildning, moderna tekniska verktyg och flexibla arbetsmöjligheter. Vi värnar om balansen mellan privatliv och arbetsliv.',
    offerTitle: 'Vad vi erbjuder dig',
    offer1Title: 'Mentorskap',
    offer1Desc: 'Direkt samarbete med några av landets främsta brottmålsadvokater.',
    offer2Title: 'Balans',
    offer2Desc: 'En bra företagskultur och generösa villkor.',
    offer3Title: 'Utbildning',
    offer3Desc: 'Finansiering av kurser och Advokatsamfundets utbildningsprogram.',
    sponKicker: 'Öppen dörr',
    sponTitle: 'Skicka in en spontanansökan',
    sponDesc1: 'Hittar du ingen ledig tjänst som matchar din profil just nu? Vi är alltid intresserade av att komma i kontakt med engagerade advokater, jurister eller administrativ personal som delar vår filosofi.',
    sponDesc2: 'Skicka in en spontanansökan så sparar vi din profil i vår kandidatbank för framtida behov.',
    successTitle: 'Ansökan skickad',
    successDesc: 'Stort tack för ditt intresse för Grönvall & Partners. Vi har tagit emot din spontanansökan. Vår rekryteringsansvarig kommer att granska din profil och återkoppla så snart ett behov uppstår.',
    labelName: 'Namn *',
    labelPhone: 'Telefon',
    labelEmail: 'E-post *',
    labelRole: 'Önskad roll *',
    labelCoverLetter: 'Kort presentation & motivation *',
    labelResume: 'Bifoga CV (PDF/Doc) *',
    placeholderName: 'T.ex. Sofia Larsson',
    placeholderPhone: 'T.ex. 073-123 45 67',
    placeholderEmail: 'T.ex. sofia@example.com',
    placeholderCoverLetter: 'Berätta lite om din bakgrund och varför du vill arbeta på Grönvall & Partners...',
    fileUploadBtn: 'Dra hit eller klicka för att ladda upp',
    fileUploadSub: 'Endast PDF eller Word',
    btnSubmitSpon: 'Skicka spontanansökan',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.',
    optAdvokat: 'Advokat',
    optJurist: 'Biträdande jurist',
    optParalegal: 'Paralegal',
    optAdmin: 'Administrativ chef',
    optOther: 'Annat (t.ex. Studentpool)'
  },
  en: {
    kicker: 'Careers at Grönvall & Partners',
    title: 'Shape the Future of Advocacy',
    subtitle: 'We are constantly searching for exceptional talents. Whether you are an established attorney with decades of experience or a brilliant law school graduate, we offer an intellectually stimulating practice environment.',
    tabPositions: 'Open Positions ({count})',
    tabCulture: 'Our Culture',
    backBtn: '← Back to open positions',
    departmentLabel: 'Department:',
    requirementsLabel: 'Requirements',
    qualificationsLabel: 'Meritorious Qualifications',
    ctaTitle: 'Interested in the position as {title}?',
    ctaDesc: 'Please send your CV, cover letter, and relevant transcript records to <a href="mailto:info@gronvallpartners.se" class="text-brand-primary hover:text-brand-gold font-semibold">info@gronvallpartners.se</a>. Please state reference <strong>"GP - {title}"</strong> in the subject line. We recruit continuously.',
    disclaimer: '* All applications and communications are handled under strict statutory confidentiality.',
    readMoreBtn: 'Read More & Apply',
    cultureTitle: 'A Culture Defined by Quality & Cohesion',
    cultureP1: 'At Grönvall & Partners, we do not believe in internal competition or excessive billable hour targets at the expense of well-being and craftsmanship. We are convinced that the finest legal work thrives in a supportive, sharing, and secure environment.',
    cultureP2: 'We offer our professionals continuous specialized training, state-of-the-art technological tools, and flexible hybrid working policies. We safeguard the balance between private and professional life.',
    offerTitle: 'What We Offer',
    offer1Title: 'Mentorship',
    offer1Desc: 'Direct collaboration with some of the country\'s top-tier defense counsel.',
    offer2Title: 'Balance',
    offer2Desc: 'A good business culture and generous terms.',
    offer3Title: 'Development',
    offer3Desc: 'Full sponsorship of courses and the Swedish Bar Association\'s training programs.',
    sponKicker: 'Open Door Policy',
    sponTitle: 'Submit a Spontaneous Application',
    sponDesc1: 'Can\'t find an open position that fits your profile right now? We are always interested in connecting with passionate attorneys, lawyers, or administrative personnel who share our philosophy.',
    sponDesc2: 'Submit a spontaneous application and we will save your credentials in our talent pool for future opportunities.',
    successTitle: 'Application Submitted',
    successDesc: 'Thank you very much for your interest in Grönvall & Partners. We have safely received your spontaneous application. Our recruiting manager will review your profile and get in touch as soon as a need arises.',
    labelName: 'Name *',
    labelPhone: 'Phone Number',
    labelEmail: 'Email Address *',
    labelRole: 'Desired Role *',
    labelCoverLetter: 'Brief Presentation & Cover Letter *',
    labelResume: 'Attach CV (PDF/Doc) *',
    placeholderName: 'e.g., Sofia Larsson',
    placeholderPhone: 'e.g., +46 73 123 45 67',
    placeholderEmail: 'e.g., sofia@example.com',
    placeholderCoverLetter: 'Tell us a bit about your background and why you want to work with Grönvall & Partners...',
    fileUploadBtn: 'Drag and drop or click to upload',
    fileUploadSub: 'PDF or Word only',
    btnSubmitSpon: 'Submit Spontaneous Application',
    alertMissing: 'Please fill in all mandatory fields.',
    optAdvokat: 'Attorney / Advocate',
    optJurist: 'Associate Lawyer',
    optParalegal: 'Paralegal',
    optAdmin: 'Administrative Manager',
    optOther: 'Other (e.g., Student Pool)'
  }
};

const LOCALIZED_POSITIONS = {
  en: {
    'pos-1': {
      title: 'Attorney at Law',
      department: 'Criminal Defense & Business Law',
      location: 'Stockholm, Head Office',
      type: 'Full-time',
      description: 'We are looking for an attorney who is a member of the Swedish Bar Association and wants to become part of Grönvall & Partners. We welcome applications from lawyers with different backgrounds and specializations – whether your expertise lies in criminal defense, business law, or other legal practice fields. We offer a collaborative environment with excellent development opportunities and a strong focus on high quality and work-life balance.',
      requirements: [
        'Member of the Swedish Bar Association (Advokat)',
        'Experience in independent client counseling and trial litigation in criminal defense, business law, or other legal areas',
        'Strong analytical ability and impeccable professional demeanor',
        'Commitment to delivering the highest standards of legal counsel'
      ],
      qualifications: [
        'Completed court clerkship (tingstjänstgöring) is meritorious',
        'Experience with trials in general courts regarding criminal, civil, or business law is a plus',
        'Additional language skills (beyond Swedish and English) are considered an asset',
        'Ability to contribute positively to our strong cohesion and team spirit'
      ]
    },
    'pos-3': {
      title: 'Summer Intern / Thesis Intern 2027',
      department: 'Legal Support',
      location: 'Stockholm, Head Office',
      type: 'Internship',
      description: 'Are you at the final stage of your law school studies and want to get an insight into what it is like to work at a modern, collaborative law firm? We offer term-based thesis internships and summer internships where you will work with real legal research in criminal defense, civil litigation, and family law, and accompany partners to court hearings.',
      requirements: [
        'Completed at least 6 semesters of the law school program (juristprogrammet)',
        'Particular interest in criminal law, civil litigation, or family law',
        'Analytical sharpness, accuracy, and excellent writing skills'
      ],
      qualifications: [
        'Good academic record in criminal, procedural, or civil law',
        'Engagement in student activities, legal aid, or non-profit legal work',
        'Multilingualism is highly meritorious'
      ]
    }
  }
};

export default function CareersSection({ language }: CareersSectionProps) {
  const [activeTab, setActiveTab] = useState<'positions' | 'culture'>('positions');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Spontaneous application state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantTitle, setApplicantTitle] = useState('Advokat');
  const [applicantCoverLetter, setApplicantCoverLetter] = useState('');
  const [applicantResumeName, setApplicantResumeName] = useState<string | null>(null);
  const [applicantFile, setApplicantFile] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = CAREERS_TRANSLATIONS[language];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setApplicantResumeName(file.name);
      setApplicantFile(file);
    }
  };

  const handleSpontaneousSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantCoverLetter) {
      alert(t.alertMissing);
      return;
    }

    // Create FormData for send-mail.php to handle CV attachment
    const formData = new FormData();
    formData.append('type', 'careers');
    formData.append('name', applicantName);
    formData.append('email', applicantEmail);
    formData.append('phone', applicantPhone);
    formData.append('role', applicantTitle);
    formData.append('coverLetter', applicantCoverLetter);
    if (applicantFile) {
      formData.append('resume', applicantFile);
    }

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

  // Get localized positions list
  const positionsData = CAREER_POSITIONS.map((job) => {
    if (language === 'en' && LOCALIZED_POSITIONS.en[job.id as keyof typeof LOCALIZED_POSITIONS.en]) {
      const loc = LOCALIZED_POSITIONS.en[job.id as keyof typeof LOCALIZED_POSITIONS.en];
      return {
        ...job,
        title: loc.title,
        department: loc.department,
        location: loc.location,
        type: loc.type,
        description: loc.description,
        requirements: loc.requirements,
        qualifications: loc.qualifications
      };
    }
    return job;
  });

  const selectedJob = positionsData.find((job) => job.id === selectedJobId);

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="careers-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
            {t.kicker}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary tracking-tight leading-tight">
            {t.title}
          </h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Culture vs Job Positions Switcher */}
        <div className="flex justify-center border-b border-brand-accent/25 max-w-md mx-auto" id="career-sub-nav">
          <button
            onClick={() => { setActiveTab('positions'); setSelectedJobId(null); }}
            className={`w-1/2 py-3 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 cursor-pointer ${
              activeTab === 'positions'
                ? 'border-brand-gold text-brand-primary font-semibold'
                : 'border-transparent text-brand-medium hover:text-brand-primary'
            }`}
          >
            {t.tabPositions.replace('{count}', String(positionsData.length))}
          </button>
          <button
            onClick={() => setActiveTab('culture')}
            className={`w-1/2 py-3 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 cursor-pointer ${
              activeTab === 'culture'
                ? 'border-brand-gold text-brand-primary font-semibold'
                : 'border-transparent text-brand-medium hover:text-brand-primary'
            }`}
          >
            {t.tabCulture}
          </button>
        </div>

        {/* --- SECTION 1: POSITIONS LIST OR DETAIL --- */}
        {activeTab === 'positions' && (
          <div className="space-y-8">
            {selectedJob ? (
              /* Job details view */
              <div className="bg-brand-cream border border-brand-accent/20 p-8 rounded-xl space-y-6 animate-fade-in" id="job-detail-view">
                <button
                  onClick={() => setSelectedJobId(null)}
                  className="text-brand-primary hover:text-brand-gold font-semibold text-xs uppercase tracking-wider inline-flex items-center space-x-1 cursor-pointer"
                >
                  {t.backBtn}
                </button>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 text-xs text-brand-medium">
                    <span className="flex items-center space-x-1 bg-brand-primary/5 px-2.5 py-1 rounded-md">
                      <MapPin size={12} className="text-brand-gold" />
                      <span>{selectedJob.location}</span>
                    </span>
                    <span className="flex items-center space-x-1 bg-brand-primary/5 px-2.5 py-1 rounded-md">
                      <Clock size={12} className="text-brand-gold" />
                      <span>{selectedJob.type}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
                    {selectedJob.title}
                  </h2>
                  <p className="text-xs text-brand-gold font-cinzel tracking-wider uppercase">
                    {t.departmentLabel} {selectedJob.department}
                  </p>
                </div>

                <div className="text-sm sm:text-base text-brand-medium font-light leading-relaxed whitespace-pre-line border-t border-brand-accent/15 pt-6">
                  {selectedJob.description}
                </div>

                {/* Requirements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase text-brand-primary/80 tracking-wider">{t.requirementsLabel}</h4>
                  <ul className="list-disc pl-5 text-sm text-brand-medium font-light space-y-1.5">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Meritorious Qualifications */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase text-brand-primary/80 tracking-wider">{t.qualificationsLabel}</h4>
                  <ul className="list-disc pl-5 text-sm text-brand-medium font-light space-y-1.5">
                    {selectedJob.qualifications.map((qual, i) => (
                      <li key={i}>{qual}</li>
                    ))}
                  </ul>
                </div>

                {/* Application CTA within details */}
                <div className="bg-brand-light p-6 rounded-lg border border-brand-accent/15 space-y-4">
                  <h4 className="font-cinzel text-brand-primary text-sm font-semibold">
                    {t.ctaTitle.replace(/{title}/g, selectedJob.title)}
                  </h4>
                  <div 
                    className="text-xs sm:text-sm text-brand-medium font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.ctaDesc.replace(/{title}/g, selectedJob.title) }}
                  />
                  <p className="text-xs text-brand-medium/70 italic">
                    {t.disclaimer}
                  </p>
                </div>
              </div>
            ) : (
              /* Jobs list */
              <div className="space-y-6" id="jobs-list">
                {positionsData.map((job) => (
                  <div
                    key={job.id}
                    id={`job-card-${job.id}`}
                    className="bg-brand-cream border border-brand-accent/15 hover:border-brand-gold/40 p-6 sm:p-8 rounded-xl hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-xl font-normal text-brand-primary">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs text-brand-medium/70 font-light">
                        <span className="text-brand-gold font-semibold uppercase tracking-wider font-cinzel">{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJobId(job.id)}
                      id={`view-job-btn-${job.id}`}
                      className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/30 hover:border-brand-gold px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer shrink-0"
                    >
                      {t.readMoreBtn}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- SECTION 2: CULTURE --- */}
        {activeTab === 'culture' && (
          <div className="space-y-12 animate-fade-in" id="culture-section">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
                  {t.cultureTitle}
                </h2>
                <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
                  {t.cultureP1}
                </p>
                <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed">
                  {t.cultureP2}
                </p>
              </div>
              <div className="md:col-span-5 bg-brand-primary text-brand-cream p-8 rounded-xl space-y-6 shadow-md border border-brand-gold/25">
                <h3 className="font-cinzel text-brand-gold text-sm tracking-wider uppercase font-semibold">
                  {t.offerTitle}
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm font-light text-brand-accent/90">
                  <li className="flex items-start space-x-3">
                    <Award size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>{t.offer1Title}</strong>: {t.offer1Desc}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <HeartHandshake size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>{t.offer2Title}</strong>: {t.offer2Desc}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* --- SPONTANEOUS APPLICATION (Spontanansökan) --- */}
        <section className="bg-brand-light p-8 sm:p-12 border border-brand-accent/20 rounded-xl" id="spontaneous-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
                {t.sponKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-brand-primary tracking-tight">
                {t.sponTitle}
              </h2>
              <p className="text-sm text-brand-medium font-light leading-relaxed">
                {t.sponDesc1}
              </p>
              <p className="text-sm text-brand-medium font-light leading-relaxed">
                {t.sponDesc2}
              </p>
            </div>

            <div className="lg:col-span-7 bg-brand-cream border border-brand-accent/25 p-6 sm:p-8 rounded-xl shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in" id="careers-success-view">
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
                <form onSubmit={handleSpontaneousSubmit} className="space-y-4 text-xs sm:text-sm text-brand-medium font-light">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelName}</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder={t.placeholderName}
                        className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelPhone}</label>
                      <input
                        type="tel"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
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
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder={t.placeholderEmail}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Role Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelRole}</label>
                    <select
                      value={applicantTitle}
                      onChange={(e) => setApplicantTitle(e.target.value)}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden font-light"
                    >
                      <option value="Advokat">{t.optAdvokat}</option>
                      <option value="Biträdande jurist">{t.optJurist}</option>
                      <option value="Paralegal">{t.optParalegal}</option>
                      <option value="Administrativ chef">{t.optAdmin}</option>
                      <option value="Annat">{t.optOther}</option>
                    </select>
                  </div>

                  {/* Cover letter */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelCoverLetter}</label>
                    <textarea
                      required
                      rows={4}
                      value={applicantCoverLetter}
                      onChange={(e) => setApplicantCoverLetter(e.target.value)}
                      placeholder={t.placeholderCoverLetter}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-md px-3 py-2 text-brand-dark focus:outline-hidden font-light leading-relaxed"
                    />
                  </div>

                  {/* File Upload (Resume/CV) */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelResume}</label>
                    <div className="border border-dashed border-brand-accent/40 rounded-lg p-4 bg-brand-light/20 flex flex-col items-center justify-center hover:bg-brand-light/40 transition-colors duration-150 cursor-pointer relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        id="resume-file-input"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <UploadCloud size={28} className="text-brand-gold mb-1.5" />
                      <span className="text-xs font-medium text-brand-primary">
                        {applicantResumeName ? applicantResumeName : t.fileUploadBtn}
                      </span>
                      <span className="text-[10px] text-brand-medium/50 mt-0.5">{t.fileUploadSub}</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      id="submit-spontaneous-btn"
                      className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark border border-brand-gold-dark/20 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      {t.btnSubmitSpon}
                    </button>
                    <p className="text-[11px] text-center text-brand-medium/70 italic">
                      {t.disclaimer}
                    </p>
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
