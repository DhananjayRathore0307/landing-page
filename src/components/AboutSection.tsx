"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import {
  RocketLaunchIcon,
  UserGroupIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  LifebuoyIcon,
  ArrowPathIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: RocketLaunchIcon,
  },
  {
    value: 20,
    suffix: "+",
    label: "Happy Clients",
    icon: UserGroupIcon,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    icon: CodeBracketIcon,
  },
  {
    value: 10,
    suffix: "+",
    label: "Countries Served",
    icon: GlobeAltIcon,
  },
];

const benefits = [
  {
    title: "Solutions Built Around Your Needs",
    description:
      "We understand your business requirements and build custom digital solutions that solve real problems instead of forcing you into a one-size-fits-all product.",
    icon: LightBulbIcon,
  },
  {
    title: "Modern & Scalable Technology",
    description:
      "We use modern technologies and development practices to create reliable applications that are ready to grow with your business.",
    icon: CodeBracketIcon,
  },
  {
    title: "Smart Business Automation",
    description:
      "Reduce repetitive work and improve efficiency by automating everyday workflows, processes, and tasks across your business.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Quality & Security",
    description:
      "From development to deployment, we follow quality-focused practices to build secure, stable, and dependable digital products.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Continuous Improvement",
    description:
      "We don't stop at launch. Our team can continuously improve, optimize, and enhance your applications as your business evolves.",
    icon: ArrowPathIcon,
  },
  {
    title: "Dedicated Support",
    description:
      "Get ongoing technical assistance from a team that understands your product and is ready to help with updates, improvements, and issues.",
    icon: LifebuoyIcon,
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
        : count.toFixed(2).replace(/\.00$/, "")}
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      <WaveCanvas />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge mb-4 inline-flex">
              <SparklesIcon className="w-4 h-4" />
              About Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            Your Technology Partner for{" "}
            <span className="gradient-text">Digital Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-neutral-500 leading-relaxed"
          >
            We are a software development company helping businesses turn
            ideas into powerful digital products. From web and mobile
            applications to custom software and business automation, we build
            technology that makes your business more efficient and ready for
            what&apos;s next.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 rounded-2xl p-6 text-center hover:shadow-card-hover hover:border-primary-100 transition-all duration-300">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="text-sm text-neutral-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.5 }}
                className="group flex gap-5 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-primary-100 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

