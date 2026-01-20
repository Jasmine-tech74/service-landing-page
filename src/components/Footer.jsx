import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-12 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Info */}
        <p className="text-gray-600 font-medium text-base mb-1">
          Built by{" "}
          <span className="text-gray-900">Tolu Jasmine Tim-Kolawole</span> |
          Frontend Developer
        </p>

        {/* Location */}
        <p className="text-gray-500 text-sm mb-6">Based in Nigeria 🇳🇬</p>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          <a
            href="https://www.linkedin.com/in/tolu-tim-kolawole-b176a336b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden md:inline text-gray-300">|</span>
          <a
            href="https://jasmine-portfolio-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Portfolio
          </a>
          <span className="hidden md:inline text-gray-300">|</span>
          <a
            href="mailto:jasminetolu74@gmail.com"
            className="hover:text-blue-600 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-gray-400 text-xs">
          © {currentYear} Tolu Jasmine Tim-Kolawole. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
