import * as React from "react";
import { ColorProps } from "../../../types/cms-types";
import Grid from "../grid/grid";
import { Container } from "./styles";

interface Props {
  background?: ColorProps;
  stickToTop?: boolean;
  children?: React.ReactNode;
}

const Section = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
