import * as React from "react";
import Grid from "../grid/grid";
import { Container } from "./styles";

interface Props {
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
