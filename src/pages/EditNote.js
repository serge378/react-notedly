import React from "react";
import NoteForm from "../components/NoteForm";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import {
  GET_ME,
  GET_MY_FAVORITES,
  GET_MY_NOTES,
  GET_NOTE,
  GET_NOTES,
} from "../gql/query";
import { EDIT_NOTE } from "../gql/mutation";

function EditNote() {
  const navigate = useNavigate();
  // store the id found in the url as a variable
  const { noteId } = useParams();
  // define our note query
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id: noteId },
  });
  // fetch the current user's data
  const { data: userdata } = useQuery(GET_ME);

  const [editNote] = useMutation(EDIT_NOTE, {
    onCompleted: () => {
      navigate(`/note/${noteId}`);
    },
    onError: (err) => console.log(err.message),
    // refetchQueries: [
    //   { query: GET_MY_NOTES },
    //   { query: GET_NOTES },
    //   { query: GET_MY_FAVORITES },
    // ],
  });
  // if the data is loading, display a loading message
  if (loading) return "Loading...";
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found</p>;
  // if the current user and the author of the note do not match
  if (userdata.me.id !== data.note.author.id) {
    return <p>You do not have access to edit this note</p>;
  }
  // pass the data to the form component
  return <NoteForm submitAction={editNote} note={data.note} />;
}

export default EditNote;
