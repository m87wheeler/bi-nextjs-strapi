import styled, { css } from "styled-components";

export const LinksList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style-type: none;
  gap: 2rem;

  li {
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const HeaderContainer = styled.header<{
  inView: boolean;
  variant: "primary" | "white";
}>`
  --header-height: 4rem;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => `var(--color-${p.variant})`};
  transform: translateY(0);
  opacity: 1;
  transition: transform 500ms ease-in-out, opacity 750ms ease-in-out,
    background-color 300ms ease-in-out;
  z-index: 99999;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 0;
      transform: translateY(calc(var(--header-height) * -1));
    `}

  ${LinksList} {
    li {
      a {
        color: ${(p) => `var(--color-${p.variant}-contrast)`};
      }
    }
  }
`;
