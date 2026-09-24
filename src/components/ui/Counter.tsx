"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  className = "",
}: CounterProps) {
  // Start with target value so SSR and static HTML never show zero
  const [displayValue, setDisplayValue] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated.current) return;

    let animationFrameId: number;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const durationMs = duration * 1000;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        // easeOutExpo for ultra-smooth ramp
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(from + (to - from) * ease);

        setDisplayValue(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(to);
        }
      };

      setDisplayValue(from);
      animationFrameId = requestAnimationFrame(step);
    };

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
      );

      observer.observe(node);

      // Safety fallback: if not triggered within 1.5s, ensure target value is displayed
      const safetyTimer = setTimeout(() => {
        if (!hasAnimated.current) {
          setDisplayValue(to);
        }
      }, 1500);

      return () => {
        observer.disconnect();
        clearTimeout(safetyTimer);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    } else {
      startAnimation();
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}
