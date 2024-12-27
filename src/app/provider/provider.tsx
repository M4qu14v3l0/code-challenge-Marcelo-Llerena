import { client } from "./apollo/client";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
