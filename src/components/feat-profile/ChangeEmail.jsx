import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChangeEmail = () => {
  // Set Value
  const [email, setEmail] = useState("");
  // Set Error
  const [emailError, setEmailError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setEmailError("");
    if (!email || !email.includes("@")) {
      setEmailError("Please input valid email!");
    } else {
      console.log("Change email successfully");
    }
  };
  return (
    <NavbarDesktop>
      <div className="grow bg-white">
        <header>
          <div className="bg-blue-100 pb-14 md:bg-white md:py-5 pt-[60px] md:pt-[0] md:mt-[80px]">
            <div className="grid grid-cols-3 w-full items-center">
              <Link
                to="/security"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="ิBack" />
              </Link>

              <div className="justify-self-center text-blue-900 font-extrabold text-lg md:text-3xl">
                <h2 className="">Change Email</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 md:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 md:px-24 md:text-xs w-full max-w-[1048px] ">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
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

export default ChangeEmail;
