const elements = document.querySelectorAll('[data-es]');
let currentLang = localStorage.getItem('lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  elements.forEach(el => {
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });
  
  document.documentElement.lang = lang;
  
  // Update button states
  document.getElementById('btn-es').setAttribute('aria-pressed', lang === 'es');
  document.getElementById('btn-en').setAttribute('aria-pressed', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.getElementById('year').textContent = new Date().getFullYear();
});
