import { IPageProps } from "../../types";
import { getPrimaryPage } from "../../graphql/queries";
import { formatPrimaryPage } from "../../utils";
import Page from "../../components/page/page";
import Rendering from "../../components/rendering/rendering";
import apolloClient from "../../graphql/client";

interface Props extends IPageProps {
  lang: string;
}

const Projects = ({ ...props }: Props) => {
  return (
    <Page navigation={props?.navigation}>
      <Rendering components={props?.components} />
    </Page>
  );
};

export async function getServerSideProps() {
  const locale = "en";

  const { data } = await apolloClient.query({
    query: getPrimaryPage,
    variables: { locale, slug: `projects` },
  });

  return {
    props: {
      ...formatPrimaryPage(data),
      lang: locale,
    },
  };
}

export default Projects;
