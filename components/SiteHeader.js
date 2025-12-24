import Link from "next/link";
import config from "@/config";
import Navigation from "./Navigation";

export default function SiteHeader({ showNav = true }) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-black/10">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link
            href="/"
            className="pointer-events-auto hover:opacity-70 transition-opacity"
          >
            <div className="flex items-center gap-3">
              {/* Logo blocks - simplified version */}
              <div className="flex gap-1">
                <div className="w-8 h-8 bg-black"></div>
                <div className="w-8 h-8 bg-black"></div>
                <div className="w-8 h-8 bg-black"></div>
              </div>
              <div className="text-black font-semibold text-lg">
                {config.appName}
              </div>
            </div>
          </Link>

          {/* Navigation - Center (hidden on mobile, shown on desktop) */}
          {showNav && (
            <>
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/lessons" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  Lessons
                </Link>
                <Link href="/about" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  About
                </Link>
                <Link href="/resources" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  Resources
                </Link>
                <Link href="/testimonials" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  Testimonials
                </Link>
                <Link href="/faq" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  FAQ
                </Link>
                <Link href="/contact" className="text-black hover:opacity-70 transition-opacity text-sm font-medium">
                  Contact
                </Link>
              </nav>

              {/* CTA Buttons - Right Side */}
              <div className="hidden lg:flex flex-col gap-2">
                <Link
                  href="/free-trial"
                  className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-black/90 transition-colors rounded-md text-center"
                >
                  Free Lesson
                </Link>
                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-black/90 transition-colors rounded-md text-center"
                >
                  Call Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Navigation />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
