import * as React from "react";
import { HeroContainer, Titles, HeroTitle, HeroSubTitle } from "./styles";
import { HeroSectionType } from "../../../types/cms-types";
import GridItem from "../grid/grid-item";
import Section from "../section/section";
import HeroMedia from "./hero-media";

const HeroSection = ({ ...props }: HeroSectionType) => {
  const textColor = React.useMemo(
    () => (props?.overlay === "white" ? "white" : "black"),
    [props?.overlay]
  );

  return (
    <Section top>
      <GridItem columnStart={1} columnSpan={12}>
        <HeroContainer>
          <HeroMedia media={props?.backgroundMedia} overlay={props?.overlay} />
          <Titles>
            <HeroTitle
              element="h1"
              font="serif"
              weight={400}
              color={textColor}
              align="center"
              noWrap
            >
              {props?.title}
            </HeroTitle>
            <HeroSubTitle
              element="p"
              variant="h5"
              font="serif"
              align="center"
              color={textColor}
            >
              {props?.subTitle}
            </HeroSubTitle>
          </Titles>
        </HeroContainer>
      </GridItem>
    </Section>
  );
};

export default HeroSection;
