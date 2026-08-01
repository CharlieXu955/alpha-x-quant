# Alpha X Quant — Website Architecture

## Route map

```text
/
├── /research
├── /about
├── /contact
├── /api/contact       server-only form delivery
├── /sitemap.xml       generated SEO route
└── /robots.txt        generated SEO route
```

## Application structure

```text
app/
├── api/contact/route.ts
├── about/page.tsx
├── contact/page.tsx
├── research/page.tsx
├── globals.css
├── layout.tsx
├── page.tsx
├── robots.ts
└── sitemap.ts
components/
├── contact-form.tsx
├── footer.tsx
├── header.tsx
├── logo-mark.tsx
├── page-hero.tsx
└── research-visual.tsx
```

## Rendering strategy

- Home, Research, and About are static server-rendered pages for speed and SEO.
- Contact is server-rendered except for the two interactive form components.
- The email integration runs only in the API route and uses a server-side Resend key.
- Shared navigation and footer live in the root layout to keep structure consistent.

## Content architecture

- Home answers: what the company is, what it researches, who founded it, and how to engage.
- Research adds methodological depth without publishing unsupported results or proprietary claims.
- About establishes the legal company name, founder background, and operating principles.
- Contact separates commercial/technical collaboration from researcher participation.

## Deployment surfaces

- The primary source is a Next.js App Router project written in TypeScript and Tailwind CSS.
- The included Sites configuration supports a hosted production preview.
- The Vercel build path uses the standard Next.js compiler and server route for Resend delivery.
- The custom domain is connected only after deployment and DNS ownership are ready.

