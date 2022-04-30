import * as React from "react";
import { ProgressBar, ProgressContainer } from "./styles";

interface Props {
  items: number;
  currentItem: number;
  itemsPerPage: number;
  children?: React.ReactNode;
}

const CarouselProgress = ({
  items,
  currentItem,
  itemsPerPage,
  children,
  ...props
}: Props) => {
  return (
    <ProgressContainer {...props}>
      {[...Array(items)].map((_, i) => (
        <ProgressBar
          key={i}
          active={i >= currentItem && i < currentItem + itemsPerPage}
        />
      ))}
    </ProgressContainer>
  );
};

export default CarouselProgress;
