import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { FontType, TypographyType } from "../../types";

const typographyStyles = ({
  variant,
  font,
}: {
  variant: TypographyType;
  font: FontType;
}) => css`
  font-family: ${theme.font.family[font]};
  font-size: ${theme.font.size[variant]};
  line-height: ${theme.font.height[variant]};
`;

export const H1Element = styled.h1<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H2Element = styled.h2<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H3Element = styled.h3<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H4Element = styled.h4<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H5Element = styled.h5<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const H6Element = styled.h6<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
export const PElement = styled.p<{ variant: TypographyType; font: FontType }>``;
export const SpanElement = styled.span<{
  variant: TypographyType;
  font: FontType;
}>`
  ${(p) => typographyStyles({ ...p })}
`;
