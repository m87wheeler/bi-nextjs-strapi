import styled from "styled-components";
import { OverlayType } from "../../../types/cms-types";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: #eee;
`;

export const MediaContainer = styled.div`
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
  min-height: inherit;
  overflow: hidden;
`;

export const HeroImage = styled.div<{ src: string; overlay: OverlayType }>`
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
  min-height: inherit;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    width: inherit;
    height: inherit;
    background-color: ${({ overlay }) => `var(--color-${overlay})`};
    opacity: 0.25;
    pointer-events: none;
    z-index: 1;
  }
`;
