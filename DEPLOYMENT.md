# Vercel Deployment Guide

This is a Next.js 14 application optimized for deployment on Vercel.

## Quick Start

### Prerequisites
- Node.js 18.x or later
- npm or yarn
- GitHub account (for Vercel deployment)

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

## Deploying to Vercel

### Option 1: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Log in to Vercel
vercel login

# Deploy your project
vercel

# Deploy to production
vercel --prod
```

### Option 2: Connect GitHub Repository
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 3: Using Git Integration
Vercel automatically deploys when you push to your repository:
- `main` branch → Production deployment
- Other branches → Preview deployments

## Environment Variables

Environment variables are configured in `vercel.json` and `next.config.mjs`.

### For Custom Variables
1. Create a `.env.local` file (see `.env.example`)
2. In Vercel Dashboard:
   - Settings → Environment Variables
   - Add your variables
   - Set availability (Development/Preview/Production)

## Performance Optimizations

This project includes:
- ✅ Image optimization with Next.js Image component
- ✅ Dynamic imports for code splitting
- ✅ CSS minification via Tailwind
- ✅ SWC minification enabled
- ✅ Long-term caching for static assets
- ✅ Security headers configured
- ✅ Radix UI component optimization

## Build & Deployment

**Build Command:** `next build`
**Start Command:** `next start`
**Output Directory:** `.next`

## Monitoring & Debugging

### View Logs
```bash
# Real-time production logs
vercel logs <PROJECT_NAME>

# Build logs
vercel logs <PROJECT_NAME> --follow
```

### Performance
- Check Web Vitals in Vercel Dashboard
- Review build size analysis
- Monitor edge caching effectiveness

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Check Node.js version: `node --version`
- Verify all dependencies: `npm install`

### Static Generation Issues
- Ensure no dynamic content during build time
- Check for API calls in getStaticProps

### Image Issues
- Verify images are in `/public` directory
- Update image paths if needed
- Check image formats are WebP or AVIF compatible

## Security

The deployment includes security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Learn More

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js on Vercel Guide](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)
