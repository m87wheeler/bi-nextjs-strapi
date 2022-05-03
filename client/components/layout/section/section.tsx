import * as React from "react";
import { Container } from "./styles";
import { useInView } from "react-intersection-observer";
import { ScrollContext } from "../../../context/scroll-context";
import { SharedStylesProps } from "../../../types/cms-types";
import Grid from "../grid/grid";

interface Props {
  children?: React.ReactNode;
  top?: boolean;
  styles?: SharedStylesProps;
}

const Section = ({ children, top = false, ...props }: Props) => {
  const { setBackgroundColor } = React.useContext(ScrollContext);
  const { ref, inView } = useInView({ rootMargin: "0px 0px -100%" });

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (inView) {
      switch (props?.styles?.background) {
        case "primary":
          setBackgroundColor("white");
          break;
        default:
          setBackgroundColor("primary");
          break;
      }
    }
  }, [props?.styles?.background, inView, setBackgroundColor]);

  return (
    <Container ref={ref} top={top} {...props}>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
