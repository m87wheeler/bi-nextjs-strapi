import Image from "next/image";
import * as React from "react";
import { QuoteBoxProps } from "../../../types/cms-types";
import Typography from "../../typography/typography";
import GridItem from "../grid/grid-item";
import Section from "../section/section";

interface Props extends QuoteBoxProps {}

const QuoteBox = ({ ...props }: Props) => {
  console.log("quoteBox", props);
  return (
    <Section background={props?.quoteBackground} {...props}>
      <GridItem columnStart={4} columnSpan={6}>
        <Image
          src="/assets/icons/quote-mark.svg"
          alt="quote-mark"
          width={64}
          height={52}
          style={{ paddingBottom: "1rem" }}
        />
        <Typography
          color={props?.quoteBackground}
          variant="h5"
          weight={300}
          align="center"
        >
          {props?.quote}
        </Typography>
        <br />
        <Typography color={props?.quoteBackground} font="serif">
          {props?.clientName}
        </Typography>
        <Image
          src="/assets/icons/quote-mark.svg"
          alt="quote-mark"
          width={64}
          height={52}
          style={{ paddingTop: "1rem" }}
        />
      </GridItem>
    </Section>
  );
};

export default QuoteBox;
