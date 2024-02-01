import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

const CreateAccount = () => {
  // Set Value
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Set Error
  const [fullnameError, setFullnameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  const createUser = async (fullname, dob, email, gender, weight, height) => {
    const response = await axios.post("http://localhost:3000/create", {
      fullname: fullname,
      date_of_birth: dob,
      email: email,
      gender: gender,
      weight: weight,
      height: height,
    });
    console.log(response);
    if (response.status === 200 && response.data) {
      alert("Successfully created new member!");
      console.log("-------------------------------------------------------");
    } else {
      alert("Failed to create");
    }
  };

  // Handle Button Click
  const handleClick = (e) => {
    e.preventDefault();
    setFullnameError("");
    setDobError("");
    setEmailError("");
    setGenderError("");
    setWeightError("");
    setHeightError("");

    const regex = /^[a-zA-Z][a-zA-Z ]{2,33}[a-zA-Z]$/;
    const validName = regex.test(fullname);

    if (!fullname || !validName) {
      setFullnameError(
        "Fullname must be max 35 characters long and only contain letters"
      );
    }
    if (!dob) {
      setDobError("Please input date of birth!");
    }
    if (!email || !email.includes("@")) {
      setEmailError("Please input valid email!");
    }
    if (!gender) {
      setGenderError("Please input gender!");
    }
    if (!weight) {
      setWeightError("Please input weight!");
    }
    if (!height) {
      setHeightError("Please input height!");
    }

    createUser(fullname, dob, email, gender, weight, height);
  };

  return (
    <div>
      <div className="flex">
        {/* <!-- LEFT --> */}
        <div className="hidden md:block flex-1 h-screen w-full md:w-1/2 bg-theme md:bg-[#66d2e8]">
          <div className="justify-center align-middle flex p-10 my-10">
            <img src="../../../public/doggold.png" />
          </div>
          <div className="text-center text-5xl text-white font-extrabold">
            <h1>DOG GO</h1>
          </div>
        </div>

        {/* <!-- RIGHT --> */}
        <div className="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
          <div className="pt-8 px-6 md:px-24 md:text-xs w-full max-w-[1048px] flex flex-col gap-4 items-center justify-center h-full 2xl:px-36">
            <div className="font-bold text-2xl text-blue-900">
              <h2>Create Your Profile</h2>
            </div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* Fullname */}
              <TextField
                id="Fullname"
                label="Fullname"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                error={!!fullnameError}
                helperText={fullnameError}
              />

              {/* Nickname */}
              {/* <TextField
                id="outlined-basic"
                label="Nickname"
                variant="outlined"
              /> */}

              {/* Date of Birth */}
              <div className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e)}
                    error={!!dobError}
                    helperText={dobError}
                    slotProps={{ textField: { fullWidth: true } }}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: dobError ? "#D32F2F" : undefined,
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: dobError ? "#D32F2F" : undefined,
                        },
                      },
                      "& .MuiSvgIcon-root": {
                        color: dobError ? "#D32F2F" : undefined,
                      },
                    }}
                  />
                </LocalizationProvider>
                {dobError && (
                  <div className="text-[#D32F2F] text-xs mt-[3px] ml-[14px]">
                    {dobError}
                  </div>
                )}
              </div>

              {/* Email */}
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />

              {/* Phone Number */}
              {/* <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              /> */}

              {/* Gender */}
              <FormControl error={!!genderError}>
                <InputLabel id="selectGender">Gender</InputLabel>
                <Select
                  labelId="selectGender"
                  id="selectGender"
                  value={gender}
                  label="Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {genderError && (
                  <div className="text-[#D32F2F] text-xs mt-[3px] ml-[14px]">
                    {genderError}
                  </div>
                )}
              </FormControl>

              {/* Weight + Height */}
              <Box
                sx={{
                  display: "flex",
                  padding: "0px",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                {/* Weight */}
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={weight}
                    id="weight"
                    label="Weight"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setWeight(e.target.value)}
                    error={!!weightError}
                    helperText={weightError}
                  />
                </Box>
                {/* Height */}
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={height}
                    id="height"
                    label="Height"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    onChange={(e) => setHeight(e.target.value)}
                    error={!!heightError}
                    helperText={heightError}
                  />
                </Box>
              </Box>
              {/* Button */}
              <Button
                onClick={handleClick}
                variant="contained"
                className="bg-[#66d2e8] hover:bg-[#39bad4] p-[12px] mt-4 my-8"
              >
                Contained
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
