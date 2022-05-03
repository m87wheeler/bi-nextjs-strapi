import * as React from "react";

export const useScrollToView = (offset: string = "0") => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref || !ref.current) return;
    const allowance = 20;

    function handleScroll() {
      if (!ref || !ref.current) return;
      const { y } = ref.current.getBoundingClientRect();
      setInView(y < allowance && y > -allowance);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, inView };
};
