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
import { useGlobalContext } from "../Context";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormInput = ({ activityEdit }) => {
  const { createUserActivity, updateUserActivity } = useGlobalContext();
  const [activityType, setActivityType] = useState("");
  const [activityDate, setActivityDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState("");
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [specify, setSpecify] = useState("");
  // ----------------------------------------------
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [startTimeError, setStartTimeError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [specifyError, setSpecifyError] = useState("");
  //  ----------------------------------------------
  const [isEditActivity, setIsEditActivity] = useState(false);
  const [activityID, setActivityID] = useState("");
  const navigate = useNavigate();

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
      checkName &&
      checkDesc &&
      checkDate &&
      checkStartTime &&
      checkDuration &&
      checkType
    ) {
      // Proceed with the form submission logic
      const newActivity = {
        activityName: activityName,
        activityDesc: description,
        activityType: activityType,
        activityTypeOther: specify,
        activityDate: activityDate.toDate(),
        activityTime: startTime.toDate(),
        activityDuration: duration,
        activityID: activityID,
      };
      // console.log("newActivity => ", newActivity);

      if (isEditActivity) {
        // console.log("updateUserActivity => ", newActivity);
        updateUserActivity(newActivity);
        navigate("/all-activity");
      } else {
        createUserActivity(newActivity);
        navigate("/all-activity");
      }

      // Show success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your activities has been added",
        showConfirmButton: false,
        timer: 1500,
      });

      // Set input tag to empty
      setActivityType("");
      setActivityDate(null);
      setStartTime(null);
      setDuration("");
      setActivityName("");
      setDescription("");
      setSpecify("");
    } else {
      console.log("Can not Submit");
    }
  };

  const setInputForm = () => {
    setIsEditActivity(true);
    {
      /* 
      activityDate : "2024-01-16T15:46:00.000Z"
      activityDesc : "eee"
      activityDuration : "30"
      activityId : "65bbbabb830c5cca20d800f4"
      activityName : "eee"
      activityType : "Walk"
      activityTypeOther : "" */
    }

    const [
      {
        activityName,
        activityDesc,
        activityType,
        activityTypeOther,
        activityDate,
        activityDuration,
        activityId,
      },
    ] = activityEdit;

    // console.log("activityEdit => ", ...activityEdit);
    setActivityName(activityName);
    setDescription(activityDesc);
    setActivityType(activityType);
    setSpecify(activityTypeOther);
    setActivityDate(dayjs(activityDate));
    setStartTime(dayjs(activityDate));
    setDuration(activityDuration);
    setActivityID(activityId);
  };

  useEffect(() => {
    if (activityEdit) {
      if (activityEdit.length !== 0) {
        setInputForm();
      }
    }
  }, [activityEdit]);

  return (
    <form className="px-8">
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
              error={!!durationError}
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
        <button
          type="submit"
          className="rounded-xl bg-cyan-400 w-64 py-2.5 h-14 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {isEditActivity ? "Edit Activity" : "Add Activity"}
        </button>
      </div>
    </form>
  );
};

export default FormInput;
