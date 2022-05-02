import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_CMS_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
