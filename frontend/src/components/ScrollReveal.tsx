"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 420,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's prefers-reduced-motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "none";
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 14px, 0)";
      case "slide-left":
        return "translate3d(-16px, 0, 0)";
      case "slide-right":
        return "translate3d(16px, 0, 0)";
      case "scale-up":
        return "scale(0.98) translate3d(0, 10px, 0)";
      case "fade-in":
      default:
        return "translate3d(0, 8px, 0)";
    }
  };

  const transitionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={elementRef} className={className} style={transitionStyle}>
      {children}
    </div>
  );
}
