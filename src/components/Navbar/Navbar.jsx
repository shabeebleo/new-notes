import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const onLogOut = () => {
    navigate("/login");
  };

  const onClearSearch = () => {
    setSearchQuery("");
  };
  const handleSearch=()=>{
    console.log("searching");
  }
  return (
    <div className="px-7 py-2 flex items-center justify-between drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        onClearSearch={onClearSearch}
        handleSearch={handleSearch}
      />
      <ProfileInfo onLogOut={onLogOut} />
    </div>
  );
}

export default Navbar;
