import { Link } from "react-router-dom";
import Layout from "./Layout";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ChangeEmail = () => {
  return (
    <Layout>
      <div className="grow bg-white">
        <header>
          <div className="bg-blue-100 pt-8 pb-14 lg:bg-white lg:py-5">
            <div className="grid grid-cols-3 w-full items-center">
              <Link
                to="/security"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="/picture/chevron-left-solid.svg" alt="ิBack" />
              </Link>

              <div className="justify-self-center text-blue-900 font-extrabold text-lg lg:text-3xl">
                <h2 className="">Change Email</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 lg:bg-white flex justify-center">
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
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
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

export default ChangeEmail;
