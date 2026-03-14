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

  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  if (btnEs) {
    btnEs.setAttribute('aria-pressed', lang === 'es');
    btnEs.classList.toggle('active', lang === 'es');
  }
  if (btnEn) {
    btnEn.setAttribute('aria-pressed', lang === 'en');
    btnEn.classList.toggle('active', lang === 'en');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
