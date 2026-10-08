"use client";

import { useEffect } from "react";

export default function ProjectsEffects(): null {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".flip-wrapper, .other-card").forEach((element) => observer.observe(element));

    // Touch / click flip for mobile
    const flipInners = Array.from(document.querySelectorAll<HTMLElement>(".flip-inner"));
    const handleFlipClick = (event: MouseEvent): void => {
      (event.currentTarget as HTMLElement).parentElement?.classList.toggle("flipped");
    };
    flipInners.forEach((inner) => inner.addEventListener("click", handleFlipClick));

    return () => {
      observer.disconnect();
      flipInners.forEach((inner) => inner.removeEventListener("click", handleFlipClick));
    };
  }, []);

  return null;
}
