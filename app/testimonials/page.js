import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Testimonials - Melody Wang Piano",
  description: "What parents and students say about Melody Wang's piano lessons.",
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Melody has been an amazing teacher for my 7-year-old daughter. She's patient, encouraging, and makes learning piano fun. My daughter looks forward to her lessons every week!",
      author: "Sarah M.",
      location: "Pleasanton",
      childAge: "7 years old",
    },
    {
      quote: "We've seen such great progress in our son's piano skills since starting with Melody. Her teaching style is perfect for children - she knows how to keep them engaged while building strong fundamentals.",
      author: "Michael T.",
      location: "Dublin",
      childAge: "9 years old",
    },
    {
      quote: "Melody is wonderful with young children. My 5-year-old started lessons this year and absolutely loves them. Melody makes each lesson enjoyable while teaching proper technique from the start.",
      author: "Jennifer L.",
      location: "San Ramon",
      childAge: "5 years old",
    },
    {
      quote: "As a parent, I appreciate how Melody communicates what my child is learning and how I can support practice at home. The progress reports and recital opportunities are great too.",
      author: "David K.",
      location: "Livermore",
      childAge: "8 years old",
    },
    {
      quote: "My daughter has been taking lessons with Melody for two years now, and her confidence has grown so much. She recently performed in a recital and did beautifully. Thank you, Melody!",
      author: "Lisa C.",
      location: "Pleasanton",
      childAge: "10 years old",
    },
    {
      quote: "Melody's patience and positive approach have made all the difference. My son was hesitant about piano at first, but now he practices without being asked. That's a testament to Melody's teaching.",
      author: "Robert P.",
      location: "Dublin",
      childAge: "6 years old",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Testimonials</h1>
          <p className="text-lg font-light leading-relaxed mb-12 text-black/70">
            Hear from parents and students about their experience with Melody Wang Piano.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-black/20 p-6 flex flex-col"
              >
                <p className="text-lg font-light leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-black/10 pt-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-black/70">
                    {testimonial.location} • {testimonial.childAge}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-black/10 p-8 text-center">
            <h2 className="text-2xl font-light mb-4">Share Your Experience</h2>
            <p className="text-lg font-light leading-relaxed mb-6">
              Have a testimonial to share? We'd love to hear about your child's experience with Melody Wang Piano.
            </p>
            <a
              href="mailto:contact@melodywangpiano.com"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

