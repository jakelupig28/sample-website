"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * RevealEngine — automatic, site-wide container entrance choreography.
 *
 * Walks every <section>/<footer> inside <main> (and any [data-reveal-section]),
 * breaks it into its visual containers (headers, cards, grid items, columns,
 * form rows, FAQ items…) and fades/slides each one in as it scrolls into view.
 *
 * - Containers that enter the viewport together are staggered in reading order.
 * - Two-column layouts slide in from opposite sides on desktop.
 * - Uses the Web Animations API, so component hover `transition`s are untouched.
 * - Uses data-attributes (not classes), so React re-renders never reset state.
 * - Skips the home Hero (it has its own choreography) and anything already
 *   wrapped in an explicit <ScrollReveal>.
 * - Works with Lenis (Lenis drives native window scroll → IntersectionObserver fires).
 */

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;
const MAX_DEPTH = 5;

const NEVER_GROUP_TAGS = new Set(["A", "BUTTON", "P", "H1", "H2", "H3", "H4", "H5", "H6", "LABEL", "IFRAME", "IMG", "svg", "SVG"]);
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "TEMPLATE", "NOSCRIPT", "LINK", "META"]);

type Variant = "up" | "card" | "left" | "right";

const KEYFRAMES: Record<Variant, Keyframe[]> = {
  up: [
    { opacity: 0, transform: "translate3d(0, 36px, 0)", filter: "blur(5px)" },
    { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0px)" },
  ],
  card: [
    { opacity: 0, transform: "translate3d(0, 42px, 0) scale(0.96)", filter: "blur(4px)" },
    { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)", filter: "blur(0px)" },
  ],
  left: [
    { opacity: 0, transform: "translate3d(-44px, 0, 0)", filter: "blur(4px)" },
    { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0px)" },
  ],
  right: [
    { opacity: 0, transform: "translate3d(44px, 0, 0)", filter: "blur(4px)" },
    { opacity: 1, transform: "translate3d(0, 0, 0)", filter: "blur(0px)" },
  ],
};

function elementChildren(el: Element): HTMLElement[] {
  return Array.from(el.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
}

function shouldSkip(el: HTMLElement): boolean {
  if (SKIP_TAGS.has(el.tagName)) return true;
  if (el.classList.contains("scroll-reveal-container")) return true;
  if (el.hasAttribute("data-reveal-skip")) return true;
  if (el.getAttribute("aria-hidden") === "true") return true;
  if (el.closest('[role="dialog"], [aria-modal="true"]')) return true;
  const cs = getComputedStyle(el);
  if (cs.display === "none" || cs.visibility === "hidden") return true;
  if (cs.position === "fixed" || cs.position === "absolute" || cs.position === "sticky") return true;
  if (el.offsetHeight < 8 && el.offsetWidth < 8) return true;
  return false;
}

function isHeroSection(el: HTMLElement): boolean {
  // Sections with their own authored entrance opt out via data-reveal-skip
  return el.hasAttribute("data-reveal-skip");
}

const CONTAINER_TAGS = new Set(["DIV", "ARTICLE", "LI", "UL", "OL", "FIGURE", "FORM", "ASIDE", "SECTION", "NAV", "A", "DETAILS"]);

/** A visual "card": its own surface (shadow / filled rounded box / border) or a clickable tile. */
function looksLikeCard(el: HTMLElement, cs: CSSStyleDeclaration): boolean {
  if (el.tagName === "A" || el.tagName === "ARTICLE" || el.tagName === "FIGURE") return true;
  if (cs.cursor === "pointer") return true;
  if (cs.boxShadow && cs.boxShadow !== "none") return true;
  const filled = cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent";
  const hasImageBg = cs.backgroundImage && cs.backgroundImage !== "none";
  const rounded = parseFloat(cs.borderTopLeftRadius) > 0;
  const bordered = parseFloat(cs.borderTopWidth) > 0 && parseFloat(cs.borderLeftWidth) > 0;
  return ((filled || hasImageBg) && rounded) || (bordered && rounded);
}

export default function RevealEngine() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isInitialLoad = firstRun.current;
    firstRun.current = false;
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;

    // ---- Reveal queue: batch everything that intersects in the same frame so it staggers in reading order
    let pending: HTMLElement[] = [];
    let rafId = 0;

    const flush = () => {
      rafId = 0;
      const batch = pending.sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        return Math.abs(ra.top - rb.top) > 24 ? ra.top - rb.top : ra.left - rb.left;
      });
      pending = [];
      batch.forEach((el, i) => {
        const variant = (el.dataset.reveal as Variant) || "up";
        const delay = Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS;
        el.setAttribute("data-revealed", "");
        el.animate(KEYFRAMES[variant], {
          duration: variant === "card" ? 850 : 750,
          delay,
          easing: EASE,
          fill: "both",
        });
      });
    };

    // Only triggers once the container is 50px inside the visible screen,
    // so the user actually watches it smoothly glide into view as they scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          if (el.hasAttribute("data-revealed")) continue;
          pending.push(el);
        }
        if (pending.length && !rafId) rafId = requestAnimationFrame(flush);
      },
      { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0 }
    );

    const mark = (el: HTMLElement, variant: Variant, revealNow: boolean) => {
      el.setAttribute("data-reveal", variant);
      if (revealNow) {
        el.setAttribute("data-revealed", "");
        return;
      }
      observer.observe(el);
    };

    const inInitialViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.82 && r.bottom > 0;
    };

    // ---- Decide how to split a container into revealable units
    const process = (container: HTMLElement, depth: number, revealVisibleNow: boolean) => {
      const kids = elementChildren(container).filter((k) => !shouldSkip(k) || k.querySelector(".scroll-reveal-container"));
      const cs = getComputedStyle(container);
      const isTwoColumn =
        isDesktop &&
        kids.length === 2 &&
        (cs.display === "grid" || (cs.display === "flex" && !cs.flexDirection.startsWith("column"))) &&
        Math.abs(kids[0].getBoundingClientRect().top - kids[1].getBoundingClientRect().top) < 40;
      const isGrid = kids.length >= 3 && (cs.display === "grid" || (cs.display === "flex" && cs.flexWrap === "wrap"));

      kids.forEach((child, index) => {
        if (child.hasAttribute("data-reveal")) return; // already handled (rescan)
        if (child.classList.contains("scroll-reveal-container")) return;

        // Contains explicit <ScrollReveal> → don't double-animate; reveal its other children instead
        if (child.querySelector(".scroll-reveal-container")) {
          if (depth < MAX_DEPTH) process(child, depth + 1, revealVisibleNow);
          return;
        }
        if (shouldSkip(child)) return;

        const grandKids = elementChildren(child).filter((g) => !shouldSkip(g));
        const containerKids = grandKids.filter((g) => CONTAINER_TAGS.has(g.tagName));
        const ccs = getComputedStyle(child);
        const isCard = looksLikeCard(child, ccs);
        const isTooTall = child.offsetHeight > window.innerHeight * 0.85;
        // Only split containers made of other containers (cards, columns, rows) — never split
        // a block of headings/paragraphs, and never split a card unless it's taller than the screen.
        const isBlockGroup =
          !NEVER_GROUP_TAGS.has(child.tagName) &&
          containerKids.length >= 2 &&
          (ccs.display === "grid" || ccs.display === "flex" ||
            (containerKids.length >= 3 && new Set(containerKids.map((g) => g.className)).size === 1));
        const shouldSplit =
          depth < MAX_DEPTH &&
          containerKids.length >= 2 &&
          !NEVER_GROUP_TAGS.has(child.tagName) &&
          (isTooTall || (isBlockGroup && !isCard && child.offsetHeight > 220));

        if (shouldSplit) {
          process(child, depth + 1, revealVisibleNow);
          return;
        }

        let variant: Variant = "up";
        if (isTwoColumn) variant = index === 0 ? "left" : "right";
        else if (isGrid || isCard) variant = "card";
        else if (child.querySelector("img, iframe") && child.offsetHeight > 160) variant = "card";

        mark(child, variant, revealVisibleNow && inInitialViewport(child));
      });
    };

    const findRoot = (section: HTMLElement): HTMLElement => {
      let root: HTMLElement = section.querySelector<HTMLElement>(":scope > .container") ?? section;
      // Descend through single-child wrappers (e.g. <div class="wrapper"><div class="container">…)
      for (let i = 0; i < 4; i++) {
        const kids = elementChildren(root).filter((k) => !shouldSkip(k));
        if (kids.length !== 1 || kids[0].classList.contains("scroll-reveal-container")) break;
        root = kids[0];
      }
      return root;
    };

    const scan = (revealVisibleNow: boolean) => {
      const main = document.querySelector("main");
      if (!main) return;
      const sections = main.querySelectorAll<HTMLElement>("section, footer, [data-reveal-section]");
      sections.forEach((section) => {
        if (isHeroSection(section)) return;
        if (section.closest(".scroll-reveal-container") && section.querySelector(".scroll-reveal-container") === null) {
          // Entire section already wrapped by an explicit ScrollReveal
          return;
        }
        // Nested sections are processed by their own iteration
        process(findRoot(section), 0, revealVisibleNow);
      });

      // (Re-)observe every container still waiting — covers effect re-runs (StrictMode,
      // route changes) where elements were marked by a previous, now-disconnected observer.
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => observer.observe(el));
    };

    // Initial load: SSR content is already painted, so whatever is on screen stays put (no flash).
    // Client-side navigation: layout effect runs before paint → the new page's top choreographs in.
    scan(isInitialLoad);

    // Pick up content rendered later (filters, tabs, lazy blocks) and reveal it gracefully.
    // MutationObserver callbacks run as microtasks (before paint), so new content never flashes.
    const mo = new MutationObserver(() => scan(false));
    const main = document.querySelector("main");
    if (main) mo.observe(main, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return null;
}
