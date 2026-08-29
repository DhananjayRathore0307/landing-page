"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "What types of software solutions do you develop?",
    answer:
      "We develop a wide range of digital solutions including web applications, mobile applications, custom software, business automation systems, dashboards, portals, and API-based solutions. We tailor every project to your specific business requirements and goals.",
  },
  {
    question: "Can you build a custom application for my business?",
    answer:
      "Absolutely. We specialize in custom software development and can turn your idea, workflow, or business requirement into a complete digital solution. We work closely with you to understand your needs and build a solution that fits your business.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern and reliable technologies based on the requirements of each project. Our development stack can include technologies such as Next.js, React, TypeScript, Node.js, mobile development frameworks, databases, APIs, and other tools needed to build a scalable and maintainable solution.",
  },
  {
    question: "How long does it take to develop an application?",
    answer:
      "The timeline depends on the size, complexity, features, and requirements of the project. A simple application may take a few weeks, while a larger custom platform can take several months. After understanding your requirements, we provide a clear development roadmap and estimated timeline.",
  },
  {
    question: "How much does software development cost?",
    answer:
      "Project cost depends on the scope, number of features, design requirements, integrations, technology, and development time. We provide a customized quotation after understanding your requirements so you know exactly what is included in the project.",
  },
  {
    question: "Do you provide support after the project is launched?",
    answer:
      "Yes. We provide ongoing maintenance and technical support after launch. This can include bug fixes, performance improvements, security updates, new features, application updates, and other technical assistance as your business grows.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className={`border rounded-2xl transition-all duration-300 ${
        isOpen
          ? "border-primary-200 bg-primary-50/30 shadow-premium"
          : "border-neutral-100 bg-white hover:border-neutral-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span
          className={`text-base font-semibold pr-4 transition-colors ${
            isOpen ? "text-primary-700" : "text-neutral-800"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary-500 text-white rotate-180"
              : "bg-neutral-100 text-neutral-500"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-neutral-500 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
      }}
    >
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-50/40 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <span className="section-badge mb-4 inline-flex">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                FAQ
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-neutral-500"
            >
              Everything you need to know about NovaCloud. Can&apos;t find the
              answer? Reach out to our team.
            </motion.p>
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-neutral-500 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <a href="#contact" className="btn-primary">
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
