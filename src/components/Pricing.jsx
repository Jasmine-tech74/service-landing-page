import React from "react";

export default function Pricing() {
  const benefits = [
    "Professional landing page",
    "Mobile responsive design",
    "Contact form included",
    "Fast loading & SEO ready",
    "Free hosting setup",
    "48-hour delivery",
    "One revision round",
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Simple, Fixed Pricing
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          No hidden fees. No monthly subscriptions. Just high-quality results.
        </p>

        {/* Pricing Box */}
        <div className="max-w-lg mx-auto bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
              The Full Package
            </span>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-black text-gray-900">
                ₦30,000
              </span>
            </div>
            <p className="text-gray-500 mt-2 font-medium">One-time payment</p>
          </div>

          {/* Features List */}
          <ul className="text-left space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                {/* Green Checkmark Icon */}
                <svg
                  className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/2347078619193?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20landing%20page%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-85 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg mb-6"
          >
            Get Started →
          </a>

          {/* Payment Info */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">
              Payment via bank transfer or Opay/Palmpay
            </p>
            <p className="text-gray-900 text-sm font-bold">
              50% upfront, 50% on delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
