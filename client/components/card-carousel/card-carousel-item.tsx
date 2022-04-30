import * as React from "react";
import LinkType from "../link-type/link-type";
import {
  CarouselCardTitle,
  CarouselCardImage,
  CarouselCardContainer,
} from "./styles";

interface Props {
  title?: string;
  image?: string;
  link?: string;
  inView: boolean;
}

const CardCarouselItem = ({ title, image, link, inView, ...props }: Props) => {
  return (
    <LinkType href={link} {...props}>
      <CarouselCardContainer inView={inView}>
        <CarouselCardImage image={image} />
        <CarouselCardTitle>{title}</CarouselCardTitle>
      </CarouselCardContainer>
    </LinkType>
  );
};

export default CardCarouselItem;
