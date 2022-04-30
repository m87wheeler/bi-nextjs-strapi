import * as React from "react";
import { Container } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const TwoColumn = ({ children, ...props }: Props) => {
  return <Container>{children}</Container>;
};

export default TwoColumn;
