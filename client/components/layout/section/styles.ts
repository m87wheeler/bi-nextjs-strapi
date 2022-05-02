import styled from "styled-components";
import { SharedStylesProps } from "../../../types/cms-types";

export const Container = styled.div<{
  stickToTop?: boolean;
  background?: string;
  styles?: SharedStylesProps;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding-top) var(--section-padding-x)
    var(--section-padding-bottom);
  padding-top: ${({ styles }) =>
    styles?.stickToTop ? 0 : "var(--section-padding-top)"};
  background-color: ${({ background }) => `var(--color-${background})`};
`;
