import { useState } from "react";
import LeftPage from "./LeftPage";
import { Link } from "react-router-dom";
import LoginRegisterTab from "./LoginRegisterTab";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  // call back-end

  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 max-md:bg-none md:bg-cover bg-theme-right">
        <form
          action="#"
          className="flex flex-col h-dvh md:flex-none"
        >
          <div className="my-5 md:mt-auto flex-1 md:flex-none">
            <div className="md:hidden">
              <img className="w-1/3 mx-auto" src="public/login_Logo.png" />
            </div>

            <LoginRegisterTab currentUrl={"/login"} />

            <div className="text-center text-blue-950 hidden md:block">
              <h1 className="font-semibold text-2xl mb-5">Login</h1>
            </div>

            <div className="m-auto flex-1 w-4/5 mt-10">
              <label className="font-semibold mx-3 " htmlFor="input-email">
                Email address
              </label>
              <br />
              {/* <input
                className="border-2 p-2 rounded-lg w-full mb-3"
                type="email"
                id="input-email"
                placeholder="siberianwhisky@gmail.com"
                required
              />
              <Alert severity="error">Please entry your email.</Alert> */}
              <TextField
                className=" w-full input"
                type="email"
                error={false}
                id="input-email"
                placeholder="Siberainwhiskey@gmail.com"
                helperText="Please entry your email."
                sx={{ marginBottom: 2 }}
              />
              <br />
              <label className="font-semibold mx-3" htmlFor="input-password">
                Password
              </label>
              <br />
              {/* <input
                className="border-2 p-2 rounded-lg w-full"
                type="password"
                id="input-password"
                placeholder="************"
                required
              /> */}
              <TextField
                className="w-full input"
                type="password"
                error={false}
                id="input-password"
                placeholder="**********"
                helperText={"Please entry your password"}
              />
              {/* <Alert severity="error">Please entry your password.</Alert> */}
              <br />
              <Link
                to={"/forgetpassword"}
                className="forget-password text-sky-400 hover:text-[#4ccee8] font-semibold flex justify-end mt-3"
              >
                Forget Password?
              </Link>
              <br />
            </div>
          </div>
          <div className="mb-10 md:mb-auto">
            <div>
              <button
                type="submit"
                className="button-submit w-4/5 block m-auto p-3 rounded-xl  font-bold text-md font-inter text-white text-center"
              >
                Login
              </button>
            </div>
            <div className="hidden md:block mt-10 mx-10 text-sm text-blue-950 text-center">
              <p>
                Not a registered user yet?
                <Link to={"/createaccount"} className="font-semibold ml-1">
                  Sign up now!
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
