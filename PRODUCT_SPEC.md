# Alpha X Quant — Product Specification

## Product objective

Create a credible, restrained public website for Alpha X Quant LLC, positioned as a quantitative research and technology company. The site should communicate research focus, founder background, and collaboration pathways without implying external asset management, investment-advisory services, guaranteed results, client relationships, or historical performance.

## Primary audiences

- Quantitative researchers and developers
- Financial data and technology partners
- Academic and industry collaborators
- Students interested in research collaboration
- Organizations seeking research or consulting conversations

## Core messages

- Alpha X Quant develops systematic investment research frameworks using statistical modeling, machine learning, and financial data analysis.
- Its research interests include alpha discovery, factor research, empirical asset pricing, portfolio research, and systematic strategies.
- The company was founded by Jialu Xu, a Cornell University Master of Engineering in Financial Engineering alumnus.
- The website is informational and does not offer investment advice or make performance claims.

## Required pages

### Home (`/`)

- Institutional hero and core positioning
- Concise company introduction
- Four research-area cards
- Founder introduction
- Collaboration call to action

### Research (`/research`)

- Research philosophy and process overview
- Alpha Discovery
- Factor Research
- Portfolio Research
- Machine Learning in Finance
- Clear research-only disclaimer

### About (`/about`)

- Alpha X Quant LLC overview
- Founder biography limited to professional information supplied by the company
- Operating principles and company positioning

### Contact (`/contact`)

- Business Collaboration form
- Join Alpha X Quant form
- Clear submission status, validation, accessibility, and privacy-oriented copy

## Contact workflow

Both forms submit to a server-only API route. The server validates the request and sends a structured email through Resend to the configured company inbox. API credentials and recipient details live in server-side environment variables and are never included in browser JavaScript.

## Functional requirements

- Responsive navigation with accessible mobile menu
- Semantic landmarks, visible keyboard focus, labeled form controls, and status announcements
- Per-page metadata plus sitemap and robots directives
- Fast-loading CSS-led visuals with minimal client JavaScript
- Form validation, honeypot spam field, request-size checks, and professional success/error states
- No analytics, cookies, fake data, performance metrics, client names, or fabricated biographies in the MVP

## Success criteria

- All four routes render successfully on desktop and mobile widths
- Navigation and calls to action resolve to valid routes
- Both forms validate locally and reach the server endpoint
- The server refuses malformed or oversized payloads and never exposes secrets
- Production builds complete for both the Sites preview and Vercel-compatible Next.js workflow
- Site copy remains factual and avoids regulated-service or performance claims

