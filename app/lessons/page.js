import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Piano Lessons - Melody Wang Piano",
  description: "Children's piano lessons in the Tri-Valley area. Learn about our teaching approach, curriculum, and lesson structure.",
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Piano Lessons</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-light mb-4">Teaching Philosophy</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                At Melody Wang Piano, we believe that learning music should be fun, engaging, and tailored to each child's unique learning style. 
                With a Doctor of Musical Arts in Collaborative Piano from Michigan State University and years of teaching experience, 
                Melody combines traditional piano fundamentals with creative activities that keep young students motivated and excited about music.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Her background in collaborative piano brings a unique perspective to teaching, emphasizing musical communication, 
                ensemble skills, and the joy of making music. We focus on building a strong foundation in technique, music theory, 
                and sight-reading while nurturing each child's natural musicality and love for the piano.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Age Groups</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                We welcome students of all ages, with a special focus on children ages 4-12. Lessons are customized based on the child's age, 
                developmental stage, and musical goals.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li><strong>Ages 4-6:</strong> Introduction to piano through games, songs, and fun activities</li>
                <li><strong>Ages 7-9:</strong> Structured learning with emphasis on fundamentals and reading music</li>
                <li><strong>Ages 10-12:</strong> Advanced technique and repertoire development</li>
                <li><strong>Teens & Adults:</strong> Customized lessons based on individual goals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Lesson Structure</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Duration</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Lessons are typically 30 minutes for younger students (ages 4-7) and 45 minutes for older students (ages 8+). 
                    Longer lessons can be arranged for advanced students.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Frequency</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Most students have weekly lessons, which provides consistent progress and maintains momentum. 
                    Flexible scheduling options are available.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Location</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Lessons are held at Melody's studio in the Tri-Valley area. In-home lessons may be available 
                    for students within a 30-minute drive (Pleasanton, Dublin, San Ramon, and surrounding areas).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Curriculum</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Our curriculum is designed to develop well-rounded musicians. Each lesson includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li><strong>Technique:</strong> Proper hand position, finger exercises, and scales</li>
                <li><strong>Music Theory:</strong> Understanding rhythm, notation, and musical concepts</li>
                <li><strong>Sight-Reading:</strong> Building the ability to read and play new music</li>
                <li><strong>Repertoire:</strong> Learning pieces from various styles and periods</li>
                <li><strong>Ear Training:</strong> Developing listening skills and musical ear</li>
                <li><strong>Performance:</strong> Regular opportunities to play for others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Benefits of Learning Piano</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Learning piano offers numerous benefits for children:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li>Enhances cognitive development and academic performance</li>
                <li>Improves fine motor skills and hand-eye coordination</li>
                <li>Builds discipline, patience, and perseverance</li>
                <li>Boosts self-confidence and self-expression</li>
                <li>Provides a creative outlet and stress relief</li>
                <li>Develops appreciation for music and the arts</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-black/10 p-8">
              <h2 className="text-2xl font-light mb-4">Ready to Start?</h2>
              <p className="text-lg font-light leading-relaxed mb-6">
                Book a free trial lesson to experience Melody's teaching style and see if it's a good fit for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-trial"
                  className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors text-center"
                >
                  Book Free Trial Class
                </Link>
                <Link
                  href="/booking"
                  className="inline-block border-2 border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors text-center"
                >
                  Existing Students: Book a Class
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

