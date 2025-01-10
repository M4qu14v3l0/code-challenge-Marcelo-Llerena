import { client } from "./apollo/client";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import ToasterProvider from "./toaster/toaster";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ApolloProvider client={client}>
      <ToasterProvider>{children}</ToasterProvider>
    </ApolloProvider>
  );
}
