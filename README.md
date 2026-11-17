# Victor-Stefan Florescu — Portfolio

Personal portfolio website showcasing embedded systems, AI, and robotics projects.

Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Local development

```sh
npm ci
npm run dev
```

## Deployment

The site is deployed automatically to GitHub Pages on every push to `main` via GitHub Actions.

Live site: https://victorint.github.io/victor-florescu-portfolio/

## Source structure

- `src/pages/` — route pages: portfolio, blog, and 404.
- `src/features/blog/` — blog components and article data in `data/posts.ts`.
- `src/features/portfolio/` — profile, education, experience, projects, and skills.
- `src/components/layout/` — shared navigation and footer.
- `src/components/ui/` — reusable shadcn/ui primitives.
- `src/assets/blog/` — article cover images imported by Vite.
- `src/assets/profile/` — profile photos.
- `public/` — files served directly, including the downloadable CV.

To add a post, edit `src/features/blog/data/posts.ts`. Set `pinned: true` to show
it on the homepage. Import a cover from `src/assets/blog/` and assign it to
`thumbnail` to use a photo instead of a typographic cover.
