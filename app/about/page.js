import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";

export const metadata = {
  title: "About Melody Wang - Melody Wang Piano",
  description: "Learn about Melody Wang, piano teacher specializing in children's piano lessons in the Tri-Valley area.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">About Melody</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Profile Image */}
            <div className="w-full md:w-1/2 mx-auto mb-8">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Melody Wang - Piano Teacher"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-light mb-4">Biography</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Zi Wang (Melody Wang) is a pianist and collaborative musician with extensive training and experience 
                in piano performance and education. With a Doctor of Musical Arts in Collaborative Piano from Michigan 
                State University (graduated with a 4.0 GPA), Melody brings both academic excellence and practical 
                teaching experience to her piano instruction.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Melody has served as a Piano Instructor at Miller Music Studios and continues to work as an Accompanist 
                at Robbins United Methodist Church, demonstrating her versatility in both teaching and performance. 
                Her background in collaborative piano gives her a unique perspective on musical communication and ensemble 
                work, which she incorporates into her teaching.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Based in Dublin, California, Melody serves families throughout the Tri-Valley area, including Pleasanton, 
                San Ramon, and surrounding communities. She offers both studio and in-home piano lessons, making quality 
                music education accessible to families in the region.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Melody believes that every child has the potential to develop a lifelong love of music, and she is 
                committed to nurturing that potential through personalized instruction tailored to each student's unique 
                learning style and interests.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Education & Credentials</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Doctor of Musical Arts, Collaborative Piano</h3>
                  <p className="text-lg font-light leading-relaxed mb-1">
                    Michigan State University
                  </p>
                  <p className="text-sm text-black/70 mb-2">August 2018 - May 2021 • Grade: 4.0</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Master of Arts</h3>
                  <p className="text-lg font-light leading-relaxed mb-1">
                    Michigan State University
                  </p>
                  <p className="text-sm text-black/70">2015 - 2017</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Professional Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Accompanist</h3>
                  <p className="text-lg font-light leading-relaxed mb-1">
                    Robbins United Methodist Church
                  </p>
                  <p className="text-sm text-black/70 mb-2">July 2019 - Present • Part-time</p>
                  <p className="text-lg font-light leading-relaxed text-black/80">
                    Providing musical accompaniment for church services and events, demonstrating expertise in collaborative 
                    performance and adaptability to various musical contexts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Piano Instructor</h3>
                  <p className="text-lg font-light leading-relaxed mb-1">
                    Miller Music Studios
                  </p>
                  <p className="text-sm text-black/70 mb-2">August 2019 - May 2021 • Part-time</p>
                  <p className="text-lg font-light leading-relaxed text-black/80">
                    Taught piano to students of various ages and skill levels, developing curriculum and lesson plans 
                    tailored to individual student needs and goals.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Teaching Philosophy</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                At the heart of Melody's teaching is the belief that music education should be both fun and meaningful. 
                She combines traditional piano pedagogy with creative, age-appropriate activities that keep young students 
                engaged and motivated.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Her approach emphasizes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light mt-4">
                <li>Building confidence through positive reinforcement</li>
                <li>Adapting teaching methods to each child's learning style</li>
                <li>Balancing technique with musical expression</li>
                <li>Creating a supportive and encouraging learning environment</li>
                <li>Fostering a genuine love for music that extends beyond lessons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">Service Area</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Based in Dublin, California, Melody primarily serves the Tri-Valley area, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg font-light">
                <li>Dublin (home base)</li>
                <li>Pleasanton</li>
                <li>San Ramon</li>
                <li>Livermore</li>
                <li>And surrounding areas within a 30-minute drive</li>
              </ul>
            </section>

            <section className="bg-gray-50 border border-black/10 p-8">
              <h2 className="text-2xl font-light mb-4">Connect with Melody</h2>
              <p className="text-lg font-light leading-relaxed mb-4">
                Interested in learning more or scheduling a free trial lesson?
              </p>
              <div className="space-y-2 text-lg font-light">
                <p>
                  <a href="https://www.linkedin.com/in/zi-wang-a60395202" target="_blank" rel="noopener noreferrer" className="text-black underline hover:opacity-70">
                    LinkedIn Profile
                  </a>
                </p>
                <p>
                  Email: <a href="mailto:contact@melodywangpiano.com" className="text-black underline hover:opacity-70">contact@melodywangpiano.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+1-XXX-XXX-XXXX" className="text-black underline hover:opacity-70">(XXX) XXX-XXXX</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
