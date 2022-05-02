import styled from "styled-components";

export const Container = styled.div<{ stickToTop?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding-top) var(--section-padding-x)
    var(--section-padding-bottom);
  padding-top: ${({ stickToTop }) =>
    stickToTop ? 0 : "var(--section-padding-top)"};
`;
