import * as React from "react";
import Link from "next/link";
import Grid from "../grid/grid";
import GridItem from "../grid/grid-item";
import { NavigationLinksType } from "../../../types";
import { LinksList, NavContainer } from "./styles";

interface Props {
  links: NavigationLinksType[];
}

const Navigation = ({ ...props }: Props) => {
  return (
    <NavContainer>
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
};

export default Navigation;
