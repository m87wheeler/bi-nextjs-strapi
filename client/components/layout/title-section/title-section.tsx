import * as React from "react";
import { TitleSectionProps } from "../../../types/cms-types";
import Typography from "../../typography/typography";
import GridItem from "../grid/grid-item";
import Section from "../section/section";

const TitleSection = ({ ...props }: TitleSectionProps) => {
  return (
    <Section styles={props?.styles}>
      <GridItem columnStart={2} columnSpan={10}>
        <Typography {...props} weight={400}>
          {props?.text}
        </Typography>
      </GridItem>
    </Section>
  );
};

export default TitleSection;
