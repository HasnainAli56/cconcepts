"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const speedClass =
    speed === "fast"
      ? "duration-[50s]"
      : speed === "slow"
      ? "duration-[95s]"
      : "duration-[70s]";

  const animationClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-6",
          animationClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-6",
          animationClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
