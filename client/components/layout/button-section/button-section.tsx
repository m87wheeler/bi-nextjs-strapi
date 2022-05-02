import * as React from "react";
import { ButtonProps } from "../../../types/cms-types";
import GridItem from "../grid/grid-item";
import Button from "../../ui/button/button";
import Section from "../section/section";

interface Props extends ButtonProps {}

const ButtonSection = ({ ...props }: Props) => {
  return (
    <Section stickToTop={props?.stickToTop}>
      <GridItem columnStart={2} columnSpan={10}>
        <Button {...props}>{props?.text}</Button>
      </GridItem>
    </Section>
  );
};

export default ButtonSection;
