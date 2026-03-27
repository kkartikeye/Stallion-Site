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

The contact form can deliver inquiries by SMTP email, webhook, or local development capture.

- In development, submissions are captured locally at `/tmp/stallion-contact-submissions.jsonl` when no SMTP or webhook destination is configured.
- In production, the form will show a fallback contact message if no delivery target is configured.
- By default, email inquiries are sent to `stallionauto1@gmail.com`. Override that with `CONTACT_FORM_TO_EMAIL` if needed.
- Keep real credentials in `.env.local` or your hosting provider's secret env settings. Do not commit them.

Recommended setup for Gmail SMTP:

```bash
CONTACT_FORM_TO_EMAIL="stallionauto1@gmail.com"
CONTACT_FORM_FROM_EMAIL="kkartikeye.30@gmail.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="kkartikeye.30@gmail.com"
SMTP_PASS="your-16-digit-app-password"
```

Gmail SMTP requires a Google app password rather than your normal Gmail password. Google says app passwords require 2-Step Verification to be turned on.

You can also use `SMTP_URL` instead of the individual SMTP variables, and `CONTACT_FORM_WEBHOOK_URL` remains supported if you want to forward submissions into another system too.

## SEO

The site includes:

- page metadata for core routes
- `robots.txt`
- `sitemap.xml`
- organization structured data
