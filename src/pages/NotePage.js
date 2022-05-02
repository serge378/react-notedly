import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Note from "../components/Note";
import { GET_NOTE } from "../gql/query";

function NotePage() {
  // store the id found in the url as a variable
  const { noteId } = useParams();

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id: noteId },
  });

  if (loading) return <p>Loading...</p>;

  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;
  return <Note note={data.note} />;
}

export default NotePage;
