import * as React from "react";
import { cmsAsset } from "../../utils";
import LinkType from "../link-type/link-type";
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
        <CarouselCardImage
          image={cmsAsset(props?.image?.data?.attributes?.url)}
        />
        <CarouselCardTitle>{props?.title}</CarouselCardTitle>
      </CarouselCardContainer>
    </LinkType>
  );
};

export default CardCarouselItem;
