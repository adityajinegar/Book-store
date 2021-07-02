import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selected, setSelected] = useState(null);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li key={book.id} onClick={(e) => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails bookId={selected} data={data}></BookDetails>
    </div>
  );
}

export default BookList;
