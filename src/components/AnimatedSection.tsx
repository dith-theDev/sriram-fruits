"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  delay = 0
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const base = "transition-all duration-700 ease-out";

    if (!isVisible) {
      switch (animation) {
        case "slide-up":
          return `${base} opacity-0 translate-y-10`;
        case "slide-left":
          return `${base} opacity-0 translate-x-10`;
        case "slide-right":
          return `${base} opacity-0 -translate-x-10`;
        case "scale":
          return `${base} opacity-0 scale-95`;
        default:
          return `${base} opacity-0`;
      }
    }

    return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}
