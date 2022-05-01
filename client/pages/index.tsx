import { getPage } from "../graphql/queries/get-page";
import CardCarousel from "../components/card-carousel/card-carousel";
import Typography from "../components/typography/typography";
import apolloClient from "../graphql/client";
import TwoColumn from "../layouts/two-column";
import Rendering from "../components/rendering/rendering";

interface Props {
  data: any;
}

const Home = ({ data }: Props) => {
  return (
    <Rendering components={data?.content} />
    // <div>
    //   <CardCarousel itemsPerPage={3} />
    //   <Typography element="p" variant="h3" weight={600}>
    //     This is a h3 styled paragraph
    //   </Typography>
    //   <TwoColumn />
    // </div>
  );
};

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: getPage,
    variables: { slug: "home" },
  });

  return {
    props: { data: data?.pages?.data?.[0]?.attributes },
  };
}

export default Home;
