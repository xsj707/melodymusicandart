import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Contact - Melody Wang Piano",
  description: "Contact Melody Wang for piano lessons in the Tri-Valley area.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Contact</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-lg font-light leading-relaxed mb-6">
                Get in touch with Melody to learn more about piano lessons for your child, 
                schedule a free trial class, or ask any questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:contact@melodywangpiano.com"
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    contact@melodywangpiano.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+1-XXX-XXX-XXXX"
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    (XXX) XXX-XXXX
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/zi-wang-a60395202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">Service Area</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Melody serves the Tri-Valley area and surrounding communities, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li>Pleasanton</li>
                <li>Dublin</li>
                <li>San Ramon</li>
                <li>Livermore</li>
                <li>And surrounding areas within a 30-minute drive</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-black/10 p-8">
              <h2 className="text-2xl font-light mb-4">Ready to Get Started?</h2>
              <p className="text-lg font-light leading-relaxed mb-6">
                Book a free trial lesson to experience Melody's teaching style and see if it's a good fit for your child.
              </p>
              <Link
                href="/free-trial"
                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors"
              >
                Book Free Trial Class
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4">Response Time</h2>
              <p className="text-lg font-light leading-relaxed">
                Melody typically responds to inquiries within 24-48 hours. For urgent matters, 
                please call or text the phone number above.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}


