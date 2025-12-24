"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white py-2 text-center text-sm">
        <p>Now offering In-Person & Online Lessons! <Link href="/free-trial" className="underline hover:opacity-80">Sign-up today!</Link></p>
      </div>

      <SiteHeader showNav={true} />

      {/* Hero Section - Split Layout */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Section - Image */}
            <div className="relative aspect-[3/4] md:aspect-square overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Melody Wang - Piano Teacher"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Section - Text and CTAs */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black mb-3">
                  Music Lessons
                </h1>
                <p className="text-xl md:text-2xl text-black/70 font-sans">
                  for All Ages and Levels
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/free-trial"
                  className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md text-center"
                >
                  Free Lesson
                </Link>
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md text-center"
                >
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Melody Wang Piano</h2>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-4">
              Pleasanton • Dublin • San Ramon
            </p>
            <p className="text-lg font-light leading-relaxed text-black/80 max-w-3xl mx-auto mb-4">
              Melody Wang Piano has provided quality piano instruction to families in the Tri-Valley area. 
              We are committed to the idea that all students have great potential, which can be developed through 
              a positive and motivational environment, consistent practice, and first-rate musical instruction. 
              Our piano lessons offer a well-rounded, thought-out curriculum, experienced teaching, and a fun, 
              educational atmosphere.
            </p>
            <p className="text-lg font-light leading-relaxed text-black/80 max-w-3xl mx-auto mb-8">
              Simply put, we strive to offer piano instruction that helps to take music education to the next level 
              for our students. Music lessons are offered to students of all ages and skill levels. Get started with 
              a free trial lesson today, or contact us now with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/free-trial"
                className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md text-center"
              >
                Free Lesson
              </Link>
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md text-center"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">What Makes Us Unique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Experienced Faculty</h3>
              <p className="text-black/70 leading-relaxed">
                DMA in Collaborative Piano from Michigan State University with years of teaching experience. 
                Melody brings both academic excellence and practical expertise to every lesson.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Personalized Instruction</h3>
              <p className="text-black/70 leading-relaxed">
                Lessons are tailored to each child's unique learning style and interests. Melody adapts her 
                teaching methods to help every student reach their full potential.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Proven Track Record</h3>
              <p className="text-black/70 leading-relaxed">
                Students have shown remarkable progress in technique, musicality, and confidence. Many continue 
                their musical journey with a lifelong love for piano.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Convenient Location</h3>
              <p className="text-black/70 leading-relaxed">
                Based in Dublin, California, serving the Tri-Valley area including Pleasanton, San Ramon, and 
                surrounding communities. Studio and in-home lessons available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-black/20 p-6">
              <p className="text-lg font-light leading-relaxed mb-4">
                "Melody has been an amazing teacher for my 7-year-old daughter. She's patient, encouraging, and makes learning piano fun. My daughter looks forward to her lessons every week!"
              </p>
              <div className="border-t border-black/10 pt-4">
                <p className="font-medium">Sarah M.</p>
                <p className="text-sm text-black/70">Pleasanton</p>
              </div>
            </div>
            <div className="border border-black/20 p-6">
              <p className="text-lg font-light leading-relaxed mb-4">
                "We've seen such great progress in our son's piano skills since starting with Melody. Her teaching style is perfect for children - she knows how to keep them engaged while building strong fundamentals."
              </p>
              <div className="border-t border-black/10 pt-4">
                <p className="font-medium">Michael T.</p>
                <p className="text-sm text-black/70">Dublin</p>
              </div>
            </div>
            <div className="border border-black/20 p-6">
              <p className="text-lg font-light leading-relaxed mb-4">
                "Melody is wonderful with young children. My 5-year-old started lessons this year and absolutely loves them. Melody makes each lesson enjoyable while teaching proper technique from the start."
              </p>
              <div className="border-t border-black/10 pt-4">
                <p className="font-medium">Jennifer L.</p>
                <p className="text-sm text-black/70">San Ramon</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-black underline hover:opacity-70 transition-opacity"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Sign Up for a Free Lesson</h2>
          <p className="text-lg font-light leading-relaxed mb-8 text-black/70">
            Experience Melody's teaching style with a complimentary trial lesson. Perfect for children ages 4-12 in the Tri-Valley area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/free-trial"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md"
            >
              Free Lesson Form
            </Link>
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors rounded-md"
            >
              Call Us
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
