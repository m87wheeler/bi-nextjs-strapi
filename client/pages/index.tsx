import Rendering from "../components/rendering/rendering";
import apolloClient from "../graphql/client";
import { getPrimaryPage } from "../graphql/queries";
import { IPageProps } from "../types";

interface Props extends IPageProps {
  lang: string;
}

const Home = ({ ...props }: Props) => {
  return <Rendering components={props?.components} />;
};

export async function getServerSideProps() {
  const locale = "en";

  const { data } = await apolloClient.query({
    query: getPrimaryPage,
    variables: { locale, slug: `homepage` },
  });

  return {
    props: { ...data?.homepage?.data?.attributes, lang: locale },
  };
}

export default Home;
