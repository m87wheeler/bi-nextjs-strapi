import * as React from "react";
import useMediaQuery from "@m87wheeler/use-media-query";
import CardCarouselItem from "./card-carousel-item";
import {
  ButtonContainer,
  CarouselButton,
  CarouselContainer,
  CarouselPlane,
  PlaneContainer,
  StyledCarouselProgress,
} from "./styles";

interface Props {
  itemsPerPage?: number;
  cards?: any[];
}

const CardCarousel = ({ ...props }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const maxItems = useMediaQuery([1, 1, 2, props?.itemsPerPage ?? 3]);

  const handleActiveIndex = React.useCallback(
    (n: number) => () => {
      if (activeIndex + n < 0) return;
      if (
        activeIndex + n >
        (props?.cards?.length ?? 0) + 1 - ((maxItems ?? 1) + 1)
      )
        return;
      setActiveIndex((state) => state + n);
    },
    [activeIndex, maxItems, props.cards]
  );

  return (
    <CarouselContainer itemsPerPage={maxItems ?? 1} {...props}>
      <ButtonContainer>
        <CarouselButton onClick={handleActiveIndex(-1)}>P</CarouselButton>
      </ButtonContainer>
      <PlaneContainer>
        <CarouselPlane activeIndex={activeIndex}>
          {props?.cards?.map((item, i) => (
            <CardCarouselItem
              key={item.id}
              inView={i >= activeIndex && i < activeIndex + (maxItems ?? 1)}
              {...item}
            />
          ))}
        </CarouselPlane>
      </PlaneContainer>
      <ButtonContainer>
        <CarouselButton onClick={handleActiveIndex(1)}>N</CarouselButton>
      </ButtonContainer>
      <StyledCarouselProgress
        items={props?.cards?.length ?? 0}
        currentItem={activeIndex}
        itemsPerPage={maxItems ?? 1}
      />
    </CarouselContainer>
  );
};

export default CardCarousel;
