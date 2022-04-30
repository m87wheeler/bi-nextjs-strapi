import * as React from "react";
import CardCarouselItem from "./card-carousel-item";
import { TEMP_DATA } from "./TEMP-DATA";
import {
  ButtonContainer,
  CarouselButton,
  CarouselContainer,
  CarouselPlane,
  PlaneContainer,
  StyledCarouselProgress,
} from "./styles";

interface Props {
  itemsPerPage: number;
}

const CardCarousel = ({ itemsPerPage = 3, ...props }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleActiveIndex = React.useCallback(
    (n: number) => () => {
      if (activeIndex + n < 0) return;
      if (activeIndex + n > TEMP_DATA.length + 1 - (itemsPerPage + 1)) return;
      setActiveIndex((state) => state + n);
    },
    [activeIndex, itemsPerPage]
  );

  return (
    <CarouselContainer itemsPerPage={itemsPerPage} {...props}>
      <ButtonContainer>
        <CarouselButton onClick={handleActiveIndex(-1)}>P</CarouselButton>
      </ButtonContainer>
      <PlaneContainer>
        <CarouselPlane activeIndex={activeIndex}>
          {TEMP_DATA.map((item, i) => (
            <CardCarouselItem
              key={item.id}
              inView={i >= activeIndex && i < activeIndex + itemsPerPage}
              {...item}
            />
          ))}
        </CarouselPlane>
      </PlaneContainer>
      <ButtonContainer>
        <CarouselButton onClick={handleActiveIndex(1)}>N</CarouselButton>
      </ButtonContainer>
      <StyledCarouselProgress
        items={TEMP_DATA.length}
        currentItem={activeIndex}
        itemsPerPage={itemsPerPage}
      />
    </CarouselContainer>
  );
};

export default CardCarousel;
