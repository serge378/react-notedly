import React from "react";
import { useQuery } from "@apollo/client";
import NoteUser from "./NoteUser";
import { IS_LOGGED_IN } from "../gql/query";

// import moment from "moment";

function Note({ note }) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!, {error.message}</p>;
  // let date = moment(parseInt(note.createdAt)).format("MMM DD YYYY h:mm A");
  return (
    <div className="space-y-2 flex flex-col justify-center items-center">
      <img src={note.author.avatar} alt="avatar" className="rounded-full" />
      <p className="text-xl font-semibold text-gray-500">
        {note.author.username}
      </p>
      <p className="flex flex-wrap text-center">{note.content}</p>
      {data.isLoggedIn ? (
        <NoteUser
          favoriteCount={note.favoriteCount}
          noteId={note.id}
          authorId={note.author.id}
        />
      ) : (
        <em>Favorites: {note.favoriteCount}</em>
      )}
    </div>
  );
}

export default Note;
