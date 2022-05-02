import * as React from "react";
import { ColorProps, SharedStylesProps } from "../../../types/cms-types";
import Grid from "../grid/grid";
import { Container } from "./styles";

interface Props {
  background?: ColorProps;
  stickToTop?: boolean;
  children?: React.ReactNode;
  styles?: SharedStylesProps;
}

const Section = ({ children, ...props }: Props) => {
  return (
    <Container styles={props?.styles} {...props}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
