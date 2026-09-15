import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Gavel, Users, Scale, FileText, ArrowRight, ShieldCheck, Award, Briefcase, ChevronRight } from 'lucide-react';
import { ARTICLES } from '../data';
import Financing from './Financing';
import stockholmHero from '../assets/images/stockholm_hero_1783253924010.jpg';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  setSelectedArticleId: (id: string | null) => void;
  language: 'sv' | 'en';
}

export default function Home({ setActiveTab, setSelectedArticleId, language }: HomeProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force muted and try to play
      video.muted = true;
      video.defaultMuted = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented by browser policies, retrying on next interaction:", error);
          
          // Fallback: Attempt to play on any user click on the document
          const playOnInteraction = () => {
            video.play()
              .then(() => {
                document.removeEventListener('click', playOnInteraction);
              })
              .catch((err) => console.error("Play failed on interaction:", err));
          };
          document.addEventListener('click', playOnInteraction);
        });
      }
    }
  }, []);

  const practiceAreas = [
    {
      id: 'criminal',
      title: language === 'sv' ? 'Brottmål' : 'Criminal Defense',
      icon: Gavel,
      description: language === 'sv' 
        ? 'Offentlig och privat försvarare i alla typer av brottmål, med särskild expertis inom grov och organiserad brottslighet samt ekobrott. Vi åtar oss även uppdrag som målsägandebiträde, juridiskt biträde och särskild företrädare för barn, och är med från förhör tills dom vunnit laga kraft.'
        : 'Public and private defense counsel in all types of criminal cases, with expert focus on organized and major crime. We also act as counsel for injured parties, legal representative, and special representative for children, supporting you from the initial interview until the judgment becomes final.',
    },
    {
      id: 'family',
      title: language === 'sv' ? 'Familjerätt' : 'Family Law',
      icon: Users,
      description: language === 'sv'
        ? 'Kvalificerad rådgivning och biträde som ombud i komplicerade vårdnadstvister, boende- och umgängesfrågor samt ekonomisk familjerätt.'
        : 'Top-tier representation and counsel in complicated custody, residency, and visitation disputes, as well as marital property division.',
    },
    {
      id: 'migration',
      title: language === 'sv' ? 'Migrationsrätt' : 'Migration Law',
      icon: Briefcase,
      description: language === 'sv'
        ? 'Biträde vid ansökningar om asyl, uppehållstillstånd, arbetstillstånd och medborgarskap samt i förvarsärenden, samt som offentligt biträde i utvisningsärenden.'
        : 'Assistance with asylum applications, residence and work permits, citizenship, and detention cases, as well as public counsel in deportation proceedings.',
    },
    {
      id: 'social',
      title: language === 'sv' ? 'Socialrätt' : 'Social Law',
      icon: ShieldCheck,
      description: language === 'sv'
        ? 'Biträde som offentligt biträde eller ombud, samt rådgivning i ärenden gällande tvångsvård enligt LVU, LVM, LPT och LRV.'
        : 'Representation as public counsel or agent, and advice in compulsory care cases (LVU, LVM, LPT, LRV).',
    },
    {
      id: 'civil',
      title: language === 'sv' ? 'Tvistemål' : 'Civil Disputes',
      icon: Award,
      description: language === 'sv'
        ? 'Biträde som ombud vid ekonomiska tvister mellan privatpersoner eller företag, t.ex. avtalsbrott, skadestånd och fordringstvister.'
        : 'Representation in financial disputes between individuals or businesses, such as breach of contract, damages, and debt claims.',
    },
    {
      id: 'inherit',
      title: language === 'sv' ? 'Arvsrätt' : 'Inheritance Law',
      icon: FileText,
      description: language === 'sv'
        ? 'Upprättande av testamenten, boutredningar, arvskiften och juridisk rådgivning vid bodelning och komplicerade arvstvister.'
        : 'Drafting wills, estate distribution, partition of joint property, and counsel in complicated inheritance disputes.',
    }
  ];

  const handlePracticeAreaClick = () => {
    // Scroll to contact or booking
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Framer Motion animation configurations for premium elegant intro
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: 0.15,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // Custom cinematic bezier curve
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scrollContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const scrollItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="animate-fade-in" id="home-page">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-dark text-brand-cream py-24 lg:py-36 overflow-hidden border-b border-brand-gold/30">
        {/* Advanced Gradient Overlays for Maximum Text Legibility and Cinematic feel */}
        <div className="absolute inset-0 bg-brand-dark/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/15 z-10" />
        
        {/* 1. Hero Background Video */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 opacity-90 blur-[1.5px]"
          poster={stockholmHero}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Centered Content: Core Message & Editorial Brand Header with Staggered Intro */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl space-y-8 flex flex-col items-center"
            >
              {/* Elegant Animated Logo - Exactly as shown in Header and Footer */}
              <motion.div 
                variants={logoVariants}
                className="flex flex-col items-center cursor-default select-none mb-6 group"
                id="hero-animated-logo"
              >
                <span className="font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-brand-cream group-hover:text-brand-gold transition-colors duration-300 text-center whitespace-nowrap">
                  GRÖNVALL <span className="elegant-ampersand text-[0.95em] text-brand-gold mx-1 inline-block align-baseline transform -translate-y-[0.05em] select-none">&amp;</span> PARTNERS
                </span>
                <div className="h-[1.5px] bg-brand-gold/60 w-full mt-2 mb-1.5 group-hover:bg-brand-gold transition-colors duration-300" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-brand-gold font-sans font-semibold text-center w-full">
                  {language === 'sv' ? 'ADVOKATBYRÅ' : 'LAW FIRM'}
                </span>
              </motion.div>
              
              {/* Headings - Comes in next */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] text-brand-cream font-serif">
                  {language === 'sv' ? (
                    <>
                      Handplockade advokater.<br />
                      <span className="text-brand-gold">Personligt engagemang.</span>
                    </>
                  ) : (
                    <>
                      Handpicked attorneys.<br />
                      <span className="text-brand-gold">Personal commitment.</span>
                    </>
                  )}
                </h1>
                <motion.div variants={lineVariants} className="w-16 h-[2px] bg-brand-gold/60 mt-2 mx-auto origin-center" />
              </motion.div>
              

              {/* Refined CTA buttons - Appears last */}
              <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab('booking')}
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-8 py-4 rounded-xs text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg text-center cursor-pointer flex items-center justify-center gap-2 group"
                >
                  {language === 'sv' ? 'Boka möte' : 'Book meeting'}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-brand-dark" />
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  id="hero-cta-about"
                  className="bg-transparent hover:bg-brand-cream/5 text-brand-cream border border-brand-cream/20 hover:border-brand-gold px-8 py-4 rounded-xs text-xs font-bold uppercase tracking-widest transition-all duration-300 text-center cursor-pointer"
                >
                  {language === 'sv' ? 'Lär känna byrån' : 'Get to know the firm'}
                </button>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* Elegant edge fading effect */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-brand-cream/40 to-transparent z-25 pointer-events-none" />
      </section>

      {/* 2. Welcome & Philosophy */}
      <section className="py-20 bg-brand-cream" id="intro-section">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={scrollContainerVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center space-y-8">
            <motion.h2 variants={scrollItemVariants} className="text-3xl sm:text-4xl font-normal text-brand-primary tracking-tight max-w-3xl mx-auto leading-tight">
              {language === 'sv' 
                ? 'Trygghet i svåra stunder.' 
                : 'Security in difficult times.'}
            </motion.h2>
            <motion.div variants={scrollItemVariants} className="w-20 h-1 bg-brand-gold mx-auto" />
            <motion.div variants={scrollItemVariants} className="max-w-2xl mx-auto space-y-6 text-base text-brand-medium leading-relaxed font-light text-justify">
              <p>
                {language === 'sv' ? (
                  <>
                    <strong className="font-semibold text-brand-primary">Grönvall &amp; Partners Advokatbyrå</strong> grundades med en tydlig vision: att erbjuda juridiska tjänster av högsta kvalitet, kännetecknade av professionalism, integritet och djupgående förståelse för varje klients unika situation.
                  </>
                ) : (
                  <>
                    <strong className="font-semibold text-brand-primary">Grönvall &amp; Partners</strong> Law Firm was founded with a clear vision: to offer legal services of the highest quality, characterized by professionalism, integrity, and a deep understanding of each client's unique situation.
                  </>
                )}
              </p>
              <p>
                {language === 'sv' ? (
                  'Vi är medvetna om att behovet av juridisk hjälp ofta uppstår i svåra eller livsavgörande stunder. Därför bygger vårt arbete på att skapa en trygg relation till våra klienter, där diskretion och lyhördhet är självklara hörnstenar. Våra advokater och jurister besitter gedigen erfarenhet och processvana i domstol, vilket garanterar ett kraftfullt och väl förberett försvar.'
                ) : (
                  'We are aware that the need for legal assistance often arises during difficult or life-changing moments. Therefore, our work is built on establishing a secure relationship with our clients, where discretion and sensitivity are natural cornerstones. Our attorneys possess solid experience and litigation capability in court, ensuring a powerful and well-prepared defense.'
                )}
              </p>
            </motion.div>
            <motion.div variants={scrollItemVariants} className="pt-4 flex justify-center">
              <button
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-gold font-semibold text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                id="welcome-read-more"
              >
                <span>{language === 'sv' ? 'Läs mer om våra värderingar' : 'Read more about our values'}</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Practice Areas (Rättsområden) */}
      <section className="py-20 bg-brand-light border-y border-brand-accent/25" id="practice-areas-section">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={scrollContainerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest">
              {language === 'sv' ? 'Juridiska Tjänster' : 'Legal Services'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-brand-primary tracking-tight">
              {language === 'sv' ? 'Våra Verksamhetsområden' : 'Our Practice Areas'}
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto" />
            <p className="text-sm text-brand-medium font-light">
              {language === 'sv' 
                ? 'Vi erbjuder specialiserad rådgivning och rättsligt biträde inom ett brett spektrum av lagstiftningen, alltid med högsta möjliga expertis.'
                : 'We offer specialized counsel and legal assistance across a broad spectrum of the law, always with the highest possible expertise.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComp = area.icon;
              return (
                <motion.div
                  key={area.id}
                  id={`practice-card-${area.id}`}
                  variants={scrollItemVariants}
                  whileHover={{ 
                    y: -6,
                    borderColor: "var(--color-brand-gold)",
                    boxShadow: "0 15px 35px -8px rgba(30, 53, 37, 0.08)",
                  }}
                  className="group relative p-8 bg-brand-cream border border-brand-accent/20 rounded-xl transition-colors duration-300 flex flex-col justify-between cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-md bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-gold transition-colors duration-300">
                        <IconComp size={22} />
                      </div>
                    </div>
                    
                    <h3 className="font-cinzel text-lg font-semibold text-brand-primary group-hover:text-brand-gold-dark transition-colors duration-200">
                      {area.title}
                    </h3>
                    
                    <p className="text-sm text-brand-medium/90 font-light leading-relaxed text-justify">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-accent/15 mt-6 flex justify-between items-center">
                    <button
                      onClick={handlePracticeAreaClick}
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary hover:text-brand-gold transition-colors duration-200 cursor-pointer"
                    >
                      <span>{language === 'sv' ? 'Boka rådgivning' : 'Book consultation'}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 4. Financing & Rättshjälp Section */}
      <Financing setActiveTab={setActiveTab} language={language} />

      {/* 6. Quick Contact and Call to action */}
      <section className="bg-brand-light py-20 border-t border-brand-accent/20" id="home-cta-consultation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-brand-primary tracking-tight">
            {language === 'sv' ? 'Låt oss diskutera ditt ärende – full diskretion utlovas.' : 'Let us discuss your case – full discretion guaranteed.'}
          </h2>
          <p className="text-sm sm:text-base text-brand-medium font-light leading-relaxed max-w-2xl mx-auto text-justify">
            {language === 'sv' 
              ? 'Vi hjälper dig att navigera genom dina juridiska utmaningar med trygghet och expertis. Kontakta oss idag för att boka ett första möte på vårt kontor, via telefon eller videolänk. Vi garanterar snabb återkoppling inom 24 timmar på vardagar.'
              : 'We help you navigate your legal challenges with confidence and expertise. Contact us today to schedule an initial meeting at our office, over the phone, or via video. We guarantee a prompt response within 24 hours on business days.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('booking')}
              className="bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/40 px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
            >
              {language === 'sv' ? 'Boka möte online' : 'Book meeting online'}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-transparent hover:bg-brand-primary/5 text-brand-primary border border-brand-primary/40 hover:border-brand-primary px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
            >
              {language === 'sv' ? 'Kontakta oss via formulär' : 'Contact us via form'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
