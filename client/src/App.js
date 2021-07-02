import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="root">
        <h1>Aditya's Reading List</h1>
        <BookList></BookList>
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
