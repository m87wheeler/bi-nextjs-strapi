import * as React from "react";
import { FontType, FontWeightType, TypographyType } from "../../types";
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
  weight?: FontWeightType;
  children?: React.ReactNode;
}

const Typography = ({
  element = "p",
  variant,
  font = "sans",
  weight,
  children,
  ...props
}: Props) => {
  const fallback = variant ? variant : element === "span" ? "p" : element;
  console.log(fallback);

  switch (element) {
    case "h1":
      return (
        <H1Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H1Element>
      );
    case "h2":
      return (
        <H2Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H2Element>
      );
    case "h3":
      return (
        <H3Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H3Element>
      );
    case "h4":
      return (
        <H4Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H4Element>
      );
    case "h5":
      return (
        <H5Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H5Element>
      );
    case "h6":
      return (
        <H6Element variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </H6Element>
      );
    case "span":
      return (
        <SpanElement variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </SpanElement>
      );
    default:
      return (
        <PElement variant={fallback} font={font} weight={weight} {...props}>
          {children}
        </PElement>
      );
  }
};

export default Typography;
