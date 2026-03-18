# Stallion Auto Parts Site

Marketing site for Stallion Auto Parts, built with Next.js App Router, React 19, and Tailwind CSS v4.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Contact Form

The contact form posts to `CONTACT_FORM_WEBHOOK_URL` when that environment variable is set.

- In development, submissions are captured locally at `/tmp/stallion-contact-submissions.jsonl` when no webhook is configured.
- In production, the form will show a fallback contact message if the webhook is missing.

Example:

```bash
CONTACT_FORM_WEBHOOK_URL="https://example.com/webhook"
```

## SEO

The site includes:

- page metadata for core routes
- `robots.txt`
- `sitemap.xml`
- organization structured data
