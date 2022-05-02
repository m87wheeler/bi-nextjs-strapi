import * as React from "react";
import styled from "styled-components";
import { ColorProps } from "../../../types/cms-types";

const ButtonContainer = styled.button<{
  background?: string;
  borderAndText?: string;
}>`
  padding: 0.25rem 1rem;
  font-size: 1rem;
  color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
  background-color: ${({ background }) => `var(--color-${background})`};
  border: 2px solid;
  border-color: ${({ borderAndText }) => `var(--color-${borderAndText})`};
`;

interface Props {
  background?: ColorProps;
  borderAndText?: ColorProps;
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  console.log({ props });
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
