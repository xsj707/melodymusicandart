import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";
import config from "@/config";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// For static portfolio site: auth always returns null, so dashboard redirects to homepage
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {
  try {
    const session = await auth();

    if (!session) {
      redirect(config.auth.loginUrl || "/");
    }

    return <>{children}</>;
  } catch (error) {
    // If auth fails (e.g., on static site), redirect to homepage
    redirect(config.auth.loginUrl || "/");
  }
}
