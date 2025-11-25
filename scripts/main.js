// Lightweight defensive script: set year, small defensive helpers
(function(){
  'use strict';
  try {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  } catch (e) {
    // fail silently
  }
})();
