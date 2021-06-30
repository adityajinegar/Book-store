import React, { Component } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

// Initialize a WebSocketLink
const wsLink = new WebSocketLink({
  uri: "ws://localhost:3000/subscriptions",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// apollo client setup
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Aditya's Reading List</h1>
        <BookList></BookList>
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
