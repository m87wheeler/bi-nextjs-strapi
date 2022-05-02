import * as React from "react";
import styled from "styled-components";
import { GridItemProps } from "../../../types";

const Container = styled.div<{ start: number; span: number }>`
  width: 100%;
  height: 100%;
  grid-column: ${({ start, span }) => `${start} / span ${span}`};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const GridItem = ({
  columnStart = 2,
  columnSpan = 10,
  children,
}: GridItemProps) => {
  return (
    <Container start={columnStart} span={columnSpan}>
      {children}
    </Container>
  );
};

export default GridItem;
