import React from "react";
import { Link } from "react-router-dom";
import Note from "./Note";

function NoteFeed({ notes }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">NotedLy</h1>
      <div className="grid grid-cols-6 gap-8 mt-10">
        {notes.map((note) => (
          <div key={note.id}>
            <Note note={note} />
            <Link
              to={`/note/${note.id}`}
              className="flex justify-center items-center space-x-2 text-blue-300"
            >
              <span>Go to</span>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteFeed;
