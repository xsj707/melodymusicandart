// This is a static portfolio site - email functionality is optional
// This file is kept as a stub to prevent import errors
// If you want to add email functionality later, install 'resend' package and uncomment the code below

export const sendEmail = async ({ to, subject, text, html, replyTo }) => {
  // For a static site, you can:
  // 1. Log the email (for development)
  // 2. Install 'resend' package and implement email sending
  // 3. Use a third-party service (Mailchimp, ConvertKit, etc.)
  
  console.log("Email would be sent:", { to, subject, text, html, replyTo });
  console.warn("Email functionality not implemented. Install 'resend' package to enable email sending.");
  
  // Return a mock response to prevent errors
  return { id: "mock-email-id" };
};
