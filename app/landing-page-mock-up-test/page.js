export const metadata = {
  title: "Rapid IHC Services with 3000+ Validated Antibodies",
  description:
    "Fast-turnaround IHC and IF assays for pharmaceutical companies. Access 3000+ pre-validated antibodies and 24/7 technical support from experienced scientists.",
};

export default function LandingPageTest() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900">
              IHC Services
            </div>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Rapid IHC Services with{" "}
                <span className="text-blue-600">3000+ Validated Antibodies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Accelerate your therapeutic development with fast-turnaround
                IHC and IF assays. Pre-validated antibodies ready to use,
                supported by 24/7 expert technical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Request a Quote
                </a>
                <a
                  href="#benefits"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <span>Fast turnaround times</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <span>3000+ validated antibodies</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
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
                  <span>24/7 technical support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Streamline Your Preclinical and Clinical Research
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pharmaceutical companies engaged in therapeutic development need
                reliable IHC and IF assays delivered on time. Our validated
                antibody library and rapid service ensure your research stays on
                schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Common Challenges
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Long turnaround times delay research timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>
                      Lack of pre-validated antibodies slows assay development
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>
                      Limited technical support when questions arise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>
                      Validation delays impact preclinical and clinical
                      submissions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Solution
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      Rapid turnaround times that keep your projects on schedule
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      3000+ pre-validated antibodies ready for immediate use
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      24/7 access to experienced scientists for technical support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>
                      GLP-compliant protocols suitable for regulatory submissions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Leading Pharma Companies Choose Us
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive IHC and IF services are designed to accelerate
                your drug discovery and development processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Rapid Turnaround
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our streamlined processes and optimized workflows deliver
                  results faster than traditional CROs, keeping your research
                  timelines on track. Get your assays when you need them, not
                  when it's convenient for the lab.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3000+ Validated Antibodies
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access an extensive library of pre-validated antibodies
                  covering a wide range of targets. Each antibody has been
                  rigorously tested for specificity and sensitivity, eliminating
                  the guesswork and delays of validation processes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  24/7 Technical Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock access to experienced scientists who
                  understand your research needs. Get answers to technical
                  questions, protocol guidance, and troubleshooting support
                  whenever you need it—24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  GLP Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our services adhere to Good Laboratory Practice (GLP)
                  guidelines, providing fully documented and validated protocols
                  suitable for regulatory submissions. Rest assured your data
                  meets the highest quality standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comprehensive Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From assay development and optimization to multiplex staining
                  and digital pathology, we offer end-to-end IHC and IF services
                  tailored to your tissue types, biomarker targets, and project
                  requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Flexible Sample Handling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We accommodate various specimen types and preservation
                  techniques, including frozen and formalin-fixed
                  paraffin-embedded (FFPE) tissues. Our automated and manual
                  staining capabilities ensure optimal results regardless of
                  sample format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IHC & IF Service Offerings
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive immunohistochemistry and immunofluorescence
                services designed for pharmaceutical research and development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Immunohistochemistry (IHC)
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Chromogenic singleplex and duplex detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Multiplex chromogenic staining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Automated staining platforms (Ventana, Leica)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Assay development and optimization</span>
                  </li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Immunofluorescence (IF)
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Singleplex and duplex immunofluorescence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Multiplex fluorescent staining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>High-resolution imaging and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                    <span>Digital pathology and whole slide scanning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, Streamlined Process
              </h2>
              <p className="text-lg text-gray-600">
                From initial consultation to final results, we make it easy to
                get the IHC and IF data you need.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Project Consultation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discuss your research goals, target biomarkers, and
                      timeline requirements with our team. We'll identify the
                      best antibodies and protocols from our validated library.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Sample Submission & Protocol Confirmation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Submit your samples using our streamlined process. We'll
                      confirm the selected antibodies and staining protocols,
                      ensuring alignment with your research objectives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Rapid Assay Execution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our experienced team performs the IHC or IF assays using
                      pre-validated antibodies and optimized protocols. Quality
                      control measures ensure reliable, reproducible results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Results Delivery & Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Receive your results within the agreed timeframe,
                      including images, analysis data, and comprehensive
                      documentation. Our 24/7 support team is available to
                      address any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Accelerate Your Research?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Partner with us for rapid, reliable IHC and IF services backed
                by 3000+ validated antibodies and 24/7 expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="mailto:ihc-services@example.com"
                  className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Request a Quote
                </a>
                <a
                  href="tel:+1-800-000-0000"
                  className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Call Us: (800) 000-0000
                </a>
              </div>
              <p className="text-blue-100 text-sm">
                Get started today • Fast turnaround • No long-term commitments
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IHC Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IF Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Assay Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Antibody Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: ihc-services@example.com</li>
                <li>Phone: (800) 000-0000</li>
                <li>24/7 Technical Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 IHC Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

