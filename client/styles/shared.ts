import { css } from "styled-components";
import { SharedStylesProps } from "../types/cms-types";

export const sharedCmsStyles = ({ ...props }: SharedStylesProps) => {
  console.log("sharedStyles", props);
  return css``;
};
