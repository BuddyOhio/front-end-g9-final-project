import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChangePasswordProfile = () => {
  // Set Value
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);

  // Set Error
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setPasswordError("");
    setConfirmPasswordError("");

    if (!password) {
      setPasswordError("Please input password!");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Please input password!");
    }
  };

  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <header>
          <div className="bg-[#66d2e8] pt-8 pb-14 md:bg-white md:py-5">
            <div className="flex flex-wrap justify-center w-full items-center relative">
              <Link
                to="/security"
                className="bg-white justify-self-start py-3.5 px-4 rounded-xl shadow-md absolute left-[10%]"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="ิBack" />
              </Link>

              <div className="text-blue-900 font-extrabold text-lg md:text-xl xl:text-2xl">
                <h2 className="">Change Password</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-[#66d2e8] md:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 md:px-24 md:text-xs w-full max-w-[1048px] ">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="password-input"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                error={!!passwordError}
                helperText={passwordError}
              />
              <TextField
                id="confirm-password-input"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                error={!!confirmPasswordError}
                helperText={confirmPasswordError}
              />
              <Button
                onClick={handleClick}
                variant="contained"
                className="bg-[#66d2e8] hover:bg-[#39bad4] p-[12px] mt-[30vh] md:mt-[35vh]"
              >
                Contained
              </Button>
            </Box>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
};

export default ChangePasswordProfile;
