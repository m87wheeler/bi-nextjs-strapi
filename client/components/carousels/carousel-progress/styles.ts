import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ProgressContainer = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
`;

export const ProgressBar = styled.div<{ active: boolean }>`
  width: 100%;
  height: inherit;
  background-color: ${theme.palette.primary._};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: opacity ${theme.transition.default};
`;
