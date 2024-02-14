import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalDelete from "./ModalDelete";
import FormInput from "../feat-addActivity/FormInput";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditActivity = () => {
  const { userActivities, deleteUserActivity } = useGlobalContext();
  const [activityEdit, setActivityEdit] = useState([]);
  const { activityId } = useParams();
  const navigate = useNavigate();

  const getUserActivityForEdit = async () => {
    const activityEdit = await userActivities.filter(
      (activity) => activity.activityId === activityId
    );
    // console.log(activityEdit);
    setActivityEdit(activityEdit);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    getUserActivityForEdit();
  }, [activityId]);

  const handleDelete = (activityId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserActivity(activityId);
        Swal.fire({
          title: "Deleted!",
          text: "Your activity has been deleted.",
          icon: "success",
        });
        navigate("/all-activity");
      }
    });
  };

  const handleDeleteButtonClick = (activityId, event) => {
    event.preventDefault();
    handleDelete(activityId);
  };

  return (
    <NavbarDesktop>
      {/* Header */}
      <div
        id="edit-activity-mobile-head-part"
        className="flex justify-between mb-2 lg:pt-20 pt-14"
      >
        <div className="flex items-center px-8">
          <ArrowBackIcon
            style={{ fill: "#1E3A8A" }}
            className="md:hidden"
            onClick={handleGoBack}
          />
          <h2 className="font-bold text-xl lg:text-2xl text-blue-900 ml-3">
            Edit Activity
          </h2>
        </div>
        <div className="px-8">
          <DeleteIcon
            style={{ fill: "#1E3A8A", cursor: "pointer" }}
            onClick={(event) => handleDeleteButtonClick(activityId, event)}
          />
        </div>
      </div>

      {/* Body */}
      {activityEdit.length !== 0 && <FormInput activityEdit={activityEdit} />}
    </NavbarDesktop>
  );
};

export default EditActivity;
