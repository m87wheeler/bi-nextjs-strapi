import Link from "next/link";
import * as React from "react";
import { ButtonProps } from "../../../types/cms-types";
import { isExternalUrl } from "../../../utils";
import { ButtonContainer } from "./styles";

interface Props extends ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  if (props?.link) {
    return isExternalUrl(props?.link) ? (
      <ButtonContainer {...props}>
        <a href={props?.link} target="_blank" rel="noopenner">
          {children}
        </a>
      </ButtonContainer>
    ) : (
      <ButtonContainer {...props}>
        <Link href={props?.link}>{children}</Link>
      </ButtonContainer>
    );
  }

  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
