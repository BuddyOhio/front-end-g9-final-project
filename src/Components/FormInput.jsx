import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import dumbell from "../../public/dumbell.svg";
import { Typography } from "@mui/material";

const FormInput = () => {
  const [activityType, setActivityType] = useState("");
  const [activityDate, setActivityDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState("");
  const [activityName, setActivityName] = useState("Running in the park");
  const [description, setDescription] = useState("");
  const [specify, setSpecify] = useState("");

  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [startTimeError, setStartTimeError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [radioError, setRadioError] = useState("");
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

    if (!selectedRadioValue) {
      setRadioError("Please select an option");
    } else if (
      (selectedRadioValue === "makeAs-completed" && activityType !== "Other") ||
      (selectedRadioValue === "remindMe-later" && duration === "")
    ) {
      setRadioError("Invalid selection for the chosen option");
    }

    // Check if there are any errors
    if (
      nameError ||
      descriptionError ||
      typeError ||
      dateError ||
      startTimeError ||
      durationError ||
      specifyError ||
      radioError
    ) {
      return;
    }

    // Proceed with the form submission logic
    console.log("Form submitted!");
  };

  return (
    <div>
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
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
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
              <MenuItem value="Run">3 Minute</MenuItem>
              <MenuItem value="Bicycle">5 Minute</MenuItem>
              <MenuItem value="Swim">10 Minute</MenuItem>
              <MenuItem value="Hike">15 Minute</MenuItem>
              <MenuItem value="Walk">30 Minute</MenuItem>
              <MenuItem value="Other">40 Minute</MenuItem>
              <MenuItem value="Other">50 Minute</MenuItem>
              <MenuItem value="Other">60 Minute</MenuItem>
            </Select>
          </FormControl>
          {durationError && (
            <div className="text-red-500 text-xs">{durationError}</div>
          )}
        </div>
      </div>
      <FormControl error={!!radioError}>
        <RadioGroup
          row
          name="row-radio-buttons-group"
          value={selectedRadioValue}
          onChange={(e) => {
            setSelectedRadioValue(e.target.value);
            setRadioError("");
          }}
        >
          <FormControlLabel
            value="remindMe-later"
            control={
              <Radio sx={{ color: radioError ? "#EF4444" : undefined }} />
            }
            label={
              <Typography
                variant="body2"
                sx={{
                  color: radioError ? "#EF4444" : undefined,
                  "& .MuiSvgIcon-root": {
                    color: radioError ? "#EF4444" : undefined,
                  },
                }}
              >
                Remind me later
              </Typography>
            }
          />
          <FormControlLabel
            value="makeAs-completed"
            control={
              <Radio sx={{ color: radioError ? "#EF4444" : undefined }} />
            }
            label={
              <Typography
                variant="body2"
                sx={{
                  color: radioError ? "#EF4444" : undefined,
                  "& .MuiSvgIcon-root": {
                    color: radioError ? "#EF4444" : undefined,
                  },
                }}
              >
                Make as completed
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>
      {radioError && <div className="text-red-500 text-xs">{radioError}</div>}

      <div className="flex items-center justify-center my-8">
        <img src={dumbell} alt="Dumbell-pic" width={"110px"} />
      </div>

      <div className="flex items-center justify-center m-5">
        <button
          type="submit"
          className="rounded-xl bg-cyan-400 w-64 py-2.5 h-14 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleSubmit}
        >
          Add Activity
        </button>
      </div>
    </div>
  );
};

export default FormInput;
