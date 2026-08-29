"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Error toast state
  const [errorToast, setErrorToast] = useState({
    show: false,
    message: "",
  });

  // Automatically hide error toast after 5 seconds
  useEffect(() => {
    if (!errorToast.show) return;

    const timer = setTimeout(() => {
      setErrorToast({
        show: false,
        message: "",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorToast.show]);

  const showErrorToast = (message: string) => {
    setErrorToast({
      show: true,
      message,
    });
  };

  const hideErrorToast = () => {
    setErrorToast({
      show: false,
      message: "",
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    hideErrorToast();

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        subject: formData.subject,
        message: formData.message,

        to_name: "Dhananjay",
        to_email: "dhananjayrathore0307@gmail.com",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      // Success
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });

      setErrors({});

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setIsSubmitting(false);

      showErrorToast(
        "We couldn't send your message. Please try again in a moment."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAFBFC 0%, #EEF2FF 100%)",
      }}
    >
      {/* Error Toast */}
      <AnimatePresence>
        {errorToast.show && (
          <motion.div
            initial={{ opacity: 0, x: 80, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 80, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="fixed top-6 right-6 z-[9999] w-[calc(100%-3rem)] max-w-md"
          >
            <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-2xl">
              <div className="flex items-start gap-4 p-4">
                {/* Error Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3.75m0 3.75h.007M10.29 3.86l-7.82 13.5A2 2 0 004.2 20.36h15.6a2 2 0 001.73-3l-7.82-13.5a2 2 0 00-3.46 0z"
                    />
                  </svg>
                </div>

                {/* Toast Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-neutral-900">
                    Message Not Sent
                  </h4>

                  <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                    {errorToast.message}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={hideErrorToast}
                  className="flex-shrink-0 p-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
                  aria-label="Close notification"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-red-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div
        className="container-custom relative z-10"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">
              Amazing Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-neutral-500"
          >
            Have an idea, a business challenge, or an existing
            application that needs improvement? Tell us what you&apos;re
            looking to build and our team will get back to you to
            discuss your requirements.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-card p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Message Sent!
                  </h3>

                  <p className="text-neutral-500">
                    Thank you for reaching out. We&apos;ll get back to
                    you shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Full Name{" "}
                        <span className="text-red-400">*</span>
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`input-field ${
                          errors.name
                            ? "border-red-300 focus:ring-red-500/20 focus:border-red-400"
                            : ""
                        }`}
                      />

                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address{" "}
                        <span className="text-red-400">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className={`input-field ${
                          errors.email
                            ? "border-red-300 focus:ring-red-500/20 focus:border-red-400"
                            : ""
                        }`}
                      />

                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Company + Subject */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Company
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Subject{" "}
                        <span className="text-red-400">*</span>
                      </label>

                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`input-field ${
                          errors.subject
                            ? "border-red-300 focus:ring-red-500/20 focus:border-red-400"
                            : ""
                        } ${
                          !formData.subject
                            ? "text-neutral-400"
                            : ""
                        }`}
                      >
                        <option value="">
                          What can we help you with?
                        </option>

                        <option value="web-development">
                          Web Application Development
                        </option>

                        <option value="mobile-development">
                          Mobile Application Development
                        </option>

                        <option value="custom-software">
                          Custom Software Development
                        </option>

                        <option value="automation">
                          Business Automation
                        </option>

                        <option value="api-development">
                          API & Backend Development
                        </option>

                        <option value="ui-ux">
                          UI/UX & Frontend Development
                        </option>

                        <option value="maintenance">
                          Maintenance & Support
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>

                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1.5"
                        >
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message{" "}
                      <span className="text-red-400">*</span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or ask us a question..."
                      rows={5}
                      className={`input-field resize-none ${
                        errors.message
                          ? "border-red-300 focus:ring-red-500/20 focus:border-red-400"
                          : ""
                      }`}
                    />

                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1.5"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.01,
                    }}
                    whileTap={{
                      scale: isSubmitting ? 1 : 0.99,
                    }}
                    className="w-full btn-primary py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>

                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message

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
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}