import styled, { css } from "styled-components";
import { SharedStylesProps } from "../../../types/cms-types";

export const Container = styled.div<{
  stickToTop?: boolean;
  background?: string;
  top?: boolean;
  styles?: SharedStylesProps;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding-top) var(--section-padding-x)
    var(--section-padding-bottom);

  ${({ styles }) =>
    styles &&
    css`
      padding-top: ${styles?.stickToTop ? 0 : "var(--section-padding-top)"};
      margin-top: ${styles?.stickToTop ? "-1rem" : "0"};
      background-color: ${top
        ? "var(--color-white)"
        : `var(--color-${styles?.background})`};
    `}

  ${({ top }) =>
    top &&
    css`
      padding-top: 0;
    `}
`;
