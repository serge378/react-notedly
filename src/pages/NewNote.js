import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { NEW_NOTE } from "../gql/mutation";
import { GET_MY_NOTES, GET_NOTES } from "../gql/query";

function NewNote() {
  const navigate = useNavigate();
  const [createNote, { loading, error }] = useMutation(NEW_NOTE, {
    onCompleted: (data) => {
      // when complete, redirect the user to the note page
      navigate(`/note/${data.createNote.id}`);
    },
    refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
  });
  useEffect(() => {
    document.title = "New Note - Notedly";
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error saving the note, {error.message}</p>;

  return <NoteForm submitAction={createNote} />;
}

export default NewNote;
