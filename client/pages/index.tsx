import type { NextPage } from "next";
import CardCarousel from "../components/card-carousel/card-carousel";
import Typography from "../components/typography/typography";
import TwoColumn from "../layouts/two-column";

const Home: NextPage = () => {
  return (
    <div>
      <CardCarousel itemsPerPage={3} />
      <Typography element="p" variant="h3" weight={600}>
        This is a h3 styled paragraph
      </Typography>
      <TwoColumn />
    </div>
  );
};

export default Home;
