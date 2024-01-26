import LeftPage from "./LeftPage";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./login.css";
import axios from "axios";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
        })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          const response = err.response.data;
          if (response.error === "already exist") {
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
              <h1 className="font-semibold text-2xl mb-5">
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
                  className="w-full"
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
                  className="w-full"
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
                  className="w-full"
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
