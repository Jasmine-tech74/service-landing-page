import React from "react";
import ajMockup from "../assets/aj-mockup.png";
import zenthMockup from "../assets/zenth-mockup.png";
import { ExternalLink } from "lucide-react";

export default function SampleWork() {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-blue-600 font-medium uppercase tracking-widest text-sm">
            Concept Demos & Portfolio Samples
          </p>
        </div>

        <div className="space-y-16">
          {/* Project 1: AJ Personal Training */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
            {/* Demo Ribbon */}
            <div className="absolute top-4 right-[-45px] bg-amber-500 text-white text-[10px] font-bold px-10 py-1 rotate-45 shadow-sm z-10">
              DEMO CONCEPT
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  AJ Personal Training
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Professional landing page for a Lagos-based fitness coach.
                  Clean design with integrated contact form and
                  mobile-responsive layout.
                </p>

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

              {/* Mockup Frame 1 */}
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-white border-x-4 border-b-4 border-gray-800 rounded-b-lg overflow-hidden shadow-2xl">
                    <img
                      src={ajMockup}
                      alt="AJ Personal Training Landing Page"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Zenth Electronics */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
            {/* Demo Ribbon */}
            <div className="absolute top-4 right-[-45px] bg-amber-500 text-white text-[10px] font-bold px-10 py-1 rotate-45 shadow-sm z-10">
              DEMO CONCEPT
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Zenth Electronics
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  A modern, high-conversion e-commerce landing page designed for
                  a gadget retailer. Focuses on luxury product presentation and
                  seamless navigation.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    E-commerce focused layout
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    Premium dark-mode aesthetic
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-3">✓</span>
                    High-resolution product gallery
                  </li>
                </ul>

                <a
                  href="https://zenth-electronics.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Mockup Frame 2 */}
              <div className="order-1">
                <div className="relative">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                  </div>
                  <div className="bg-white border-x-4 border-b-4 border-gray-800 rounded-b-lg overflow-hidden shadow-2xl">
                    <img
                      src={zenthMockup}
                      alt="Zenth Electronics Landing Page"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Status Notification */}
        <div className="text-center mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
          <p className="text-blue-900 font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Portfolio Status
          </p>
          <div className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The projects currently featured are{" "}
            <strong>technical demonstration models</strong> built to showcase my
            design and technical skills. As I complete and launch live sites for
            clients, they will be added to this gallery and clearly labeled as{" "}
            <strong>'Official Client Project'</strong> to distinguish them from
            these initial concept demos.
          </div>
        </div>
      </div>
    </div>
  );
}
