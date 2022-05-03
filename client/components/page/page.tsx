import * as React from "react";
import Header from "../layout/header/header";
import Navigation from "../layout/navigation/navigation";
import { PageContainer } from "./styles";

interface Props {
  navigation?: any;
  children?: React.ReactNode;
}

const Page = ({ navigation, children, ...props }: Props) => {
  return (
    <PageContainer {...props}>
      {/* <Navigation links={navigation} /> */}
      <Header links={navigation} />
      <main>{children}</main>
      <footer>
        <p>&copy; 2022</p>
      </footer>
    </PageContainer>
  );
};

export default Page;
