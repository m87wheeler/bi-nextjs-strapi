export const theme = {
  palette: {
    primary: {
      _: "#566573",
      contrast: "#fff",
    },
    black: "#111",
    white: "#fff",
  },
  font: {
    family: {
      sans: "Poppins, sans-serif",
      serif: `'Playfair Display', serif`,
    },
    size: {
      h1: "clamp(4rem, calc(4rem + ((1vw - 0.48rem) * 1.3889)), 5rem)",
      h2: "clamp(3rem, calc(3rem + ((1vw - 0.48rem) * 1.3889)), 4rem)",
      h3: "clamp(2.25rem, calc(2.25rem + ((1vw - 0.48rem) * 1.3889)), 3.25rem)",
      h4: "clamp(1.75rem, calc(1.75rem + ((1vw - 0.48rem) * 1.3889)), 2.75rem)",
      h5: "clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.6944)), 2rem)",
      h6: "clamp(1.25rem, calc(1.25rem + ((1vw - 0.48rem) * 0.3472)), 1.5rem)",
      p: "clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.3472)), 1.25rem)",
    },
    height: {
      h1: 1.25,
      h2: 1.25,
      h3: 1.25,
      h4: 1.25,
      h5: 1.25,
      h6: 1.25,
      p: 1.5,
    },
  },
  transition: {
    slow: "500ms ease-in-out",
    default: "250ms ease-in-out",
    fast: "100ms ease-in-out",
  },
};
