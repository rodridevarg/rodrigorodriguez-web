(function () {
  'use strict';

  /* ========================================
     NAVBAR SCROLL EFFECT
     ======================================== */
  const header = document.getElementById('header');
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ========================================
     MOBILE MENU TOGGLE
     ======================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('.nav__link');

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });

  // Close menu on backdrop click
  navMenu.addEventListener('click', function (e) {
    if (e.target === navMenu.querySelector('::before') || e.target === navMenu) {
      // Not directly clickable due to pseudo-element, but safety fallback
    }
  });
  // Better: close when clicking the overlay (handled via CSS pointer-events, but we can add an explicit overlay if needed)
  // For simplicity, the CSS ::before approach handles overlay clicks because it's inside navMenu.

  /* ========================================
     SCROLL ANIMATIONS (IntersectionObserver)
     ======================================== */
  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    animatedElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ========================================
     CURRENT YEAR IN FOOTER
     ======================================== */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  /* ========================================
     FORM HANDLING (Formspree fallback UX)
     ======================================== */
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Formspree handles the real submit; this is just for UX
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // Re-enable after a timeout in case Formspree redirect fails or user goes back
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 4000);
    });
  }
})();
