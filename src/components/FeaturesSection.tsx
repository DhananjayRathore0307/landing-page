"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  BoltIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: GlobeAltIcon,
    title: "Web Application Development",
    description:
      "We build modern, responsive, and scalable web applications tailored to your business goals, workflows, and customers.",
    gradient: "from-primary-500 to-primary-600",
    bgGradient: "from-primary-50 to-primary-100/50",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Application Development",
    description:
      "Create engaging mobile experiences for iOS and Android with fast, intuitive, and reliable applications built around your users.",
    gradient: "from-accent-500 to-accent-600",
    bgGradient: "from-accent-50 to-accent-100/50",
  },
  {
    icon: CodeBracketIcon,
    title: "Custom Software Development",
    description:
      "Turn your unique business requirements into powerful custom software designed to solve complex problems and improve efficiency.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100/50",
  },
  {
    icon: BoltIcon,
    title: "Business Automation",
    description:
      "Automate repetitive tasks and business workflows to reduce manual effort, minimize errors, and help your team work more efficiently.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50/50",
  },
  {
    icon: PaintBrushIcon,
    title: "UI/UX Design",
    description:
      "Design intuitive and visually engaging digital experiences that make your products easier to use and more enjoyable for your customers.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50/50",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Maintenance & Support",
    description:
      "Keep your applications secure, reliable, and up to date with ongoing maintenance, improvements, monitoring, and technical support.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50/50",
  },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="features"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-50/50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-4 inline-flex">
              <SparklesIcon className="w-4 h-4" />
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            Digital Solutions Built{" "}
            <span className="gradient-text">Around Your Business</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-lg text-neutral-500 leading-relaxed"
          >
            From idea to launch and beyond, we design, develop, and automate
            digital solutions that help businesses improve, innovate, and grow.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 * i + 0.3,
                  duration: 0.5,
                }}
                className="group relative"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl -z-10`}
                />

                {/* Card */}
                <div className="relative bg-white border border-neutral-100 rounded-2xl p-7 hover:border-primary-200 hover:shadow-card-hover transition-all duration-500 h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 text-neutral-700 group-hover:text-primary-600 transition-colors duration-300`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn more */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn more

                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

