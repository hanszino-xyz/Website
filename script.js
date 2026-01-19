// Simple interactivity for the minimal site

// CTA feedback
document.getElementById('cta').addEventListener('click', () => {
  const msg = document.getElementById('message');
  msg.textContent = 'Thanks — the button works!';
  setTimeout(() => msg.textContent = '', 3000);
});

// Toggle class-based dark mode on <html>
document.getElementById('themeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Simulated contact form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks! (demo only — no network request)';
  e.target.reset();
  setTimeout(() => status.textContent = '', 4000);
});

// Fill current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
