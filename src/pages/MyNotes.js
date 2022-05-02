import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_NOTES } from "../gql/query";
import NoteFeed from "../components/NoteFeed";

function MyNotes() {
  useEffect(() => {
    document.title = "My notes - Notedly";
  }, []);
  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return "Loading...";
  // if there is an error fetching the data, display an error message
  if (error) return `Error! ${error.message}`;

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>No notes yet</p>;
  }
}

export default MyNotes;
