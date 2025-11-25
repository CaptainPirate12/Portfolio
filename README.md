# Portfolio — Lorenz Marl M. Busito (Separate Pages)

This repo uses separate pages (index, about, skills, projects, contact) with a shared stylesheet and small JS.

Files included:
- index.html
- about.html
- skills.html
- projects.html
- contact.html
- styles/style.css
- scripts/main.js
- resume.pdf (optional, add to repo root)

Notes:
- Strict black-and-white design; no external assets required.
- Defensive Content-Security-Policy present in each HTML file. If you add external resources (fonts, analytics), update CSP accordingly.
- To preview locally:
  - python3 -m http.server 8000
  - open http://localhost:8000/index.html
