import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "FAQ - Melody Wang Piano",
  description: "Frequently asked questions about piano lessons with Melody Wang.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What age should my child start piano lessons?",
      answer: "Children can start piano lessons as early as age 4, though ages 6-8 are often ideal. The best age depends on your child's interest, attention span, and fine motor development. We offer a free trial lesson to help determine if your child is ready.",
    },
    {
      question: "How long are the lessons?",
      answer: "Lessons are typically 30 minutes for younger students (ages 4-7) and 45 minutes for older students (ages 8+). Longer lessons can be arranged for advanced students.",
    },
    {
      question: "How often should my child take lessons?",
      answer: "Most students have weekly lessons, which provides consistent progress and maintains momentum. Some students may benefit from twice-weekly lessons, especially when preparing for performances or exams.",
    },
    {
      question: "Do we need to own a piano to start lessons?",
      answer: "While having a piano or keyboard at home is ideal for practice, you can start with a keyboard. We recommend at least 61 keys with touch sensitivity. See our Piano Recommendations guide for specific suggestions.",
    },
    {
      question: "Where are lessons held?",
      answer: "Lessons are held at Melody's studio in the Tri-Valley area. In-home lessons may be available for students within a 30-minute drive (Pleasanton, Dublin, San Ramon, and surrounding areas).",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for cancellations. Make-up lessons are available with proper notice. Same-day cancellations may not be eligible for make-up lessons.",
    },
    {
      question: "How much practice is required?",
      answer: "Practice requirements vary by age and level. Beginners typically practice 15-30 minutes daily, while more advanced students may practice 45-60 minutes or more. Consistency is more important than duration - regular short practices are better than occasional long sessions.",
    },
    {
      question: "Do you offer recitals or performance opportunities?",
      answer: "Yes! We organize recitals and performance opportunities throughout the year. These events help build confidence, provide goals to work toward, and celebrate students' progress. Participation is encouraged but optional.",
    },
    {
      question: "What teaching method do you use?",
      answer: "We use a combination of traditional piano pedagogy and modern teaching methods, tailored to each student's learning style. We focus on building strong fundamentals in technique, music theory, and sight-reading while keeping lessons engaging and fun.",
    },
    {
      question: "Can parents observe lessons?",
      answer: "Parents are welcome to observe lessons, especially for younger students. Some parents find it helpful to understand what their child is learning so they can better support practice at home. We can discuss the best approach for your family.",
    },
    {
      question: "What if my child wants to quit?",
      answer: "It's normal for children to have periods of decreased motivation. We work with parents to address challenges and keep students engaged. Sometimes a break or adjustment in approach can help. We encourage open communication about any concerns.",
    },
    {
      question: "Do you teach adults?",
      answer: "Yes! While we specialize in children's piano education, we also welcome adult students. Adult lessons are customized based on individual goals, whether you're a complete beginner or returning to piano after many years.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Frequently Asked Questions</h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black/10 pb-6">
                <h2 className="text-xl font-medium mb-3">{faq.question}</h2>
                <p className="text-lg font-light leading-relaxed text-black/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-black/10 p-8 text-center">
            <h2 className="text-2xl font-light mb-4">Still Have Questions?</h2>
            <p className="text-lg font-light leading-relaxed mb-6">
              We're here to help! Contact Melody directly with any questions about piano lessons.
            </p>
            <a
              href="/contact"
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

