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
      about_description: "I am Lana Davydov, a passionate developer and designer with a knack for creating dynamic and user-friendly web experiences. With a strong foundation in both front-end and back-end technologies, I bridge the gap between aesthetics and functionality to deliver projects that not only look great but also perform seamlessly.",
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
      nav_portfolio: "Портфолио",
      nav_contact: "Контакты",
      hero_greeting: "Привет, я",
      hero_typing: ["Лана", "Разработчик", "Дизайнер", "Менеджер продукта", "Маркетолог", "Создатель", "Изменитель", "в восторге от создания влияния"],
      hero_subtitle: "Добро пожаловать на мою страницу!",
      hero_button: "Исследуйте мои работы",
      about_title: "Обо мне",
      about_description: "Я Лана Давыдов, увлеченный разработчик и дизайнер, обладающий талантом создавать динамичные и удобные веб-опыты. Имея прочную основу как в передних, так и в задних технологиях, я преодолеваю разрыв между эстетикой и функциональностью, чтобы доставлять проекты, которые не только выглядят великолепно, но и работают безупречно.",
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
      nav_portfolio: "Portafolio",
      nav_contact: "Contacto",
      hero_greeting: "Hola, soy",
      hero_typing: ["Lana", "Desarrolladora", "Diseñadora", "Gerente de Producto", "Mercadotécnica", "Creadora", "Agente de Cambio", "emocionada de hacer impacto"],
      hero_subtitle: "¡Bienvenido a mi página!",
      hero_button: "Explora Mi Trabajo",
      about_title: "Acerca de Mí",
      about_description: "Soy Lana Davydov, una desarrolladora y diseñadora apasionada con habilidad para crear experiencias web dinámicas y fáciles de usar. Con una sólida base en tecnologías de front-end y back-end, puenteo la brecha entre la estética y la funcionalidad para entregar proyectos que no solo se ven geniales sino que también funcionan a la perfección.",
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
      nav_portfolio: "Portafoglio",
      nav_contact: "Contatti",
      hero_greeting: "Ciao, sono",
      hero_typing: ["Lana", "Sviluppatrice", "Designer", "Manager di Prodotto", "Marketera", "Creatrice", "Agente di Cambiamento", "entusiasta di fare impatto"],
      hero_subtitle: "Benvenuto nella mia pagina!",
      hero_button: "Esplora il Mio Lavoro",
      about_title: "Chi Sono",
      about_description: "Sono Lana Davydov, una sviluppatrice e designer appassionata con talento per creare esperienze web dinamiche e user-friendly. Con una solida base sia nelle tecnologie front-end che back-end, colmo il divario tra estetica e funzionalità per fornire progetti che non solo appaiono fantastici ma funzionano anche senza problemi.",
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
  
  // Initialize Language on Page Load
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    if (languageSelectMobile) {
      languageSelectMobile.value = savedLanguage;
    }
    updateLanguage(savedLanguage);
  });
  
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
  