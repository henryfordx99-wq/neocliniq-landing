"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Scroll Reveal ─── */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealStagger({
  children,
  className = "",
  staggerMs = 100,
}: {
  children: React.ReactNode[];
  className?: string;
  staggerMs?: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className="flex"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ─── Mouse Glow ─── */
export function useMouseGlow() {
  const containerRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return { containerRef, pos };
}

/* ─── Floating Orbs Background ─── */
export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large gold orb - top left, slow drift */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #d4ab4a 0%, transparent 70%)",
          animation: "float1 20s ease-in-out infinite",
        }}
      />
      {/* Medium orb - right side */}
      <div
        className="absolute top-1/3 -right-24 h-[350px] w-[350px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #e2c56e 0%, transparent 70%)",
          animation: "float2 25s ease-in-out infinite",
        }}
      />
      {/* Small orb - bottom center */}
      <div
        className="absolute -bottom-16 left-1/3 h-[250px] w-[250px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #b08530 0%, transparent 70%)",
          animation: "float3 18s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─── Hero Entrance Animation ─── */
export function HeroEntrance({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Grain Overlay ─── */
export function GrainOverlay({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity }}
      width="100%"
      height="100%"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
}

/* ─── Interactive Card with hover tilt ─── */
export function TiltCard({
  children,
  className = "",
  gold = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative flex-1 rounded-2xl p-7
        bg-[#132a42]/60 backdrop-blur-sm
        border ${gold ? "border-[#d4ab4a]/25" : "border-white/[0.06]"}
        ${className}
      `}
      style={{
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        boxShadow: gold
          ? "0 1px 2px rgba(11,25,41,0.15), 0 4px 16px rgba(11,25,41,0.12), 0 12px 32px rgba(212,171,74,0.08)"
          : "0 1px 2px rgba(11,25,41,0.1), 0 4px 12px rgba(11,25,41,0.08), 0 12px 32px rgba(212,171,74,0.04)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
