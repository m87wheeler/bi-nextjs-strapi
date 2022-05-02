import * as React from "react";
import { ComponentTypes } from "../../types/cms-types";
import CardCarousel from "../card-carousel/card-carousel";
import TwoColumn from "../layout/two-column/two-column";

interface Props {
  components: ComponentTypes[];
}

const Rendering = ({ components = [] }: Props) => {
  const Component = React.useCallback((component: ComponentTypes) => {
    switch (component.type) {
      case "ComponentLayoutTwoColumn":
        return <TwoColumn {...component} />;
      case "ComponentCardCarouselCardCarousel":
        return <CardCarousel {...component} />;
      default:
        return <p>No Component</p>;
    }
  }, []);

  return components.map((component, index) => {
    return <Component {...component} key={index} />;
  });
};

export default Rendering;
