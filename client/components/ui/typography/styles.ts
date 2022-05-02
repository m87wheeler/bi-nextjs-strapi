import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme";
import {
  AlignType,
  FontType,
  FontWeightType,
  TypographyType,
} from "../../../types";
import { ColorProps } from "../../../types/cms-types";

export interface TypographyProps {
  variant?: TypographyType;
  font?: FontType;
  weight?: FontWeightType;
  align?: AlignType;
  color?: ColorProps;
  noWrap?: boolean;
}

const typographyStyles = ({
  variant = "p",
  font = "sans",
  weight,
  align = "left",
  color,
  noWrap,
}: TypographyProps) => css`
  font-family: ${theme.font.family[font]};
  font-size: ${theme.font.size[variant]};
  font-weight: ${weight ?? "auto"};
  line-height: ${theme.font.height[variant]};
  text-align: ${align};
  color: ${`var(--color-${color}-contrast)`};
  letter-spacing: ${variant !== "p" ? ".075em" : 0};
  white-space: ${noWrap ? "nowrap" : "normal"};
`;

export const H1Element = styled.h1<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H2Element = styled.h2<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H3Element = styled.h3<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H4Element = styled.h4<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H5Element = styled.h5<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H6Element = styled.h6<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const PElement = styled.p<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
export const SpanElement = styled.span<TypographyProps>`
  ${(p) => typographyStyles({ ...p })}
`;
