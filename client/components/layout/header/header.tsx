import * as React from "react";
import { useInView } from "react-intersection-observer";
import { HeaderContainer, LinksList } from "./styles";
import { NavigationLinksType } from "../../../types";
import Navigation from "../navigation/navigation";
import Link from "next/link";
import Grid from "../grid/grid";
import GridItem from "../grid/grid-item";
import { ScrollContext } from "../../../context/scroll-context";
import Image from "next/image";
import Logo from "../../ui/logo/logo";

interface Props {
  links: NavigationLinksType[];
  children?: React.ReactNode;
}

const Header = ({ ...props }: Props) => {
  const { ref, inView } = useInView();
  const { backgroundColor } = React.useContext(ScrollContext);

  return (
    <>
      <Navigation links={props?.links} ref={ref} />
      <HeaderContainer inView={inView} variant={backgroundColor} {...props}>
        <Grid>
          <GridItem columnStart={2} columnSpan={3} align="flex-start">
            <Logo color={backgroundColor} />
          </GridItem>
          <GridItem columnStart={6} columnSpan={6} align="flex-end">
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
      </HeaderContainer>
    </>
  );
};

export default Header;