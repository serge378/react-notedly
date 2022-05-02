import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import NoteFeed from "../components/NoteFeed";
import { GET_NOTES } from "../gql/query";

function Home() {
  useEffect(() => {
    document.title = "Home - Notedly";
  }, []);
  // query hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  const loadMore = () =>
    fetchMore({
      variables: {
        cursor: data.noteFeed.cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        return {
          noteFeed: {
            cursor: fetchMoreResult.noteFeed.cursor,
            hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
            notes: [
              ...previousResult.noteFeed.notes,
              ...fetchMoreResult.noteFeed.notes,
            ],
            __typename: "noteFeed",
          },
        };
      },
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <p className="flex mt-10">
          <button
            onClick={loadMore}
            className="mx-auto bg-slate-300 py-2 px-8 rounded-md text-white hover:bg-slate-400 active:bg-slate-600 duration-300"
          >
            Load more
          </button>
        </p>
      )}
    </>
  );
}

export default Home;
