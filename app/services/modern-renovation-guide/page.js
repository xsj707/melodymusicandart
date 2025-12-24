import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Modern Home Renovation Guide - Zhang Dong Architecture",
  description:
    "A straightforward guide outlining 5 stages to achieve a seamless home renovation for your Bay Area house. Avoid unexpected costs and navigate the process with confidence.",
};

export default function ModernRenovationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Achieve Modern Home Renovation
            </h1>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              You want a seamless home renovation for your Bay Area house.
              Updating your living space is exciting but concerns about
              unexpected costs linger. This straightforward guide outlines the 5
              stages to walk you through the process with confidence,
              specifically catered to{" "}
              <strong>Homeowners Seeking Modernization</strong>.
            </p>
          </div>
        </section>

        {/* Is This Guide For You Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Is This Bay Area Guide For You?
              </h2>
              <p className="text-lg text-black/70 mb-6">
                Updating your Bay Area home is high on your list, but where to
                start? If any of these apply, you're in the right place:
              </p>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Your home feels dated, and you're ready for a contemporary
                    upgrade.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    You've recently purchased a home that needs modernization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    A growing family requires smart space utilization.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    You're investing in your property's value before selling.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Personalized design touches are essential to your
                    lifestyle.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Bay Area Renovations Are Tricky Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Why Bay Area Renovations Are Tricky
              </h2>
              <p className="text-lg text-black/70 mb-6">
                Renovating in the Bay Area isn't just costly—it's complex.
                Here's why many feel overwhelmed:
              </p>
              <ul className="space-y-4 text-black/70 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-black font-medium">•</span>
                  <span>
                    Navigating local permits and regulations adds layers of red
                    tape.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-medium">•</span>
                  <span>
                    Balancing modern design trends with personal taste can be
                    challenging.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-medium">•</span>
                  <span>
                    Managing budgets to avoid overspending is critical.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-medium">•</span>
                  <span>
                    Juggling renovation timelines with daily life creates
                    stress.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-black/70 italic">
                You ask: "Am I just stuck in indecision, or is this genuinely
                tough?"
              </p>
            </div>
          </div>
        </section>

        {/* Stress-Free Roadmap Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Your Stress-Free Renovation Roadmap
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Here's your clear path to a successful renovation, broken into
                digestible stages:
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Assess Your Current Space
                    </h3>
                    <p className="text-black/70">
                      Evaluate what works and what doesn't.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Set Budget & Priorities
                    </h3>
                    <p className="text-black/70">
                      Identify must-haves vs. nice-to-haves.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Design with a Professional
                    </h3>
                    <p className="text-black/70">
                      Collaborate on a plan that reflects your style.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Execute & Monitor Progress
                    </h3>
                    <p className="text-black/70">
                      Keep the project on track daily.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Enjoy Your New Space
                    </h3>
                    <p className="text-black/70">
                      Finally, revel in the updated surroundings.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-black/70 italic">
                Remember, home renovation is not a quick fix—it's a planned
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Stage Walkthrough Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Detailed Stage Walkthrough
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Here's how to tackle each stage with precision:
              </p>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Assess Your Current Space:</strong>
                  </h3>
                  <p className="text-black/70">
                    Begin by listing frustrations and missed opportunities. This
                    matters to inform the design phase accurately.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Set Budget & Priorities:</strong>
                  </h3>
                  <p className="text-black/70">
                    Distinguish needs from wants early to stay on budget.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Design with a Professional:</strong>
                  </h3>
                  <p className="text-black/70">
                    Use their expertise to translate your vision into actionable
                    plans. Most homeowners get stuck without guidance here.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Execute & Monitor Progress:</strong>
                  </h3>
                  <p className="text-black/70">
                    Consistently review to catch issues early. Attention to
                    detail here avoids future regret.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Enjoy Your New Space:</strong>
                  </h3>
                  <p className="text-black/70">
                    Reflect back on the process, learning from any challenges.
                    Mark which stage feels like your current spot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Pitfalls Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Avoiding Common Renovation Pitfalls
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Taking note of these frequent errors can save you time and
                money:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-black/70">
                    <strong>Over-improving beyond your neighborhood's value</strong>
                    —ensure renovations align with area norms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-black/70">
                    <strong>Ignoring permits and codes</strong> leads to costly
                    fines and delays.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-black/70">
                    <strong>Skipping professional design help</strong> often
                    results in unmet expectations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-black/70">
                    <strong>Not setting aside a contingency budget</strong> for
                    surprises can throw off plans.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-black/70">
                    <strong>Disregarding daily lifestyle disruptions</strong>{" "}
                    lengthens project timelines.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-black/60 italic">
                Put a checkmark by any mistake you've already made.
              </p>
            </div>
          </div>
        </section>

        {/* Where Our Service Comes In Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Where Our Remodeling Service Comes In
              </h2>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                Our{" "}
                <Link
                  href="/services"
                  className="text-black underline hover:opacity-70 transition-opacity"
                >
                  Residential Remodeling Design Service
                </Link>{" "}
                typically steps in during the design phase, shaping your ideas
                into a cohesive plan. We personalize your design while managing
                costs with our{" "}
                <strong>'No Surprise Cost' guarantee</strong>—ensuring the
                quoted price remains unless you decide otherwise. We collaborate
                on room layout, material selection, and aesthetic choices,
                leaving you free from fear of hidden costs. Our service enhances
                your vision without pressuring additional purchases.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Your Next Steps to Achieve Renovation Success
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Here's what you can do right now to move forward:
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    1
                  </div>
                  <p className="text-black/70 pt-1">
                    List immediate design pain points and room improvements you
                    desire.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    2
                  </div>
                  <p className="text-black/70 pt-1">
                    Estimate what you're comfortable spending to gauge project
                    scale.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    3
                  </div>
                  <p className="text-black/70 pt-1">
                    Seek consultancy when narrowing down design plans seems
                    overwhelming.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    4
                  </div>
                  <p className="text-black/70 pt-1">
                    Connect with us when ready to secure a reliable design
                    partnership.
                  </p>
                </div>
              </div>
              <p className="text-black/70 italic mb-8">
                Use this guide as a reference through your journey. Circle the
                stage you're in and note one question you'd ask.
              </p>
              <div className="pt-8 border-t border-black/10">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-lg font-light hover:bg-black/90 transition-colors mr-4"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="inline-block border border-black text-black px-8 py-4 text-lg font-light hover:bg-black hover:text-white transition-colors"
                >
                  Learn About Our Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

