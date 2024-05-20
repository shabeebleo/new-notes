import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
function SearchBar({ value, onChange, handleSearch, onClearSearch }) {
  return (

    <div className="w-80  px-4 flex items-center bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes "
        value={value}
        onChange={onChange}
        className="py-[10px] w-full text-xs bg-transparent outline-none "
      />
      {value && (
        <IoMdClose
          className="text-slate-400 cursor-pointer mr-1 hover:text-black"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass onClick={handleSearch} className="text-slate-400 cursor-pointer hover:text-black" />
    </div>
  );
}

export default SearchBar;
