// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  // =========================================
  // Theming (Dark/Light Mode)
  // =========================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check local storage or system preference
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon (using simple Unicode/Feather icon representation for now, assuming external libraries later if needed)
    if (theme === 'dark') {
      themeIcon.innerHTML = '☀️'; // Sun for switching to light
    } else {
      themeIcon.innerHTML = '🌙'; // Moon for switching to dark
    }
  };

  // Initialize Theme
  setTheme(getPreferredTheme());

  // Toggle Theme Listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // =========================================
  // Internationalization (i18n)
  // =========================================
  const langToggle = document.getElementById('lang-toggle');
  
  const getPreferredLang = () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) return savedLang;
    // Default to PT-BR given the context
    return 'pt';
  };

  const setLang = (lang) => {
    localStorage.setItem('lang', lang);
    langToggle.innerText = lang === 'pt' ? 'EN' : 'PT';
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Use innerHTML if the translation contains HTML (like spans)
        if (translations[lang][key].includes('<')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });

    // Update placeholders if needed
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  };

  // Initialize Language
  setLang(getPreferredLang());

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('lang') || 'pt';
      const newLang = currentLang === 'pt' ? 'en' : 'pt';
      setLang(newLang);
    });
  }

  // =========================================
  // Mobile Menu Toggle
  // =========================================
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // =========================================
  // Scroll Animations (Intersection Observer)
  // =========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});
