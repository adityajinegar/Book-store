import React, { Component } from "react";

import BookList from "./components/BookList";

class App extends Component() {
  render() {
    return (
      <div id="main">
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
