# Deployment Guide — Devangi Patel Portfolio

## Folder Structure

```
Portfolio/
├── index.html          # Main portfolio website
├── styles.css          # Styles (dark theme, responsive)
├── script.js           # Interactions, projects data, modals
├── resume.html         # Printable ATS resume (Save as PDF)
├── resume.md           # Plain-text resume for editing / ATS paste
├── README.md           # GitHub profile README (copy to profile repo)
├── DEPLOYMENT.md       # This file
└── assets/             # Optional: images, favicon, resume.pdf
    └── resume.pdf      # Export from resume.html (recommended)
```

---

## Local Preview

1. Open the `Portfolio` folder.
2. Double-click `index.html`, or run a local server:

```bash
# Python 3
cd "c:\Users\devan\OneDrive\Desktop\Portfolio"
python -m http.server 8080
```

3. Visit `http://localhost:8080`

---

## Resume PDF

1. Open `resume.html` in Chrome or Edge.
2. Press **Ctrl+P** → Destination: **Save as PDF**
3. Margins: **Default** or **Minimum**; enable **Background graphics** if needed.
4. Save as `assets/resume.pdf` and link from the portfolio hero button.

---

## GitHub Pages Deployment

### Option A — Project site (username.github.io/Portfolio)

1. Create a GitHub repository (e.g. `Portfolio` or `devangi-portfolio`).
2. Push all files:

```bash
git init
git add .
git commit -m "Add professional portfolio"
git branch -M main
git remote add origin https://github.com/Devangi12/Portfolio.git
git push -u origin main
```

3. On GitHub: **Settings → Pages**
4. **Source:** Deploy from branch `main`
5. **Folder:** `/ (root)`
6. Save. Site URL: `https://devangi12.github.io/Portfolio/`

### Option B — User site (username.github.io)

1. Create repo named **`Devangi12.github.io`** (match your username).
2. Push `index.html`, `styles.css`, `script.js`, and `assets/` to root.
3. Pages deploys automatically at `https://devangi12.github.io`

### Custom domain (optional)

1. Add `CNAME` file with your domain (e.g. `devangipatel.dev`).
2. Configure DNS A/CNAME records per GitHub Pages docs.
3. Enable **Enforce HTTPS** in Pages settings.

---

## GitHub Profile README

1. Create repo **`Devangi12`** (same as username).
2. Add `README.md` from this project (profile README content).
3. It appears on your GitHub profile automatically.

---

## Contact Section

The contact section lists email, LinkedIn, GitHub, and location — no contact form.

---

## Suggested Future Additions

- [ ] Add `assets/resume.pdf` and project screenshots
- [ ] Link live GitHub repos per project in `script.js`
- [ ] Google Analytics or Plausible for traffic
- [ ] `sitemap.xml` and Open Graph image (`assets/og-image.png`)
- [ ] Lighthouse audit (accessibility, performance, SEO)
- [ ] Blog section for technical write-ups
- [ ] Certificate badges (Coursera, NPTEL, etc.)

---

## SEO Checklist

- Meta description and keywords are set in `index.html`
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- One `<h1>` per page; logical heading hierarchy
- Alt text on images when added
- Mobile viewport meta tag included

---

## License

Personal portfolio — © Devangi Patel. Customize freely for your own use.
