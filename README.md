# Sayuri Edirisinghe | Portfolio

A personal portfolio website bringing together my work in UI/UX design, development, data analytics and writing. It is built from scratch with HTML, CSS and JavaScript, with no frameworks or libraries.

**Live site:** _add your link here once the site is hosted_

---

## About this project

I'm a Computer Science undergraduate with a creative side, and I wanted a portfolio that feels like me rather than a template. The design follows a theme I call *Oceanic Editorial*:

- **Ocean teal** reflects my roots in Sri Lanka.
- **The lily** comes from the meaning of my name, Sayuri, and its Japanese origins.
- **Amethyst purple** is my birthstone and favourite colour.

## Sections

| Section | What it contains |
|---|---|
| **Home** | Introduction with a lily-in-water background and portrait |
| **Selected Work** | Four featured projects, each opening as a case study or a live link |
| **Writing** | Five articles, stories and essays that open in an in-page reading panel |
| **About** | A short story of who I am, with lily artwork |
| **Skills** | Design, technology, data & testing, and creative & communication |
| **Contact** | Email, LinkedIn and GitHub |

## Featured projects

- **MediLink**: an emergency dispatch dashboard and smartwatch prototype, built in Figma with a design system and a heuristic evaluation.
- **GreenBite**: a six-page wellness website with a calorie calculator, workout generator and mindfulness tools.
- **Altrium Recruitment Portal**: a full-stack job portal built with ASP.NET Core MVC (team project; I handled development and QA).
- **Employee Analytics Dashboard**: a Power BI dashboard built on a cleaned dataset and a star schema.

## Built with

- **HTML5**: semantic structure, with the native `<dialog>` element for the reading panels
- **CSS3**: custom properties, Grid, Flexbox, responsive layout and `prefers-reduced-motion` support
- **JavaScript (vanilla)**: mobile navigation menu, reading panels, automatic footer year
- **Google Fonts**: Playfair Display, DM Sans and Montserrat

## Features

- Fully responsive, from large desktops down to small phones
- Mobile navigation menu that closes on link click or the Escape key
- Case study and article panels that open without leaving the page
- Accessible by design: keyboard-friendly controls, visible focus styles, descriptive alt text and decorative images hidden from screen readers
- Reduced-motion support for visitors who prefer fewer animations

## Project structure

```
Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── SME_Logo.png
        ├── lily-in-water.jpg
        ├── lily-about.png
        ├── sayuri-portrait.jpg
        ├── medilink-cover.png
        ├── medilink-login.png
        ├── medilink-log.png
        ├── greenbite-cover.png
        ├── altrium-cover.png
        ├── altrium-dashboard.png
        └── analytics-cover.png
```


## Running it locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server** if you have that extension.

No build step or installation is needed.

## Adding new content

**A new article:**
1. Copy one `<article class="writing-item">` block in the Writing section and update the number, tags, title and description.
2. Give its button a new `data-article` value, such as `art-new`.
3. Add a matching `<div id="art-new">` with the article text inside the hidden block at the bottom of the Writing section.

**A new project:**
1. Copy one `<article class="project-card">` block in the Selected Work section.
2. Save the cover image into `assets/images` and update its `src`.
3. Either link the card to a live URL, or give it a `data-case` value and add a matching case study `<div>` inside the hidden block in the Selected Work section.

## Still to do

- [ ] Add the live site link at the top of this file once hosted
- [ ] Add a Behance link to the Contact section when the profile is ready
- [ ] Compress the larger images before publishing
- [ ] Add `ocean-background.jpg` for the page background (optional)

## Contact

**Sayuri Methsanie Edirisinghe**

- Email: sayu.methsanie@gmail.com
- LinkedIn: [sayuri-edirisinghe](https://www.linkedin.com/in/sayuri-edirisinghe-b181b6347)
- GitHub: [Sayuri-E](https://github.com/Sayuri-E)

## Copyright

All written work, designs and project screenshots on this site are © Sayuri Edirisinghe. Please ask before reusing them.