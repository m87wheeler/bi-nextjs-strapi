import * as React from "react";

export const useParallax = (ref: any, height: number, strength: number = 4) => {
  React.useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    function handleParallax() {
      if (!ref || !ref.current) return;
      const percent = (window.scrollY / height) * 100;
      ref.current.style.transform = `translateY(${percent / strength}%)`;
    }

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, [ref, height, strength]);
};
