import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDelete from "./ModalDelete";
import FormInput from "./FormInput";

const EditActivity = () => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };
  return (
    <div>
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
          <DeleteIcon onClick={openDeleteModal} style={{ fill: "#1E3A8A" }} />
        </div>
      </div>
      {isDeleteModalOpen && <ModalDelete onClose={closeDeleteModal} />}
      <FormInput />
    </div>
  );
};

export default EditActivity;
