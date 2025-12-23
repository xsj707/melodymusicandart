// Stub auth functions for static portfolio site
// Authentication is not needed - all functions return null/empty to prevent errors
// This avoids importing NextAuth which has dependencies that cause build issues

// Stub auth function - always returns null (no session) for static site
export async function auth() {
  return null;
}

// Stub signIn function - not used on static site
export async function signIn() {
  return null;
}

// Stub signOut function - not used on static site
export async function signOut() {
  return null;
}

// Stub handlers for API routes - already handled in route.js files
export const handlers = {
  GET: async () => {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  },
  POST: async () => {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  },
}; 