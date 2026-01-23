const elements = document.querySelectorAll('[data-es]');
let currentLang = localStorage.getItem('lang') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';

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

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function downloadPDF() {
  const element = document.getElementById('cv-content');
  const opt = {
    margin: [10, 10, 10, 10],
    filename: `CV_Christian_Villar_${currentLang}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(element).save();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('theme-icon').textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  setLang(currentLang);
  document.getElementById('year').textContent = new Date().getFullYear();
});
