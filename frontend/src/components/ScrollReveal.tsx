"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 720,
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
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

    const currentElem = elementRef.current;
    if (!currentElem) return;

    // Immediately show if already well within the viewport to prevent flash
    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
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
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const getTransform = () => {
    if (isVisible) return "none";
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 24px, 0)";
      case "slide-left":
        return "translate3d(-24px, 0, 0)";
      case "slide-right":
        return "translate3d(24px, 0, 0)";
      case "scale-up":
        return "scale(0.975) translate3d(0, 16px, 0)";
      case "fade-in":
      default:
        return "translate3d(0, 10px, 0)";
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
