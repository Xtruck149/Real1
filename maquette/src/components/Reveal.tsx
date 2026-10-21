"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Delay in ms, to stagger siblings. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Fades content in as it scrolls into view.
 * Content is visible by default: it is only hidden after hydration, and only when it is below the fold,
 * so without JavaScript (or with reduced motion) nothing is ever concealed.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const show = () => {
      el.dataset.reveal = "shown";
      observer.disconnect();
    };
    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) show();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    // Safety nets: content must never stay hidden (print, screenshot tools, stalled observer).
    const fallback = window.setTimeout(show, 6000);
    window.addEventListener("beforeprint", show);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("beforeprint", show);
    };
  }, []);

  return (
    <Tag ref={ref} className={className} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
