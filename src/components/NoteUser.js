import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { GET_ME } from "../gql/query";
import DeleteNote from "./DeleteNote";
import FavoriteNote from "./FavoriteNote";

function NoteUser({ noteId, favoriteCount, authorId }) {
  const { loading, error, data } = useQuery(GET_ME);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  return (
    <>
      <FavoriteNote
        me={data.me}
        noteId={noteId}
        favoriteCount={favoriteCount}
      />

      <br />
      {data.me.id === authorId && (
        <>
          <Link
            to={`/editnote/${noteId}`}
            className="flex justify-center items-center space-x-2 text-green-600"
          >
            <span>Edit</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <DeleteNote noteId={noteId} />
        </>
      )}
    </>
  );
}

export default NoteUser;
