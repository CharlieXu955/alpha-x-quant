# Alpha X Quant — Deployment Guide

## Required accounts

- A GitHub account and repository
- A Vercel account connected to GitHub
- A Resend account
- DNS access for `alphaxquant.com`

## Environment variables

Create these in Vercel under **Project Settings → Environment Variables** for Production, Preview, and Development as appropriate:

```text
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=jx446@cornell.edu
RESEND_FROM_EMAIL=Alpha X Quant <website@alphaxquant.com>
```

Do not add real secret values to `.env.example`, Git, or frontend code.

For initial testing before the sending domain is verified, use the sender address Resend permits for your account. Replace it with the company-domain sender after verification.

## Resend setup

1. Create a Resend account and add `alphaxquant.com` as a sending domain.
2. Add the SPF and DKIM records shown by Resend to the domain's DNS provider.
3. Wait for Resend to mark the domain verified.
4. Create an API key with sending permission.
5. Add the three environment variables above in Vercel.
6. Redeploy, then test both contact forms with a real email address.

## GitHub

1. Create a new empty repository, such as `alphaxquant-website`.
2. In the website folder, commit the source files.
3. Add the GitHub repository as the `origin` remote.
4. Push the `main` branch.
5. Confirm `.env.local` and all API keys remain excluded from Git.

## Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Confirm the framework preset is **Next.js**.
3. Keep the repository root as the project root.
4. Add the required environment variables.
5. Deploy and test `/`, `/research`, `/about`, `/contact`, and both form types.

## Domain and DNS

1. In Vercel, open **Project Settings → Domains**.
2. Add `alphaxquant.com` and `www.alphaxquant.com`.
3. At the DNS provider, add the exact records Vercel displays. A typical setup uses an apex `A` record and a `www` `CNAME`, but Vercel's displayed values are authoritative and can change.
4. Choose one canonical hostname in Vercel and redirect the other to it.
5. Remove conflicting legacy `A`, `AAAA`, or `CNAME` records for the same hostnames only after confirming they are no longer needed.
6. Wait for DNS propagation and Vercel's TLS certificate issuance.
7. Update the site's canonical metadata if the production hostname differs from `https://alphaxquant.com`.

## Production checklist

- Verify all four pages on a phone and desktop browser
- Submit both forms and confirm delivery to the configured inbox
- Confirm sender-domain SPF and DKIM pass
- Check the browser title, social preview, sitemap, and robots file
- Confirm there are no performance claims, client claims, or investment-advice language
- Keep API keys private and rotate any key that is accidentally shared

