import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import "./login.css";

const CreateAccount = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      // สามารถทำอย่างอื่นที่ต้องการ, เช่น alert('Please enter valid inhtmlFormation');
    } else {
      // ผ่าน validation
      navigate("/login");
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

            <LoginRegisterTab currentUrl={"/createaccount"} color="sky-400" />

            <div className="text-center text-blue-950 hidden md:block">
              <h1 className="font-semibold text-2xl mb-5">
                Create Your Account
              </h1>
              <p className="text-sm font-thin">Let's have fun with dog</p>
            </div>

            <div className="m-auto flex-1 w-4/5 mt-10">
              <div className="input-login">
                <label className="font-semibold mx-3" htmlFor="input-name">
                  Full name
                </label>
                <br />
                {/* <input
                  className="border-2 p-2 rounded-lg w-full mb-1"
                  type="text"
                  id="input-name"
                  placeholder="Jonathan Whiskey"
                  required
                /> */}
                <TextField
                  className=" w-full"
                  error={fullNameError}
                  id="input-name"
                  value={fullName}
                  placeholder="Jonathan Whiskey"
                  helperText={
                    fullNameError ? "Please enter your full name." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  pattern="[A-Za-z].{5,}"
                  onChange={handleFullNameChange}
                />
                <br />

                <label className="font-semibold mx-3 " htmlFor="input-email">
                  Email address
                </label>
                <br />
                {/* <input
                  className="border-2 p-2 rounded-lg w-full mb-1 "
                  type="email"
                  id="input-email"
                  placeholder="siberianwhisky@gmail.com"
                  required
                /> */}
                <TextField
                  className=" w-full input"
                  type="email"
                  error={emailError}
                  value={email}
                  id="input-email"
                  placeholder="Siberainwhiskey@gmail.com"
                  helperText={
                    emailError ? "Please enter a valid email address." : ""
                  }
                  sx={{ marginBottom: 2 }}
                  onChange={handleEmailChange}
                />
                <br />
                <label className="font-semibold mx-3" htmlFor="input-password">
                  Password
                </label>
                <br />
                {/* <input
                  className="border-2 p-2 rounded-lg w-full mb-1"
                  type="password"
                  id="input-password"
                  placeholder="************"
                  required
                /> */}
                <TextField
                  className=" w-full"
                  type="password"
                  error={passwordError}
                  value={password}
                  id="input-password"
                  placeholder="**********"
                  helperText={
                    passwordError
                      ? "Password must be at least 6 characters."
                      : ""
                  }
                  pattern="[A-Za-z0-9].{8,}"
                  onChange={handlePasswordChange}
                />
                {/* <Alert severity="error">Please entry your password.</Alert> */}

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

export default CreateAccount;
