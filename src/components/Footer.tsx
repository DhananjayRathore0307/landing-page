"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"],
  Company: ["About Us", "Careers", "Blog", "Press Kit", "Partners"],
  Resources: ["Community", "Help Center", "Status Page", "API Reference", "Tutorials"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white">
                Nova<span className="text-primary-400">Cloud</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              Empowering modern teams with enterprise-grade cloud solutions.
              Build, deploy, and scale with confidence.
            </p>
            <div className="flex gap-3">
              {["T", "L", "G", "D"].map((letter) => (
                <motion.a
                  key={letter}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-sm font-bold text-neutral-400 hover:text-white transition-all duration-300"
                >
                  {letter}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
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
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-neutral-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                Subscribe to our newsletter
              </h4>
              <p className="text-xs text-neutral-400">
                Get the latest updates, tips, and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              />
              <button className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} NovaCloud. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}