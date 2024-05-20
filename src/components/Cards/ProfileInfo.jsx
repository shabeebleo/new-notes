import React from "react";
import { getInitials } from "../../utils/helper";

function ProfileInfo({ onLogOut }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12  flex items-center justify-center rounded-full text-slate-700 bg-slate-200">
        {getInitials("Leo Messi")}
      </div>
      <div>
        <p className="text-sm font-medium">Leo</p>
        <button className="underline text-slate-700" onClick={onLogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
