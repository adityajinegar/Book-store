import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/grapql",
});

class App extends Component() {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <BookList></BookList>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
