import type { NextPage } from "next";
import CardCarousel from "../components/card-carousel/card-carousel";
import Typography from "../components/typography/typography";

const Home: NextPage = () => {
  return (
    <div>
      <CardCarousel itemsPerPage={3} />
      <Typography element="h1" variant="h1">
        This is a H1
      </Typography>
      <Typography element="h2" variant="h2">
        This is a H2
      </Typography>
      <Typography element="h3" variant="h3">
        This is a H3
      </Typography>
      <Typography element="h4" variant="h4">
        This is a H4
      </Typography>
      <Typography element="h5" variant="h5">
        This is a H5
      </Typography>
      <Typography element="h6" variant="h6">
        This is a H6
      </Typography>
      <Typography element="p" variant="p">
        This is a paragraph
      </Typography>
    </div>
  );
};

export default Home;
