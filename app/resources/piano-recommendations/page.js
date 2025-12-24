import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Piano Recommendations for Children - Melody Wang Piano",
  description: "Expert recommendations for choosing the right piano or keyboard for your child, including comparisons and buying guides.",
};

export default function PianoRecommendationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Piano Recommendations for Children</h1>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80"
              alt="Piano keyboard"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-light mb-4">Choosing the Right Instrument</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Selecting the right piano or keyboard for your child is an important decision. The instrument should be 
                appropriate for their age, size, and skill level, while also fitting your budget and space constraints.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Here are our top recommendations for different age groups and budgets:
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">For Young Beginners (Ages 4-7)</h2>
              
              <div className="space-y-6">
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Yamaha PSS-F30</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $60-80
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Very young beginners (ages 4-7) who are just starting to explore music
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>37 mini keys (perfect for small hands)</li>
                    <li>120 voices and 114 styles</li>
                    <li>Built-in lesson functions</li>
                    <li>Compact and portable</li>
                    <li>Battery powered option</li>
                  </ul>
                  <p className="text-lg font-light leading-relaxed mt-2">
                    <strong>Why We Recommend It:</strong> This keyboard is specifically designed for young children with 
                    smaller hands. The mini keys make it easier for little fingers to reach, and the fun features keep 
                    children engaged while learning.
                  </p>
                </div>

                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Alesis Harmony 61 MKII</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $100-150
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Children ready for full-size keys but still need an affordable starter option
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>61 full-size keys</li>
                    <li>300 voices and 40 styles</li>
                    <li>Included learning software</li>
                    <li>Touch-sensitive keys</li>
                    <li>USB connectivity</li>
                  </ul>
                  <p className="text-lg font-light leading-relaxed mt-2">
                    <strong>Why We Recommend It:</strong> Great value for money. Full-size keys help children develop 
                    proper hand positioning from the start, and the included software provides additional learning resources.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">For Intermediate Students (Ages 8-12)</h2>
              
              <div className="space-y-6">
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Yamaha NP-12 Piaggero</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $200-250
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Children seeking a piano-focused learning experience with quality sound
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>61 touch-sensitive keys</li>
                    <li>High-quality grand piano tone</li>
                    <li>Lightweight and portable</li>
                    <li>USB connectivity for learning apps</li>
                    <li>Built-in speakers</li>
                  </ul>
                  <p className="text-lg font-light leading-relaxed mt-2">
                    <strong>Why We Recommend It:</strong> Excellent sound quality and touch response. The piano-focused 
                    design helps students develop proper technique while the portability makes it easy to move for lessons 
                    or performances.
                  </p>
                </div>

                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Casio Privia PX-160</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $400-500
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Serious students who want an acoustic piano feel
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>88 weighted keys (simulates acoustic piano)</li>
                    <li>Tri-sensor scaled hammer action</li>
                    <li>128-note polyphony</li>
                    <li>18 built-in tones</li>
                    <li>Duet mode for teacher-student playing</li>
                  </ul>
                  <p className="text-lg font-light leading-relaxed mt-2">
                    <strong>Why We Recommend It:</strong> The weighted keys provide the most authentic piano feel for 
                    a digital instrument. This is ideal for students who may transition to an acoustic piano later or 
                    who need to develop proper finger strength.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">For Advanced Students</h2>
              
              <div className="space-y-6">
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Yamaha P-125</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $600-700
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Advanced students who need professional-quality sound and touch
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>88 weighted keys with GHS action</li>
                    <li>Yamaha CFX grand piano sound</li>
                    <li>192-note polyphony</li>
                    <li>24 voices</li>
                    <li>USB audio interface</li>
                  </ul>
                </div>

                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Roland FP-30X</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Price Range:</strong> $700-800
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Best For:</strong> Serious students preparing for performances or exams
                  </p>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Features:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-lg font-light ml-4">
                    <li>88 keys with PHA-4 Standard keyboard</li>
                    <li>SuperNATURAL piano sound engine</li>
                    <li>256-note polyphony</li>
                    <li>Bluetooth connectivity</li>
                    <li>Piano Partner 2 app compatibility</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Key Features to Consider</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Number of Keys</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li><strong>37-49 keys:</strong> Good for very young beginners, but limited range</li>
                    <li><strong>61 keys:</strong> Standard for most beginners, covers most beginner repertoire</li>
                    <li><strong>88 keys:</strong> Full range like an acoustic piano, best for serious study</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Touch Sensitivity</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Touch-sensitive keys respond to how hard you press, creating dynamics (loud and soft). 
                    This is essential for developing proper technique and musical expression.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Weighted Keys</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Weighted keys simulate the feel of an acoustic piano. They require more finger strength, 
                    which helps develop proper technique. Recommended for intermediate and advanced students.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Polyphony</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Polyphony refers to how many notes can sound simultaneously. Higher polyphony (128+) is 
                    better for complex pieces and prevents notes from cutting off.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Digital Piano vs. Acoustic Piano</h2>
              <div className="space-y-6">
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Digital Piano Advantages</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>More affordable</li>
                    <li>Portable and space-efficient</li>
                    <li>Volume control and headphone option</li>
                    <li>No tuning required</li>
                    <li>Multiple instrument sounds</li>
                    <li>Recording capabilities</li>
                  </ul>
                </div>
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Acoustic Piano Advantages</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>Authentic sound and touch</li>
                    <li>Better for advanced technique development</li>
                    <li>Appreciates in value (for quality instruments)</li>
                    <li>No electricity required</li>
                    <li>Traditional aesthetic appeal</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed mt-4">
                <strong>Our Recommendation:</strong> Start with a quality digital piano. It's more practical for most 
                families, and modern digital pianos with weighted keys provide an excellent learning experience. 
                Consider an acoustic piano later if your child shows serious commitment and advancement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Buying Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li>Try before you buy - visit a music store if possible</li>
                <li>Consider renting first to see if your child sticks with lessons</li>
                <li>Look for packages that include bench, stand, and headphones</li>
                <li>Check for warranty and return policies</li>
                <li>Read reviews from other parents and teachers</li>
                <li>Consider buying used from reputable sources</li>
                <li>Ask your piano teacher for recommendations based on your child's needs</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-black/10 p-8">
              <h2 className="text-2xl font-light mb-4">Need More Guidance?</h2>
              <p className="text-lg font-light leading-relaxed mb-6">
                Have questions about choosing the right piano for your child? Contact Melody for personalized recommendations.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors"
              >
                Contact Melody
              </Link>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

