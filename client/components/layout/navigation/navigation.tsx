import * as React from "react";
import Link from "next/link";
import Grid from "../grid/grid";
import GridItem from "../grid/grid-item";
import { NavigationLinksType } from "../../../types";
import { LinksList, NavContainer } from "./styles";

interface Props {
  links: NavigationLinksType[];
}

const Navigation = React.forwardRef<HTMLElement, Props>((props, ref) => {
  return (
    <NavContainer ref={ref}>
      <Grid>
        <GridItem columnStart={3} columnSpan={8}>
          <LinksList>
            {props?.links
              ?.filter((link) => link?.showInNavigation)
              ?.map((link, i) => (
                <li key={i}>
                  <Link href={`/${link?.slug ?? ""}`}>
                    {link?.navigationText}
                  </Link>
                </li>
              ))}
            <li>
              <Link href={`/`}>Services</Link>
            </li>
            <li>
              <Link href={`/`}>Blog</Link>
            </li>
            <li>
              <Link href={`/`}>Contact</Link>
            </li>
          </LinksList>
        </GridItem>
      </Grid>
    </NavContainer>
  );
});
Navigation.displayName = "Navigation";

export default Navigation;
