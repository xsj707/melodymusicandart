import { NextResponse } from "next/server";

// This route is used to collect leads from the landing page.
// The API call is initiated by <ButtonLead /> component
// For a static site, this just validates the email and returns success
// You can integrate with an email service or third-party API here if needed
export async function POST(req) {
  const body = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  try {
    // For a static site, you can:
    // 1. Log the email (for development)
    // 2. Integrate with an email service (Resend, SendGrid, etc.)
    // 3. Send to a third-party service (Mailchimp, ConvertKit, etc.)
    // 4. Use a serverless function to store in a database if needed later
    
    console.log("Lead collected:", body.email);
    
    // Example: If you want to use Resend later, uncomment:
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@zhangdongarchitecture.com",
    //   to: "contact@zhangdongarchitecture.com",
    //   subject: "New Lead",
    //   text: `New lead: ${body.email}`,
    // });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
