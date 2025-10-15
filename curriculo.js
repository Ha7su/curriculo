const buttonTheme = document.getElementById('toggle-theme');

buttonTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    buttonTheme.textContent = '☀️ Modo Claro';
  } else {
    buttonTheme.textContent = '🌙 Modo Escuro';
  }
});


const buttonLanguage = document.getElementById('toggle-lang');
let currentLang = 'pt';

// Função para trocar o idioma
buttonLanguage.addEventListener('click', () => {
  const elements = document.querySelectorAll('[data-pt]');
  currentLang = currentLang === 'pt' ? 'en' : 'pt';

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  buttonLanguage.textContent = currentLang === 'pt' ? '🇬🇧 English' : '🇧🇷 Português';
});