import { TypographyType } from ".";

export interface BaseImageProps {
  attributes: {
    url: string;
    mime?: string;
    caption?: string;
  };
}

export type ImageProps = {
  data: BaseImageProps;
};

export type ImageArrayProps = {
  data: BaseImageProps[];
};

export type ColorProps = "primary" | "secondary" | "white" | "black" | "none";
export type OverlayType = "black" | "white" | "none";

export type SharedStylesProps = {
  stickToTop?: boolean;
  background: ColorProps;
};

export interface CmsComponentType {
  id: string;
  styles?: SharedStylesProps;
}

export interface HeroSectionType extends CmsComponentType {
  type: "ComponentSectionHeroSection";
  title: string;
  subTitle: string;
  backgroundMedia: ImageArrayProps;
  overlay: OverlayType;
}

export interface TitleSectionProps extends CmsComponentType {
  type: "ComponentUiTitle";
  text: string;
  element: TypographyType;
  variant: TypographyType;
}

export interface TwoColumnProps extends CmsComponentType {
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

export interface CardCarouselProps extends CmsComponentType {
  type: "ComponentCardCarouselCardCarousel";
  itemsPerPage: number;
  items: CardCarouselItemProps[];
  projects: { data: any[] };
}

export interface ButtonProps {
  text: string;
  link: string;
  borderAndText: ColorProps;
  buttonBackground: ColorProps;
}

export interface ButtonSectionProps extends CmsComponentType {
  type: "ComponentSectionButtonSection";
  button: ButtonProps;
}

export interface QuoteBoxProps {
  type: "ComponentSectionQuoteBox";
  quote: string;
  clientName: string;
  quoteBackground: ColorProps;
  styles?: SharedStylesProps;
}

export type ComponentTypes =
  | HeroSectionType
  | TitleSectionProps
  | TwoColumnProps
  | CardCarouselProps
  | ButtonSectionProps
  | QuoteBoxProps;
