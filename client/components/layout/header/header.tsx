import * as React from "react";
import { useInView } from "react-intersection-observer";
import { HeaderContainer } from "./styles";
import { NavigationLinksType } from "../../../types";
import Navigation from "../navigation/navigation";

interface Props {
  links: NavigationLinksType[];
  children?: React.ReactNode;
}

const Header = ({ links, ...props }: Props) => {
  const { ref, inView } = useInView();

  return (
    <>
      <Navigation links={links} ref={ref} />
      <HeaderContainer inView={inView} {...props}></HeaderContainer>
    </>
  );
};

export default Header;
