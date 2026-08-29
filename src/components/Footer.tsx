"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Services: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software",
  ],
  Company: [
    "About Us",
    "Our Approach",
    "Contact Us",
    "Work With Us",
  ],
  Solutions: [
    "Business Solutions",
    "Digital Transformation",
    "Product Development",
    "Technology Consulting",
  ],
 
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl rotate-6" />

                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">
                    N
                  </span>
                </div>
              </div>

              <span className="text-lg font-bold text-white">
                Nova<span className="text-primary-400">Cloud</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              We help businesses turn ideas into powerful digital
              experiences through thoughtful design, reliable
              engineering, and scalable technology solutions.
            </p>

          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {title}
                </h4>

                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} NovaCloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}