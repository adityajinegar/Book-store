import { gql, useSubscription } from "@apollo/client";

const SUBSCRIBE_BOOK_ADDED = gql`
  subscription onBookAdded($name: String!) {
    query
    GetBooks {
      books {
        id
        name
      }
    }
  }
`;

const NewBookNotification = () => {
  const { loading, data, error } = useSubscription(SUBSCRIBE_BOOK_ADDED, {
    variables: {
      name: "Thud",
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewBookNotification;
