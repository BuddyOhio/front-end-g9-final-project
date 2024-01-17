import LeftPage from "./LeftPage";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting");

    // call api to send email

    // navigate to success page
    navigate("/submitemail");
  };

  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 h-screen w-100 max-md:bg-none md:bg-cover bg-theme-right">
        <div className="flex flex-col h-screen">
          <div className="mt-16 md:my-auto">
            <div className="m-auto flex-1 w-4/5 text-left md:text-center">
              <h2 className="text-sky-500 md:text-blue-950 font-bold text-lg mb-5">
                Forget Password
              </h2>
              <p className="text-gray-400">Enter your registered email below</p>
            </div>
            <div className="m-auto flex-1 w-4/5">
              <div className="my-12">
                <div className="input-login">
                  <form action="Desktop_submitEmail.html" onSubmit={submitForm}>
                    <label
                      className="font-semibold mx-3 block"
                      htmlFor="input-email"
                    >
                      Email
                    </label>
                    <TextField
                      className=" w-full input"
                      type="email"
                      // error={emailError}
                      // value={email}
                      id="input-email"
                      placeholder="Siberainwhiskey@gmail.com"
                      helperText={"Please enter a valid email address."}
                      sx={{ marginBottom: 2 }}
                      // onChange={handleEmailChange}
                    />

                    <p className="text-gray-400 mx-1 md:text-center">
                      Remember the password ?
                      <Link
                        to={"/login"}
                        className="font-semibold text-sky-500 md:text-sky-500 ml-1"
                      >
                        Back to Login
                      </Link>
                    </p>

                    <div className="flex justify-center mt-10">
                      <button
                        type="submit"
                        className="w-3/5 m-3 p-3 rounded-xl hover:bg-[#39bad4] bg-[#66d2e8] font-bold text-md font-inter text-white shadow-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
