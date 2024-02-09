import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

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

function EditProfile() {
  // Set Value
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState(null);
  // const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Set Error
  const [fullnameError, setFullnameError] = useState("");
  const [dobError, setDobError] = useState("");
  // const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  // Handle Button Click
  const handleClick = (e) => {
    e.preventDefault();
    setFullnameError("");
    setDobError("");
    // setEmailError("");
    setGenderError("");
    setWeightError("");
    setHeightError("");

    // Check Valid name Function
    const regex = /^[a-zA-Z][a-zA-Z ]{2,33}[a-zA-Z]$/;
    const validName = regex.test(fullname);

    // Set error message
    if (!fullname || !validName) {
      setFullnameError(
        "Fullname must be max 35 characters long and only contain letters"
      );
    }
    if (!dob) {
      setDobError("Please input date of birth!");
    }
    // if (!email) {
    //   setEmailError("Please input email!");
    // }
    if (!gender) {
      setGenderError("Please input gender!");
    }
    if (!weight) {
      setWeightError("Please input weight!");
    }
    if (!height) {
      setHeightError("Please input height!");
    }

    // Submit Form Validation
    if (!fullname || !validName || !dob || !gender || !weight || !height) {
      console.log("Failed to create user");
    } else {
      // console.log(fullname, dob, email, gender, weight, height);
      console.log(fullname, dob, gender, weight, height);
    }
  };
  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <header>
          <div className="flex flex-col bg-blue-100 items-center gap-2 py-6 md:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid grid-cols-3 w-full items-center ">
              {/* <!-- Go back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl md:text-2xl">
                <h2 className="">Profile settings</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-44 w-44 rounded-full border-[10px] border-solid border-white relative">
              {/* <!--Profile Photo  (อาจจะต้องเพิ่มให้อยู่ใน Form ที่หลัง)--> */}
              <img
                src="../../../public/pack.PNG"
                className="w-full h-full object-cover rounded-full"
                alt="User profile picture"
              />

              {/* <!-- Edit Photo Button --> */}
              <div>
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src="../../../public/pen-to-square-regular.svg"
                    alt="edit profile picture"
                    className="absolute bottom-0 right-1 p-0.5 h-7 hover:h-8"
                  />
                </label>
                <input
                  type="file"
                  name=""
                  id="image-upload"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 md:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 md:px-24 md:text-xs w-full max-w-[1048px]">
            {/* Form */}
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
              {/* <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              /> */}

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
        </main>
      </div>
    </NavbarDesktop>
  );
}

export default EditProfile;
