"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight IntersectionObserver hook for scroll-triggered reveals.
 * Returns a ref to attach to the target element and a boolean that
 * flips to true once the element has entered the viewport (and stays
 * true — reveals should not replay on scroll-back).
 */
export function useInView({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // prefers-reduced-motion is handled in CSS (see .reveal in globals.css),
    // which shows all content immediately regardless of this state — so no
    // special-casing is needed here.

    if (typeof IntersectionObserver === "undefined") {
      // Extremely old browsers: reveal immediately, deferred to a frame
      // rather than set synchronously in the effect body.
      const frame = requestAnimationFrame(() => setIsInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isInView];
}
