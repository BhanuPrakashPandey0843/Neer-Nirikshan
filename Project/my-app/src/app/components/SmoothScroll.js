"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // slower = smoother
      easing: (t) => 1 - Math.pow(2, -10 * t), // easeOutExpo style
      smoothWheel: true,
      smoothTouch: false, // optional: disable on mobile
    });

    // Request animation frame loop
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Optional: expose lenis to window for debugging / scroll controls
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
