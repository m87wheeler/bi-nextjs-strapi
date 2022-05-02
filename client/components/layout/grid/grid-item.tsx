import * as React from "react";
import { ItemContainer } from "./styles";
import { GridItemProps } from "../../../types";

const GridItem = ({
  columnStart = 2,
  columnSpan = 10,
  align = "center",
  fullWidth = false,
  children,
}: GridItemProps) => {
  return (
    <ItemContainer
      start={columnStart}
      span={columnSpan}
      align={align}
      fullWidth={fullWidth}
    >
      {children}
    </ItemContainer>
  );
};

export default GridItem;
