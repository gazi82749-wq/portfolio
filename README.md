# Gazi Abbas — Portfolio

**AI Operations & Automation | Software Developer**

A professional, job-targeted portfolio website built to demonstrate capabilities in AI-powered business automation, workflow design, and practical software development.

---

## 🎯 Purpose

This portfolio is tailored for the **AI Operations & Automation Manager** role, showcasing:

- Business process understanding and workflow automation
- A Google Sheets / Apps Script automation prototype with recurring tasks, dashboards, and escalation logic
- AI-powered product development (Oratii, AIYUG)
- Structured problem-solving methodology

---

## 🛠 Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Styling, layout, animations, dashboard mockups |
| Vanilla JavaScript | Navigation, scroll effects, interactivity |
| SVG | Favicon, social icons |

No frameworks, no build tools, no backend, no paid APIs. Fully static and GitHub Pages compatible.

---

## 📁 Project Structure

```
gazi-portfolio/
├── index.html      # Main HTML document
├── styles.css      # All styles (variables, layout, components, responsive)
├── script.js       # Navigation, scroll animations, contact config
├── favicon.svg     # SVG favicon
└── README.md       # This file
```

---

## 🖥 Local Preview

Open `index.html` directly in your browser:

**Option 1 — Direct open:**
Double-click `index.html` or drag it into your browser.

**Option 2 — Local server (recommended):**

Using Python:
```bash
python -m http.server 8000
# Open http://localhost:8000
```

Using Node.js (npx):
```bash
npx serve .
```

Using VS Code:
Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".

---

## 🚀 GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (e.g., `main`) and folder (`/ (root)`).
4. Click **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`.

---

## ✏️ Where to Edit

### Contact Information
Open `script.js` and update the `CONTACT_CONFIG` object at the top:

```javascript
const CONTACT_CONFIG = {
    email: 'gazi82749@gmail.com',
    // phone: '+91-XXXXXXXXXX',  // Uncomment when ready
};
```

Also update the email placeholder in `index.html` (search for `your.email@example.com`).

### Project Details
All project content is in `index.html`:

- **Automation Case Study** — Search for `id="automation"`
- **Oratii** — Search for `app-mockup--oratii`
- **AIYUG** — Search for `app-mockup--aiyug`

### Social Links
Social profile URLs appear in the navigation, contact section, and footer of `index.html`. Search for the URL to find all instances.

### SEO Metadata
Update the `<title>` and `<meta>` tags in the `<head>` of `index.html`.

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on navigation and interactive elements
- Keyboard-accessible navigation (Escape closes mobile menu)
- `prefers-reduced-motion` support (disables animations)
- Sufficient color contrast

---

## 📱 Responsive Design

- Desktop (1200px+)
- Tablet (768px–968px)
- Mobile (< 768px)
- Small mobile (< 480px)

---

## 📄 License

Personal portfolio. All rights reserved.

