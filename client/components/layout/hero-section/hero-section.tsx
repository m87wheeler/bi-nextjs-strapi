import * as React from "react";
import { HeroContainer } from "./styles";
import { HeroSectionType } from "../../../types/cms-types";
import GridItem from "../grid/grid-item";
import Section from "../section/section";
import HeroMedia from "./hero-media";

const HeroSection = ({ ...props }: HeroSectionType) => {
  return (
    <Section top>
      <GridItem columnStart={1} columnSpan={12}>
        <HeroContainer>
          <HeroMedia media={props?.backgroundMedia} overlay={props?.overlay} />
          <p>Hero Section</p>
        </HeroContainer>
      </GridItem>
    </Section>
  );
};

export default HeroSection;
