"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

export default function FreeTrialPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend/email service
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader showNav={true} />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-8 max-w-2xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-light mb-8">Thank You!</h1>
              <p className="text-lg font-light leading-relaxed mb-4">
                We've received your free trial request. Melody will contact you within 24-48 hours to schedule your child's first lesson.
              </p>
              <p className="text-lg font-light leading-relaxed">
                In the meantime, feel free to explore our{" "}
                <a href="/resources" className="text-black underline hover:opacity-70">
                  resources
                </a>{" "}
                for parents.
              </p>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Free Trial Class</h1>
          <p className="text-lg font-light leading-relaxed mb-8 text-black/70">
            Experience Melody's teaching style with a complimentary trial lesson. 
            Perfect for children ages 4-12 in the Tri-Valley area.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="parentName" className="block text-sm font-medium mb-2">
                Parent/Guardian Name *
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                required
                value={formData.parentName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="childName" className="block text-sm font-medium mb-2">
                Child's Name *
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                required
                value={formData.childName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="childAge" className="block text-sm font-medium mb-2">
                Child's Age *
              </label>
              <input
                type="number"
                id="childAge"
                name="childAge"
                required
                min="4"
                max="18"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
                placeholder="(XXX) XXX-XXXX"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location (City) *
              </label>
              <select
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              >
                <option value="">Select a city</option>
                <option value="Pleasanton">Pleasanton</option>
                <option value="Dublin">Dublin</option>
                <option value="San Ramon">San Ramon</option>
                <option value="Livermore">Livermore</option>
                <option value="Other">Other (within 30 min drive)</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Piano Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
              >
                <option value="">Select experience level</option>
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Some Experience">Some Experience (1-6 months)</option>
                <option value="Intermediate">Intermediate (6+ months)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-black/20 focus:border-black focus:outline-none"
                placeholder="Any questions or special requests?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white px-8 py-4 text-lg font-medium hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request Free Trial"}
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

