import { NextResponse } from "next/server";

// Stub for NextAuth catch-all route handler
// This is a static portfolio site - authentication is not needed
// All auth endpoints return 404 to prevent errors
export async function GET() {
  return NextResponse.json(
    { error: "Authentication not available on this static portfolio site" },
    { status: 404 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Authentication not available on this static portfolio site" },
    { status: 404 }
  );
}

