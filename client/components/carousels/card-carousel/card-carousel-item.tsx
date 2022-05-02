import * as React from "react";
import { getStrapiMedia } from "../../../utils";
import LinkType from "../../ui/link-type/link-type";
import {
  CarouselCardTitle,
  CarouselCardImage,
  CarouselCardContainer,
} from "./styles";

interface Props {
  title?: string;
  image?: { data: { attributes: { url: string } } };
  link?: string;
  inView: boolean;
}

const CardCarouselItem = ({ inView, ...props }: Props) => {
  return (
    <LinkType href={props?.link} {...props}>
      <CarouselCardContainer inView={inView}>
        <CarouselCardImage image={getStrapiMedia(props?.image?.data)} />
        <CarouselCardTitle>{props?.title}</CarouselCardTitle>
      </CarouselCardContainer>
    </LinkType>
  );
};

export default CardCarouselItem;
