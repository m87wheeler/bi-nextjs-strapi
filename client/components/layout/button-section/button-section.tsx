import * as React from "react";
import { ButtonSectionProps } from "../../../types/cms-types";
import GridItem from "../grid/grid-item";
import Button from "../../ui/button/button";
import Section from "../section/section";

interface Props extends ButtonSectionProps {}

const ButtonSection = ({ ...props }: Props) => {
  return (
    <Section styles={props?.styles}>
      <GridItem columnStart={2} columnSpan={10}>
        <Button {...props?.button}>{props?.button?.text}</Button>
      </GridItem>
    </Section>
  );
};

export default ButtonSection;
