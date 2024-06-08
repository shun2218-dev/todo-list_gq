import type { FC } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HasChildren } from "@types";

type Props = HasChildren;

export const client = new ApolloClient({
  ssrMode: true,
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  version: "1.0",
});

export const WithApollo: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
