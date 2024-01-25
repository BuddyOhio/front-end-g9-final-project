import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDelete from "./ModalDelete";
import FormInput from "../feat-addActivity/FormInput";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const EditActivity = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };
  return (
    <NavbarDesktop>
      {/* Header */}
      <div
        id="edit-activity-mobile-head-part"
        className="flex justify-between mb-2 "
      >
        <div className="flex items-center">
          <ArrowBackIcon style={{ fill: "#1E3A8A" }} />
          <h2 className="font-bold lg:text-2xl text-blue-900 ml-3">
            Edit Activity
          </h2>
        </div>
        <div>
          <DeleteIcon
            onClick={openDeleteModal}
            style={{ fill: "#1E3A8A", cursor: "pointer" }}
          />
        </div>
      </div>
      {isDeleteModalOpen && <ModalDelete onClose={closeDeleteModal} />}

      {/* Body */}
      <FormInput />
    </NavbarDesktop>
  );
};

export default EditActivity;
