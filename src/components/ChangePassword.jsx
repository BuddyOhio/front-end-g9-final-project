import { Link } from "react-router-dom";
import Layout from "./Layout";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChangePassword = () => {
  return (
    <Layout>
      <div className="grow bg-white">
        <header>
          <div className="bg-[#66d2e8] pt-8 pb-14 lg:bg-white lg:py-5">
            <div className="flex flex-wrap justify-center w-full items-center relative">
              <Link
                to="/security"
                className="bg-white justify-self-start py-3.5 px-4 rounded-xl shadow-md absolute left-[10%]"
              >
                <img src="/picture/chevron-left-solid.svg" alt="ิBack" />
              </Link>

              <div className="text-blue-900 font-extrabold text-lg lg:text-xl xl:text-2xl">
                <h2 className="">Change Password</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-[#66d2e8] lg:bg-white flex justify-center">
          <div className="bg-white rounded-t-3xl pt-8 px-6 lg:px-24 lg:text-xs w-full max-w-[1048px] ">
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
                autoComplete="current-password"
              />
              <TextField
                id="confirm-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
              />
              <Button
                variant="contained"
                className="bg-[#66d2e8] hover:bg-[#39bad4] p-[12px] mt-[30vh] lg:mt-[35vh]"
              >
                Contained
              </Button>
            </Box>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ChangePassword;
