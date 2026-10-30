"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 750,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    // 1. Initial viewport check: if already in or near view on page load, reveal gracefully
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      const timer = setTimeout(() => setIsVisible(true), Math.max(60, delay));
      return () => clearTimeout(timer);
    }

    // 2. High-performance IntersectionObserver with generous bottom margin so elements glide in ahead of scroll
    let isObserved = true;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.98) {
            setIsVisible(true);
            if (isObserved && el) {
              observer.unobserve(el);
              isObserved = false;
            }
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 80px 0px", // Triggers 80px before entering viewport bottom
        threshold: 0,
      }
    );

    observer.observe(el);

    // 3. Fallback scroll/Lenis event listener ensuring zero elements ever get skipped
    const onScroll = () => {
      if (!isObserved || !el) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.98 && r.bottom > 0) {
        setIsVisible(true);
        observer.unobserve(el);
        isObserved = false;
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (isObserved && el) observer.unobserve(el);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay]);

  const getInitialTransform = () => {
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 36px, 0)";
      case "slide-left":
        return "translate3d(-36px, 0, 0)";
      case "slide-right":
        return "translate3d(36px, 0, 0)";
      case "scale-up":
        return "scale3d(0.96, 0.96, 1) translate3d(0, 20px, 0)";
      case "fade-in":
      default:
        return "translate3d(0, 16px, 0)";
    }
  };

  // Final state uses `none` (not translate3d(0,0,0)/blur(0)) so revealed wrappers don't become
  // containing blocks — otherwise position:fixed modals/overlays inside them get clipped.
  const transformValue = isVisible ? "none" : getInitialTransform();
  const opacityValue = isVisible ? 1 : 0;
  const filterValue = isVisible ? "none" : "blur(4px)";

  const transitionDuration = duration > 10 ? duration : duration * 1000;
  const transitionDelay = delay > 10 ? delay : delay * 1000;

  return (
    <div
      ref={ref}
      className={`scroll-reveal-container ${isVisible ? "is-revealed" : "is-hidden"} ${className}`.trim()}
      style={{
        opacity: opacityValue,
        transform: transformValue,
        filter: filterValue,
        transition: `opacity ${transitionDuration}ms cubic-bezier(0.16, 1, 0.3, 1) ${transitionDelay}ms, transform ${transitionDuration}ms cubic-bezier(0.16, 1, 0.3, 1) ${transitionDelay}ms, filter ${transitionDuration}ms cubic-bezier(0.16, 1, 0.3, 1) ${transitionDelay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform, filter",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
