(() => {
  // Mobile App-Style Side Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');

  function setDrawerState(isOpen) {
    if (mobileNav) mobileNav.classList.toggle('show', isOpen);
    if (drawerBackdrop) drawerBackdrop.classList.toggle('show', isOpen);
    if (hamburgerBtn) {
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !mobileNav.classList.contains('show');
      setDrawerState(willOpen);
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', () => {
      setDrawerState(false);
    });
  }

  // Close when tapping any link inside the drawer
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setDrawerState(false);
      });
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('show')) {
      setDrawerState(false);
      if (hamburgerBtn) hamburgerBtn.focus();
    }
  });

  // Reset if resized to desktop viewport
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1020 && mobileNav && mobileNav.classList.contains('show')) {
      setDrawerState(false);
    }
  });

  // Theme Toggle Logic with LocalStorage & OS Preference
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');
  const drawerThemeToggle = document.getElementById('drawerThemeToggle');
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggles.forEach(btn => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  };

  let saved = null;
  try {
    saved = localStorage.getItem('incstudy-theme');
  } catch (e) {}

  applyTheme(saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  const toggleThemeAction = () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('incstudy-theme', next);
    } catch (e) {}
  };

  themeToggles.forEach(btn => {
    btn.addEventListener('click', toggleThemeAction);
  });

  if (drawerThemeToggle) {
    drawerThemeToggle.addEventListener('click', toggleThemeAction);
    drawerThemeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleThemeAction();
      }
    });
  }

  // Smooth Back-to-Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
