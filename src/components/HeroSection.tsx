"use client";

import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 premium-gradient animate-gradient" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <ParticleCanvas />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl animate-float-fast" />

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="section-badge">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Now in Public Beta — Try it Free
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance"
            >
              Build Smarter.
              <br />
              <span className="gradient-text">Scale Faster.</span>
              <br />
              Ship{" "}
              <span className="relative inline-block">
                Confidently
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C40 3 80 2 100 4C120 6 160 8 198 3"
                    stroke="url(#underline-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-gradient"
                      x1="0"
                      y1="0"
                      x2="200"
                      y2="0"
                    >
                      <stop stopColor="#6366F1" />
                      <stop offset="1" stopColor="#14B8A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              NovaCloud empowers modern teams with enterprise-grade cloud
              infrastructure, intelligent automation, and seamless DevOps
              solutions — all in one powerful platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary text-base px-8 py-4 gap-2">
                Start Free Trial
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#features"
                className="btn-secondary text-base px-8 py-4 gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md bg-gradient-to-br from-primary-300 to-accent-300 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-neutral-500">
                  <span className="font-semibold text-neutral-700">2,500+</span>{" "}
                  teams trust NovaCloud
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-1 shadow-premium-xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-neutral-400 border border-neutral-200 max-w-xs">
                        app.novacloud.io/dashboard
                      </div>
                    </div>
                  </div>
                  {/* Dashboard content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-neutral-800">
                        Dashboard Overview
                      </h3>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-medium">
                          Live
                        </div>
                      </div>
                    </div>
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Active Users", value: "14.2K", change: "+12%", color: "primary" },
                        { label: "Uptime", value: "99.99%", change: "Excellent", color: "accent" },
                        { label: "API Calls", value: "2.8M", change: "+28%", color: "primary" },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + i * 0.15 }}
                          className="bg-neutral-50 rounded-xl p-3"
                        >
                          <p className="text-xs text-neutral-400 mb-1">
                            {stat.label}
                          </p>
                          <p className="text-lg font-bold text-neutral-800">
                            {stat.value}
                          </p>
                          <p
                            className={`text-xs font-medium ${
                              stat.color === "primary"
                                ? "text-primary-500"
                                : "text-accent-500"
                            }`}
                          >
                            {stat.change}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                    {/* Chart placeholder */}
                    <div className="bg-neutral-50 rounded-xl p-4 h-36">
                      <div className="flex items-end gap-1.5 h-full">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                          (h, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                              className={`flex-1 rounded-t-md ${
                                i === 9
                                  ? "bg-gradient-to-t from-primary-500 to-primary-400"
                                  : "bg-gradient-to-t from-primary-200 to-primary-100"
                              }`}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-16 top-20 glass-card rounded-xl p-4 shadow-premium-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-800">
                      Deploy Successful
                    </p>
                    <p className="text-xs text-neutral-400">2 min ago</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-24 glass-card rounded-xl p-4 shadow-premium-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-800">
                      Performance
                    </p>
                    <p className="text-xs text-accent-500 font-medium">
                      98.5% Faster
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-neutral-200/50"
        >
          <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40">
            {["Google", "Microsoft", "Stripe", "Vercel", "Shopify", "Slack"].map(
              (name) => (
                <span
                  key={name}
                  className="text-xl font-bold text-neutral-400 hover:text-neutral-600 transition-colors cursor-default"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}