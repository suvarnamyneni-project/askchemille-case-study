# Chemille® Digital Assistant — UX case study

A static case study of **Chemille®**, Celanese’s digital assistant at [askchemille.com](https://www.askchemille.com/). The study focuses on guided AI grade search and the competitor-grade replacement flow: plain-language query, one clarifying question, ranked results with a % match, grade detail, and the moment a guest reaches a quote, documents, or a live expert.

**Case study by [Suvarna Myneni](https://www.linkedin.com/in/suvarnamyneni/).**

## View it

Published with GitHub Pages from the repository root:

https://suvarnamyneni-project.github.io/askchemille-case-study/

Locally, open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080/. Paths are relative, so the site works both as a project site and from a local folder.

There is no build step. The site is plain HTML, CSS, and JavaScript, the same approach as the other portfolio case studies. Diagrams are inline SVG. An empty `.nojekyll` file keeps Jekyll from processing the site.

## What’s in the study

Section order:

1. Design Problem
2. Stakeholders
3. End-users
4. Primary Research
5. Secondary Research
6. Competitive Analysis
7. User Personas
8. Design Decisions (mapped to personas, with the sitemap and both user flows)
9. Prototype
10. UI Kit
11. Final Designs
12. Outcome
13. Metrics

Click a final screen to enlarge it. Arrow keys move between images. Escape closes the viewer. Without JavaScript, that control opens the image file directly. The competitive-table switch is CSS, so it still works without JavaScript.

## Placeholders

Highlighted `[Add: …]` and `[Add]` marks are intentional. They are facts the source does not contain: role, team, dates, research counts, quotes, prototype link, outcomes, and metric values. They are not filled in here.

## Screens

`assets/images/` holds seven desktop captures of askchemille.com, 1440 px wide, taken 30 Oct 2026:

- `01-home.png` — home
- `02-ai-results-clarifying.png` — clarifying question
- `02b-results-fullpage.png` — full results page
- `03-alternatives-match.png` — competitor-grade % match
- `04-grade-detail.png` — grade detail
- `04b-grade-fullpage.png` — full grade page
- `05-signin-gate.png` — account gate

## Pages setup

GitHub Pages is served from the `main` branch, folder `/`.
