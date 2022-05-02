import * as React from "react";
import { ComponentTypes } from "../../types/cms-types";
import CardCarousel from "../card-carousel/card-carousel";
import ButtonSection from "../layout/button-section/button-section";
import QuoteBox from "../layout/quote-box/quote-box";
import TitleSection from "../layout/title-section/title-section";
import TwoColumn from "../layout/two-column/two-column";
import Typography from "../typography/typography";

interface Props {
  components: ComponentTypes[];
}

const Rendering = ({ components = [] }: Props) => {
  // console.log("Rendering", components);
  const Component = React.useCallback((component: ComponentTypes) => {
    switch (component.type) {
      case "ComponentUiTitle":
        return <TitleSection {...component} />;
      case "ComponentLayoutTwoColumn":
        return <TwoColumn {...component} />;
      case "ComponentCardCarouselCardCarousel":
        return <CardCarousel {...component} />;
      case "ComponentSectionButtonSection":
        return <ButtonSection {...component} />;
      case "ComponentSectionQuoteBox":
        return <QuoteBox {...component} />;
      default:
        return <p>No Component</p>;
    }
  }, []);

  return components.map((component, index) => {
    return <Component {...component} key={index} />;
  });
};

export default Rendering;
