import { Link } from "react-router-dom";
import Layout from "./Layout";
import { useState } from "react";

// import { user } from "../data/data.js";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function EditProfile() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  }; //   const profile = user;
  //   const [fullname, setFullname] = useState(profile.fullname);
  //   const [nickname, setNickname] = useState(profile.nickname);
  //   const [dob, setDob] = useState(profile.dob);
  //   const [email, setEmail] = useState(profile.email);
  //   const [phone, setPhone] = useState(profile.phone);
  //   const [gender, setGender] = useState(profile.gender);
  //   const [weight, setWeight] = useState(profile.weight);
  //   const [height, setHeight] = useState(profile.height);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(fullname, nickname, dob, email, phone, gender, weight, height);
  //   };
  return (
    <Layout>
      <div className="grow bg-white">
        <header>
          <div className="flex flex-col bg-blue-100 items-center gap-2 py-6 lg:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid grid-cols-3 w-full items-center ">
              {/* <!-- Go back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../picture/chevron-left-solid.svg" alt="" />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl lg:text-2xl">
                <h2 className="">Profile settings</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-44 w-44 rounded-full border-[10px] border-solid border-white relative">
              {/* <!--Profile Photo  (อาจจะต้องเพิ่มให้อยู่ใน Form ที่หลัง)--> */}
              <img
                src="../picture/pack.PNG"
                className="w-full h-full object-cover rounded-full"
                alt="User profile picture"
              />

              {/* <!-- Edit Photo Button --> */}
              <div>
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src="../picture/pen-to-square-regular.svg"
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

        {/* <!--Form  --> */}
        <main className="bg-blue-100 lg:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 lg:px-24 lg:text-xs w-full max-w-[1048px]">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Fullname"
                variant="outlined"
              />{" "}
              <TextField
                id="outlined-basic"
                label="Nickname"
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Uncontrolled picker"
                  defaultValue={dayjs("2022-04-17")}
                />
              </LocalizationProvider>
              <TextField id="outlined-basic" label="Email" variant="outlined" />{" "}
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <InputLabel id="select-gender-label">Gender</InputLabel>
              <Select
                labelId="select-gender-label"
                id="select-gender"
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
              <Box
                sx={{
                  display: "flex",
                  padding: "0px",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={50}
                    id="filled-number"
                    label="Weight"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    value={200}
                    id="filled-number"
                    label="Height"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Button
                variant="contained"
                className="bg-[#66d2e8] hover:bg-[#39bad4] p-[12px] mt-4 my-8"
              >
                Contained
              </Button>
            </Box>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default EditProfile;
