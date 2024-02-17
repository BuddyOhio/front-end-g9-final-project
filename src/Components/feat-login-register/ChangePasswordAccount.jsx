import LeftPage from "./LeftPage";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import { axiosRequest } from "../../axios";
import Swal from "sweetalert2";
import login_forLogout from "../../../public/login_forLogout.png";

const ChangePasswordAccount = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const resetPasswordKey = searchParams.get("key");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [loading, setLoading] = useState(true);
  const [isResetPasswordKeyValid, setIsResetPasswordKeyValid] =
    useState(undefined);

  const navigate = useNavigate();

  const handleNewPasswordChange = (event) => {
    const inputValue = event.target.value;
    setNewPassword(inputValue);
    setNewPasswordError(inputValue.length < 6);
  };
  const handleConfirmPasswordChange = (event) => {
    const inputValue = event.target.value;
    setConfirmPassword(inputValue);
    setConfirmPasswordError(inputValue === "" || inputValue !== newPassword);
  };

  const handleSubmit = async (e) => {
    setNewPasswordError(newPassword.length < 6);
    setConfirmPasswordError(
      confirmPassword === "" || confirmPassword !== newPassword
    );
    e.preventDefault();

    if (
      !(
        newPassword.length < 6 ||
        confirmPassword === "" ||
        confirmPassword !== newPassword
      )
    ) {
      try {
        await axiosRequest.post("/forget-password/reset", {
          resetPasswordKey,
          newPassword,
          confirmPassword,
        });
        navigate('/success-password')
      } catch (e) {
        Swal.fire({
          iconHtml: `<img src=${login_forLogout}>`,
          customClass: {
            icon: "no-border",
          },
          text: "Failed to reset password. Please try again later.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const checkResetPasswordKey = async () => {
    try {
      const res = await axiosRequest.get("/forget-password/validate", {
        params: { key: resetPasswordKey },
      });
      setIsResetPasswordKeyValid(true);
    } catch (e) {
      setIsResetPasswordKeyValid(false);
    }
  };

  useEffect(() => {
    if (!resetPasswordKey) {
      navigate("/forget-password");
    } else {
      checkResetPasswordKey();
    }
  }, [resetPasswordKey]);

  useEffect(() => {
    if (isResetPasswordKeyValid !== undefined) {
      if (isResetPasswordKeyValid === false) {
        navigate("/forget-password");
      } else {
        setLoading(false);
      }
    }
  }, [isResetPasswordKeyValid]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex">
      <LeftPage />
      <div className="flex-1 h-screen w-100 max-md:bg-none md:bg-cover bg-theme-right">
        <div className="flex flex-col h-screen">
          <div className="mt-16 md:my-auto flex flex-col h-screen md:h-auto">
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
                  className="w-full "
                  id="outlined-basic"
                  label="New Password"
                  variant="outlined"
                  type="password"
                  placeholder="**********"
                  error={newPasswordError}
                  value={newPassword}
                  helperText={
                    newPasswordError
                      ? "Password must be at least 6 characters."
                      : ""
                  }
                  sx={{ marginBottom: 2 }}
                  onChange={handleNewPasswordChange}
                />
                <br />
                <TextField
                  className="w-full bg-white"
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  placeholder="**********"
                  error={confirmPasswordError}
                  value={confirmPassword}
                  helperText={
                    confirmPasswordError
                      ? "Confirm password should be the same with above password"
                      : ""
                  }
                  sx={{ marginBottom: 2 }}
                  onChange={handleConfirmPasswordChange}
                />
                <br />
              </div>
              <div className="mt-10 mx-10 text-md text-center flex flex-1 align-bottom">
                
                <button
                  onClick={handleSubmit}
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
