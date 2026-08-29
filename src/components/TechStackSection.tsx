"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useCallback } from "react";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Vue.js", color: "#4FC08D" },
      { name: "Tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "Go", color: "#00ADD8" },
      { name: "Rust", color: "#CE422B" },
      { name: "GraphQL", color: "#E10098" },
    ],
  },
  {
    title: "Cloud & DevOps",
    techs: [
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#7B42BC" },
      { name: "GitHub", color: "#181717" },
    ],
  },
  {
    title: "Data & AI",
    techs: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "Elasticsearch", color: "#005571" },
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

    const w = canvas.width / (window.devicePixelRatio || 1);
    const h = canvas.height / (window.devicePixelRatio || 1);
    const cx = w / 2;
    const cy = h / 2;
    const time = Date.now() * 0.001;

    ctx.clearRect(0, 0, w * 2, h * 2);
    ctx.save();
    const dpr = window.devicePixelRatio || 1;
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

    // Draw center
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
    gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
    gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
    ctx.beginPath();
    ctx.arc(cx, cy, 40, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 20, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(99, 102, 241, 0.15)";
    ctx.fill();

    // Draw orbiting dots
    const colors = ["#6366F1", "#14B8A6", "#818CF8", "#5EEAD4", "#A5B4FC", "#2DD4BF"];
    const dotCount = 12;
    for (let i = 0; i < dotCount; i++) {
      const orbitIndex = i % orbits.length;
      const r = orbits[orbitIndex];
      const speed = (0.3 + orbitIndex * 0.1) * (i % 2 === 0 ? 1 : -1);
      const angle = time * speed + (i * Math.PI * 2) / (dotCount / orbits.length);
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      const dotR = 3 + (i % 3);

      // Glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, dotR * 4);
      glow.addColorStop(0, colors[i % colors.length] + "40");
      glow.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(x, y, dotR * 4, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

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
      const size = Math.min(500, window.innerWidth - 40);
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="technology"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAFBFC 0%, #EEF2FF 50%, #FAFBFC 100%)",
      }}
    >
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge mb-4 inline-flex">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technology Stack
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
          >
            Powered by{" "}
            <span className="gradient-text">Cutting-Edge Tech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg text-neutral-500 leading-relaxed"
          >
            We leverage the best technologies to deliver high-performance,
            scalable, and reliable solutions for your business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Canvas orbit visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:block"
          >
            <TechOrbitCanvas />
          </motion.div>

          {/* Tech cards */}
          <div className="space-y-6">
            {techCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * ci + 0.3, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm border border-neutral-100 rounded-2xl p-6 hover:shadow-card-hover hover:border-primary-100 transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 * ci + 0.05 * ti + 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-50 hover:bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span className="text-sm font-medium text-neutral-700">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}