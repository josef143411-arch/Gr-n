import { Article, Staff, CareerPosition } from './types';

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'När har man rätt till en offentlig försvarare?',
    category: 'Brottmål',
    excerpt: 'En genomgång av förutsättningarna för att få en offentlig försvarare förordnad av domstolen och vikten av att begära rätt advokat tidigt i processen.',
    content: `Att bli misstänkt för ett brott är en av de mest påfrestande situationer en människa kan hamna i. I Sverige har alla som är misstänkta för brott rätt till ett försvar, men villkoren för vem som får en offentlig försvarare betald av staten varierar.

Vad är en offentlig försvarare?
En offentlig försvarare är en advokat som utses av domstolen för att tillvarata den misstänktes rättigheter under förundersökningen och domstolsförhandlingarna. Staten betalar advokatens arvode, även om du vid en fällande dom kan bli skyldig att återbetala hela eller delar av kostnaden beroende på din inkomst.

När har man rätt till en offentlig försvarare?
Huvudregeln är att du har rätt till en offentlig försvarare om:
1. Du är gripen eller anhållen.
2. Brottet du misstänks för kan leda till fängelse i mer än 6 månader.
3. Det finns särskilda skäl med hänsyn till utredningen (t.ex. komplicerad bevisning eller svåra juridiska frågor).
4. Du av personliga skäl har svårt att föra din talan (t.ex. på grund av ålder, hälsa eller språksvårigheter).

Vikten av att välja rätt försvarare tidigt
Många tror att man måste acceptera den advokat som domstolen slumpmässigt tilldelar. Så är inte fallet. Du har en lagstadgad rätt därtill att önska en specifik advokat.

Det är viktigt att du begär en advokat från Grönvall & Partners redan vid det allra första polisförhöret. Vad som sägs i de första förhören lägger grunden för hela den fortsatta processen, och att ha en erfaren brottmålsadvokat vid sin sida från start kan vara helt avgörande för utgången av målet.`,
    date: '2026-06-15',
    author: 'Josef Ben Ali',
    readTime: '4 min'
  },
  {
    id: 'art-2',
    title: 'Hinder och möjligheter vid ansökan om resning',
    category: 'Brottmål',
    excerpt: 'Att få en lagakraftvunnen dom prövad på nytt är en exceptionell åtgärd. Vi analyserar kraven för att nå framgång med ett resningsärende.',
    content: `Ett av de mest fundamentala kraven i en rättsstat är att domar ska vara slutgiltiga och kunna lita på – den så kallade principen om doms kraft (res judicata). Men vad händer när en dom är uppenbart felaktig? För dessa sällsynta fall finns det extraordinära rättsmedlet resning.

Vad krävs för resning i brottmål?
Enligt rättegångsbalken kan resning beviljas till förmån för den tilltalade under vissa strikta förutsättningar:
1. Nya omständigheter eller bevis: Det har kommit fram nya bevis eller omständigheter som sannolikt skulle ha lett till en friande dom eller en mildare påföljd om de lagts fram under den ordinarie rättegången.
2. Grovt tjänstefel eller brott: En ledamot av domstolen eller en åklagare har begått ett brott eller ett grovt tjänstefel i samband med målet, och detta kan antas ha påverkat utgången.
3. Falskt bevis: Ett vittne har vittnat falskt, eller ett skriftligt bevis har varit förfalskat, och detta har påverkat domen.

Den höga ribban i Högsta domstolen
Högsta domstolen (HD) är extremt restriktiv med att bevilja resning. Det räcker inte att enbart peka på att tingsrätten eller hovrätten har gjort en felaktig bevisvärdering. Det krävs substantiella, nya fakta som kastar ett helt nytt ljus över målet.

Vårt arbete med resningsärenden
På Grönvall & Partners har vi en gedigen erfarenhet av att driva komplexa resningsprocesser. Vi genomför egna, djupgående privatutredningar, analyserar tidigare domar och förhörsutskrifter med mikroskopisk precision och bygger upp en solid argumentation för att övertyga Högsta domstolen om att rättvisa kräver en ny prövning.`,
    date: '2026-05-22',
    author: 'Josef Ben Ali',
    readTime: '6 min'
  },
  {
    id: 'art-3',
    title: 'Vårdnadstvister: Barnets bästa i fokus',
    category: 'Familjerätt',
    excerpt: 'Hur domstolen bedömer frågor om vårdnad, boende och umgänge, och hur man bäst navigerar en känslomässigt svår rättsprocess.',
    content: `En separation mellan föräldrar är ofta smärtsam, men när parterna inte kan enas om gemensamma barn eskalerar situationen lätt till en juridisk konflikt. I alla beslut som rör vårdnad, boende och umgänge ska en enda princip alltid stå i centrum: barnets bästa.

Vad innebär "barnets bästa"?
Barnets bästa är inte en fast regel utan en individuell bedömning som görs i varje enskilt fall. Domstolen väger samman flera faktorer:
* Barnets behov av en nära och god kontakt med båda föräldrarna.
* Risken för att barnet eller någon annan i familjen utsätts för övergrepp, far illa eller far i övrigt.
* Barnets egen vilja, med hänsyn tagen till barnets ålder och mognad.
* Vikten av kontinuitet och stabilitet i barnets miljö.

Gemensam eller enskild vårdnad?
Svensk lag utgår från att gemensam vårdnad är det bästa för barnet. För att domstolen ska döma till enskild vårdnad krävs det vanligtvis att föräldrarna har så djupa samarbetssvårigheter att det är helt omöjligt att fatta gemensamma beslut rörande barnet.

Juridiskt biträde gör skillnad
I familjerättsliga konflikter är det lätt att känslorna tar över. En skicklig familjerättsjurist från Grönvall & Partners fungerar som en trygg hand. Vi hjälper dig att hålla fokus på de juridiska och sakliga argumenten samt arbetar i första hand för att finna samförståndslösningar som skonar barnet från utdragna processer.`,
    date: '2026-04-10',
    author: 'Josef Ben Ali',
    readTime: '5 min'
  }
];

export const STAFF_MEMBERS: Staff[] = [
  {
    id: 'staff-1',
    name: 'Robin Grönvall',
    title: 'Advokat / Delägare',
    bio: 'Robin är specialiserad på brottmål och arbetar främst som försvarsadvokat, med särskilt fokus på ekobrottmål och komplexa ärenden rörande organiserad brottslighet. Han besitter gedigen erfarenhet av grova brottmål och uppträder regelbundet i domstol i denna typ av krävande rättsprocesser. Robin åtar sig uppdrag som offentlig och privat försvarare, målsägandebiträde samt särskild företrädare för barn.',
    email: 'robin@hgaadvokat.se',
    phone: '070-913 44 02',
    imageUrl: '/images/rob.jpg',
    specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Organiserad brottslighet', 'Grov brottslighet', 'Ekonomisk brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn'],
    education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
  },
  {
    id: 'staff-josef',
    name: 'Josef Ben Ali',
    title: 'Advokat / Delägare',
    bio: 'Josef är advokat med omfattande erfarenhet av kvalificerade brottmål samt tvångsmål (LVU, LPT, LVM). Han har företrätt klienter i several medialt uppmärksammade mål och besitter gedigen erfarenhet av såväl eko-mål som mål rörande organiserad brottslighet. Med ett strategiskt, engagerat och rättssäkert arbetssätt arbetar han målmedvetet för att tillvarata klientens intressen och uppnå bästa möjliga resultat i varje enskilt ärende.',
    email: 'josef@hgaadvokat.se',
    phone: '073-590 67 04',
    imageUrl: '/images/jos.jpg',
    specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Tvångsmål (LVU, LPT, LVM)', 'Organiserad brottslighet', 'Grov brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn', 'Ekonomisk brottslighet'],
    education: ['Juristexamen (LL.M.)', 'Kandidatexamen i kriminologi', 'Ledamot av Sveriges advokatsamfund'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)', 'Arabiska (Flytande)']
  },
  {
    id: 'staff-katja',
    name: 'Katja Jofred',
    title: 'Advokat / Delägare',
    bio: 'Katja är advokat med omfattande erfarenhet av kvalificerade brottmål samt tvångsmål (LVU, LPT, LVM). Hon har företrätt klienter i ett stort antal mål avseende grov brottslighet, däribland mål rörande organiserad brottslighet, eko-mål samt medialt uppmärksammade mål. Katja är känd för sitt stora engagemang, sin uthållighet och sin noggrannhet. Hon ger aldrig upp utan granskar metodiskt varje detalj i utredningen för att säkerställa att klientens rättigheter tas till vara på bästa möjliga sätt.',
    email: 'katja@hgaadvokat.se',
    phone: '076-293 81 10',
    imageUrl: '/images/kat.jpg',
    specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Tvångsmål (LVU, LPT, LVM)', 'Organiserad brottslighet', 'Grov brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn'],
    education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
  },
  {
    id: 'staff-kevin',
    name: 'Kevin Sarajlija',
    title: 'Advokat',
    bio: 'Kevin är advokat specialiserad på brottmål, tvångsmål (LVU, LPT, LVM) och familjerätt. Han åtar sig uppdrag som offentlig och privat försvarare, samt som målsägandebiträde och särskild företrädare för barn. Kevin har även gedigen erfarenhet av grova brottmål, organiserad brottslighet, mediala mål samt känsliga vårdnadstvister och familjerättsliga processer. Med ett djupt personligt engagemang och strategisk skärpa kämpar han alltid hängivet för att säkra bästa möjliga utfall för sina klienter.',
    email: 'kevin@hgaadvokat.se',
    phone: '073-990 53 70',
    imageUrl: '/images/kev.jpg',
    specialties: ['Brottmål (Offentlig/Privat försvarare)', 'Tvångsmål (LVU, LPT, LVM)', 'Organiserad brottslighet', 'Grov brottslighet', 'Målsägandebiträde', 'Särskild företrädare för barn', 'Familjerätt (Vårdnad, boende, umgänge)'],
    education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)', 'Bosniska (Flytande)']
  },
  {
    id: 'staff-rosanna',
    name: 'Rosanna Sundberg',
    title: 'Paralegal',
    bio: 'Rosanna är paralegal hos oss och det är oftast henne du först kommer i kontakt med när du skickar en förfrågan. Hon ansvarar för vårt inledande klientmottagande, koordinerar ärenden och ger administrativt och praktiskt stöd till våra advokater.',
    email: 'info@hgaadvokat.se',
    phone: '08-20 60 20',
    imageUrl: '/images/ross.jpg',
    specialties: ['Klientmottagande', 'Ärendekoordinering', 'Administrativt stöd'],
    education: ['Paralegal-utbildning', 'Certifierad administratör'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)']
  },
  {
    id: 'staff-johan',
    name: 'Johan Hansson',
    title: 'Advokat',
    bio: 'Johan Hansson bedriver advokatverksamhet i kontorsgemenskap med Grönvall & Partners. Han är specialiserad på bouppteckningar, arvstvister och familjerätt, men har även gedigen erfarenhet av brottmål, tvistemål samt affärsjuridiska ärenden och åtar sig regelbundet uppdrag som offentlig och privat försvarare samt målsägandebiträde.',
    email: 'johan@hgaadvokat.se',
    phone: '070-836 28 36',
    imageUrl: '/images/joh.jpg',
    specialties: ['Bouppteckningar', 'Arvstvister', 'Brottmål (Offentlig/Privat försvarare)', 'Tvistemål', 'Affärsjuridik', 'Målsägandebiträde'],
    education: ['Juristexamen (LL.M.)', 'Ledamot av Sveriges advokatsamfund'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)'],
    isOfficeSharing: true
  },
  {
    id: 'staff-jessica',
    name: 'Jessica Löfquist',
    title: 'Advokatassistent',
    bio: 'Jessica Löfquist arbetar som advokatassistent och ingår i kontorsgemenskapen med Grönvall & Partners. Hon bistår advokaterna med kvalificerad administrativ support, klientkontakter, domstolskommunikation samt löpande ärendehantering.',
    email: 'info@hgaadvokat.se',
    phone: '',
    imageUrl: '/images/jess.jpg',
    specialties: ['Administrativ support', 'Klientmottagande', 'Ärendehantering', 'Domstolskommunikation'],
    education: ['Utbildad advokatsekreterare / paralegal', 'Löpande yrkesutbildningar hos Advokatsamfundet'],
    languages: ['Svenska (Modersmål)', 'Engelska (Flytande)'],
    isOfficeSharing: true
  }
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'pos-1',
    title: 'Advokat',
    department: 'Brottmål, Tvistemål & Humanjuridik',
    location: 'Stockholm, Huvudkontor',
    type: 'Heltid',
    description: 'Vi söker dig som är ledamot av Sveriges advokatsamfund och vill bli en del av Grönvall & Partners. Vi välkomnar ansökningar från advokater med olika bakgrund och inriktningar – oavsett om din expertis ligger inom brottmål, tvistemål, familjerätt eller andra humanjuridiska områden. Vi erbjuder en samarbetsinriktad miljö med goda utvecklingsmöjligheter och stort fokus på hög kvalitet och balans i arbetslivet.',
    requirements: [
      'Ledamot av Sveriges advokatsamfund',
      'Erfarenhet av självständigt klient- och processarbete i brottmål, tvistemål eller familjerätt',
      'Stark analytisk förmåga och professionellt bemötande',
      'Engagemang för att leverera högsta juridiska kvalitet'
    ],
    qualifications: [
      'Fullgjord tingstjänstgöring (tingsmeritering) är meriterande',
      'Erfarenhet av processer i allmän domstol gällande både brottmål och tvistemål är ett plus',
      'Ytterligare språkkunskaper (utöver svenska och engelska) ses som meriterande',
      'Förmåga att bidra positivt till vår starka sammanhållning och laganda'
    ]
  },
  {
    id: 'pos-2',
    title: 'Biträdande jurist',
    department: 'Brottmål, Tvistemål & Humanjuridik',
    location: 'Stockholm, Huvudkontor',
    type: 'Heltid',
    description: 'Vi söker en engagerad och driven biträdande jurist som vill utvecklas hos oss. Tjänsten är öppen för dig som vill arbeta brett inom våra verksamhetsområden, primärt brottmål, tvistemål och familjerätt. Du kommer att arbeta under handledning av erfarna advokater med målet att bygga upp din processvana och på sikt avlägga advokatexamen.',
    requirements: [
      'Svensk juristexamen (LL.M.)',
      'Stort engagemang för rättssäkerhet, tvistemål och humanjuridiska frågor',
      'God analytisk förmåga samt utmärkt uttrycksförmåga i tal och skrift',
      'Professionellt, lyhört och förtroendeingivande bemötande'
    ],
    qualifications: [
      'Fullgjord eller påbörjad tingstjänstgöring (tingsmeritering) är meriterande',
      'Erfarenhet från annan advokatbyrå eller domstolsprocesser är meriterande',
      'Ytterligare språkkunskaper (utöver svenska och engelska) ses som meriterande',
      'Körkort (B) underlättar resor i tjänsten'
    ]
  },
  {
    id: 'pos-3',
    title: 'Sommarpraktikant / Uppsatspraktikant 2027',
    department: 'Juridiskt stöd',
    location: 'Stockholm, Huvudkontor',
    type: 'Praktik',
    description: 'Är du i slutet av din juristutbildning och vill få en inblick i hur det är att arbeta på en modern, samarbetsinriktad advokatbyrå? Vi erbjuder terminsvisa uppsatspraktiker och sommarpraktikplatser där du får arbeta med riktiga rättsutredningar inom brottmål, tvistemål och familjerätt, samt följa med på domstolsförhandlingar.',
    requirements: [
      'Avklarat minst 6 terminer på juristprogrammet',
      'Särskilt intresse för straffrätt, tvistemål eller humanjuridik',
      'Analytisk skärpa, noggrannhet och utmärkt skriftlig förmåga'
    ],
    qualifications: [
      'Goda studieresultat i straffrätt, processrätt eller civilrätt',
      'Engagemang i studentlivet, rättshjälp eller ideellt juridiskt arbete',
      'Flerspråkighet är meriterande'
    ]
  }
];
