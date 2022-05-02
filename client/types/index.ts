import { ComponentTypes } from "./cms-types";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type FontType = "sans" | "serif";
export type FontWeightType = 300 | 400 | 500 | 600 | "unset" | "inherit";

export type ColourType = "primary" | "secondary" | "transparent";
export type AlignType = "left" | "center" | "right";

/** page props */
export interface IPageProps {
  title: string;
  slug: string;
  components: ComponentTypes[];
  locale: string;
  localizations: { data: { attributes: { locale: string } }[] };
  metaData: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
  };
}

/** CMS UI Types */
export type CmsButtonType = {
  text?: string;
  link: string;
  colour?: ColourType;
  border?: ColourType;
  icon?: string;
  alignIconWithText?: Omit<AlignType, "center">;
};

/** CMS Layout Types */
export interface IContentColumn {
  columnStart: number;
  columnSpan: number;
  content: string;
}
