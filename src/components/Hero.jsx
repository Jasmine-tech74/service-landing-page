import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Get Your Professional Landing Page
          <br />
          in 48 Hours
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Clean. Responsive. Ready to Launch.
          <br />
          <span className="text-yellow-400 font-semibold">
            ₦15,000 fixed price.
          </span>
        </p>

        {/* CTA Button */}
        <a
          href="https://wa.me/2347078619193?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20landing%20page%20for%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Get Started on WhatsApp →
        </a>

        {/* Small Text */}
        <p className="text-blue-200 text-sm mt-6">
          3 slots available this week
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-blue-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
