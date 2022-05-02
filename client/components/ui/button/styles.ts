import styled from "styled-components";

export const ButtonContainer = styled.button<{
  buttonBackground?: string;
  borderAndText?: string;
}>`
  padding: 0.75rem 2rem;
  min-width: 8rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
  background-color: ${({ buttonBackground }) =>
    `var(--color-${buttonBackground})`};
  border: 2px solid;
  border-color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
  cursor: pointer;
`;
