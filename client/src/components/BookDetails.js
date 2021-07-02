import React from "react";
import { graphql, useQuery } from "@apollo/client";
import { GET_BOOKS, GET_SINGLE_BOOK } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data, book } = useQuery(GET_SINGLE_BOOK, {
    options: () => {
      return {
        variables: {
          id: bookId,
        },
      };
    },
  });

  return (
    <div id="book-details">
      <p>Book details go here</p>
      {book ? (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author: </p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No book selected.</div>
      )}
    </div>
  );
}

export default BookDetails;
