const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book");
const Author = require("./models/author");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

const cors = require("cors");

// connect to mongodb database
mongoose.connect(
  "mongodb+srv://Aditya:Aditya1234@cluster0.grhpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

// allow cross-origin requests
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Now listening for requests on port 3000");
});
