import LeftPage from "./LeftPage";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./login.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import axios from "axios";

const Register = () => {
  // set value
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // set error
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [heightError, setHeightError] = useState("");

  // use Navigate
  const navigate = useNavigate();

  // function handler
  const handleFullNameChange = (event) => {
    const inputValue = event.target.value;
    setFullName(inputValue);
    setFullNameError(inputValue.trim() === "");
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError(!isValidEmail(inputValue));
  };

  const handlePasswordChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    setPasswordError(inputValue.length < 6); // ตัวอย่าง: ต้องมีอย่างน้อย 6 ตัวอักษร
  };

  const isValidEmail = (email) => {
    // ตรวจสอบว่า email มีรูปแบบที่ถูกต้องหรือไม่
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    // ตรวจสอบ validation ก่อนที่จะทำการ submit หรือต้องการทำอย่างอื่น
    setFullNameError(fullName.trim() === "");
    setEmailError(!isValidEmail(email));
    setPasswordError(password.length < 6);
    e.preventDefault();

    if (fullName.trim() === "" || !isValidEmail(email) || password.length < 6) {
      // ไม่ผ่าน validation
      alert("Please entry input");
    } else {
      // ผ่าน validation
      axios
        .post("http://localhost:8000/register", {
          name: fullName,
          email,
          password,
          date_of_birth: dob,
          email: email,
          gender: gender,
          weight: weight,
          height: height,
        })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          const response = err.response.data;
          if (response.error.message === "already exist") {
            alert(
              "this email has been registered. You can login using this email"
            );
          }
        });
    }
  };
  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
        <form
          action="Desktop_login.html"
          className="flex flex-col h-dvh md:flex-none"
        >
          <div className="my-5 md:mt-auto flex-1 md:flex-none">
            <div className="md:hidden">
              <img className="w-1/3 mx-auto" src="public/login_Logo.png" />
            </div>

            <LoginRegisterTab currentUrl={"/Register"} color="sky-400" />

            <div className="text-center text-blue-950 hidden md:block">
              <h1 className="font-semibold text-2xl mb-5 ">
                Create Your Account
              </h1>
              <p className="text-sm font-thin">Let's have fun with dog</p>
            </div>
            <div className="m-auto flex-1 w-4/5 mt-10">
              <div className="input-login">
                <label className="font-semibold mx-3" for="input-fullname">
                  Full name
                </label>
                <br />

                <TextField
                  className="w-full input"
                  id="input-fullname"
                  variant="outlined"
                  type="text"
                  placeholder="Jonathan Whisky"
                  error={fullNameError}
                  value={fullName}
                  helperText={
                    fullNameError ? "Please enter your full name." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  pattern="[A-Za-z].{5,}"
                  onChange={handleFullNameChange}
                />
                <label className="font-semibold mx-3 " for="input-email">
                  Email address
                </label>
                <br />

                <TextField
                  className="w-full input"
                  id="input-email"
                  variant="outlined"
                  type="email"
                  placeholder="SiberianWhisky@gmail.com"
                  error={emailError}
                  value={email}
                  helperText={
                    emailError ? "Please enter a valid email address." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  pattern="[A-Za-z].{5,}"
                  onChange={handleEmailChange}
                />
                <label className="font-semibold mx-3" for="input-password">
                  Password
                </label>
                <br />

                <TextField
                  className="w-full input"
                  id="input-password"
                  variant="outlined"
                  type="password"
                  placeholder="**********"
                  error={passwordError}
                  value={password}
                  helperText={
                    passwordError
                      ? "Password must be at least 6 characters."
                      : ""
                  }
                  sx={{ marginBottom: 2 }}
                  pattern="[A-Za-z0-9].{8,}"
                  onChange={handlePasswordChange}
                />
                <br />
                <Box
                  sx={{
                    display: "flex",
                    padding: "0px",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div className="w-1/2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <label className="font-semibold mx-3 " for="dob">
                        Date of Birth
                      </label>
                      <DatePicker
                        id="dob"
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

                  <div className="w-1/2">
                    <label className="font-semibold mx-3 " for="selectGender">
                      Gender
                    </label>
                    <FormControl fullWidth>
                      <InputLabel id="selectGender"></InputLabel>
                      <Select
                        labelId="selectGender"
                        id="selectGender"
                        value={gender}
                        error={!!genderError}
                        placeholder="Gender"
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
                  </div>
                </Box>
                <br />
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
                    <label className="font-semibold mx-3 " for="weight">
                      Weight (kg.)
                    </label>
                    <TextField
                      fullWidth
                      value={weight}
                      id="weight"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      onChange={(e) => setWeight(e.target.value)}
                      error={!!weightError}
                      helperText={weightError}
                      placeholder="45"
                    />
                  </Box>
                  {/* Height */}
                  <Box sx={{ width: "100%" }}>
                    <label className="font-semibold mx-3 " for="height">
                      Height (cm.)
                    </label>
                    <TextField
                      fullWidth
                      value={height}
                      id="height"
                      type="number"
                      placeholder="185"
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
              </div>
            </div>
          </div>
          <div className="mb-10 md:mb-auto">
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-4/5 block m-auto p-3 rounded-xl bg-[#66d2e8] hover:bg-[#39bad4] font-bold text-md text-white text-center"
              >
                Register
              </button>
            </div>
            <div className="flex-col hidden md:block mt-10 mx-10 text-sm text-blue-950 text-center">
              <p>
                Already have an account?
                <Link to={"/login"} className="font-semibold ml-1">
                  Login here.
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
