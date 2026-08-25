"use client";

import { useInView } from "@/hooks/useInView";

/**
 * Reusable scroll-reveal wrapper. Wrap any block of markup in <Reveal> to
 * fade + lift it into view the first time it crosses the viewport
 * threshold. Pass `delay` (ms) to stagger a list of children, and `as`
 * to render a different wrapper element than the default <div>.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
