import React, { useState } from "react";

export default function CTA() {
  const [copied, setCopied] = useState(false);
  const email = "jasminetolu74@gmail.com";

  const handleEmailClick = (e) => {
    // This copies the email to the user's clipboard automatically
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Reset the "Copied" message after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Launch Your Landing Page?
        </h2>

        <p className="text-slate-300 text-lg md:text-xl mb-10">
          Send me a message on WhatsApp and let's get started.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2347078619193?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20landing%20page%20for%20my%20business"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-400 text-slate-900 text-lg md:text-xl font-extrabold px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1"
        >
          Contact Me on WhatsApp →
        </a>

        {/* Email Alternative with Copy Feature */}
        <div className="mt-12 relative">
          <p className="text-slate-400">
            Or email me at:{" "}
            <a
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              className="text-white hover:text-green-400 underline underline-offset-4 transition-colors cursor-pointer"
              title="Click to send email or copy address"
            >
              {email}
            </a>
          </p>

          {/* Success Message Pop-up */}
          {copied && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-green-400 text-sm font-bold animate-bounce">
              Email copied to clipboard!
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
