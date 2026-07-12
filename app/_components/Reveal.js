"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const [state, setState] = useState("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("revealed");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={state === "initial" ? undefined : state}
      style={
        delay && state !== "initial"
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
