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
import { CardCarouselProps } from "../../types/cms-types";

const CardCarousel = ({ ...props }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const maxItems = useMediaQuery([1, 1, 2, props?.itemsPerPage ?? 3]);

  const cardItems = React.useMemo(() => {
    const items = [
      ...props?.items,
      ...props?.projects?.data?.map(
        (project) => project?.attributes?.carouselCard
      ),
    ];
    return items;
  }, [props?.items, props?.projects]);

  console.log(cardItems);

  const handleActiveIndex = React.useCallback(
    (n: number) => () => {
      if (activeIndex + n < 0) return;
      if (activeIndex + n > (cardItems.length ?? 0) + 1 - ((maxItems ?? 1) + 1))
        return;
      setActiveIndex((state) => state + n);
    },
    [activeIndex, maxItems, cardItems]
  );

  return (
    <CarouselContainer {...props} itemsPerPage={maxItems ?? 1}>
      <ButtonContainer>
        <CarouselButton onClick={handleActiveIndex(-1)}>P</CarouselButton>
      </ButtonContainer>
      <PlaneContainer>
        <CarouselPlane activeIndex={activeIndex}>
          {cardItems.map((item, i) => (
            <CardCarouselItem
              key={i}
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
        items={cardItems.length ?? 0}
        currentItem={activeIndex}
        itemsPerPage={maxItems ?? 1}
      />
    </CarouselContainer>
  );
};

export default CardCarousel;
