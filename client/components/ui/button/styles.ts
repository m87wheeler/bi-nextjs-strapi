import styled from "styled-components";

export const ButtonContainer = styled.button<{
  background?: string;
  borderAndText?: string;
}>`
  padding: 0.5rem 2rem;
  min-width: 8rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
  background-color: ${({ background }) => `var(--color-${background})`};
  border: 2px solid;
  border-color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
`;
