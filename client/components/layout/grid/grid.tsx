import * as React from "react";
import { GridContainer } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Grid = ({ children, ...props }: Props) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

export default Grid;
