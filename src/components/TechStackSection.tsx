"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useCallback } from "react";

const approachCategories = [
  {
    title: "Discover",
    items: [
      "Understand your business goals",
      "Identify challenges and opportunities",
      "Define clear project requirements",
      "Create a practical roadmap",
      "Align solutions with your objectives",
    ],
  },
  {
    title: "Design",
    items: [
      "Create intuitive user experiences",
      "Build scalable solution architecture",
      "Plan seamless workflows",
      "Focus on performance and usability",
      "Validate ideas before development",
    ],
  },
  {
    title: "Build & Deliver",
    items: [
      "Develop with quality and precision",
      "Iterate through continuous feedback",
      "Test across critical scenarios",
      "Launch with confidence",
      "Ensure a smooth delivery process",
    ],
  },
  {
    title: "Grow",
    items: [
      "Monitor performance and results",
      "Continuously improve the product",
      "Scale as your business grows",
      "Provide ongoing technical support",
      "Turn feedback into new opportunities",
    ],
  },
];

function TechOrbitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const cx = w / 2;
    const cy = h / 2;
    const time = Date.now() * 0.001;

    ctx.clearRect(0, 0, w * 2, h * 2);

    ctx.save();
    ctx.scale(dpr, dpr);

    // Draw orbits
    const orbits = [80, 130, 180, 230];

    orbits.forEach((r, i) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 - i * 0.015})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw center glow
    const gradient = ctx.createRadialGradient(
      cx,
      cy,
      0,
      cx,
      cy,
      40
    );

    gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
    gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

    ctx.beginPath();
    ctx.arc(cx, cy, 40, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw center
    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
    ctx.fill();

    // Draw orbiting dots
    const colors = [
      "#6366F1",
      "#14B8A6",
      "#818CF8",
      "#5EEAD4",
      "#A5B4FC",
      "#2DD4BF",
    ];

    const dotCount = 12;

    for (let i = 0; i < dotCount; i++) {
      const orbitIndex = i % orbits.length;
      const r = orbits[orbitIndex];

      const speed =
        (0.3 + orbitIndex * 0.1) *
        (i % 2 === 0 ? 1 : -1);

      const angle =
        time * speed +
        (i * Math.PI * 2) / (dotCount / orbits.length);

      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      const dotR = 3 + (i % 3);

      // Glow
      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        dotR * 4
      );

      glow.addColorStop(
        0,
        colors[i % colors.length] + "40"
      );
      glow.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(x, y, dotR * 4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(x, y, dotR, 0, Math.PI * 2);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
    }

    ctx.restore();

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      const size = Math.min(
        500,
        window.innerWidth - 40
      );

      canvas.width = size * dpr;
      canvas.height = size * dpr;

      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    resize();

    window.addEventListener("resize", resize);

    draw();

    return () => {
      window.removeEventListener("resize", resize);

      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="mx-auto" />;
}

export default function TechStackSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="approach"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAFBFC 0%, #EEF2FF 50%, #FAFBFC 100%)",
      }}
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div
        className="container-custom relative z-10"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : {}
            }
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>

              Our Approach
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.1,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            From Ideas to{" "}
            <span className="gradient-text">
              Real Results
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              delay: 0.2,
            }}
            className="mt-5 text-lg text-neutral-500 leading-relaxed"
          >
            We combine strategy, creativity, and engineering
            to turn complex business challenges into scalable
            digital solutions that create lasting value.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Canvas orbit visualization */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="hidden lg:block"
          >
            <TechOrbitCanvas />
          </motion.div>

          {/* Approach cards */}
          <div className="space-y-6">
            {approachCategories.map(
              (category, ci) => (
                <motion.div
                  key={category.title}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay:
                      0.2 * ci + 0.3,
                    duration: 0.5,
                  }}
                  className="bg-white/80 backdrop-blur-sm border border-neutral-100 rounded-2xl p-6 hover:shadow-card-hover hover:border-primary-100 transition-all duration-300"
                >
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map(
                      (item, ti) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          animate={
                            inView
                              ? {
                                  opacity: 1,
                                  scale: 1,
                                }
                              : {}
                          }
                          transition={{
                            delay:
                              0.2 * ci +
                              0.05 * ti +
                              0.4,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-50 hover:bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0" />

                          <span className="text-sm font-medium text-neutral-700">
                            {item}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}