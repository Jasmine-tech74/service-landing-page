import React from "react";
import { Store, User, Calendar, Package } from "lucide-react";

const features = [
  {
    icon: <Store className="w-8 h-8" />,
    title: "Small Businesses",
    description:
      "Launch your online presence without the complexity or cost of a full website.",
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "Coaches & Consultants",
    description:
      "Showcase your services and let clients book directly from your landing page.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Event Promotion",
    description:
      "Create a dedicated page for your conference, workshop, or launch event.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Product Launches",
    description:
      "Build hype and collect early interest for your new product or service.",
  },
];

export default function PerfectFor() {
  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Perfect For
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-blue-600 justify-items-center mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold justify-self-center text-gray-900 mb-3">
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
