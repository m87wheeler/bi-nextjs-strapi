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

export type ComponentTypes = TwoColumnProps;
