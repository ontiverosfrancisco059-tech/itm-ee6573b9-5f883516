(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  var hero = document.querySelector('.hero__title');
  if (hero && Math.random() > 0.5) {
    hero.classList.add('hero__shimmer');
  }

  var revealables = document.querySelectorAll('.card, .dish, .review, .hours__block, .menu__heading');
  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  var fab = document.querySelector('.wa-fab');
  window.addEventListener('scroll', function () {
    if (!fab) return;
    var y = window.scrollY;
    flub(fab, y > 160 && y < document.body.scrollHeight - 900);
  }, { passive: true });
  function flub(el, keep) {
    if (!el._keep && keep) { el.style.transform = 'scale(0.85)'; }
    if (el._keep && !keep) { el.style.transform = ''; }
    el._keep = keep;
  }
})();