import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  return (
    <div className="border rounded p-4 hover:shadow-xl transition-all ease-in-out">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn   ${
            isPinned ? "text-primary" : " text-gray-500"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs mt-2">{content?.slice(0, 60)}</p>
      <div className="">
        <div className="text-sm mt-2 text-slate-500">{tags}</div>
        <div className="flex items-center gap-3">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
