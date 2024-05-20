import React, { useState } from "react";
import { MdAdd, MdAddCall, MdClose } from "react-icons/md";

function TagsInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue, "..", tags);
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const addNewTag = () => {
    console.log("button clicked", inputValue.trim());
    if (inputValue.trim() != "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    console.log("dlete", "..", tagToRemove);
    setTags(tags.filter((tag) => tag != tagToRemove));
  };
  return (
    <div>
      {tags.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center text-sm gap-2 p-1 bg-slate-200 rounded-md"
            >
              #{tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center ">
        <input
          className="outline-none border border-gray-400 rounded-md p-2 mt-2 mr-1"
          type="text"
          placeholder="tags"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={addNewTag}
          className="w-9 h-9 ml-2 mt-2 flex items-center justify-center rounded-md border border-blue-700 bg-white hover:bg-blue-700"
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export default TagsInput;
