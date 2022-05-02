import React from "react";
import { ComponentTypes } from "./cms-types";

export type TypographyType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type FontType = "sans" | "serif";
export type FontWeightType = 300 | 400 | 500 | 600 | "unset" | "inherit";

export type AlignType = "left" | "center" | "right";
export type FlexAlignType = "flex-start" | "center" | "flex-end" | "stretch";

export type NavigationLinksType = {
  navigationText: string;
  showInNavigation: boolean;
  slug: string;
};

/** page props */
export interface IPageProps {
  title: string;
  slug: string;
  locale: string;
  localizations: { data: { attributes: { locale: string } }[] };
  metaData: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords?: string;
  };
  components: ComponentTypes[];
  navigation: NavigationLinksType[];
}

export type GridItemProps = {
  columnStart?: number;
  columnSpan?: number;
  align?: FlexAlignType;
  fullWidth?: boolean;
  children: React.ReactNode;
};
