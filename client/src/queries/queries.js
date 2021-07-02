import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
    }
  }
`;

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation AddBookMutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const GET_SINGLE_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS, ADD_BOOK_MUTATION, GET_SINGLE_BOOK };
