type ImageProps = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type ColorProps = "primary" | "secondary" | "white" | "none";

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

export interface ButtonProps {
  type: "ComponentUiButton";
  id: string;
  text: string;
  link: string;
  borderAndText: ColorProps;
  buttonBackground: ColorProps;
  stickToTop: boolean;
}

export interface QuoteBoxProps {
  type: "ComponentSectionQuoteBox";
  quote: string;
  clientName: string;
  quoteBackground: ColorProps;
}

export type ComponentTypes =
  | TwoColumnProps
  | CardCarouselProps
  | ButtonProps
  | QuoteBoxProps;
