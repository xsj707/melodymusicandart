import { NextResponse } from "next/server";

// This is a static portfolio site - payment functionality is not available
// This route is stubbed out to prevent errors if called
export async function POST(req) {
  return NextResponse.json(
    { error: "Payment webhooks are not available on this static portfolio site" },
    { status: 501 }
  );
}
