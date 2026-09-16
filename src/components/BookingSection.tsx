import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Check, AlertCircle, Download, Trash2, CalendarCheck } from 'lucide-react';
import { STAFF_MEMBERS } from '../data';
import { Booking } from '../types';

interface BookingSectionProps {
  language: 'sv' | 'en';
}

const BOOKING_TRANSLATIONS = {
  sv: {
    kicker: 'Onlinebokning',
    title: 'Boka möte',
    subtitle: 'Snabbt, säkert och konfidentiellt. Boka ett inledande möte online gällande ditt ärende och ange dina önskemål.',
    receiptTitle: 'Bokningsförfrågan Skickad!',
    receiptDesc: 'Tack för din bokning. En preliminär reservation har gjorts i vårt system. En handläggare kommer att granska ditt ärende och bekräfta mötet via e-post eller telefon inom kort.',
    refLabel: 'Bokningsreferens:',
    nameLabel: 'Namn:',
    contactLabel: 'Kontaktuppgifter:',
    areaLabel: 'Rättsområde:',
    advisorLabel: 'Önskad handläggare:',
    dateTimeLabel: 'Vald Tid & Datum:',
    statusLabel: 'Status:',
    statusPending: 'Väntar på bekräftelse',
    btnPrint: 'Skriv ut bekräftelse',
    btnBookMore: 'Boka ett till möte',
    step1: 'Rättsområde',
    step2: 'Tid & Datum',
    step3: 'Dina Uppgifter',
    step1Title: 'Välj Rättsområde & Rådgivare',
    step1Desc: 'Ange vad ditt ärende handlar om och om du önskar en specifik handläggare.',
    areaQuestion: 'Vilket rättsområde rör ditt ärende? *',
    preferredLabel: 'Önskad Handläggare / Jurist',
    anyStaff: 'Bästa tillgängliga advokat/jurist för valt rättsområde',
    btnNext1: 'Fortsätt till datum & tid',
    step2Title: 'Välj Datum & Tid',
    step2Desc: 'Välj ett ledigt datum och därefter en tillgänglig tidsslot.',
    dateQuestion: 'Välj Datum *',
    timeQuestion: 'Välj Tid *',
    dateAlert: 'Vänligen välj ett datum till vänster först för att se lediga tider.',
    btnBack: 'Tillbaka',
    btnNext2: 'Fortsätt till kontaktuppgifter',
    step3Title: 'Dina Uppgifter & Ärende',
    step3Desc: 'Vänligen fyll i dina kontaktuppgifter samt beskriv kortfattat vad ärendet handlar om.',
    labelFullName: 'Fullständigt Namn *',
    labelEmail: 'E-post *',
    labelPhone: 'Telefonnummer *',
    labelDesc: 'Kort beskrivning av ärendet *',
    placeholderDesc: 'Beskriv kortfattat bakgrunden till ditt ärende. Inga uppgifter lämnas någonsin ut och allt raderas enligt gallringsregler vid eventuellt avslutat ärende...',
    btnSubmit: 'Skicka bokningsförfrågan',
    confidentialNote: '* All information skyddas av lagstadgad tystnadsplikt – full diskretion utlovas.',
    sidebarTitle: 'Valt Mötesscenario',
    sidebarNotChosen: 'Ej valt ännu',
    sidebarHistory: 'Mina Bokningar',
    btnCancel: 'Avboka möte',
    cancelConfirm: 'Är du säker på att du vill avboka detta möte?',
    alertArea: 'Vänligen välj ett rättsområde.',
    alertDateTime: 'Vänligen välj både datum och tid.',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.',
    anyStaffShort: 'Valfri tillgänglig jurist'
  },
  en: {
    kicker: 'Online Booking',
    title: 'Book a Consultation',
    subtitle: 'Fast, secure, and fully confidential. Request an initial consultation online and state your preferences.',
    receiptTitle: 'Booking Request Submitted!',
    receiptDesc: 'Thank you for your booking. A preliminary reservation has been recorded. Our coordinator will review your case details and confirm your meeting via email or telephone shortly.',
    refLabel: 'Booking Reference:',
    nameLabel: 'Name:',
    contactLabel: 'Contact Details:',
    areaLabel: 'Practice Area:',
    advisorLabel: 'Preferred Attorney:',
    dateTimeLabel: 'Selected Time & Date:',
    statusLabel: 'Status:',
    statusPending: 'Awaiting confirmation',
    btnPrint: 'Print confirmation',
    btnBookMore: 'Book another consultation',
    step1: 'Practice Area',
    step2: 'Date & Time',
    step3: 'Your Details',
    step1Title: 'Select Practice Area & Advisor',
    step1Desc: 'State the nature of your case and if you have a preferred attorney.',
    areaQuestion: 'Which practice area does your case concern? *',
    preferredLabel: 'Preferred Attorney / Legal Associate',
    anyStaff: 'Best available attorney/legal expert for chosen practice area',
    btnNext1: 'Proceed to date & time',
    step2Title: 'Select Date & Time',
    step2Desc: 'Choose an available business day and then select a time slot.',
    dateQuestion: 'Select Date *',
    timeQuestion: 'Select Time *',
    dateAlert: 'Please select a date from the calendar first to view available times.',
    btnBack: 'Back',
    btnNext2: 'Proceed to contact details',
    step3Title: 'Your Details & Case Brief',
    step3Desc: 'Please fill in your contact information and provide a brief description of your case.',
    labelFullName: 'Full Name *',
    labelEmail: 'Email Address *',
    labelPhone: 'Phone Number *',
    labelDesc: 'Brief Case Description *',
    placeholderDesc: 'Describe the background of your case briefly. No records are ever disclosed and everything is purged according to screening regulations if no representation begins...',
    btnSubmit: 'Submit Booking Request',
    confidentialNote: '* All information is protected by statutory legal professional privilege – absolute discretion assured.',
    sidebarTitle: 'Your Meeting Choices',
    sidebarNotChosen: 'Not selected yet',
    sidebarHistory: 'My Bookings',
    btnCancel: 'Cancel Booking',
    cancelConfirm: 'Are you sure you want to cancel this booking?',
    alertArea: 'Please select a practice area.',
    alertDateTime: 'Please select both date and time.',
    alertMissing: 'Please fill in all mandatory fields.',
    anyStaffShort: 'Any available attorney'
  }
};

const CATEGORIES_TRANSLATIONS = {
  sv: {
    'Brottmål': 'Brottmål',
    'Migrationsrätt': 'Migrationsrätt',
    'Familjerätt': 'Familjerätt',
    'Socialrätt': 'Socialrätt',
    'Tvistemål': 'Tvistemål',
    'Arvsrätt': 'Arvsrätt'
  },
  en: {
    'Brottmål': 'Criminal Law',
    'Migrationsrätt': 'Migration Law',
    'Familjerätt': 'Family Law',
    'Socialrätt': 'Social Welfare Law',
    'Tvistemål': 'Civil Litigation',
    'Arvsrätt': 'Inheritance Law'
  }
};

export default function BookingSection({ language }: BookingSectionProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const t = BOOKING_TRANSLATIONS[language];
  const catTrans = CATEGORIES_TRANSLATIONS[language];

  // Form selections
  const [practiceArea, setPracticeArea] = useState('Brottmål');
  const [preferredStaffId, setPreferredStaffId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [caseDescription, setCaseDescription] = useState('');

  // Confirmation state
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Load bookings from localStorage on init
  useEffect(() => {
    const saved = localStorage.getItem('gp_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error('Could not read saved bookings', e);
      }
    }
  }, []);

  // Save bookings helper
  const saveBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    localStorage.setItem('gp_bookings', JSON.stringify(newBookings));
  };

  const categories = ['Brottmål', 'Migrationsrätt', 'Familjerätt', 'Socialrätt', 'Tvistemål', 'Arvsrätt'];
  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  // Day list generator (Next 10 business days)
  const getNextBusinessDays = () => {
    const dates: string[] = [];
    let current = new Date();
    current.setDate(current.getDate() + 1);

    while (dates.length < 10) {
      const day = current.getDay();
      if (day !== 0 && day !== 6) { // Skip weekends
        dates.push(current.toISOString().split('T')[0]);
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const availableDates = getNextBusinessDays();

  const getStatusText = (status: Booking['status']) => {
    if (language === 'sv') return status;
    const map = {
      'Väntar på bekräftelse': 'Pending Confirmation',
      'Bekräftad': 'Confirmed',
      'Avbokad': 'Cancelled'
    };
    return map[status] || status;
  };

  const handleNextStep = () => {
    if (step === 1 && !practiceArea) {
      alert(t.alertArea);
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      alert(t.alertDateTime);
      return;
    }
    setStep((prev) => (prev + 1) as 1 | 2 | 3);
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !clientPhone || !caseDescription) {
      alert(t.alertMissing);
      return;
    }

    const refId = `GP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: Booking = {
      id: refId,
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      practiceArea: catTrans[practiceArea as keyof typeof catTrans] || practiceArea,
      preferredStaffId: preferredStaffId === 'any' ? undefined : preferredStaffId,
      date: selectedDate,
      time: selectedTime,
      description: caseDescription,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Väntar på bekräftelse',
    };

    // Create FormData for send-mail.php
    const formData = new FormData();
    formData.append('type', 'booking');
    formData.append('name', clientName);
    formData.append('email', clientEmail);
    formData.append('phone', clientPhone);
    formData.append('area', catTrans[practiceArea as keyof typeof catTrans] || practiceArea);
    formData.append('advisor', getStaffName(preferredStaffId === 'any' ? undefined : preferredStaffId));
    formData.append('date', selectedDate);
    formData.append('time', selectedTime);
    formData.append('description', caseDescription);
    formData.append('ref', refId);

    try {
      await fetch('/send-mail.php', {
        method: 'POST',
        body: formData
      });
    } catch (err) {
      console.warn("Mail submission failed, continuing locally:", err);
    }

    const updatedBookings = [newBooking, ...bookings];
    saveBookings(updatedBookings);
    setLatestBooking(newBooking);

    // Reset wizard values
    setStep(1);
    setPracticeArea('Brottmål');
    setPreferredStaffId('any');
    setSelectedDate('');
    setSelectedTime('');
    setClientName('');
    setClientEmail('');
    setClientPhone('');
    setCaseDescription('');
  };

  const handleCancelBooking = (id: string) => {
    if (confirm(t.cancelConfirm)) {
      const updated = bookings.filter((b) => b.id !== id);
      saveBookings(updated);
      if (latestBooking?.id === id) {
        setLatestBooking(null);
      }
    }
  };

  const getStaffName = (id?: string) => {
    if (!id) return t.anyStaffShort;
    const s = STAFF_MEMBERS.find((member) => member.id === id);
    return s ? `${s.name} (${language === 'sv' ? s.title : (s.id === 'staff-kevin' ? 'Attorney at Law' : s.id === 'staff-rosanna' ? 'Paralegal' : 'Attorney / Partner')})` : t.anyStaffShort;
  };

  const formatDateLabel = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="booking-page">
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

        {/* --- BOOKING CONFIRMATION SCREEN --- */}
        {latestBooking ? (
          <div className="max-w-2xl mx-auto bg-brand-cream border border-brand-gold/40 rounded-xs p-8 shadow-xl space-y-8 animate-fade-in" id="booking-receipt-card">
            <div className="text-center space-y-3 pb-6 border-b border-brand-accent/20">
              <div className="w-12 h-12 bg-brand-primary text-brand-gold rounded-full flex items-center justify-center mx-auto mb-2 border border-brand-gold/30">
                <Check size={24} />
              </div>
              <h2 className="font-cinzel text-2xl text-brand-primary font-semibold uppercase tracking-wider">{t.receiptTitle}</h2>
              <p className="text-sm text-brand-medium font-light leading-relaxed max-w-md mx-auto">
                {t.receiptDesc}
              </p>
            </div>

            {/* Receipt Summary Container */}
            <div className="bg-brand-light p-6 rounded-xs space-y-4 border border-brand-accent/15 text-xs sm:text-sm text-brand-medium font-light" id="receipt-details">
              <div className="flex justify-between items-baseline border-b border-brand-accent/10 pb-2">
                <span className="text-brand-primary font-semibold uppercase font-cinzel text-[11px] tracking-wider">{t.refLabel}</span>
                <span className="font-mono text-brand-gold-dark font-bold text-base">{latestBooking.id}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.nameLabel}</p>
                  <p className="font-semibold text-brand-primary text-sm mt-0.5">{latestBooking.name}</p>
                </div>
                <div>
                  <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.contactLabel}</p>
                  <p className="text-brand-primary text-sm mt-0.5">{latestBooking.email} <br/> {latestBooking.phone}</p>
                </div>
                <div>
                  <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.areaLabel}</p>
                  <p className="font-semibold text-brand-primary text-sm mt-0.5">{latestBooking.practiceArea}</p>
                </div>
                <div>
                  <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.advisorLabel}</p>
                  <p className="font-semibold text-brand-primary text-sm mt-0.5">{getStaffName(latestBooking.preferredStaffId)}</p>
                </div>
                <div className="sm:col-span-2 border-t border-brand-accent/10 pt-3 flex flex-col sm:flex-row gap-4 justify-between">
                  <div>
                    <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.dateTimeLabel}</p>
                    <p className="font-semibold text-brand-primary text-sm mt-0.5 flex items-center gap-1.5 animate-fade-in">
                      <Calendar size={14} className="text-brand-gold" />
                      <span>{formatDateLabel(latestBooking.date)}</span>
                    </p>
                    <p className="font-semibold text-brand-primary text-sm mt-0.5 flex items-center gap-1.5">
                      <Clock size={14} className="text-brand-gold" />
                      <span>{language === 'sv' ? 'Kl.' : 'At'} {latestBooking.time}</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-primary/60 font-semibold uppercase text-[10px] tracking-wider">{t.statusLabel}</p>
                    <span className="inline-block bg-brand-gold/20 text-brand-gold-dark font-bold text-xs px-2.5 py-1 rounded-xs mt-1">
                      {getStatusText(latestBooking.status)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Print and continue buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-end">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center space-x-2 border border-brand-accent/40 text-brand-primary hover:bg-brand-light px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer"
              >
                <Download size={14} />
                <span>{t.btnPrint}</span>
              </button>
              <button
                onClick={() => setLatestBooking(null)}
                className="inline-flex items-center justify-center space-x-2 bg-brand-primary text-brand-cream border border-brand-gold/30 hover:bg-brand-medium px-6 py-3 rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer"
              >
                <span>{t.btnBookMore}</span>
              </button>
            </div>
          </div>
        ) : (
          /* --- MAIN BOOKING WIZARD --- */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Step Navigation & Forms */}
            <div className="lg:col-span-8 bg-brand-cream border border-brand-accent/20 rounded-xs p-6 sm:p-8 space-y-8 shadow-xs">
              
              {/* Progress Steps Indicator */}
              <div className="flex justify-between items-center border-b border-brand-accent/20 pb-4 text-xs font-semibold uppercase tracking-wider text-brand-medium/50" id="wizard-steps-indicator">
                <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-brand-primary font-bold' : ''}`}>
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full border ${step >= 1 ? 'bg-brand-primary text-brand-gold border-brand-primary' : 'border-brand-accent'}`}>1</span>
                  <span className="hidden sm:inline">{t.step1}</span>
                </div>
                <div className="w-8 h-[1px] bg-brand-accent/40" />
                <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-brand-primary font-bold' : ''}`}>
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full border ${step >= 2 ? 'bg-brand-primary text-brand-gold border-brand-primary' : 'border-brand-accent'}`}>2</span>
                  <span className="hidden sm:inline">{t.step2}</span>
                </div>
                <div className="w-8 h-[1px] bg-brand-accent/40" />
                <div className={`flex items-center space-x-2 ${step >= 3 ? 'text-brand-primary font-bold' : ''}`}>
                  <span className={`w-6 h-6 flex items-center justify-center rounded-full border ${step >= 3 ? 'bg-brand-primary text-brand-gold border-brand-primary' : 'border-brand-accent'}`}>3</span>
                  <span className="hidden sm:inline">{t.step3}</span>
                </div>
              </div>

              {/* --- STEP 1: Practice Area and Preferred Advisor --- */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in" id="step1-container">
                  <div className="space-y-1">
                    <h3 className="font-cinzel text-lg font-bold text-brand-primary uppercase tracking-wide">{t.step1Title}</h3>
                    <p className="text-xs sm:text-sm text-brand-medium/85 font-light">{t.step1Desc}</p>
                  </div>

                  {/* Grid of practice areas to click and select */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.areaQuestion}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          id={`select-area-${cat}`}
                          onClick={() => setPracticeArea(cat)}
                          className={`p-3.5 text-xs font-semibold tracking-wide border rounded-xs transition-all duration-150 text-center cursor-pointer ${
                            practiceArea === cat
                              ? 'bg-brand-primary text-brand-cream border-brand-gold/50 shadow-sm ring-1 ring-brand-gold/30'
                              : 'bg-brand-light/35 hover:bg-brand-light text-brand-medium border-brand-accent/20'
                          }`}
                        >
                          {catTrans[cat as keyof typeof catTrans] || cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred staff dropdown */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.preferredLabel}</label>
                    <select
                      value={preferredStaffId}
                      onChange={(e) => setPreferredStaffId(e.target.value)}
                      id="select-preferred-staff"
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden text-sm"
                    >
                      <option value="any">{t.anyStaff}</option>
                      {STAFF_MEMBERS.map((staff) => (
                        <option key={staff.id} value={staff.id}>
                          {staff.name} – {language === 'sv' ? staff.title : (staff.id === 'staff-kevin' ? 'Attorney' : staff.id === 'staff-rosanna' ? 'Paralegal' : 'Attorney / Partner')}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4 border-t border-brand-accent/15 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      id="step1-next-btn"
                      className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/30 hover:border-brand-gold px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
                    >
                      {t.btnNext1}
                    </button>
                  </div>
                </div>
              )}

              {/* --- STEP 2: Interactive Calendar & Time slot picker --- */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in" id="step2-container">
                  <div className="space-y-1">
                    <h3 className="font-cinzel text-lg font-bold text-brand-primary uppercase tracking-wide">{t.step2Title}</h3>
                    <p className="text-xs sm:text-sm text-brand-medium/85 font-light">{t.step2Desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Date picker grid */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.dateQuestion}</label>
                      <div className="grid grid-cols-2 gap-2" id="available-dates-grid">
                        {availableDates.map((dateStr) => {
                          const dateObj = new Date(dateStr);
                          const isSelected = selectedDate === dateStr;
                          const weekday = dateObj.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', { weekday: 'short' });
                          const dayNum = dateObj.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', { day: 'numeric' });
                          const monthName = dateObj.toLocaleDateString(language === 'sv' ? 'sv-SE' : 'en-US', { month: 'short' });

                          return (
                            <button
                              key={dateStr}
                              type="button"
                              id={`date-slot-${dateStr}`}
                              onClick={() => setSelectedDate(dateStr)}
                              className={`p-3 border rounded-xs transition-all duration-150 text-left flex flex-col justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-brand-primary text-brand-cream border-brand-gold/50 shadow-sm ring-1 ring-brand-gold/30 font-bold'
                                  : 'bg-brand-light/35 hover:bg-brand-light text-brand-medium border-brand-accent/20'
                              }`}
                            >
                              <span className="text-[10px] uppercase tracking-wider opacity-60">{weekday}</span>
                              <span className="text-base sm:text-lg font-bold font-serif leading-none py-1">{dayNum}</span>
                              <span className="text-[10px] uppercase tracking-wider opacity-60">{monthName}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slot grid */}
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.timeQuestion}</label>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 gap-2" id="time-slots-grid">
                          {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                id={`time-slot-${time}`}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 text-xs font-semibold border rounded-xs transition-all duration-150 text-center flex items-center justify-center space-x-1.5 cursor-pointer ${
                                  isSelected
                                    ? 'bg-brand-primary text-brand-cream border-brand-gold/50 font-bold shadow-xs'
                                    : 'bg-brand-light/35 hover:bg-brand-light text-brand-medium border-brand-accent/20'
                                }`}
                              >
                                <span>{time}</span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-full border border-dashed border-brand-accent/20 rounded-xs p-8 flex flex-col items-center justify-center text-center bg-brand-light/10 text-brand-medium/50 text-xs">
                          <AlertCircle size={24} className="text-brand-gold/40 mb-2 animate-bounce" />
                          <p>{t.dateAlert}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-accent/15 flex justify-between">
                    <button
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-xs border border-brand-accent/40 text-brand-primary hover:bg-brand-light transition-all duration-150 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      {t.btnBack}
                    </button>
                    <button
                      onClick={handleNextStep}
                      id="step2-next-btn"
                      className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/30 hover:border-brand-gold px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer"
                    >
                      {t.btnNext2}
                    </button>
                  </div>
                </div>
              )}

              {/* --- STEP 3: Client Details & Case Description --- */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in" id="step3-container">
                  <div className="space-y-1">
                    <h3 className="font-cinzel text-lg font-bold text-brand-primary uppercase tracking-wide">{t.step3Title}</h3>
                    <p className="text-xs sm:text-sm text-brand-medium/85 font-light font-sans">{t.step3Desc}</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm text-brand-medium font-light">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelFullName}</label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder={language === 'sv' ? 'T.ex. Karin Larsson' : 'e.g., Karin Larsson'}
                        className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelEmail}</label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="T.ex. karin.larsson@example.com"
                          className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelPhone}</label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="T.ex. 073-123 45 67"
                          className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelDesc}</label>
                      <textarea
                        required
                        rows={4}
                        value={caseDescription}
                        onChange={(e) => setCaseDescription(e.target.value)}
                        placeholder={t.placeholderDesc}
                        className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden font-light leading-relaxed text-sm"
                      />
                    </div>

                    <div className="pt-4 border-t border-brand-accent/15 flex flex-col space-y-3">
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-5 py-2.5 rounded-xs border border-brand-accent/40 text-brand-primary hover:bg-brand-light transition-all duration-150 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                        >
                          {t.btnBack}
                        </button>
                        <button
                          type="submit"
                          id="submit-booking-btn"
                          className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/40 hover:border-brand-gold px-6 py-2.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer shadow-sm"
                        >
                          {t.btnSubmit}
                        </button>
                      </div>
                      <p className="text-[11px] text-center text-brand-medium/60 italic">
                        {t.confidentialNote}
                      </p>
                    </div>
                  </form>
                </div>
              )}

            </div>

            {/* Right Col: Booking Selection Live Summary */}
            <div className="lg:col-span-4 space-y-6" id="booking-sidebar">
              <div className="bg-brand-primary text-brand-cream border border-brand-gold/20 p-6 rounded-xs space-y-5 shadow-md">
                <h3 className="font-cinzel text-brand-gold text-sm tracking-wider uppercase font-semibold">{t.sidebarTitle}</h3>
                <div className="w-8 h-0.5 bg-brand-gold" />
                
                <ul className="space-y-4 text-xs font-light text-brand-accent/90">
                  <li className="space-y-1 border-b border-brand-accent/10 pb-2">
                    <p className="text-[10px] uppercase opacity-60">{t.step1}</p>
                    <p className="text-sm font-semibold text-brand-cream">{catTrans[practiceArea as keyof typeof catTrans] || practiceArea}</p>
                  </li>
                  <li className="space-y-1 border-b border-brand-accent/10 pb-2">
                    <p className="text-[10px] uppercase opacity-60">{t.preferredLabel}</p>
                    <p className="text-sm font-semibold text-brand-cream">{getStaffName(preferredStaffId)}</p>
                  </li>
                  <li className="space-y-1">
                    <p className="text-[10px] uppercase opacity-60">{t.step2}</p>
                    {selectedDate && selectedTime ? (
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-brand-cream flex items-center gap-1.5">
                          <span>{formatDateLabel(selectedDate)}</span>
                        </p>
                        <p className="text-sm font-semibold text-brand-cream flex items-center gap-1.5">
                          <span>{language === 'sv' ? 'Kl.' : 'At'} {selectedTime}</span>
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs italic opacity-55">{t.sidebarNotChosen}</p>
                    )}
                  </li>
                </ul>
              </div>

              {/* Booking History Panel (Mina bokningar) */}
              {bookings.length > 0 && (
                <div className="bg-brand-cream border border-brand-accent/25 p-6 rounded-xs space-y-4 shadow-xs" id="my-bookings-panel">
                  <div className="flex items-center space-x-2 text-brand-primary">
                    <CalendarCheck size={18} className="text-brand-gold" />
                    <h3 className="font-cinzel text-sm tracking-wider uppercase font-semibold">{t.sidebarHistory}</h3>
                  </div>
                  <div className="space-y-3.5 max-h-60 overflow-y-auto" id="bookings-history-list">
                    {bookings.map((b) => (
                      <div key={b.id} className="p-3 bg-brand-light border border-brand-accent/15 rounded-xs space-y-2 text-xs">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-brand-primary font-mono text-[10px]">{b.id}</span>
                          <span className="bg-brand-gold/15 text-brand-gold-dark font-semibold text-[9px] px-1.5 py-0.5 rounded-sm">
                            {getStatusText(b.status)}
                          </span>
                        </div>
                        <div className="space-y-1 text-brand-medium/80 font-light">
                          <p className="font-semibold text-brand-primary text-xs">{b.practiceArea}</p>
                          <p>{formatDateLabel(b.date)}</p>
                          <p>{language === 'sv' ? 'Kl.' : 'At'} {b.time}</p>
                        </div>
                        <div className="pt-2 border-t border-brand-accent/10 flex justify-end">
                          <button
                            onClick={() => handleCancelBooking(b.id)}
                            id={`cancel-booking-btn-${b.id}`}
                            className="text-[10px] text-red-600 hover:text-red-700 flex items-center space-x-1 cursor-pointer font-medium"
                          >
                            <Trash2 size={11} />
                            <span>{t.btnCancel}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
