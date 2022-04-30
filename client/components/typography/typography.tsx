import * as React from "react";
import { FontType, TypographyType } from "../../types";
import {
  H1Element,
  H2Element,
  H3Element,
  H4Element,
  H5Element,
  H6Element,
  SpanElement,
  PElement,
} from "./styles";

interface Props {
  element?: TypographyType | "span";
  variant?: TypographyType;
  font?: FontType;
  children?: React.ReactNode;
}

const Typography = ({
  element = "p",
  variant,
  font = "sans",
  children,
  ...props
}: Props) => {
  const fallback = variant ? variant : element === "span" ? "p" : element;

  switch (element) {
    case "h1":
      return (
        <H1Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H1Element>
      );
    case "h2":
      return (
        <H2Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H2Element>
      );
    case "h3":
      return (
        <H3Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H3Element>
      );
    case "h4":
      return (
        <H4Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H4Element>
      );
    case "h5":
      return (
        <H5Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H5Element>
      );
    case "h6":
      return (
        <H6Element variant={variant ?? fallback} font={font} {...props}>
          {children}
        </H6Element>
      );
    case "span":
      return (
        <SpanElement variant={variant ?? fallback} font={font} {...props}>
          {children}
        </SpanElement>
      );
    default:
      return (
        <PElement variant={variant ?? fallback} font={font} {...props}>
          {children}
        </PElement>
      );
  }
};

export default Typography;
