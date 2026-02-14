# MJ Scott Web Development

Professional freelance web development business website built with Next.js 14, TypeScript, and Tailwind CSS. Deploy-ready on Vercel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Pages

- **Home** (`/`) — Hero section, "Why Us" pillars, portfolio preview, testimonials, and CTA
- **Services** (`/services`) — Service cards with pricing, process overview, and CTA
- **Contact** (`/contact`) — Contact form with service type selector, budget range, and project details

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and CSS variables
│   ├── fonts/              # Geist font files
│   ├── services/
│   │   ├── page.tsx        # Services page (metadata)
│   │   └── services-content.tsx
│   └── contact/
│       ├── page.tsx        # Contact page (metadata)
│       └── contact-content.tsx
├── components/
│   ├── ui/                 # Reusable UI primitives (button, input, etc.)
│   ├── navigation.tsx      # Site header with mobile menu
│   ├── footer.tsx          # Site footer
│   ├── section.tsx         # Animated section wrapper
│   ├── hero.tsx            # Home hero section
│   ├── why-us.tsx          # Three pillars section
│   ├── portfolio-preview.tsx
│   ├── testimonials.tsx
│   ├── cta-section.tsx
│   └── contact-form.tsx
├── lib/
│   ├── data.ts             # Site config, services, projects, testimonials
│   └── utils.ts            # Utility functions (cn)
└── public/
    └── projects/           # Portfolio project placeholder images
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd Business

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push the repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy

## Customization

### Contact Form

The contact form currently uses a placeholder submission handler. To integrate with an email service:

1. Install the Resend SDK: `npm install resend`
2. Create an API route at `src/app/api/contact/route.ts`
3. Update `ContactForm` to POST to your API route

### Portfolio Projects

Update the `projects` array in `src/lib/data.ts` to add or modify portfolio entries. Replace placeholder SVGs in `public/projects/` with actual screenshots.

### Branding

- **Colors:** Edit CSS variables in `src/app/globals.css`
- **Site info:** Edit `siteConfig` in `src/lib/data.ts`
- **Services & pricing:** Edit the `services` array in `src/lib/data.ts`

## License

All rights reserved.
