import apolloClient from "../graphql/client";
import { getHomepage } from "../graphql/queries";
import { IPageProps } from "../types";

interface Props extends IPageProps {}

const Home = ({ ...props }: Props) => {
  return (
    <div>
      <h1>{props?.title}</h1>
      <p>{JSON.stringify({ ...props })}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: getHomepage,
    variables: { locale: "en" },
  });

  return {
    props: { ...data?.homepage?.data?.attributes },
  };
}

export default Home;
