"use client";

import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

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
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            ></motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-balance"
            >
              We Build Digital
              <br />
              <span className="gradient-text">Solutions That</span>
              <br />
              <span className="relative inline-block">
                Drive Growth.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >

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
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We design and develop powerful web applications, mobile apps,
              custom software, and intelligent automation solutions that help
              businesses work smarter, serve customers better, and grow faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="btn-primary text-base px-8 py-4 gap-2"
              >
                Get Started Free
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
            </motion.div>

            {/* Trust / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 justify-center lg:justify-start"
            >
              <div>
                <p className="text-2xl font-bold text-neutral-800">50+</p>
                <p className="text-sm text-neutral-500">Projects Delivered</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-neutral-200" />

              <div>
                <p className="text-2xl font-bold text-neutral-800">20+</p>
                <p className="text-sm text-neutral-500">Happy Clients</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-neutral-200" />

              <div>
                <p className="text-2xl font-bold text-neutral-800">24/7</p>
                <p className="text-sm text-neutral-500">Support & Assistance</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-[2rem] blur-3xl" />

              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-2 shadow-premium-xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-5 py-4 bg-neutral-50 border-b border-neutral-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>

                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-2 text-xs text-neutral-400 border border-neutral-200">
                        yourbusiness.com
                      </div>
                    </div>
                  </div>

                  {/* Application Preview */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-neutral-400 mb-1">
                          Digital Solution
                        </p>

                        <h3 className="text-lg font-bold text-neutral-800">
                          Business Overview
                        </h3>
                      </div>

                      <div className="px-3 py-1.5 bg-accent-50 text-accent-600 rounded-lg text-xs font-semibold">
                        Live
                      </div>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          title: "Web Applications",
                          subtitle: "Modern & Scalable",
                          icon: GlobeAltIcon,
                        },
                        {
                          title: "Mobile Applications",
                          subtitle: "iOS & Android",
                          icon: DevicePhoneMobileIcon,
                        },
                        {
                          title: "Business Automation",
                          subtitle: "Work Smarter",
                          icon: BoltIcon,
                        },
                        {
                          title: "Custom Software",
                          subtitle: "Built For You",
                          icon: CodeBracketIcon,
                        },
                      ].map((service, i) => {
                        const Icon = service.icon;

                        return (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 1 + i * 0.12,
                              duration: 0.5,
                            }}
                            className="group bg-neutral-50 hover:bg-primary-50 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                <Icon className="w-5 h-5" />
                              </div>

                              <ArrowRightIcon className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300" />
                            </div>

                            <p className="text-sm font-semibold text-neutral-800">
                              {service.title}
                            </p>

                            <p className="text-xs text-neutral-400 mt-1">
                              {service.subtitle}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Progress / Project Area */}
                    <div className="mt-4 bg-neutral-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-xs text-neutral-400">
                            Current Project
                          </p>

                          <p className="text-sm font-semibold text-neutral-800">
                            Product Development
                          </p>
                        </div>

                        <span className="text-xs font-semibold text-primary-500">
                          85%
                        </span>
                      </div>

                      <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{
                            delay: 1.5,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Automation */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-14 top-24 glass-card rounded-xl p-4 shadow-premium-lg"
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
                      Automation
                    </p>

                    <p className="text-xs text-primary-500 font-medium">
                      Work Smarter
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Project */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 bottom-20 glass-card rounded-xl p-4 shadow-premium-lg"
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
                      Project Delivered
                    </p>

                    <p className="text-xs text-green-500 font-medium">
                      Successfully
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-neutral-200/50"
        >
          <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-8">
            What We Build
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              "Web Applications",
              "Mobile Applications",
              "Custom Software",
              "Automation",
              "UI/UX Design",
              "Digital Solutions",
            ].map((service) => (
              <span
                key={service}
                className="text-sm sm:text-base font-semibold text-neutral-400 hover:text-primary-500 transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
