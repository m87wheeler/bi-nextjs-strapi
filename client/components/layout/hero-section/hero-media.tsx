import * as React from "react";
import { useParallax } from "../../../hooks/use-parallax";
import { useWindowSize } from "../../../hooks/use-window-resize";
import { ImageArrayProps, OverlayType } from "../../../types/cms-types";
import { getStrapiMedia } from "../../../utils";
import { HeroImage, MediaContainer, ParallaxContainer } from "./styles";

interface Props {
  media?: ImageArrayProps;
  overlay?: OverlayType;
}

const HeroMedia = ({ media, overlay = "none" }: Props) => {
  const parallaxRef = React.useRef<HTMLDivElement | null>(null);
  const { height } = useWindowSize();
  useParallax(parallaxRef, height);

  if (!media || !media?.data) return <></>;
  return (
    <MediaContainer>
      <ParallaxContainer ref={parallaxRef}>
        {media?.data?.map((item, i) => {
          return item?.attributes?.mime?.includes("image") ? (
            <HeroImage key={i} src={getStrapiMedia(item)} overlay={overlay} />
          ) : (
            <p key={i}>Not an image</p>
          );
        })}
      </ParallaxContainer>
    </MediaContainer>
  );
};

export default HeroMedia;
