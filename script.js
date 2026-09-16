// ==========================================================
// Theme toggle (persisted in localStorage)
// ==========================================================
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const initial = stored || (prefersLight ? 'light' : 'dark');
  root.setAttribute('data-theme', initial);
  updateToggleLabel(initial);

  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleLabel(next);
  });

  function updateToggleLabel(theme) {
    const goingTo = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + goingTo + ' theme');
    toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }
})();

// ==========================================================
// Mobile nav toggle
// ==========================================================
(function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  navToggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ==========================================================
// Hero terminal typing effect (runs once on load)
// ==========================================================
(function () {
  const target = document.getElementById('typed-code');
  if (!target) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    '$ cat about.txt',
    'Building software that solves real problems —',
    'one data structure at a time.'
  ];
  const full = lines.join('\n');

  if (prefersReducedMotion) {
    target.textContent = full;
    return;
  }

  let i = 0;
  function type() {
    target.textContent = full.slice(0, i);
    i++;
    if (i <= full.length) {
      setTimeout(type, 18);
    }
  }
  type();
})();

// ==========================================================
// Copy email button
// ==========================================================
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const value = btn.getAttribute('data-copy');
    navigator.clipboard.writeText(value).then(function () {
      const original = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () {
        btn.textContent = original;
      }, 1500);
    });
  });
});

// ==========================================================
// Footer year
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();
