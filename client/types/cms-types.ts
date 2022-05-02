type ImageProps = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export interface TwoColumnProps {
  id: string;
  type: "ComponentLayoutTwoColumn";
  title?: string;
  titleAlign?: "left" | "center" | "right";
  titleColumn?: "left" | "both" | "right";
  column: any[];
  button?: Object;
  buttonColumn?: "left" | "center" | "right";
}

export interface CardCarouselItemProps {
  id: string;
  type: "ComponentCardCarouselCardCarouselItem";
  title: string;
  image: ImageProps;
  link?: string;
}

export interface CardCarouselProps {
  id: string;
  type: "ComponentCardCarouselCardCarousel";
  itemsPerPage: number;
  items: CardCarouselItemProps[];
  projects: { data: any[] };
}

export type ComponentTypes = TwoColumnProps | CardCarouselProps;
