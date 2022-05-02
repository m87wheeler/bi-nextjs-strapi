import * as React from "react";
import { ComponentTypes } from "../../types/cms-types";
import TwoColumn from "../layout/two-column/two-column";

interface Props {
  components: ComponentTypes[];
}

const Rendering = ({ components = [] }: Props) => {
  return components.map((c) => {
    if (c.type === "ComponentLayoutTwoColumn") {
      return <TwoColumn key={c?.id} {...c} />;
    } else {
      return <p key={c?.id}>No Component</p>;
    }
  });
};

export default Rendering;
