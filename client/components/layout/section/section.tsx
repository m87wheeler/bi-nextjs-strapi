import * as React from "react";
import { Container } from "./styles";
import { SharedStylesProps } from "../../../types/cms-types";
import Grid from "../grid/grid";

interface Props {
  children?: React.ReactNode;
  top?: boolean;
  styles?: SharedStylesProps;
}

const Section = ({ children, top = false, ...props }: Props) => {
  return (
    <Container top={top} {...props}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
