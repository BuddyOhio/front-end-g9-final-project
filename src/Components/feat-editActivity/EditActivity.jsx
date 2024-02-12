import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDelete from "./ModalDelete";
import FormInput from "../feat-addActivity/FormInput";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import axios from "axios";

const EditActivity = () => {
  const { userActivities } = useGlobalContext();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activityEdit, setActivityEdit] = useState([]);
  const { activityId } = useParams();

  const getUserActivity = async () => {
    const activityEdit = await userActivities.filter(
      (activity) => activity.activityId === activityId
    );
    // console.log(activityEdit);
    setActivityEdit(activityEdit);
    // const actId = {
    //   activityId: activityId,
    // };

    // try {
    //   const response = await axios.get("http://127.0.0.1:3000/get-activity", {
    //     params: actId,
    //   });

    //   if (response.status === 200) {
    //     setActivityEdit(response.data);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    getUserActivity();
  }, [activityId]);

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
        className="flex justify-between mb-2 lg:pt-20 pt-12"
      >
        <div className="flex items-center">
          <ArrowBackIcon style={{ fill: "#1E3A8A" }} className="md:hidden"/>
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
      {isDeleteModalOpen && (
        <ModalDelete
          closeDeleteModal={closeDeleteModal}
          activityId={activityId}
        />
      )}

      {/* Body */}
      {activityEdit.length !== 0 && <FormInput activityEdit={activityEdit} />}
    </NavbarDesktop>
  );
};

export default EditActivity;
