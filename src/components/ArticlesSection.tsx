import React, { useState } from 'react';
import { Search, PlusCircle, ArrowLeft, BookOpen, Clock, User, Check, X } from 'lucide-react';
import { Article } from '../types';

interface ArticlesSectionProps {
  language: 'sv' | 'en';
  articles: Article[];
  onAddArticle: (article: Article) => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
}

const ARTICLES_TRANSLATIONS = {
  sv: {
    kicker: 'Nyheter & Kunskap',
    title: 'Juridiskt Bibliotek',
    subtitle: 'Artiklar, kommentarer och analyser författade av våra egna advokater och jurister. Håll dig uppdaterad gällande lagändringar och rättspraxis.',
    searchPlaceholder: 'Sök i artiklar...',
    backBtn: 'Tillbaka till artiklar',
    readBtn: 'Läs artikel',
    readTimeLabel: 'läsning',
    publishedLabel: 'Publicerad',
    byLabel: 'Av',
    noArticlesTitle: 'Inga artiklar hittades',
    noArticlesDesc: 'Det finns inga artiklar som matchar din sökning eller kategori för närvarande. Prova att ändra sökord.',
    ctaTitle: 'Behöver du juridisk rådgivning gällande detta rättsområde?',
    ctaDesc: 'Kontakta gärna oss på Grönvall & Partners för en förutsättningslös diskussion gällande dina omständigheter. Våra specialister finns tillgängliga för personliga rådgivningsmöten.',
    ctaBtn: 'Boka möte om {category}',
    writeBtn: 'Skriv ny artikel',
    successTitle: 'Artikel publicerad!',
    successDesc: 'Artikeln har lagts till i kunskapsbiblioteket.',
    categoryLabel: 'Kategori:',
    
    // Publish Modal
    modalTitle: 'Publicera ny artikel',
    modalSubtitle: 'Internt verktyg för medarbetare på Grönvall & Partners. Publicera rön, analyser eller nyheter.',
    labelTitle: 'Artikelns Rubrik *',
    labelCategory: 'Rättsområde (Kategori) *',
    labelAuthor: 'Författare *',
    labelReadTime: 'Estimerad lästid',
    labelExcerpt: 'Kort sammanfattning / Excerpt *',
    labelContent: 'Artikelns textinnehåll (Brödtext) *',
    placeholderTitle: 'T.ex. Juridiska aspekter vid företagsrekonstruktion',
    placeholderAuthor: 'T.ex. Karin Grönvall',
    placeholderReadTime: 'T.ex. 4 min',
    placeholderExcerpt: 'Sammanfatta artikeln i 2-3 meningar. Denna text visas i listningen.',
    placeholderContent: 'Skriv artikeln här. Använd gärna rubriker eller stycken för ökad läsbarhet...',
    btnCancel: 'Avbryt',
    btnSubmit: 'Publicera nu',
    alertMissing: 'Vänligen fyll i alla obligatoriska fält.'
  },
  en: {
    kicker: 'News & Insights',
    title: 'Legal Library',
    subtitle: 'Articles, expert commentary, and analysis authored by our own attorneys and legal specialists. Stay updated on statutory reforms and case law.',
    searchPlaceholder: 'Search articles...',
    backBtn: 'Back to articles',
    readBtn: 'Read article',
    readTimeLabel: 'read',
    publishedLabel: 'Published',
    byLabel: 'By',
    noArticlesTitle: 'No articles found',
    noArticlesDesc: 'There are no articles matching your search query or category at this time. Try resetting the filters or keywords.',
    ctaTitle: 'Need legal advice in this practice area?',
    ctaDesc: 'Please do not hesitate to contact Grönvall & Partners for an initial discussion regarding your situation. Our specialists are available for personal consultations.',
    ctaBtn: 'Book meeting regarding {category}',
    writeBtn: 'Write new article',
    successTitle: 'Article published!',
    successDesc: 'The article has been added to our knowledge library.',
    categoryLabel: 'Category:',

    // Publish Modal
    modalTitle: 'Publish New Article',
    modalSubtitle: 'Internal publishing tool for Grönvall & Partners professionals. Post insights, analysis, or news updates.',
    labelTitle: 'Article Title *',
    labelCategory: 'Practice Area (Category) *',
    labelAuthor: 'Author *',
    labelReadTime: 'Estimated Read Time',
    labelExcerpt: 'Short Summary / Excerpt *',
    labelContent: 'Article Body Content *',
    placeholderTitle: 'e.g., Legal aspects of corporate debt restructuring',
    placeholderAuthor: 'e.g., Karin Grönvall',
    placeholderReadTime: 'e.g., 4 min',
    placeholderExcerpt: 'Summarize the article in 2-3 sentences. This text appears in the feed.',
    placeholderContent: 'Write the article here. Use headings or paragraphs to improve readability...',
    btnCancel: 'Cancel',
    btnSubmit: 'Publish Now',
    alertMissing: 'Please fill in all mandatory fields.'
  }
};

const CATEGORIES_TRANSLATIONS = {
  sv: {
    'Alla': 'Alla',
    'Brottmål': 'Brottmål',
    'Migrationsrätt': 'Migrationsrätt',
    'Familjerätt': 'Familjerätt',
    'Socialrätt': 'Socialrätt',
    'Tvistemål': 'Tvistemål',
    'Arvsrätt': 'Arvsrätt',
    'Allmänt': 'Allmänt'
  },
  en: {
    'Alla': 'All',
    'Brottmål': 'Criminal Law',
    'Migrationsrätt': 'Migration Law',
    'Familjerätt': 'Family Law',
    'Socialrätt': 'Social Welfare Law',
    'Tvistemål': 'Civil Litigation',
    'Arvsrätt': 'Inheritance Law',
    'Allmänt': 'General'
  }
};

const LOCALIZED_ARTICLES = {
  en: {
    'art-1': {
      title: 'When are you entitled to a public defender?',
      category: 'Criminal Law',
      excerpt: 'A review of the conditions for having a public defender appointed by the court and the importance of requesting the right attorney early in the process.',
      content: `Being suspected of a crime is one of the most stressful situations a person can face. In Sweden, anyone suspected of a crime is entitled to a defense, but the conditions for who receives a public defender paid by the state vary.

What is a public defender?
A public defender is an attorney appointed by the court to safeguard the suspect's rights during the preliminary investigation and court hearings. The state pays the attorney's fee, although upon conviction you may be liable to repay all or part of the cost depending on your income.

When are you entitled to a public defender?
The general rule is that you have a right to a public defender if:
1. You are arrested or detained.
2. The crime you are suspected of can lead to imprisonment for more than 6 months.
3. There are special reasons with regard to the investigation (e.g., complex evidence or difficult legal issues).
4. You, for personal reasons, have difficulty presenting your case (e.g., due to age, health, or language barriers).

The importance of choosing the right defender early
Many believe that you must accept the attorney randomly assigned by the court. This is not the case. You have a statutory right to request a specific attorney.

It is important that you request an attorney from Grönvall & Partners at the very first police interview. What is said in the first interviews lays the foundation for the entire subsequent process, and having an experienced criminal defense lawyer by your side from the start can be completely decisive for the outcome of the case.`,
      author: 'Josef Ben Ali',
      readTime: '4 min'
    },
    'art-2': {
      title: 'Obstacles and opportunities when applying for a retrial',
      category: 'Criminal Law',
      excerpt: 'Having a legally binding judgment reviewed again is an exceptional measure. We analyze the requirements for achieving success with a retrial petition.',
      content: `One of the most fundamental requirements in a constitutional state is that judgments should be final and trustworthy – the so-called principle of res judicata. But what happens when a judgment is obviously wrong? For these rare cases, there is the extraordinary legal remedy of a retrial (resning).

What is required for a retrial in criminal cases?
According to the Swedish Code of Judicial Procedure, a retrial can be granted in favor of the accused under certain strict conditions:
1. New circumstances or evidence: New evidence or circumstances have come to light which would likely have led to an acquittal or a lighter sentence if presented during the original trial.
2. Gross misconduct or crime: A member of the court or a prosecutor has committed a crime or gross misconduct in connection with the case, and this can be assumed to have affected the outcome.
3. False evidence: A witness has given false testimony, or a written piece of evidence was forged, and this influenced the verdict.

The high bar in the Supreme Court
The Supreme Court (Högsta domstolen) is extremely restrictive in granting retrials. It is not enough to simply point out that the district court or court of appeal made an incorrect assessment of the evidence. Substantial, new facts are required that cast a completely new light on the case.

Our work with retrial petitions
At Grönvall & Partners, we have solid experience in conducting complex retrial proceedings. We conduct our own, in-depth private investigations, analyze previous judgments and interrogation transcripts with microscopic precision, and build a solid argument to convince the Supreme Court that justice demands a new hearing.`,
      author: 'Josef Ben Ali',
      readTime: '6 min'
    },
    'art-3': {
      title: 'Custody disputes: The child\'s best interests in focus',
      category: 'Family Law',
      excerpt: 'How the court assesses custody, residence, and visitation issues, and how to best navigate an emotionally difficult legal process.',
      content: `A separation between parents is often painful, but when the parties cannot agree on their mutual children, the situation easily escalates into a legal conflict. In all decisions concerning custody, residence, and visitation, a single principle must always remain at the center: the child's best interests.

What does "the child's best interests" mean?
The child's best interests is not a fixed rule but an individual assessment made in each specific case. The court weighs several factors:
* The child's need for close and good contact with both parents.
* The risk of the child or anyone else in the family being subjected to abuse, harmed, or otherwise mistreated.
* The child's own wishes, taking into account the child's age and maturity.
* The importance of continuity and stability in the child's environment.

Joint or sole custody?
Swedish law assumes that joint custody is best for the child. For the court to award sole custody, it usually requires that the parents have such deep communication difficulties that it is completely impossible to make mutual decisions regarding the child.

Legal representation makes a difference
In family law conflicts, it is easy for emotions to take over. A skilled family lawyer from Grönvall & Partners acts as a secure guide. We help you stay focused on the legal and objective arguments and work primarily to find mutual agreements that spare the child from prolonged court processes.`,
      author: 'Josef Ben Ali',
      readTime: '5 min'
    }
  }
};

export default function ArticlesSection({
  language,
  articles,
  onAddArticle,
  selectedArticleId,
  setSelectedArticleId,
}: ArticlesSectionProps) {
  const t = ARTICLES_TRANSLATIONS[language];
  const catTrans = CATEGORIES_TRANSLATIONS[language];

  const [selectedCategory, setSelectedCategory] = useState<string>('Alla');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPublishingModalOpen, setIsPublishingModalOpen] = useState(false);

  // New Article Form state
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<Article['category']>('Brottmål');
  const [formAuthor, setFormAuthor] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formReadTime, setFormReadTime] = useState(language === 'sv' ? '4 min' : '4 min read');
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const categories = ['Alla', 'Brottmål', 'Migrationsrätt', 'Familjerätt', 'Socialrätt', 'Tvistemål', 'Arvsrätt', 'Allmänt'];

  // Map the articles dynamically to include English translation if available
  const localizedArticles: Article[] = articles.map((art) => {
    if (language === 'en' && LOCALIZED_ARTICLES.en[art.id as keyof typeof LOCALIZED_ARTICLES.en]) {
      const loc = LOCALIZED_ARTICLES.en[art.id as keyof typeof LOCALIZED_ARTICLES.en];
      return {
        ...art,
        title: loc.title,
        category: art.category,
        excerpt: loc.excerpt,
        content: loc.content,
        author: loc.author,
        readTime: loc.readTime,
      };
    }
    // For categories in English of standard/user articles, translate category names in UI but filter properly
    return art;
  });

  // Filter and search logic
  const filteredArticles = localizedArticles.filter((article) => {
    // If filtering, we should match either Swedish category or translated category
    const originalCategory = articles.find(a => a.id === article.id)?.category || article.category;
    const matchesCategory = selectedCategory === 'Alla' || originalCategory === selectedCategory;
    
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedArticle = localizedArticles.find((art) => art.id === selectedArticleId);

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formAuthor || !formContent || !formExcerpt) {
      alert(t.alertMissing);
      return;
    }

    const newArticle: Article = {
      id: `art-${Date.now()}`,
      title: formTitle,
      category: formCategory,
      author: formAuthor,
      excerpt: formExcerpt,
      content: formContent,
      readTime: formReadTime,
      date: new Date().toISOString().split('T')[0],
    };

    onAddArticle(newArticle);
    
    // Clear form
    setFormTitle('');
    setFormAuthor('');
    setFormExcerpt('');
    setFormContent('');
    setFormReadTime(language === 'sv' ? '4 min' : '4 min read');
    
    setIsPublishingModalOpen(false);
    setShowSuccessNotification(true);
    setTimeout(() => {
      setShowSuccessNotification(false);
    }, 4000);
  };

  return (
    <div className="animate-fade-in py-16 sm:py-24 bg-brand-cream" id="articles-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Success alert notification */}
        {showSuccessNotification && (
          <div className="fixed top-24 right-4 z-50 bg-brand-primary text-brand-cream border border-brand-gold/40 px-6 py-4 rounded-xs shadow-2xl flex items-center space-x-3 animate-fade-in" id="publish-success-toast">
            <div className="bg-brand-gold text-brand-dark p-1 rounded-full">
              <Check size={16} />
            </div>
            <div>
              <p className="font-semibold text-sm">{t.successTitle}</p>
              <p className="text-xs text-brand-accent/85">{t.successDesc}</p>
            </div>
          </div>
        )}

        {/* 1. Article detail view */}
        {selectedArticle ? (
          <article className="max-w-3xl mx-auto space-y-8 animate-fade-in" id="article-detail-view">
            <button
              onClick={() => setSelectedArticleId(null)}
              id="back-to-articles-list"
              className="inline-flex items-center space-x-2 text-sm text-brand-primary hover:text-brand-gold font-semibold transition-colors duration-200 cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>{t.backBtn}</span>
            </button>

            <div className="space-y-4">
              <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-3 py-1 rounded-xs">
                {catTrans[selectedArticle.category as keyof typeof catTrans] || selectedArticle.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-primary tracking-tight leading-tight">
                {selectedArticle.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-brand-medium/70 border-y border-brand-accent/20 py-3 font-light">
                <div className="flex items-center space-x-1.5">
                  <User size={14} className="text-brand-gold" />
                  <span>{t.byLabel} {selectedArticle.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1.5">
                  <Clock size={14} className="text-brand-gold" />
                  <span>{selectedArticle.readTime} {language === 'sv' ? t.readTimeLabel : ''}</span>
                </div>
                <span>•</span>
                <span>{t.publishedLabel}: {selectedArticle.date}</span>
              </div>
            </div>

            <div className="text-brand-medium font-light text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-6 markdown-body">
              {selectedArticle.content}
            </div>

            <div className="border-t border-brand-accent/25 pt-8 mt-12 bg-brand-light/30 p-6 rounded-xs space-y-4">
              <h4 className="font-cinzel text-brand-primary text-sm font-semibold uppercase tracking-wider">
                {t.ctaTitle}
              </h4>
              <p className="text-xs sm:text-sm text-brand-medium font-light">
                {t.ctaDesc}
              </p>
              <div className="pt-2">
                <a
                  href="#booking"
                  className="inline-flex bg-brand-primary text-brand-cream border border-brand-gold/30 px-5 py-2.5 rounded-xs text-xs font-semibold uppercase tracking-wider hover:border-brand-gold hover:bg-brand-medium transition-colors duration-200"
                >
                  {t.ctaBtn.replace('{category}', catTrans[selectedArticle.category as keyof typeof catTrans] || selectedArticle.category)}
                </a>
              </div>
            </div>
          </article>
        ) : (
          /* 2. Main Articles List & Library View */
          <div className="space-y-12">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-brand-accent/20 pb-8">
              <div className="space-y-3">
                <span className="font-cinzel text-brand-gold text-xs font-bold uppercase tracking-widest block">
                  {t.kicker}
                </span>
                <h1 className="text-3xl sm:text-4xl font-normal text-brand-primary tracking-tight">
                  {t.title}
                </h1>
                <p className="text-sm text-brand-medium/80 font-light max-w-xl">
                  {t.subtitle}
                </p>
              </div>

              {/* Publish button */}
              <button
                onClick={() => setIsPublishingModalOpen(true)}
                id="open-publish-modal-btn"
                className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-medium text-brand-cream border border-brand-gold/30 px-5 py-3 rounded-xs text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs"
              >
                <PlusCircle size={16} className="text-brand-gold" />
                <span>{t.writeBtn}</span>
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center bg-brand-light p-4 rounded-xs border border-brand-accent/15" id="library-toolbar">
              {/* Categories slider/list */}
              <div className="flex flex-wrap items-center gap-1.5" id="category-filters">
                <span className="text-xs font-bold uppercase text-brand-primary/60 tracking-wider mr-2 hidden sm:inline">{t.categoryLabel}</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`filter-${cat}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors duration-150 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-brand-primary text-brand-cream border border-brand-gold/30'
                        : 'bg-brand-cream hover:bg-brand-cream/80 text-brand-medium border border-brand-accent/20'
                    }`}
                  >
                    {catTrans[cat as keyof typeof catTrans] || cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative">
                <Search size={16} className="text-brand-gold absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="search-articles-input"
                  className="pl-9 pr-4 py-2 bg-brand-cream text-brand-dark text-xs border border-brand-accent/25 rounded-xs w-full lg:w-64 focus:outline-hidden focus:border-brand-gold focus:ring-1 focus:ring-brand-gold font-light"
                />
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="articles-grid">
                {filteredArticles.map((article) => (
                  <article
                    key={article.id}
                    id={`article-card-${article.id}`}
                    className="bg-brand-cream border border-brand-accent/15 rounded-xs hover:border-brand-gold/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex justify-between items-center text-xs text-brand-medium/70 font-light">
                        <span className="font-semibold uppercase tracking-wider text-brand-gold bg-brand-primary/5 px-2.5 py-1 rounded-xs">
                          {catTrans[article.category as keyof typeof catTrans] || article.category}
                        </span>
                        <span>{article.date}</span>
                      </div>
                      
                      <h2 
                        onClick={() => setSelectedArticleId(article.id)}
                        className="text-xl font-normal text-brand-primary hover:text-brand-gold cursor-pointer transition-colors duration-200"
                      >
                        {article.title}
                      </h2>
                      
                      <p className="text-sm text-brand-medium/90 font-light leading-relaxed line-clamp-4">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-brand-accent/10 flex justify-between items-center text-xs text-brand-medium/65 italic">
                      <span>{t.byLabel} {article.author} • {article.readTime} {language === 'sv' ? t.readTimeLabel : ''}</span>
                      <button
                        onClick={() => setSelectedArticleId(article.id)}
                        id={`read-article-btn-${article.id}`}
                        className="text-brand-primary hover:text-brand-gold font-bold uppercase tracking-wider cursor-pointer"
                      >
                        {t.readBtn}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-dashed border-brand-accent/20 rounded-xs" id="no-articles-state">
                <BookOpen size={48} className="text-brand-gold/40 mx-auto mb-4" />
                <h3 className="font-cinzel text-lg text-brand-primary">{t.noArticlesTitle}</h3>
                <p className="text-sm text-brand-medium font-light mt-1 max-w-sm mx-auto">
                  {t.noArticlesDesc}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 3. Publication Modal (Skriv ny artikel) */}
        {isPublishingModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-dark/65 backdrop-blur-xs flex items-center justify-center p-4" id="publishing-modal">
            <div className="bg-brand-cream border border-brand-gold/30 rounded-xs max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in p-6 sm:p-8 space-y-6">
              
              <div className="flex justify-between items-center border-b border-brand-accent/20 pb-4">
                <div className="space-y-1">
                  <h3 className="font-cinzel text-lg font-bold text-brand-primary uppercase tracking-wider">
                    {t.modalTitle}
                  </h3>
                  <p className="text-xs text-brand-medium/80 font-light">
                    {t.modalSubtitle}
                  </p>
                </div>
                <button
                  onClick={() => setIsPublishingModalOpen(false)}
                  className="p-1.5 text-brand-primary hover:text-brand-gold cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handlePublishSubmit} className="space-y-4 text-xs sm:text-sm text-brand-medium font-light">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelTitle}</label>
                    <input
                      type="text"
                      required
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder={t.placeholderTitle}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelCategory}</label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value as Article['category'])}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                    >
                      <option value="Brottmål">Brottmål</option>
                      <option value="Migrationsrätt">Migrationsrätt</option>
                      <option value="Familjerätt">Familjerätt</option>
                      <option value="Socialrätt">Socialrätt</option>
                      <option value="Tvistemål">Tvistemål</option>
                      <option value="Arvsrätt">Arvsrätt</option>
                      <option value="Allmänt">Allmänt</option>
                    </select>
                  </div>

                  {/* Author */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelAuthor}</label>
                    <input
                      type="text"
                      required
                      value={formAuthor}
                      onChange={(e) => setFormAuthor(e.target.value)}
                      placeholder={t.placeholderAuthor}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Read time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelReadTime}</label>
                    <input
                      type="text"
                      value={formReadTime}
                      onChange={(e) => setFormReadTime(e.target.value)}
                      placeholder={t.placeholderReadTime}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelExcerpt}</label>
                    <textarea
                      required
                      rows={2}
                      value={formExcerpt}
                      onChange={(e) => setFormExcerpt(e.target.value)}
                      placeholder={t.placeholderExcerpt}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden"
                    />
                  </div>

                  {/* Content body */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase text-brand-primary/80">{t.labelContent}</label>
                    <textarea
                      required
                      rows={8}
                      value={formContent}
                      onChange={(e) => setFormContent(e.target.value)}
                      placeholder={t.placeholderContent}
                      className="w-full bg-brand-light/40 border border-brand-accent/35 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xs px-3 py-2 text-brand-dark focus:outline-hidden font-light leading-relaxed"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-accent/20 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPublishingModalOpen(false)}
                    className="px-5 py-2.5 rounded-xs border border-brand-accent/40 text-brand-primary hover:bg-brand-light transition-all duration-150 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    {t.btnCancel}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xs bg-brand-primary text-brand-cream border border-brand-gold/30 hover:bg-brand-medium transition-all duration-150 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    {t.btnSubmit}
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
