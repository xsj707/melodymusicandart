# Zhang Dong Architecture

Website for Zhang Dong, an architect offering residential design services to customers in the Bay Area and beyond.

## Project Overview

This website showcases the architectural work of Zhang Dong and his team, featuring a homepage and content pages highlighting past residential design projects.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19, Tailwind CSS, DaisyUI
- **Backend**: Next.js API Routes
- **Database**: Supabase (with MongoDB options available)
- **Authentication**: NextAuth v5 (beta)
- **Payments**: Stripe (for potential future services)
- **Email**: Resend for transactional emails

## Development

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Fill in your environment variables in `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Required environment variables are documented in `.env.local`. Key variables include:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `RESEND_API_KEY` - Resend email service API key
- `STRIPE_PUBLIC_KEY` - Stripe public key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

## Project Structure

- `app/` - Next.js App Router pages and API routes
- `components/` - React components
- `libs/` - Utility libraries and helpers
- `public/` - Static assets and images
- `config.js` - Application configuration

## Build

```bash
npm run build
npm start
```

## License

Private project for Zhang Dong Architecture.
