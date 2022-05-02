import * as React from "react";
import { Container } from "./styles";
import { SharedStylesProps } from "../../../types/cms-types";
import Grid from "../grid/grid";

interface Props {
  children?: React.ReactNode;
  styles?: SharedStylesProps;
}

const Section = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
