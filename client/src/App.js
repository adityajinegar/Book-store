import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// apollo client setup
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/graphql",
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
