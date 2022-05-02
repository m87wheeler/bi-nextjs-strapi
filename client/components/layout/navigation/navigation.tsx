import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { NavigationLinksType } from "../../../types";

const NavContainer = styled.nav``;

interface Props {
  links: NavigationLinksType[];
}

const Navigation = ({ ...props }: Props) => {
  console.log({ ...props });
  return (
    <NavContainer>
      <ul>
        {props?.links
          ?.filter((link) => link?.showInNavigation)
          ?.map((link, i) => (
            <li key={i}>
              <Link href={`/${link?.slug ?? ""}`}>{link?.navigationText}</Link>
            </li>
          ))}
      </ul>
    </NavContainer>
  );
};

export default Navigation;
