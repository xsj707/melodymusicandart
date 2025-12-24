"use client";

import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  // Placeholder image - will be replaced with actual image later
  const heroImage = "/images/placeholder-hero.jpg";

  return (
    <div className="relative min-h-screen">
      <SiteHeader showNav={true} />

      {/* Full page hero image */}
      <div className="fixed inset-0 z-0">
        {/* Full-screen hero image */}
        <Image
          src={heroImage}
          alt="Melody Wang Piano - Children's Piano Lessons"
          fill
          priority
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
        {/* Subtle overlay to keep text legible */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Melody Wang Piano
          </h1>
          <p className="text-xl md:text-2xl font-light text-white mb-8 max-w-2xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            Expert piano instruction for children in the Tri-Valley area
          </p>
          <p className="text-lg md:text-xl font-light text-white mb-4 max-w-2xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            DMA in Collaborative Piano • Experienced Piano Instructor
          </p>
          <p className="text-lg md:text-xl font-light text-white mb-12 max-w-2xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            Serving Pleasanton, Dublin, San Ramon, and surrounding areas
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/free-trial"
              className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Free Trial Class
            </Link>
            <Link
              href="/lessons"
              className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
