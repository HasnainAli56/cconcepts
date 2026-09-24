"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
          y: "35%",
          opacity: 0,
        }}
        whileInView={{
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
          y: "0%",
          opacity: 1,
        }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.45,
          delay,
          ease: [0.16, 1, 0.3, 1], // fast & subtle agency easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
