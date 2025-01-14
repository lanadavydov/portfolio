// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Language Switcher Functionality
const languageSelect = document.getElementById('language-select');
const languageSelectMobile = document.getElementById('language-select-mobile');
const elements = document.querySelectorAll('[data-lang-key]');

// Translations Object
const translations = {
  en: {
    logo: "Lana Davydov",
    nav_about: "About",
    nav_skills: "Skills",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_typing: ["Lana", "a Developer", "a Designer", "a Product Manager", "a Marketer", "a Creator", "a Changemaker", "excited to make impact"],
    hero_subtitle: "Welcome to my page!",
    hero_button: "Explore My Work",
    about_title: "About Me",
    skills_title: "Skills",
    skill_javascript: "JavaScript",
    skill_react: "React",
    skill_html_css: "HTML/CSS",
    skill_uiux: "UI/UX Design",
    skill_python: "Python",
    skill_cpp: "C++",
    portfolio_title: "Portfolio",
    filter_all: "All",
    filter_web: "Web Development",
    filter_design: "Design",
    filter_app: "App Development",
    project1_title: "Project 1",
    project1_category: "Web Development",
    project2_title: "Project 2",
    project2_category: "Design",
    contact_title: "Contact Me",
    contact_placeholder_name: "Name",
    contact_placeholder_email: "Email",
    contact_placeholder_message: "Message",
    contact_button: "Send Message",
    // Add more translations as needed
  },
  ru: {
    logo: "Лана Давыдов",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_resume: "Портфолио",
    nav_portfolio: "Портфолио",
    nav_contact: "Контакты",
    hero_greeting: "Привет, я",
    hero_typing: ["Лана", "Разработчик", "Дизайнер", "Менеджер продукта", "Маркетолог", "Создатель", "Изменитель", "в восторге от создания влияния"],
    hero_subtitle: "Добро пожаловать на мою страницу!",
    hero_button: "Исследуйте мои работы",
    about_title: "Обо мне",
    about_description: "Здравствуйте! Очень приятно познакомиться с вами виртуально. Меня зовут Лана Давыдов, я студентка Нью-Йоркского университета, где изучаю компьютерные науки и получаю дополнительную специальность в области интегрированного дизайна и медиа. Я человек, который стремится оказывать влияние и рассказывать историю во всем, что я делаю. Потому что я верю, что способность устанавливать связь с другими людьми посредством рассказа истории — это то, что оказывает влияние на окружающий нас мир. Умение устанавливать связь с другими позволяет людям строить мосты и протягивать руку новым сообществам или тем, которые были лишены голоса, изолированы или оторваны от общества. Я стремлюсь продолжать оказывать влияние, быть инициатором перемен, делиться историями других людей и устанавливать связи с окружающим миром. Я хочу приводить к изменениям и расширять границы технологий. Я хочу развивать инновации как для современности, так и для будущего нашего общества. Я хочу создать пространство, в котором люди, чьи истории необходимо рассказать, могли бы выразить себя в моих проектах. В команде я хочу работать с блестящими умами, чтобы в первую очередь объединяться как люди, а уже потом как новаторы. Технологии развились невообразимым образом и создали новые способы взаимодействия между людьми по всему миру. Делясь историями посредством тех технологий, которые мы создаем, я верю, что только тогда мы сможем действительно понять друг друга на человеческом уровне, развивать отношения и приносить реальный вклад в общества вокруг нас с помощью наших технологических достижений. Совершенство достигается, когда достигается влияние. И чтобы достичь влияния, мы должны создавать, изобретать и бросать вызов привычному с ясной целью и намерением. Я тот человек, который переплетает повествование, технологии, инновации и переосмысление, чтобы создавать влияние. Я тот, кто стремится стать частью следующего поколения технического превосходства.",
    skills_title: "Навыки",
    skill_javascript: "JavaScript",
    skills_title: "Навыки",
    skill_javascript: "JavaScript",
    skill_react: "React",
    skill_html_css: "HTML/CSS",
    skill_uiux: "UI/UX Дизайн",
    skill_python: "Python",
    skill_cpp: "C++",
    portfolio_title: "Портфолио",
    filter_all: "Все",
    filter_web: "Веб-разработка",
    filter_design: "Дизайн",
    filter_app: "Разработка приложений",
    project1_title: "Проект 1",
    project1_category: "Веб-разработка",
    project2_title: "Проект 2",
    project2_category: "Дизайн",
    contact_title: "Свяжитесь со мной",
    contact_placeholder_name: "Имя",
    contact_placeholder_email: "Email",
    contact_placeholder_message: "Сообщение",
    contact_button: "Отправить сообщение",
    // Add more translations as needed
  },
  es: {
    logo: "Lana Davydov",
    nav_about: "Acerca de",
    nav_skills: "Habilidades",
    nav_resume: "Currículum Vitae",
    nav_portfolio: "Portafolio",
    nav_contact: "Contacto",
    hero_greeting: "Hola, soy",
    hero_typing: ["Lana", "Desarrolladora", "Diseñadora", "Gerente de Producto", "Mercadotécnica", "Creadora", "Agente de Cambio", "emocionada de hacer impacto"],
    hero_subtitle: "¡Bienvenido a mi página!",
    hero_button: "Explora Mi Trabajo",
    about_title: "Acerca de Mí",
    about_description: "¡Hola! Es un placer conocerte virtualmente. Mi nombre es Lana Davydov, soy estudiante de la Universidad de Nueva York, donde estudio Ciencias de la Computación con una especialización en Diseño e Medios Integrados. Soy alguien que genera impacto y cuenta una historia con todo lo que hago. Esto se debe a que creo que la capacidad de conectar con los demás a través de la narración es lo que impacta el mundo que nos rodea. Poder conectar con los demás es lo que permite a las personas tender puentes y extender una mano a nuevas comunidades o a aquellas que han sido silenciadas, aisladas o desconectadas. Me esfuerzo por seguir generando un impacto, siendo un agente de cambio, compartiendo las historias de los demás y conectándome con el mundo a mi alrededor. Quiero impulsar el cambio y llevar la tecnología hasta sus límites. Quiero innovar para el presente y el futuro de nuestra sociedad. Quiero crear un espacio para las personas cuyas historias necesitan ser contadas a través de mis proyectos. En un equipo, quiero trabajar con mentes brillantes, unirnos primero como seres humanos y luego como innovadores. La tecnología ha evolucionado de maneras inimaginables y ha creado nuevos modos de conexión entre individuos a nivel mundial. Al compartir historias a través de la tecnología que creamos, creo que solo entonces podemos comenzar a entendernos a nivel humano, cultivar relaciones y realmente generar un impacto en las comunidades que nos rodean. La excelencia se logra cuando se produce impacto. Y para lograrlo, debemos crear, innovar y desafiar con propósito e intención. Soy alguien que entrelaza la narración, la tecnología, la innovación y la reinvención para crear impacto. Soy alguien que quiere ser parte de la próxima generación de excelencia técnica.",
    skills_title: "Habilidades",
    skill_javascript: "JavaScript",
    skill_react: "React",
    skill_html_css: "HTML/CSS",
    skill_uiux: "Diseño UI/UX",
    skill_python: "Python",
    skill_cpp: "C++",
    portfolio_title: "Portafolio",
    filter_all: "Todo",
    filter_web: "Desarrollo Web",
    filter_design: "Diseño",
    filter_app: "Desarrollo de Apps",
    project1_title: "Proyecto 1",
    project1_category: "Desarrollo Web",
    project2_title: "Proyecto 2",
    project2_category: "Diseño",
    contact_title: "Contáctame",
    contact_placeholder_name: "Nombre",
    contact_placeholder_email: "Email",
    contact_placeholder_message: "Mensaje",
    contact_button: "Enviar Mensaje",
    // Add more translations as needed
  },
  it: {
    logo: "Lana Davydov",
    nav_about: "Chi Sono",
    nav_skills: "Competenze",
    nav_resume: "Curriculum",
    nav_portfolio: "Portafoglio",
    nav_contact: "Contatti",
    hero_greeting: "Ciao, sono",
    hero_typing: ["Lana", "Sviluppatrice", "Designer", "Manager di Prodotto", "Marketera", "Creatrice", "Agente di Cambiamento", "entusiasta di fare impatto"],
    hero_subtitle: "Benvenuto nella mia pagina!",
    hero_button: "Esplora il Mio Lavoro",
    about_title: "Chi Sono",
    about_description: "Ciao, è un piacere conoscerti virtualmente! Mi chiamo Lana Davydov, sono una studentessa alla New York University, dove studio Informatica con un minor in Integrated Design and Media. Sono una persona che crea impatto e racconta una storia in tutto ciò che faccio. Questo perché credo che la capacità di connettersi con gli altri attraverso la narrazione sia ciò che influenza il mondo che ci circonda. Essere in grado di connettersi con gli altri è ciò che permette alle persone di costruire ponti e tendere una mano a nuove comunità o a comunità che sono state messe a tacere, isolate o disconnesse. Mi impegno a continuare a creare un impatto, a essere un agente di cambiamento, a condividere le storie degli altri e a connettermi con il mondo che mi circonda. Voglio guidare il cambiamento e spingere i limiti della tecnologia. Voglio innovare per il presente e per il futuro della nostra società. Voglio creare uno spazio per le persone le cui storie devono essere raccontate attraverso i miei progetti. In un team, desidero lavorare con menti brillanti, unendoci prima di tutto come esseri umani e poi come innovatori. La tecnologia si è evoluta in modi inimmaginabili e ha creato nuove modalità di connessione tra individui in tutto il mondo. Condividendo storie attraverso la tecnologia che creiamo, credo che solo così possiamo iniziare davvero a comprenderci a livello umano, coltivare relazioni e avere un impatto significativo sulle comunità che ci circondano grazie ai nostri progressi tecnologici. L'eccellenza si ottiene quando si raggiunge un impatto. E per raggiungere un impatto, dobbiamo creare, innovare e sfidare con scopo e intenzione. Sono una persona che intreccia narrazione, tecnologia, innovazione e reinvenzione per creare impatto. Sono qualcuno che vuole far parte della prossima generazione di eccellenza tecnica.",
    skills_title: "Competenze",
    skill_javascript: "JavaScript",
    skill_react: "React",
    skill_html_css: "HTML/CSS",
    skill_uiux: "Design UI/UX",
    skill_python: "Python",
    skill_cpp: "C++",
    portfolio_title: "Portafoglio",
    filter_all: "Tutti",
    filter_web: "Sviluppo Web",
    filter_design: "Design",
    filter_app: "Sviluppo App",
    project1_title: "Progetto 1",
    project1_category: "Sviluppo Web",
    project2_title: "Progetto 2",
    project2_category: "Design",
    contact_title: "Contattami",
    contact_placeholder_name: "Nome",
    contact_placeholder_email: "Email",
    contact_placeholder_message: "Messaggio",
    contact_button: "Invia Messaggio",
    // Add more translations as needed
  }
};

// Function to update the text content based on selected language
function updateLanguage(lang) {
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[lang] && translations[lang][key]) {
      // Check if the element should handle an array (for typingTexts)
      if (key === "hero_typing") {
        // Update the typingTexts array for the current language
        typingEffect.updateTexts(translations[lang][key]);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  // Update the lang attribute of the html tag
  document.documentElement.lang = lang;
}

// Event Listener for Language Selection in Navbar
languageSelect.addEventListener('change', (e) => {
  const selectedLang = e.target.value;
  updateLanguage(selectedLang);
  localStorage.setItem('selectedLanguage', selectedLang);
});

// Event Listener for Language Selection in Mobile Menu
if (languageSelectMobile) {
  languageSelectMobile.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    // Sync the language selection in navbar
    languageSelect.value = selectedLang;
    updateLanguage(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang);
  });
}

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to Top Button Visibility
  const backToTop = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

// Scroll Animations for Elements with 'scroll-animation' Class
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add('animate');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Portfolio Filtering Functionality
const filterButtons = document.querySelectorAll('.portfolio-filters button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    portfolioItems.forEach((item) => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Custom Cursor Movement
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Enlarge Cursor on Hover over Interactive Elements
const interactiveElements = document.querySelectorAll('a, button, .portfolio-item');
interactiveElements.forEach((el) => {
  el.addEventListener('mouseover', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  // Toggle ARIA attributes for accessibility
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  mobileMenu.setAttribute('aria-hidden', expanded);
});

// Close Mobile Menu When a Link is Clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    // Update ARIA attributes
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  });
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* *** Typing Effect Implementation *** */

// TypingEffect Class to Manage the Typing Effect
class TypingEffect {
  constructor(element, texts, typingDelay = 150, erasingDelay = 100, newTextDelay = 2500, pauseBetweenWords = 1000) {
    this.element = element; // The DOM element where typing occurs
    this.texts = texts; // Array of texts to type
    this.typingDelay = typingDelay; // Delay between typing each character
    this.erasingDelay = erasingDelay; // Delay between deleting each character
    this.newTextDelay = newTextDelay; // Delay before typing starts after a word is fully typed
    this.pauseBetweenWords = pauseBetweenWords; // Additional pause after a word is fully typed
    this.textIndex = 0; // Current text index
    this.charIndex = 0; // Current character index
    this.isDeleting = false; // Flag to indicate if deleting
    this.timeout = null; // Reference to the timeout
    this.type = this.type.bind(this); // Bind the type method
    this.start(); // Start the typing effect
  }

  start() {
    // Start the typing effect after an initial delay
    this.timeout = setTimeout(this.type, this.newTextDelay + 250);
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (!this.isDeleting) {
      // Typing phase
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentText.length) {
        // Word fully typed, initiate pause before deleting
        this.isDeleting = true;
        this.timeout = setTimeout(this.type, this.pauseBetweenWords);
      } else {
        // Continue typing
        this.timeout = setTimeout(this.type, this.typingDelay);
      }
    } else {
      // Deleting phase
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        // Word fully deleted, move to the next word
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        this.timeout = setTimeout(this.type, this.typingDelay);
      } else {
        // Continue deleting
        this.timeout = setTimeout(this.type, this.erasingDelay);
      }
    }
  }

  // Function to update texts dynamically based on language
  updateTexts(newTexts) {
    this.texts = newTexts;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.type, this.typingDelay);
  }

  // Optional: Stop the typing effect
  stop() {
    clearTimeout(this.timeout);
  }
}

// Initialize the TypingEffect Once the DOM is Fully Loaded
let typingEffect; // Declare outside to allow access in updateLanguage function
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing');
  if (typingElement) {
    // Initialize with the current language's typing texts
    const currentLang = document.documentElement.lang || 'en';
    typingEffect = new TypingEffect(typingElement, translations[currentLang]['hero_typing']);
  }
});
