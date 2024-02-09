import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormInput from "./FormInput";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import { Link } from "react-router-dom";

const AddActivity = () => {
  return (
    <NavbarDesktop>
      {/* Header */}
      <div
        id="add-activity"
        className="flex justify-between mb-2 lg:pt-20 pt-12"
      >
        <div className="flex items-center ">
          <Link to={"/"}>
            <ArrowBackIcon style={{ fill: "#1E3A8A" }} />
          </Link>

          <h2 className="font-bold text-xl lg:text-2xl text-blue-900 ml-3">
            Add Activity
          </h2>
        </div>
      </div>

      {/* Body */}
      <FormInput />
      
    </NavbarDesktop>
  );
};

export default AddActivity;
