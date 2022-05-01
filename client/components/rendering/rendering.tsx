import * as React from "react";
import TwoColumn from "../../layouts/two-column";
import CardCarousel from "../card-carousel/card-carousel";

type Props = {
  components: any[];
};

const Rendering = ({ components = [] }: Props): any => {
  const Component = React.useCallback(
    ({ type, ...props }: { type: string }) => {
      switch (type) {
        case "ComponentLayoutTwoColumn":
          return <TwoColumn {...props} />;
        case "ComponentCarouselCardCarousel":
          return <CardCarousel {...props} />;
        default:
          return <></>;
      }
    },
    []
  );

  return components.map((component, index) => {
    return <Component {...component} key={index} />;
  });
};

export default Rendering;
