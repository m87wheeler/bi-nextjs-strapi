import * as React from "react";
import { TypographyType } from "../../../types";
import { ColorProps } from "../../../types/cms-types";

import {
  H1Element,
  H2Element,
  H3Element,
  H4Element,
  H5Element,
  H6Element,
  SpanElement,
  PElement,
  TypographyProps,
} from "./styles";

interface Props extends TypographyProps {
  element?: TypographyType | "span";
  color?: ColorProps;
  children?: React.ReactNode;
}

const Typography = ({ element = "p", children, ...props }: Props) => {
  const fallback = props?.variant
    ? props?.variant
    : element === "span"
    ? "p"
    : element;

  switch (element) {
    case "h1":
      return (
        <H1Element variant={fallback} {...props}>
          {children}
        </H1Element>
      );
    case "h2":
      return (
        <H2Element variant={fallback} {...props}>
          {children}
        </H2Element>
      );
    case "h3":
      return (
        <H3Element variant={fallback} {...props}>
          {children}
        </H3Element>
      );
    case "h4":
      return (
        <H4Element variant={fallback} {...props}>
          {children}
        </H4Element>
      );
    case "h5":
      return (
        <H5Element variant={fallback} {...props}>
          {children}
        </H5Element>
      );
    case "h6":
      return (
        <H6Element variant={fallback} {...props}>
          {children}
        </H6Element>
      );
    case "span":
      return (
        <SpanElement variant={fallback} {...props}>
          {children}
        </SpanElement>
      );
    default:
      return (
        <PElement variant={fallback} {...props}>
          {children}
        </PElement>
      );
  }
};

export default Typography;
