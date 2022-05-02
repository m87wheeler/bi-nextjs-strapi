import * as React from "react";
import { ImageArrayProps, OverlayType } from "../../../types/cms-types";
import { getStrapiMedia } from "../../../utils";
import { HeroImage, MediaContainer } from "./styles";

interface Props {
  media?: ImageArrayProps;
  overlay?: OverlayType;
}

const HeroMedia = ({ media, overlay = "none" }: Props) => {
  if (!media || !media?.data) return <></>;

  return (
    <MediaContainer>
      {media?.data?.map((item, i) => {
        return item?.attributes?.mime?.includes("image") ? (
          <HeroImage key={i} src={getStrapiMedia(item)} overlay={overlay} />
        ) : (
          <p key={i}>Not an image</p>
        );
      })}
    </MediaContainer>
  );
};

export default HeroMedia;
