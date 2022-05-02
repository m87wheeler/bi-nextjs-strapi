import * as React from "react";
import { ColorProps } from "../../../types/cms-types";
import { ButtonContainer } from "./styles";

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
