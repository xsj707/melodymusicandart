import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Book a Class - Melody Wang Piano",
  description: "Existing students can book their piano lesson slots here",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Book a Class</h1>
          <p className="text-lg font-light leading-relaxed mb-8 text-black/70">
            For existing students: Schedule your upcoming piano lessons here.
          </p>

          <div className="bg-gray-50 border border-black/10 p-8 mb-8">
            <h2 className="text-2xl font-light mb-4">Calendar Integration Coming Soon</h2>
            <p className="text-lg font-light leading-relaxed mb-4">
              We're currently setting up our online booking system. In the meantime, please contact Melody directly to schedule your lessons.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Contact Information:</p>
              <p className="text-black/70">Email: contact@melodywangpiano.com</p>
              <p className="text-black/70">Phone: (XXX) XXX-XXXX</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-light mb-4">Lesson Scheduling</h3>
            <ul className="list-disc list-inside space-y-2 text-lg font-light">
              <li>Lessons are typically scheduled weekly</li>
              <li>Each lesson is 30-45 minutes depending on age and level</li>
              <li>Lessons are held at Melody's studio or can be arranged for in-home instruction</li>
              <li>Make-up lessons are available with 24-hour notice</li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

