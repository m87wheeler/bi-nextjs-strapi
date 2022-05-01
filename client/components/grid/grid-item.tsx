import * as React from "react";
import styled from "styled-components";
import { IContentColumn } from "../../types";

const Container = styled.div<{ start: number; span: number }>`
  grid-column: ${({ start, span }) => `${start} / span ${span}`};
  width: 100%;
  height: 100%;
`;

interface Props extends IContentColumn {
  children?: React.ReactNode;
}

const GridItem = ({ columnStart, columnSpan, children }: Props) => {
  return (
    <Container start={columnStart} span={columnSpan}>
      {children}
    </Container>
  );
};

export default GridItem;
