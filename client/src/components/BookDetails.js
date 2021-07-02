import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_BOOK } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(GET_SINGLE_BOOK, {
    variables: {
      id: bookId,
    },
  });
  const { book } = GET_SINGLE_BOOK;
  return (
    <div id="book-details">
      <p>Book details go here</p>
      {book ? (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author: </p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
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
