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

export interface CardCarouselProps {
  id: string;
  type: "ComponentCardCarouselCardCarousel";
  itemsPerPage: number;
  items: any[];
  projects: { data: any[] };
}

export type ComponentTypes = TwoColumnProps | CardCarouselProps;
