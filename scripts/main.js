// Defensive, accessible nav toggle + reveal-on-scroll
(function(){
  'use strict';
  try {
    var nav = document.getElementById('primary-nav');
    var btn = document.getElementById('navToggle');
    var yearEl = document.getElementById('year');

    if (yearEl) {
      try { yearEl.textContent = String(new Date().getFullYear()); } catch (e) { /* no-op */ }
    }

    // NAV TOGGLE
    if (nav && btn) {
      function openNav(open) {
        open = Boolean(open);
        if (open) {
          nav.classList.add('open');
          nav.setAttribute('aria-hidden', 'false');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          nav.classList.remove('open');
          nav.setAttribute('aria-hidden', 'true');
          btn.setAttribute('aria-expanded', 'false');
        }
      }

      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        openNav(!expanded);
        if (!expanded) {
          var firstLink = nav.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      });

      document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape' || ev.key === 'Esc') {
          openNav(false);
        }
      });

      nav.addEventListener('click', function (ev) {
        var target = ev.target;
        if (target && target.tagName === 'A') {
          openNav(false);
        }
      });

      var mq = window.matchMedia('(min-width:601px)');
      function onResize() {
        if (mq.matches) {
          nav.classList.remove('open');
          nav.setAttribute('aria-hidden', 'false');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          nav.setAttribute('aria-hidden', 'true');
          btn.setAttribute('aria-expanded', 'false');
        }
      }
      if (mq && mq.addEventListener) {
        mq.addEventListener('change', onResize);
      } else {
        window.addEventListener('resize', onResize);
      }
      onResize();
    }

    // REVEAL ON SCROLL (respects prefers-reduced-motion)
    (function() {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // reveal instantly in reduced-motion mode
        var els = document.querySelectorAll('[data-animate]');
        els.forEach(function(el){ el.classList.add('reveal'); });
        return;
      }

      var observerOptions = { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 };
      var observer = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);

      var targets = document.querySelectorAll('[data-animate]');
      targets.forEach(function(t){ try { observer.observe(t); } catch(e){ /* fail silently */ }});
    })();

  } catch (err) {
    if (window && window.console && typeof window.console.error === 'function') {
      console.error('Initialization error', err);
    }
  }
})();
