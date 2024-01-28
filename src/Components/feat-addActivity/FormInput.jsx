import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import FormControl from "@mui/material/FormControl";
import dumbell from "../../../public/dumbell.svg";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../Context";
import { useParams } from "react-router-dom";

const FormInput = ({ isEditActivity }) => {
  const { createUserActivity, userActivities } = useGlobalContext();
  const [activityType, setActivityType] = useState("");
  const [activityDate, setActivityDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState("");
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [specify, setSpecify] = useState("");
  const [activityEdit, setActivityEdit] = useState([]);
  // Get the activityId by using useParams()
  const { activityId } = useParams();
  // ----------------------------------------------
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [startTimeError, setStartTimeError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [specifyError, setSpecifyError] = useState("");

  const handleActivityTypeChange = (e) => {
    const selectedType = e.target.value;
    setActivityType(selectedType);
    setSpecify(""); // Reset Specify field when the Activity Type changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setNameError("");
    setDescriptionError("");
    setTypeError("");
    setDateError("");
    setStartTimeError("");
    setDurationError("");
    setSpecifyError("");

    // Basic validation
    if (!activityName) {
      setNameError("Please enter an activity name");
    }

    if (!description) {
      setDescriptionError("Please enter a description");
    }

    if (!activityType) {
      setTypeError("Please select an activity type");
    }

    if (!activityDate) {
      setDateError("Please select an activity date");
    }

    if (activityType === "Other" && !specify) {
      setSpecifyError("Please specify if you choose Other");
    }

    if (!startTime) {
      setStartTimeError("Please select a start time");
    }

    if (!duration) {
      setDurationError("Please enter the duration");
    }

    // Check if there are any errors
    if (
      nameError ||
      descriptionError ||
      typeError ||
      dateError ||
      startTimeError ||
      durationError ||
      specifyError
    ) {
      return;
    }
  };

  const handleSubmitNewActivity = (e) => {
    e.preventDefault();

    // console.log("handleSubmitNewActivity");
    const checkName = activityName !== "";
    const checkDesc = description !== "";
    const checkDate = activityDate !== null;
    const checkStartTime = startTime !== null;
    const checkDuration = duration !== "";
    let checkType = false;
    if (activityType === "Other") {
      specify !== "" ? (checkType = true) : (checkType = false);
    } else if (activityType !== "") {
      checkType = true;
    }

    if (
      (checkName,
      checkDesc,
      checkDate,
      checkStartTime,
      checkDuration,
      checkType)
    ) {
      // Proceed with the form submission logic
      const actId = uuidv4();
      const actType = activityType === "Other" ? specify : activityType;

      const formatDateArray = (date) => {
        return date.toDate().toString().split(" ");
      };

      const currentDateTime = new Date();
      const activityDateArray = formatDateArray(activityDate);
      const startTimeArray = formatDateArray(startTime);
      const formattedDateTime = `${activityDateArray[0]} ${activityDateArray[1]} ${activityDateArray[2]} ${activityDateArray[3]} ${startTimeArray[4]} ${startTimeArray[5]} ${startTimeArray[6]}`;
      const activityDateTime = new Date(formattedDateTime);
      // console.log("currentDateTime: ", currentDateTime);
      // console.log("activityDateTime: ", activityDateTime);

      let actStatus = "";
      if (activityDateTime > currentDateTime) {
        actStatus = "uncompleted";
      } else if (activityDateTime < currentDateTime) {
        actStatus = "completed";
      } else {
        actStatus = "completed";
      }

      // {
      //   userId: "45db858f-b5de-48fd-aed4-19c2a0c34fa5",
      //   activityId: "3bf92c64-2f19-4e13-b527-867c7d4eaf87",
      //   activityName: "Evening Bike Ride",
      //   activityDesc:
      //     "Cruised along the city streets on my bike, enjoying the cool breeze.",
      //   activityType: "Cycling",
      //   activityDateTime: Fri Jan 26 2024 00:35:00 GMT+0700 (เวลาอินโดจีน) {},
      //   activityDuration: "40 minutes",
      //   activityStatus: "completed",
      // }

      const newUserActivity = {
        activityId: actId,
        activityName: activityName,
        activityDesc: description,
        activityType: actType,
        activityDateTime: activityDateTime,
        activityDuration: duration,
        activityStatus: actStatus,
      };
      createUserActivity(newUserActivity);
      // console.log("newActivity: ", newActivity);
    }
  };

  // Set value of each input tag when edit case
  // const setEditActivity = () => {
  // if (activityEdit === []) {
  //   return;
  // } else {
  //   console.log("activityEdit: ", activityEdit);
  // }
  // const {
  //   activityId,
  //   activityName,
  //   activityDesc,
  //   activityType,
  //   activityDateTime,
  //   activityDuration,
  //   activityStatus,
  // } = activityEdit;
  // console.log("activityName: ", activityName);

  // setActivityName(activityName.activityName);
  // setDescription(activityDesc);
  // setActivityDate(activityDateTime);
  // setStartTime(activityDateTime);
  // setDuration(activityDuration);
  // if (
  //   activityType === "Run" ||
  //   activityType === "Bicycle" ||
  //   activityType === "Swim" ||
  //   activityType === "Hike" ||
  //   activityType === "Walk"
  // ) {
  //   setActivityType(activityType);
  //   setSpecify("");
  // } else {
  //   setActivityType("Other");
  //   setSpecify(activityType);
  // }
  // console.log("activityEdit: ", activityEdit);
  // console.log("activityDuration: ", activityDuration);
  // };

  useEffect(() => {
    if (isEditActivity) {
      const dataEdit = userActivities.filter(
        (activity) =>
          activity.activityId === "76e9dcb5-7b32-4c43-827a-b5d6f7a61c0e"
      );
      setActivityEdit(dataEdit);
    }
  }, []);

  useEffect(() => {
    console.log(activityEdit);
  }, [activityEdit]);

  return (
    <form>
      <TextField
        id="activityName"
        label="Activity Name"
        multiline
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
        fullWidth
        error={!!nameError}
        helperText={nameError}
        style={{ margin: "10px 0" }}
        InputProps={{ sx: { borderRadius: 3 } }}
        placeholder="Running in the park"
        autoFocus={true}
      />

      <TextField
        id="description"
        label="Description"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        error={!!descriptionError}
        helperText={descriptionError}
        style={{ margin: "5px 0" }}
        InputProps={{ sx: { borderRadius: 3 } }}
      />

      <div className="flex flex-row mt-3 w-full">
        <div className="w-1/2 mr-2">
          <FormControl fullWidth error={!!typeError}>
            <InputLabel id="activityType">Activity Type</InputLabel>
            <Select
              labelId="activityType"
              id="activityType"
              label="Activity Type"
              value={activityType}
              onChange={handleActivityTypeChange}
              style={{ borderRadius: "15px" }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: typeError ? "#EF4444" : undefined,
                },
                "& .MuiSvgIcon-root": {
                  color: typeError ? "#EF4444" : undefined,
                },
              }}
            >
              <MenuItem value="Run">Run</MenuItem>
              <MenuItem value="Bicycle">Bicycle</MenuItem>
              <MenuItem value="Swim">Swim</MenuItem>
              <MenuItem value="Hike">Hike</MenuItem>
              <MenuItem value="Walk">Walk</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          {typeError && <div className="text-red-500 text-xs">{typeError}</div>}
        </div>

        <div className="w-1/2 ml-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Activity Date"
              value={activityDate}
              onChange={(newValue) => setActivityDate(newValue)}
              error={!!dateError}
              helperText={dateError}
              slotProps={{ textField: { fullWidth: true } }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: dateError ? "#EF4444" : undefined,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    borderColor: dateError ? "#EF4444" : undefined,
                  },
                },
                "& .MuiSvgIcon-root": {
                  color: dateError ? "#EF4444" : undefined,
                },
              }}
            />
          </LocalizationProvider>
          {dateError && <div className="text-red-500 text-xs">{dateError}</div>}
        </div>
      </div>

      {/* Specify form - Conditionally rendered */}
      {activityType === "Other" && (
        <TextField
          id="specify"
          label="If you choose other, please specify"
          multiline
          value={specify}
          onChange={(e) => setSpecify(e.target.value)}
          fullWidth
          error={!!specifyError}
          helperText={specifyError}
          style={{ margin: "15px 0" }}
          InputProps={{ sx: { borderRadius: 3 } }}
        />
      )}

      <div className="flex flex-row w-full my-3">
        <div className="w-1/2 mr-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Start time"
              value={startTime}
              onChange={(newValue) => setStartTime(newValue)}
              error={!!startTimeError}
              helperText={startTimeError}
              slotProps={{ textField: { fullWidth: true } }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: startTimeError ? "#EF4444" : undefined,
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "15px",
                    borderColor: startTimeError ? "#EF4444" : undefined,
                  },
                },
                "& .MuiSvgIcon-root": {
                  color: startTimeError ? "#EF4444" : undefined,
                },
              }}
            />
          </LocalizationProvider>
          {startTimeError && (
            <div className="text-red-500 text-xs">{startTimeError}</div>
          )}
        </div>
        <div className="w-1/2 ml-2">
          <FormControl fullWidth error={!!typeError}>
            <InputLabel id="duration">Duration</InputLabel>
            <Select
              labelId="duration"
              id="duration"
              label="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={{ borderRadius: "15px" }}
              sx={{
                "& .MuiInputLabel-root": {
                  color: typeError ? "#EF4444" : undefined,
                },
                "& .MuiSvgIcon-root": {
                  color: typeError ? "#EF4444" : undefined,
                },
              }}
            >
              <MenuItem value="3">3 Minute</MenuItem>
              <MenuItem value="5">5 Minute</MenuItem>
              <MenuItem value="10">10 Minute</MenuItem>
              <MenuItem value="15">15 Minute</MenuItem>
              <MenuItem value="30">30 Minute</MenuItem>
              <MenuItem value="40">40 Minute</MenuItem>
              <MenuItem value="50">50 Minute</MenuItem>
              <MenuItem value="60">60 Minute</MenuItem>
            </Select>
          </FormControl>
          {durationError && (
            <div className="text-red-500 text-xs">{durationError}</div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center my-8">
        <img src={dumbell} alt="Dumbell-pic" width={"110px"} />
      </div>

      <div className="flex items-center justify-center m-5">
        {!isEditActivity && (
          <button
            type="submit"
            className="rounded-xl bg-cyan-400 w-64 py-2.5 h-14 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={(e) => {
              handleSubmit(e);
              handleSubmitNewActivity(e);
            }}
          >
            Add Activity
          </button>
        )}
        {isEditActivity && (
          <button
            type="submit"
            className="rounded-xl bg-cyan-400 w-64 py-2.5 h-14 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={(e) => {
              handleSubmit(e);
              handleSubmitNewActivity(e);
            }}
          >
            Edit Activity
          </button>
        )}
      </div>
    </form>
  );
};

export default FormInput;
