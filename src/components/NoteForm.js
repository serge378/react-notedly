import React, { useState } from "react";

function NoteForm({ submitAction, note }) {
  const [content, setContent] = useState(note?.content || "");

  const onChange = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitAction({
      variables: {
        content,
        noteId: note.id,
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form className="flex flex-col space-y-2 w-1/2" onSubmit={onSubmit}>
        <textarea
          onChange={onChange}
          required
          placeholder="Write your note"
          value={content}
          rows={7}
          className="resize-none border border-gray-300 p-2 text-lg rounded-md"
        />
        <button
          type="submit"
          className="py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 active:bg-slate-600 duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
