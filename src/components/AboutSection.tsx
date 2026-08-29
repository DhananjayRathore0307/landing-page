"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 99.99, suffix: "%", label: "Uptime SLA", icon: "⚡" },
  { value: 2500, suffix: "+", label: "Active Teams", icon: "👥" },
  { value: 150, suffix: "M+", label: "API Calls/Day", icon: "🔄" },
  { value: 45, suffix: "+", label: "Countries", icon: "🌍" },
];

const benefits = [
  {
    title: "Lightning Fast Deployment",
    description: "Deploy in seconds with our automated CI/CD pipeline. Zero downtime deployments with instant rollback capabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and zero-trust architecture protect your data at every layer.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "24/7 Expert Support",
    description: "Our dedicated support team is available round-the-clock with average response times under 2 minutes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Infinite Scalability",
    description: "From startup to enterprise — our platform scales seamlessly to handle millions of requests without breaking a sweat.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  const [counterRef, counterInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!counterInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;

    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.floor(current * 100) / 100);
    }, duration / steps);

    return () => {
      window.clearInterval(timer);
    };
  }, [counterInView, value]);

  return (
    <span ref={counterRef}>
      {value >= 100
        ? Math.floor(count).toLocaleString()
        : count.toFixed(2)}
      {suffix}
    </span>
  );
}

function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = 200 * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = "200px";
    };

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      const time = Date.now() * 0.001;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      const waves = [
        {
          amp: 15,
          freq: 0.02,
          speed: 0.8,
          color: "rgba(99, 102, 241, 0.06)",
          offset: 0,
        },
        {
          amp: 12,
          freq: 0.025,
          speed: 1,
          color: "rgba(20, 184, 166, 0.05)",
          offset: 20,
        },
        {
          amp: 10,
          freq: 0.03,
          speed: 1.2,
          color: "rgba(99, 102, 241, 0.04)",
          offset: 40,
        },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x++) {
          const y =
            h / 2 +
            wave.offset +
            Math.sin(x * wave.freq + time * wave.speed) * wave.amp +
            Math.sin(
              x * wave.freq * 0.5 + time * wave.speed * 1.5
            ) *
              wave.amp *
              0.5;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      ctx.restore();

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);

      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
    />
  );
}

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <WaveCanvas />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge mb-4 inline-flex">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            Built for Teams That{" "}
            <span className="gradient-text">Demand Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-neutral-500 leading-relaxed"
          >
            We don&apos;t just provide tools — we provide a competitive advantage.
            Here&apos;s why thousands of companies choose NovaCloud.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 rounded-2xl p-6 text-center hover:shadow-card-hover hover:border-primary-100 transition-all duration-300">
                <span className="text-2xl mb-3 block">{stat.icon}</span>
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-neutral-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="group flex gap-5 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}