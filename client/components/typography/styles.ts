import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { FontType, FontWeightType, TypographyType } from "../../types";

interface TypographyProps {
  variant: TypographyType;
  font: FontType;
  weight?: FontWeightType;
}

const typographyStyles = ({ variant, font, weight }: TypographyProps) => css`
  font-family: ${theme.font.family[font]};
  font-size: ${theme.font.size[variant]};
  font-weight: ${weight ?? "auto"};
  line-height: ${theme.font.height[variant]};
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
