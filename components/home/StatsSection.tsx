"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "", label: "Completed Cases" },
  { value: 3, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Skilled People" },
];

function useCounter(target: number, duration = 2000, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCounter(value, 2000, started);
  return (
    <div className="text-center px-6 py-4">
      <p className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-(--theme-color) py-16 overflow-hidden">
      {/* Dark blob decorations */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#0d2535] rounded-full opacity-70" />
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-56 h-56 bg-[#0d2535] rounded-full opacity-50" />
      {/* White arc */}
      <svg className="absolute right-4 top-4 w-32 h-32 text-white opacity-10" viewBox="0 0 128 128">
        <circle cx="128" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 divide-x divide-white/20">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}