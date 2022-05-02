import styled from "styled-components";

export const GridContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1rem;
`;

export const GhostColumn = styled.div<{ pos: number }>`
  position: absolute;
  top: 0;
  left: ${({ pos }) => `calc((((100vw - 11rem) / 12) + 1rem) * ${pos})`};
  width: calc((100vw - 11rem) / 12);
  height: 100%;
  background-color: pink;
  z-index: -1;
  opacity: 0.5;
`;
