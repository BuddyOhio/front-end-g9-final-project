import LeftPage from "./LeftPage";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./login.css";
import { axiosRequest } from "../../axios";
import Swal from "sweetalert2";
import login_forLogout from "../../../public/login_forLogout.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (event) => {
    setEmailError(!isValidEmail(email));

    event.preventDefault();
    console.log("submitting");

    if (isValidEmail(email)) {
      try {
        await axiosRequest.post("/forget-password/email", {
          email,
        });
        navigate("/submit-email");
      } catch (e) {
        Swal.fire({
          iconHtml: `<img src=${login_forLogout}>`,
          customClass: {
            icon: "no-border",
          },
          text: "Failed to send reset password request. Please try again later.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const isValidEmail = (email) => {
    // ตรวจสอบว่า email มีรูปแบบที่ถูกต้องหรือไม่
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError(!isValidEmail(inputValue));
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
                      onChange={handleEmailChange}
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
