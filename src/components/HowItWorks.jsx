import React from "react";

const steps = [
  {
    step: 1,
    title: "Share Your Details",
    description:
      "Tell me about your business, colors, content, and any preferences.",
  },
  {
    step: 2,
    title: "I Build Your Page",
    description:
      "I'll create your landing page and send you a preview within 48 hours.",
  },
  {
    step: 3,
    title: "Launch & Go Live",
    description:
      "After your approval and one round of revisions, your site goes live.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          How It Works
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-blue-200 -z-0"></div>

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              {/* Step Number Circle */}
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold border-8 border-white shadow-sm mb-6">
                {item.step}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {item.description}
              </p>

              {/* Connecting Line (Mobile Only - vertical line between steps) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden w-0.5 h-12 bg-blue-200 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
