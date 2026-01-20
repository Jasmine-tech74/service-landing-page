import React from "react";
import mockup from "../assets/mockup.png";
import { ExternalLink } from "lucide-react";

export default function SampleWork() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Recent Work
        </h2>

        {/* Work Showcase */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Description */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                AJ Personal Training
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Professional landing page for a Lagos-based fitness coach. Clean
                design with integrated contact form and mobile-responsive
                layout.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Mobile responsive design
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Contact form integration
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Fast loading speed
                </li>
              </ul>

              <a
                href="https://alex-trains-strong.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Mockup/Screenshot */}
            <div className="order-1 md:order-2">
              <div className="relative">
                {/* Browser Frame */}
                <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="bg-white border-4 border-gray-800 rounded-b-lg overflow-hidden shadow-2xl">
                  <img
                    src={mockup}
                    alt="AJ Personal Training Landing Page"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          More samples coming soon as I complete client projects
        </p>
      </div>
    </div>
  );
}
