type ImageProps = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type ColorProps = "primary" | "secondary" | "white" | "none";

export type SharedStylesProps = {
  stickToTop?: boolean;
  background: ColorProps;
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
  styles?: SharedStylesProps;
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
  styles?: SharedStylesProps;
}

export interface ButtonProps {
  text: string;
  link: string;
  borderAndText: ColorProps;
  buttonBackground: ColorProps;
}

export interface ButtonSectionProps {
  type: "ComponentSectionButtonSection";
  id: string;
  button: ButtonProps;
  styles?: SharedStylesProps;
}

export interface QuoteBoxProps {
  type: "ComponentSectionQuoteBox";
  quote: string;
  clientName: string;
  quoteBackground: ColorProps;
  styles?: SharedStylesProps;
}

export type ComponentTypes =
  | TwoColumnProps
  | CardCarouselProps
  | ButtonSectionProps
  | QuoteBoxProps;
