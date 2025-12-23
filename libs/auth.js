import NextAuth from "next-auth"
import config from "@/config"

// Minimal NextAuth configuration for static portfolio site
// Authentication is not required, but NextAuth is kept to prevent errors
// The route handler at /api/auth/[...nextauth]/route.js uses these handlers
export const { handlers, auth, signIn, signOut } = NextAuth({
  // Set any random key in .env.local (optional for static site)
  secret: process.env.NEXTAUTH_SECRET || "static-site-secret",
  
  // No providers configured - this is a static portfolio site
  providers: [],
  
  // No database adapter - static site doesn't need user storage
  // Using JWT strategy for session management (no database required)
  session: {
    strategy: "jwt",
  },
  
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  
  theme: {
    brandColor: config.colors.main,
    logo: `https://${config.domainName}/logoAndName.png`,
  },
}); 