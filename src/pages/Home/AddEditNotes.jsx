import React, { useState } from "react";
import TagsInput from "../../components/Inputs/TagsInput";
import { MdClose } from "react-icons/md";

function AddEditNotes({ onClose, type,noteData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  //add new note
  const addNewNote = async () => {};
  //edit note
  const editNote = async () => {};

  const handleAddNote = () => {
    console.log("handleAddNote");
    if (!title) {
      setError("Add title");
      return;
    }
    if (!content) {
      setError("Add title");
      return;
    }
    setError(null);
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };
  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3"
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label text-gray-600">TITLE</label>
        <input
          type="text"
          className="text-xl text-gray-950 outline-none"
          placeholder="Go to Gym at 6"
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label  text-gray-600">CONTENT</label>
        <textarea
          type="text"
          rows={10}
          className="text-sm text-slate-950 outline-none bg-slate-50 rounded"
          placeholder="Content"
          name=""
          id=""
          value={content}
          onChange={({ target }) => {
            setContent(target.content);
          }}
        ></textarea>
      </div>
      <div className="mt-3">
        <label className=" text-gray-600">TAGS</label>
        <TagsInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-600 pt-1 text-sm">{error}</p>}
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
}

export default AddEditNotes;
