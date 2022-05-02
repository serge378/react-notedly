import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE_NOTE } from "../gql/mutation";
import { GET_MY_FAVORITES, GET_MY_NOTES, GET_NOTES } from "../gql/query";

function DeleteNote({ noteId }) {
  const navigate = useNavigate();
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      noteId,
    }, // refetch the note list queries to update the cache
    refetchQueries: [
      { query: GET_MY_NOTES },
      { query: GET_NOTES },
      //   { query: GET_MY_FAVORITES },
    ],
    onCompleted: (data) => {
      // redirect the user to the "my notes" page
      navigate("/mynotes");
    },
    onError: (err) => console.log(err.graphQLErrors),
  });
  return (
    <button
      className="py-1 px-5 bg-red-600 text-white rounded-md"
      onClick={deleteNote}
    >
      Delete Note
    </button>
  );
}

export default DeleteNote;
