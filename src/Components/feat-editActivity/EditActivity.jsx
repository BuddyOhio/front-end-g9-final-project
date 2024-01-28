import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDelete from "./ModalDelete";
import FormInput from "../feat-addActivity/FormInput";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";

const EditActivity = () => {
  const { userActivities, deleteUserActivity } = useGlobalContext();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditActivity, setIsEditActivity] = useState(true);
  

  // const setPropActivityEdit = () => {
  //   // console.log("activityId: ", activityId);
  //   // console.log("userActivities: ", userActivities);
  //   const activity = userActivities.filter(
  //     (activity) => activity.activityId === activityId
  //   );
  //   setActivityEdit(activity);
  // };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // useEffect(() => {
  //   setPropActivityEdit();
  // }, [userActivities]);

  // useEffect(() => {
  //   console.log("activityEdit: ", activityEdit);
  // }, [activityEdit]);

  // useEffect(() => {
  //   // console.log("activityId: ", activityId);
  //   // console.log("userActivities: ", userActivities);
  // }, [activityEdit]);

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
      <FormInput isEditActivity={isEditActivity} />
    </NavbarDesktop>
  );
};

export default EditActivity;
