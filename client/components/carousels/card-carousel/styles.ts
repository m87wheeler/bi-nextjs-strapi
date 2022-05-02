import styled from "styled-components";
import { theme } from "../../../styles/theme";
import CarouselProgress from "../carousel-progress/carousel-progress";

// *** *** *** *** *** ***
// * Carousel Container
// *** *** *** *** *** ***

export const CarouselContainer = styled.div<{ itemsPerPage: number }>`
  --card-width: 250px;
  --plane-gap: 1rem;
  --carousel-max-width: ${({ itemsPerPage }) =>
    `calc((${itemsPerPage} * var(--card-width)) + (${
      itemsPerPage - 1
    } * var(--plane-gap)))`};

  display: grid;
  grid-template-columns: 1fr var(--carousel-max-width) 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 1rem;
  row-gap: 2rem;
`;

export const ButtonContainer = styled.div`
  height: var(--card-width);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:first-of-type {
    justify-self: flex-end;
  }
  &:last-of-type {
    justify-self: flex-start;
  }
`;

export const CarouselButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: 4px solid ${theme.palette.primary._};
  border-radius: 50%;
  background-color: transparent;
  color: ${theme.palette.primary._};
  font-weight: 700;
  cursor: pointer;
`;

export const PlaneContainer = styled.div`
  width: 100%;
  max-width: var(--carousel-max-width);
  margin: 0 auto;
  overflow: hidden;
`;

export const CarouselPlane = styled.div<{ activeIndex: number }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  gap: var(--plane-gap);
  transform: ${({ activeIndex }) =>
    `translateX(calc(${activeIndex} * (var(--card-width) + var(--plane-gap)) * -1))`};
  transition: transform ${theme.transition.default};
`;

// *** *** *** *** *** ***
// * Carousel Cards
// *** *** *** *** *** ***

export const CarouselCardTitle = styled.p`
  position: relative;
  padding-top: 0.9rem;
  padding-left: 2rem;
  font-family: ${theme.font.family.serif};
  line-height: 1.25;

  &:before {
    content: "";
    position: absolute;
    top: -2rem;
    left: 1rem;
    width: 2px;
    height: 4rem;
    background-color: ${theme.palette.black};
  }
`;

export const CarouselCardImage = styled.div<{ image?: string }>`
  position: relative;
  width: var(--card-width);
  height: var(--card-width);
  background-image: ${({ image }) => `url("${image ?? ""}")`};
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    width: inherit;
    height: inherit;
    background-color: ${theme.palette.primary._};
    opacity: 0;
    transition: opacity ${theme.transition.default};
  }
`;

export const CarouselCardContainer = styled.div<{ inView: boolean }>`
  position: relative;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transition: opacity ${theme.transition.slow};
`;

// *** *** *** *** *** ***
// * Other
// *** *** *** *** *** ***

export const StyledCarouselProgress = styled(CarouselProgress)`
  grid-column: 1 / span 3;
  max-width: calc(var(--carousel-max-width) * 0.8);
  justify-self: center;
`;
