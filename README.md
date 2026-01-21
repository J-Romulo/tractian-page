# Tractian Homepage

This project is a **technical challenge** for reproducing the Tractian landing page. The goal was to replicate the page's layout, styles, responsiveness, behaviors, with versions in **English (EN), Portuguese (PT), and Spanish (ES)**.

- **Original Page:** [Tractian Plant Manager](https://tractian.com/who-we-serve/plant-manager)
- **Reproduction (Live Demo):** [Live Demo URL](https://tractian-page-iota.vercel.app/solucoes-para-gerentes-industriais)


## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind**
- **Next-Intl** for translations (EN, PT, ES)
- **TanStack Form + Zod** for form validation



## Challenges Tackled

- Reproducing responsive layout.
- Implementing **multi-language support** with i18n.
- Ensuring **accessibility**: focus trap, ARIA roles, screen reader compatibility.
- Keeping code **clean, organized, and maintainable**.



## Room for Improvement

- Header menus are not 100% like the original. Also Header component code could be better organised.
- Some **icons** are placeholders.
- Animations and transitions are not exactly like the original page.
- Footer links are not ordered by language like the original page.
- More advanced **accessibility enhancements** could be added (some improvements do not exist in the original page either).
- Implement E2E tests


## How to run the project

Use node 22+:

```bash
nvm use 22
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
