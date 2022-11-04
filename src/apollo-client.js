import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://main-magpie-16.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "vM5uuMxC0xe309AQUHx1ftbNSO40NR00OfDthx5mPkc4RLhBY7PIFwfZhLLZwhIY",
  },
});

export default client;
