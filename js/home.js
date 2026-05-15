/* ========================================
   HOME PAGE JS
   index.html specific scripts
   ======================================== */
(function () {
  'use strict';

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
