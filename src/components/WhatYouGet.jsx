import React from "react";
import {
  Smartphone,
  Zap,
  FileText,
  Palette,
  Server,
  Edit3,
} from "lucide-react";

export default function WhatYouGet() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Works perfectly on phones, tablets, and desktop",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Loading",
      description: "Optimized for speed - loads in under 2 seconds",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contact Form",
      description: "Integrated form so customers can reach you easily",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Clean Design",
      description: "Modern, professional look that builds trust",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Free Hosting",
      description: "Deployed and live on Netlify/Vercel at no extra cost",
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "One Revision Round",
      description: "Make changes until you're happy with it",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          What's Included
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
