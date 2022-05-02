import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { TOGGLE_FAVORITE } from "../gql/mutation";
import { GET_MY_FAVORITES } from "../gql/query";

function FavoriteNote({ me, noteId, favoriteCount }) {
  const [count, setCount] = useState(favoriteCount);

  // store if the user has favorited the note as state
  const [favorited, setFavorited] = useState(
    // check if the note exists in the user favorites list
    me.favorites.filter((note) => note.id === noteId).length > 0
  );

  // toggleFavorite mutation hook
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      noteId,
    },
    // refetch the GET_MY_FAVORITES query to update the cache
    refetchQueries: [{ query: GET_MY_FAVORITES }],
  });

  return (
    <div>
      {favorited ? (
        <i
          className="fa-solid fa-heart text-blue-600"
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount((prevCount) => prevCount - 1);
          }}
        />
      ) : (
        <i
          className="fa-thin fa-heart"
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount((prevCount) => prevCount + 1);
          }}
        />
      )}
      : {count}
    </div>
  );
}

export default FavoriteNote;
