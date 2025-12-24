import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Resources for Parents - Melody Wang Piano",
  description: "Helpful guides and resources for parents considering piano lessons for their children.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Resources for Parents</h1>

          <p className="text-lg font-light leading-relaxed mb-12 text-black/70">
            Helpful guides and information to support your child's musical journey.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link
              href="/resources/piano-education-guide"
              className="border border-black/20 p-8 hover:border-black transition-colors group"
            >
              <h2 className="text-2xl font-light mb-4 group-hover:opacity-70">Piano Education Guide</h2>
              <p className="text-lg font-light leading-relaxed text-black/70">
                A comprehensive guide for parents considering piano lessons for their children. Learn about the benefits, 
                what to expect, and how to choose the right program.
              </p>
            </Link>

            <Link
              href="/resources/piano-recommendations"
              className="border border-black/20 p-8 hover:border-black transition-colors group"
            >
              <h2 className="text-2xl font-light mb-4 group-hover:opacity-70">Piano Recommendations</h2>
              <p className="text-lg font-light leading-relaxed text-black/70">
                Expert recommendations for choosing the right piano or keyboard for your child. Compare options, 
                understand features, and find the best instrument for your budget.
              </p>
            </Link>
          </div>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-light mb-4">Additional Resources</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Practice Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-lg font-light">
                  <li>Establish a consistent practice routine (15-30 minutes daily for beginners)</li>
                  <li>Create a dedicated practice space free from distractions</li>
                  <li>Break practice into smaller, focused sessions</li>
                  <li>Celebrate small achievements and progress</li>
                  <li>Make practice fun with games and rewards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Local Music Stores</h3>
                <p className="text-lg font-light leading-relaxed mb-2">
                  For purchasing or renting instruments and accessories, consider these local options:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg font-light">
                  <li>Music stores in Pleasanton, Dublin, and San Ramon</li>
                  <li>Online retailers for keyboards and accessories</li>
                  <li>Piano rental services for trying before buying</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Supporting Your Child's Musical Journey</h3>
                <p className="text-lg font-light leading-relaxed mb-2">
                  As a parent, you play a crucial role in your child's musical development:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg font-light">
                  <li>Attend lessons when possible to understand what your child is learning</li>
                  <li>Encourage regular practice without being pushy</li>
                  <li>Attend recitals and celebrate performances</li>
                  <li>Listen to music together and explore different genres</li>
                  <li>Be patient - progress takes time and varies for each child</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

