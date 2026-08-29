"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "What is NovaCloud and how does it work?",
    answer:
      "NovaCloud is an all-in-one SaaS platform that provides cloud infrastructure, DevOps automation, and intelligent monitoring tools. Simply sign up, connect your codebase, and deploy in minutes. Our platform handles scaling, security, and performance optimization automatically.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer flexible pricing tiers starting with a generous free plan. Our paid plans scale based on usage — you only pay for what you use. Enterprise plans include custom pricing with dedicated support, SLA guarantees, and priority features.",
  },
  {
    question: "Is my data secure on NovaCloud?",
    answer:
      "Absolutely. Security is our top priority. We use AES-256 encryption at rest, TLS 1.3 for data in transit, and maintain SOC 2 Type II compliance. Our zero-trust architecture ensures that your data is protected at every layer of our infrastructure.",
  },
  {
    question: "Can I integrate NovaCloud with my existing tools?",
    answer:
      "Yes! NovaCloud integrates seamlessly with popular tools including GitHub, GitLab, Bitbucket, Slack, Jira, PagerDuty, and 100+ more through our REST API and native integrations. We also provide SDKs for major programming languages.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include access to our community forums and documentation. Pro plans include email support with 4-hour response times. Enterprise plans come with 24/7 dedicated support, a named customer success manager, and guaranteed SLAs.",
  },
  {
    question: "How do I migrate from my current infrastructure?",
    answer:
      "We provide comprehensive migration tools and dedicated migration support. Our team will work with you to create a custom migration plan, including automated migration scripts, parallel running, and zero-downtime cutover strategies.",
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
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