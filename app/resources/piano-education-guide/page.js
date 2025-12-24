import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Piano Education Guide for Parents - Melody Wang Piano",
  description: "A comprehensive guide for parents considering piano lessons for their children, including benefits, expectations, and options.",
};

export default function PianoEducationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Piano Education Guide for Parents</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-light mb-4">Why Piano Lessons for Your Child?</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Learning piano offers numerous benefits that extend far beyond musical skills. Research has shown that 
                music education can positively impact a child's cognitive development, academic performance, and overall well-being.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Cognitive Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>Enhanced memory and concentration</li>
                    <li>Improved mathematical and spatial reasoning</li>
                    <li>Better reading and language skills</li>
                    <li>Increased IQ scores</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Emotional & Social Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>Boosted self-confidence and self-esteem</li>
                    <li>Improved discipline and time management</li>
                    <li>Enhanced creativity and self-expression</li>
                    <li>Stress relief and emotional outlet</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Physical Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>Improved fine motor skills and hand-eye coordination</li>
                    <li>Better posture and body awareness</li>
                    <li>Enhanced bilateral coordination (using both hands independently)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">When to Start Piano Lessons</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                The ideal age to start piano lessons varies for each child, but here are some general guidelines:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Ages 4-5: Early Starters</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Children as young as 4 can begin piano lessons if they show interest and can focus for 15-20 minutes. 
                    At this age, lessons are play-based and focus on developing a love for music rather than strict technique.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Ages 6-8: Ideal Starting Age</h3>
                  <p className="text-lg font-light leading-relaxed">
                    This is often considered the "sweet spot" for starting piano. Children have better fine motor skills, 
                    longer attention spans, and can begin reading music. They can also understand more complex concepts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Ages 9+: Never Too Late</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Older children and teens can make rapid progress due to their cognitive development and ability to 
                    practice independently. Many successful pianists started later in childhood.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">What to Expect in Piano Lessons</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Lesson Structure</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    A typical piano lesson includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg font-light">
                    <li>Warm-up exercises and technique practice</li>
                    <li>Review of previous lesson material</li>
                    <li>Introduction of new concepts or pieces</li>
                    <li>Music theory and ear training</li>
                    <li>Practice planning for the week ahead</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Practice Requirements</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Regular practice is essential for progress. Beginners typically practice 15-30 minutes daily, 
                    while more advanced students may practice 45-60 minutes or more. Consistency is more important 
                    than duration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Recitals and Performances</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Most piano teachers organize recitals or performance opportunities. These events help build 
                    confidence, provide goals to work toward, and celebrate students' progress.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Comparing Piano Lesson Options</h2>
              <div className="space-y-6">
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Private Lessons</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Pros:</strong> Personalized attention, flexible pace, customized curriculum
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    <strong>Cons:</strong> Higher cost, no peer interaction
                  </p>
                </div>
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Group Lessons</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Pros:</strong> Lower cost, social interaction, peer motivation
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    <strong>Cons:</strong> Less individual attention, fixed pace may not suit all students
                  </p>
                </div>
                <div className="border border-black/20 p-6">
                  <h3 className="text-xl font-medium mb-2">Online Lessons</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Pros:</strong> Convenience, no travel, access to teachers worldwide
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    <strong>Cons:</strong> Technical issues, less hands-on guidance, potential distractions
                  </p>
                </div>
                <div className="border border-black/20 p-6 bg-gray-50">
                  <h3 className="text-xl font-medium mb-2">In-Person Private Lessons (Recommended)</h3>
                  <p className="text-lg font-light leading-relaxed mb-2">
                    <strong>Pros:</strong> Best of both worlds - personalized attention with direct, hands-on instruction
                  </p>
                  <p className="text-lg font-light leading-relaxed">
                    <strong>Best for:</strong> Most children, especially beginners who benefit from immediate feedback and correction
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Choosing the Right Teacher</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Finding the right piano teacher is crucial for your child's success. Consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li><strong>Experience with children:</strong> Not all teachers work well with young students</li>
                <li><strong>Teaching style:</strong> Does it match your child's learning style?</li>
                <li><strong>Personality fit:</strong> Your child should feel comfortable and motivated</li>
                <li><strong>Location and schedule:</strong> Convenience matters for consistency</li>
                <li><strong>Credentials:</strong> Formal training and experience are important</li>
                <li><strong>Trial lesson:</strong> Always try a lesson before committing</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-black/10 p-8">
              <h2 className="text-2xl font-light mb-4">Ready to Get Started?</h2>
              <p className="text-lg font-light leading-relaxed mb-6">
                Book a free trial lesson with Melody to see if it's a good fit for your child.
              </p>
              <Link
                href="/free-trial"
                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors"
              >
                Book Free Trial Class
              </Link>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

