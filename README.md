<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Space+Mono&size=28&pause=1000&color=00FFAA&center=true&vCenter=true&width=750&lines=Abhishek+Kumar+%E2%80%94+Dev+%26+Data+%F0%9F%90%8D;Personal+Portfolio+%26+Resume+Website;Python+%7C+Data+Analytics+%7C+Full-Stack" alt="Typing SVG" />

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![GitHub stars](https://img.shields.io/github/stars/eddiebrock911/profile_resume-?style=for-the-badge&logo=github&color=00ffaa)](https://github.com/eddiebrock911/profile_resume-/stargazers)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-🚀%20View%20Portfolio-00FFAA?style=for-the-badge)](https://eddiebrock911.github.io/profile_resume-)

<br/>

> **A sleek, dark-themed developer portfolio** built with pure HTML, CSS & JavaScript — featuring particle effects, 3D card tilts, custom cursor, scroll animations, and a terminal-style about section.

</div>

---

## 📌 Table of Contents

- [🖥️ Live Preview](#️-live-preview)
- [✨ Features](#-features)
- [🎨 Design Highlights](#-design-highlights)
- [📁 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📐 Sections Overview](#-sections-overview)
- [📱 Responsive Design](#-responsive-design)
- [🤝 Contributing](#-contributing)
- [👤 About Me](#-about-me)

---

## 🖥️ Live Preview

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Portfolio_Live-eddiebrock911.github.io-00FFAA?style=for-the-badge)](https://eddiebrock911.github.io/profile_resume-)

</div>

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎯 **Custom Cursor** | Smooth dual-layer animated cursor with hover state changes |
| ✨ **Particle Canvas** | Floating particle background with connecting lines via WebGL canvas |
| 🌀 **3D Card Tilt** | `perspective()` tilt effect on project, experience & stat cards |
| 🔄 **Scroll Reveal** | `IntersectionObserver`-powered fade-in animations on scroll |
| 💻 **Terminal Block** | Animated terminal UI showing `profile.json` in the About section |
| 🌙 **Dark Theme** | Deep dark palette (`#080c10`) with neon green, purple & red accents |
| 📱 **Fully Responsive** | Mobile-first layout with fluid typography using `clamp()` |
| ⚡ **Zero Dependencies** | Pure HTML + CSS + Vanilla JS — no frameworks, no build tools |
| 🔤 **Premium Fonts** | Google Fonts: `Syne`, `Space Mono`, `DM Sans` |
| 🧲 **Smooth Scroll Nav** | Fixed glassmorphism navbar with scroll-shrink effect |

---

## 🎨 Design Highlights

```css
/* Color Palette */
--bg:      #080c10   /* Deep dark background     */
--accent:  #00ffaa   /* Neon green — primary      */
--accent2: #7b61ff   /* Purple — secondary        */
--accent3: #ff6b6b   /* Red — tertiary            */

/* Typography */
--font-head: 'Syne', sans-serif        /* Headings — bold & geometric */
--font-mono: 'Space Mono', monospace   /* Code, labels, nav           */
--font-body: 'DM Sans', sans-serif     /* Body text                   */
```

The portfolio uses a **dark-first glassmorphism** design language:
- `backdrop-filter: blur()` on the navbar for a frosted glass effect
- Subtle `rgba` surface cards with `border: 1px solid rgba(255,255,255,0.07)`
- Gradient glows and neon `box-shadow` on interactive elements
- `mix-blend-mode: difference` on the custom cursor for contrast pop

---

## 📁 Project Structure

```
profile_resume-/
├── 📄 index.html          # Main HTML — all sections structured here
├── 🎨 style.css           # Full custom CSS — variables, layout, animations
├── ⚡ script.js           # Vanilla JS — cursor, particles, tilt, scroll reveal
└── 📂 image/
    └── 🖼️  abhishek.jpeg  # Profile photo (hero section)
```

---

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

**No frameworks. No build tools. Just clean, fast, hand-crafted code.**

---

## 🚀 Getting Started

### Option 1 — Clone & Open (Instant)

```bash
# Clone the repository
git clone https://github.com/eddiebrock911/profile_resume-.git

# Navigate into the folder
cd profile_resume-

# Open directly in browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Option 2 — Live Server (Recommended for Development)

```bash
# If you have VS Code, install Live Server extension
# Right-click index.html → "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000
# Open http://localhost:8000
```

### Option 3 — Deploy on GitHub Pages

```bash
# 1. Push repo to GitHub
git push origin main

# 2. Go to repo Settings → Pages
# 3. Source: Deploy from branch → main → / (root)
# 4. Your site will be live at:
#    https://<your-username>.github.io/profile_resume-/
```

---

## 📐 Sections Overview

```
┌─────────────────────────────────────────────┐
│  🔗 NAV      Fixed · Glassmorphism · Shrinks on scroll │
├─────────────────────────────────────────────┤
│  🦸 HERO     Profile photo + floating rings + badges  │
├─────────────────────────────────────────────┤
│  👤 ABOUT    Terminal JSON block + stats grid          │
├─────────────────────────────────────────────┤
│  🎓 EDUCATION  Timeline with glowing dots             │
├─────────────────────────────────────────────┤
│  ⚙️  SKILLS   Color-coded pill badges by category     │
├─────────────────────────────────────────────┤
│  💼 EXPERIENCE  3D tilt card + bullet points          │
├─────────────────────────────────────────────┤
│  🚀 PROJECTS   Numbered cards + tech badges           │
├─────────────────────────────────────────────┤
│  🏆 CERTIFICATIONS  CISCO + GDSC cert cards          │
├─────────────────────────────────────────────┤
│  📬 CONTACT  Two-column layout + social links         │
└─────────────────────────────────────────────┘
```

### Section Details

**🦸 Hero** — Circular profile photo with animated spinning tech rings, availability badge with pulsing dot, and CTA buttons.

**👤 About** — Two-column grid with bio paragraphs, an interactive terminal widget rendering `profile.json`, and a stats grid showing CGPA, certifications, languages, and internships.

**⚙️ Skills** — Categorized into `// Languages`, `// Data & Analytics`, `// Web Technologies`, `// Core Concepts`, and `// Soft Skills` — each with color-coded hoverable pills.

**💼 Experience** — Internship at **Vault of Codes** (Python Programmer, June–July 2025) with 3D tilt interaction and arrow-prefixed bullet points.

**🚀 Projects** — Electronic Voting Machine (C++), styled with numbered overlays, icon badges, tech tags, and feature chips.

**🏆 Certifications** — CISCO Data Analytics, CISCO Python Essentials, Backend Web Dev (GDSC KIIT) — each card with a unique colored accent stripe.

---

## 📱 Responsive Design

| Breakpoint | Behavior |
|---|---|
| `> 900px` | Full layout — side-by-side grids, visible nav links |
| `≤ 900px` | Stacked single-column, nav links hidden, centered hero |
| `≤ 500px` | Smaller hero image (180px), single-column stats grid |

Fluid typography via `clamp()`:
```css
font-size: clamp(3rem, 7vw, 6.5rem);   /* Hero heading */
font-size: clamp(2.2rem, 5vw, 4rem);   /* Section titles */
```

---

## 🤝 Contributing

Found a bug or want to suggest an improvement?

```bash
# 1. Fork the repository
# 2. Create your branch
git checkout -b fix/your-fix-name

# 3. Make changes & commit
git commit -m "fix: describe what you changed"

# 4. Push & open a Pull Request
git push origin fix/your-fix-name
```

---

## 👤 About Me

<div align="center">

**Abhishek Kumar**  
MCA Student · Python Developer · Data Analytics Enthusiast  
📍 Nalanda, Bihar · LNCT Bhopal

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/abhishek-kumar-561719307)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/eddiebrock911)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kumarabhishek913528@gmail.com)

</div>

---

<div align="center">

**Built with a Python mindset 🐍 and a lot of `console.log()` 😄**

*If you liked this project, please consider giving it a ⭐ — it really helps!*

[![GitHub stars](https://img.shields.io/github/stars/eddiebrock911/profile_resume-?style=social)](https://github.com/eddiebrock911/profile_resume-/stargazers)

</div>
