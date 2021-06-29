import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
    }
  }
`;

function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (error) return `Error: ${error.message}`;

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name: </label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author: </label>
        <select>
          <option>Select Author</option>
          {loading ? (
            <option disabled>Loading...</option>
          ) : (
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))
          )}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;
