import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const onClose = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-3 mt-8">
          <NoteCard
            title="meeting on the date 7th aprillll"
            date="3rd Apr 2024"
            content="afd  fdafls  sdlgf  gf la alfg las l gfs allfa 7th aprillll"
            tags="#meeting"
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="meeting on the date 7th aprillll"
            date="3rd Apr 2024"
            content="afd  fdafls  sdlgf  gf la alfg las l gfs allfa 7th aprillll"
            tags="#meeting"
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
        <button
          className="w-16 h-16 flex justify-center items-center rounded-xl text-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10 transition-all duration-300 ease-in-out"
          onClick={() => {
            setOpenAddEditModal({
              isShown: true,
              type: "add",
              data: null,
            });
          }}
        >
          <MdAdd className="text-[32px] text-white" />
        </button>
        <Modal
          isOpen={openAddEditModal.isShown}
          onRequestClose={() => {}}
          style={{
            overlay: {
              backgroungColor: "rgba(0,0,0,0.2)",
            },
          }}
          contentLabel=""
          className="w-[40%] mx-auto overflow-auto max-h-3/4 bg-white mt-14 p-5"
        >
          <AddEditNotes
            type={openAddEditModal.type}
            noteData={openAddEditModal.data}
            onClose={onClose}
          />
        </Modal>
      </div>
    </>
  );
}

export default Home;
