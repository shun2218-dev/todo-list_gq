import type { FC, ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

type Props = {
  children: ReactNode;
};

export const client = new ApolloClient({
  ssrMode: true,
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
  version: "1.0",
});

export const WithApollo: FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
