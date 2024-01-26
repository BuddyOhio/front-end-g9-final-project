import LeftPage from "./LeftPage";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./login.css";

const ChangePasswordAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 h-screen w-100 max-md:bg-none md:bg-cover bg-theme-right">
        <div className="flex flex-col h-screen">
          <div className="mt-36 md:my-auto flex flex-col h-screen md:h-auto">
            <div className="text-sky-300 md:text-center md:text-blue-950 mx-11 mb-10">
              <h1 className="font-semibold text-2xl mb-3">
                Change New Password
              </h1>
              <p className="text-sm font-semibold text-gray-400 md:text-gray-500">
                Enter a different password with the previous
              </p>
            </div>
            <form action="Desktop_succesPass.html">
              <div className="flex-1 w-auto mx-10">
                <TextField
                  className="w-full"
                  id="outlined-basic"
                  label="Email"
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
                <br />
                <TextField
                  className="w-full"
                  id="outlined-basic"
                  label="Password"
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
              <div className="mt-10 mx-10 text-md text-center flex flex-1 align-bottom">
                <button
                  type="submit"
                  className="w-full block mb-auto mx-auto p-3 rounded-xl bg-[#66d2e8]  hover:bg-[#39bad4] font-bold text-md text-white text-center"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordAccount;
