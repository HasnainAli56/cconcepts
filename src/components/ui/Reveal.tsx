"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1.1,
  distance = 45,
  className = "",
  viewportOnce = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -distance, y: 0 };
      case "right":
        return { opacity: 0, x: distance, y: 0 };
      case "down":
        return { opacity: 0, x: 0, y: -distance };
      case "none":
        return { opacity: 0, scale: 0.96 };
      case "up":
      default:
        return { opacity: 0, x: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: viewportOnce, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
