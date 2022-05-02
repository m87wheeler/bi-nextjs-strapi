import * as React from "react";
import styled from "styled-components";
import { GridItemProps } from "../../../types";

const Container = styled.div<{ start: number; span: number; align: string }>`
  width: 100%;
  height: 100%;
  grid-column: ${({ start, span }) => `${start} / span ${span}`};
  display: flex;
  flex-flow: column nowrap;
  align-items: ${({ align }) => align};
  justify-content: center;
`;

const GridItem = ({
  columnStart = 2,
  columnSpan = 10,
  align = "center",
  children,
}: GridItemProps) => {
  return (
    <Container start={columnStart} span={columnSpan} align={align}>
      {children}
    </Container>
  );
};

export default GridItem;
