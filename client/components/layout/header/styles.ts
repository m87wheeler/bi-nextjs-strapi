import styled, { css } from "styled-components";

export const HeaderContainer = styled.header<{ inView: boolean }>`
  --header-height: 4rem;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-white);
  transform: translateY(0);
  opacity: 1;
  transition: transform 500ms ease-in-out, opacity 750ms ease-in-out;
  z-index: 99999;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 0;
      transform: translateY(calc(var(--header-height) * -1));
    `}
`;
