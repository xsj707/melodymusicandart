# Melody Wang Piano

Website for Melody Wang, a piano teacher offering children's piano lessons in the Tri-Valley area (Pleasanton, Dublin, San Ramon, and surrounding areas).

## Project Overview

This website showcases Melody Wang's piano teaching services, featuring information about lessons, resources for parents, and tools for booking trial classes and scheduling lessons.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19, Tailwind CSS, DaisyUI
- **Backend**: Minimal API Routes (for form submissions only)
- **Database**: None - this is a static portfolio site
- **Authentication**: None required - all pages are publicly accessible
- **Content**: Static assets stored locally in `public/` directory

## Development

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

No environment variables are required for this static portfolio site.

Optional variables (only if adding features in the future):
- `NEXTAUTH_SECRET` - Optional secret for NextAuth (not required for static site)
- `RESEND_API_KEY` - Optional email service API key (if adding contact form email functionality)

## Project Structure

- `app/` - Next.js App Router pages and API routes
  - `app/free-trial/` - Free trial class signup page
  - `app/booking/` - Existing students class booking (placeholder for calendar integration)
  - `app/lessons/` - Information about piano lessons
  - `app/about/` - About Melody Wang
  - `app/resources/` - Resources for parents (piano education guide, piano recommendations)
  - `app/testimonials/` - Student and parent testimonials
  - `app/faq/` - Frequently asked questions
  - `app/contact/` - Contact information
  - `app/api/` - Minimal API routes (for form submissions only)
- `components/` - React components
- `libs/` - Utility libraries and helpers
- `public/` - Static assets and images (all content managed locally)
- `config.js` - Application configuration

## Content Management

This is a static website. All content is managed directly in the codebase:
- **Pages**: Each page is a Next.js page component in the `app/` directory
- **Images**: Store images in `public/images/` directory
- **Content**: Edit page components directly to update content

## Build

```bash
npm run build
npm start
```

## License

Private project for Melody Wang Piano.
