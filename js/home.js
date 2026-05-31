/* ========================================
   HOME PAGE JS
   index.html specific scripts
   ======================================== */
(function () {
  'use strict';

  /* Scroll depth tracking */
  let scrollTracked = { 25: false, 50: false, 75: false, 90: false };
  function trackScrollDepth() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    [25, 50, 75, 90].forEach(function (pct) {
      if (scrollPercent >= pct && !scrollTracked[pct]) {
        scrollTracked[pct] = true;
        if (typeof gtag !== 'undefined') gtag('event', 'scroll_' + pct + '_percent', {
          'event_category': 'engagement',
          'event_label': 'scroll_depth'
        });
      }
    });
  }
  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  /* Section visibility tracking */
  const sectionsToTrack = ['#problemas', '#beneficios', '#testimonios', '#contacto'];
  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (typeof gtag !== 'undefined') gtag('event', 'view_section_' + id, {
          'event_category': 'engagement',
          'event_label': 'section_view'
        });
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  sectionsToTrack.forEach(function (sel) {
    const el = document.querySelector(sel);
    if (el) sectionObserver.observe(el);
  });

  /* Typing effect for hero subtitle */
  const typingElement = document.querySelector('[data-typing]');
  if (typingElement) {
    const text = typingElement.getAttribute('data-typing');
    let index = 0;
    typingElement.textContent = '';

    function typeChar() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeChar, 40);
      }
    }

    // Start typing after a short delay
    setTimeout(typeChar, 600);
  }

  /* Stats counter animation */
  const statNumbers = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 16));

          function update() {
            current += step;
            if (current >= target) {
              el.textContent = target + suffix;
              return;
            }
            el.textContent = current + suffix;
            requestAnimationFrame(update);
          }

          update();
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      countObserver.observe(el);
    });
  } else {
    statNumbers.forEach(function (el) {
      el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
    });
  }
})();
