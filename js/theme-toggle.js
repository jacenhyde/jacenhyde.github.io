document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');

  toggle.checked = (saved || html.getAttribute('data-bs-theme')) === 'dark';

  toggle.addEventListener('change', () => {
    const theme = toggle.checked ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
