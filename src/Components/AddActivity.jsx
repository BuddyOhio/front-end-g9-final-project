import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormInput from "./FormInput";

const AddActivity = () => {
  return (
    <div>
      <div id="add-activity" className="flex justify-between mb-2 ">
        <div className="flex items-center">
          <ArrowBackIcon style={{ fill: "#1E3A8A" }} />
          <h2 className="font-bold lg:text-2xl text-blue-900 ml-3">
            Add Activity
          </h2>
        </div>
      </div>
      <FormInput />
    </div>
  );
};

export default AddActivity;
