(function () {
  'use strict';

  const header = document.getElementById('header');
  if (header) {
    function onScroll() {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');

  if (navToggle && navMenu && navOverlay) {
    const navLinks = navMenu.querySelectorAll('.nav__link');

    function openMenu() {
      navMenu.classList.add('is-open');
      navOverlay.removeAttribute('hidden');
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Cerrar menú');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      navMenu.classList.remove('is-open');
      navOverlay.setAttribute('hidden', '');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
      document.body.style.overflow = '';
    }
    function toggleMenu() {
      navMenu.classList.contains('is-open') ? closeMenu() : openMenu();
    }

    navToggle.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', closeMenu);
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('is-open')) closeMenu();
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) closeMenu();
    });
  }

  const animatedElements = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animatedElements.forEach(function (el) { observer.observe(el); });
  } else {
    animatedElements.forEach(function (el) { el.classList.add('is-visible'); });
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = 'Quiero mi demo gratuita';
          btn.disabled = false;
        }, 4000);
      }
    });
  }
})();
