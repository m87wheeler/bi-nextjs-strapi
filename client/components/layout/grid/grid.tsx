import * as React from "react";
import { GridContainer, GhostColumn } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Grid = ({ children, ...props }: Props) => {
  return (
    <GridContainer {...props}>
      {children}
      {[...Array(12)].map((_, i) => (
        <GhostColumn key={i} pos={i} />
      ))}
    </GridContainer>
  );
};

export default Grid;
