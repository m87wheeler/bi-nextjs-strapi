import styled from "styled-components";

export const NavContainer = styled.nav`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 99999;
`;

export const LinksList = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  list-style-type: none;

  li {
    a {
      color: var(--color-white);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
