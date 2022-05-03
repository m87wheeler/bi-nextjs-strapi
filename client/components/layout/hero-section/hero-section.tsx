import * as React from "react";
import { HeroContainer, Titles } from "./styles";
import { HeroSectionType, SharedStylesProps } from "../../../types/cms-types";
import GridItem from "../grid/grid-item";
import Section from "../section/section";
import HeroMedia from "./hero-media";
import Typography from "../../ui/typography/typography";

const HeroSection = ({ ...props }: HeroSectionType) => {
  const textColor = React.useMemo(
    () => (props?.overlay === "white" ? "white" : "black"),
    [props?.overlay]
  );

  const heroStyles: SharedStylesProps | undefined = React.useMemo(() => {
    if (props?.styles?.background) return props.styles;
    return { background: "primary" };
  }, [props?.styles]);

  return (
    <Section top styles={heroStyles}>
      <GridItem columnStart={1} columnSpan={12} fullWidth>
        <HeroContainer>
          <HeroMedia media={props?.backgroundMedia} overlay={props?.overlay} />
          <Titles>
            <Typography
              element="h1"
              font="serif"
              weight={400}
              color={textColor}
              align="center"
            >
              {props?.title}
            </Typography>
            <Typography
              element="p"
              variant="h5"
              font="serif"
              align="center"
              color={textColor}
            >
              {props?.subTitle}
            </Typography>
          </Titles>
        </HeroContainer>
      </GridItem>
    </Section>
  );
};

export default HeroSection;
