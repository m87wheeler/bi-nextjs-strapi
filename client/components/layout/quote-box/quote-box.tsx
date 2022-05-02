import Image from "next/image";
import * as React from "react";
import { QuoteBoxProps } from "../../../types/cms-types";
import Typography from "../../typography/typography";
import GridItem from "../grid/grid-item";
import Section from "../section/section";
import { QuoteContainer } from "./styles";

interface Props extends QuoteBoxProps {}

const QuoteBox = ({ ...props }: Props) => {
  console.log("quoteBox", props);
  return (
    <Section {...props}>
      <GridItem columnStart={4} columnSpan={6}>
        <QuoteContainer>
          <Image
            src="/assets/icons/quote-mark.svg"
            alt="quote-mark"
            width={52}
            height={42}
          />
        </QuoteContainer>
        <Typography
          color={props?.styles?.background}
          variant="h5"
          weight={300}
          align="center"
        >
          {props?.quote}
        </Typography>
        <br />
        <Typography color={props?.styles?.background} font="serif">
          {props?.clientName}
        </Typography>
        <QuoteContainer>
          <Image
            src="/assets/icons/quote-mark.svg"
            alt="quote-mark"
            width={52}
            height={42}
          />
        </QuoteContainer>
      </GridItem>
    </Section>
  );
};

export default QuoteBox;
