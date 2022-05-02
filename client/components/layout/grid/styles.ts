import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const GridContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  @media ${theme.breakpoints.md} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
  }
`;

export const ItemContainer = styled.div<{
  start: number;
  span: number;
  align: string;
  fullWidth?: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: ${({ fullWidth }) => (fullWidth ? 0 : "0 1rem")};
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  align-items: ${({ align }) => align};
  justify-content: center;

  @media ${theme.breakpoints.md} {
    padding: 0;
    grid-column: ${({ start, span }) => `${start} / span ${span}`};
  }
`;
