const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const langSwitch = document.getElementById('langSwitch');

menuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.setAttribute('aria-hidden', String(!open));
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

const translations = {
  en: {
    navConcept:'Concept', navLab:'Pasta Lab', navGallery:'Gallery',
    heroEyebrow:'Piedmont born · Miami bound', heroLine1:'Fresh pasta.', heroLine2:'Made to move.', heroText:'A contemporary pasta bar where Italian craft meets Miami energy.', discover:'Discover the concept',
    conceptKicker:'The concept', conceptTitle1:'From the Langhe,', conceptTitle2:'built for Miami.', conceptLead:'PLIN TO GO reimagines the Italian pasta bar around one simple idea: exceptional fresh pasta, made every day and served without unnecessary formality.', conceptBody:'Rooted in Piedmontese tradition and designed for a faster rhythm, the experience is open, warm and precise — real ingredients, visible craft and a plate of pasta that never feels ordinary.',
    p1title:'Fresh daily', p1body:'Pasta made in-house, every day.', p2title:'Open craft', p2body:'A process designed to be seen.', p3title:'Italian soul', p3body:'Authentic roots, contemporary language.',
    labKicker:'The heart of PLIN TO GO', labTitle1:'The Pasta', labTitle2:'Lab.', labLead:'Not backstage. Center stage.', labBody:'Our glass-enclosed pasta lab turns preparation into part of the experience. Dough is rolled, filled and shaped in full view, creating a direct line between craftsmanship and the plate.', labNote:'Small, hand-pinched ravioli from Piedmont. The gesture that gives us our name.',
    statement1:'Italian tradition.', statement2:'Miami energy.', statement3:'No shortcuts.',
    experienceKicker:'The experience', experienceTitle1:'Fast, never', experienceTitle2:'rushed.', experienceBody:'A compact menu, an open kitchen and a room designed around movement. Come for a quick bowl, stay at the counter, watch the pasta being made.', experienceCaption:'Open kitchen · warm light · visible craft',
    galleryKicker:'Inside PLIN TO GO', galleryTitle1:'A space with', galleryTitle2:'a point of view.',
    miamiKicker:'Coming soon', miamiTitle1:'Miami,', miamiTitle2:'see you this fall.', openingLabel:'Opening', openingValue:'Fall 2026', footerText:'Fresh pasta · Miami', backTop:'Back to top ↑'
  },
  it: {
    navConcept:'Concept', navLab:'Pasta Lab', navGallery:'Gallery',
    heroEyebrow:'Nato in Piemonte · diretto a Miami', heroLine1:'Pasta fresca.', heroLine2:'Fatta per muoversi.', heroText:'Un pasta bar contemporaneo dove l’artigianalità italiana incontra l’energia di Miami.', discover:'Scopri il concept',
    conceptKicker:'Il concept', conceptTitle1:'Dalle Langhe,', conceptTitle2:'pensato per Miami.', conceptLead:'PLIN TO GO reinterpreta il pasta bar italiano partendo da un’idea semplice: pasta fresca eccezionale, fatta ogni giorno e servita senza formalità inutili.', conceptBody:'Radicato nella tradizione piemontese e progettato per un ritmo più veloce, il nostro spazio è aperto, caldo e preciso — ingredienti veri, lavorazione a vista e un piatto di pasta che non diventa mai ordinario.',
    p1title:'Fresca ogni giorno', p1body:'Pasta prodotta in casa, ogni giorno.', p2title:'Artigianalità a vista', p2body:'Un processo pensato per essere visto.', p3title:'Anima italiana', p3body:'Radici autentiche, linguaggio contemporaneo.',
    labKicker:'Il cuore di PLIN TO GO', labTitle1:'Il Pasta', labTitle2:'Lab.', labLead:'Non dietro le quinte. Al centro della scena.', labBody:'Il nostro laboratorio vetrato trasforma la preparazione in parte dell’esperienza. L’impasto viene tirato, farcito e formato davanti agli ospiti, creando un legame diretto tra gesto artigiano e piatto.', labNote:'Piccoli ravioli piemontesi pizzicati a mano. Il gesto che dà origine al nostro nome.',
    statement1:'Tradizione italiana.', statement2:'Energia di Miami.', statement3:'Nessuna scorciatoia.',
    experienceKicker:'L’esperienza', experienceTitle1:'Veloce, mai', experienceTitle2:'frettolosa.', experienceBody:'Un menu compatto, una cucina a vista e uno spazio progettato intorno al movimento. Vieni per un piatto veloce, fermati al bancone, guarda la pasta prendere forma.', experienceCaption:'Cucina a vista · luce calda · lavorazione visibile',
    galleryKicker:'Dentro PLIN TO GO', galleryTitle1:'Uno spazio con', galleryTitle2:'un punto di vista.',
    miamiKicker:'Prossimamente', miamiTitle1:'Miami,', miamiTitle2:'ci vediamo in autunno.', openingLabel:'Apertura', openingValue:'Autunno 2026', footerText:'Pasta fresca · Miami', backTop:'Torna su ↑'
  }
};

let language = localStorage.getItem('plin-language') || 'en';
function applyLanguage(lang){
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  langSwitch.textContent = lang === 'en' ? 'IT' : 'EN';
  langSwitch.setAttribute('aria-label', lang === 'en' ? 'Passa all’italiano' : 'Switch to English');
  localStorage.setItem('plin-language', lang);
}
langSwitch?.addEventListener('click', () => applyLanguage(language === 'en' ? 'it' : 'en'));
applyLanguage(language);

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
},{threshold:.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
