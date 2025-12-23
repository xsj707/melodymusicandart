# Zhang Dong Architecture

Website for Zhang Dong, an architect offering residential design services to customers in the Bay Area and beyond.

## Project Overview

This website showcases the architectural work of Zhang Dong and his team, featuring a homepage and content pages highlighting past residential design projects.

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
  - `app/project/` - Individual project pages (each project has its own folder)
  - `app/api/` - Minimal API routes (for form submissions only)
- `components/` - React components
- `libs/` - Utility libraries and helpers
- `public/` - Static assets and images (all content managed locally)
- `config.js` - Application configuration

## Content Management

This is a static portfolio site. All content is managed directly in the codebase:
- **Projects**: Each project has its own folder under `app/project/[project-name]/` with `page.js` and `data.js`
- **Images**: Store images in `public/images/` directory
- **To add a new project**: Create a new folder with `page.js` and `data.js`, then import it in `libs/projects.js`

## Build

```bash
npm run build
npm start
```

## License

Private project for Zhang Dong Architecture.
