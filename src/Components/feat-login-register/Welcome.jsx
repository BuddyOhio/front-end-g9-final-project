import React, { useState } from "react";
import LeftPage from "./LeftPage";
import { Link, useNavigate } from "react-router-dom";
import { ModalTerm, ModalPolicy } from "./Modal";
import "./login.css";
import { useIsUserAuthenticated } from "./useIsUserAuthenticated";
import { Loader } from "./Loader";
import login_Logo from "../../../public/login_Logo.png";

const Welcome = () => {
  const [isTermModalShown, setIsTermModalShown] = useState(false);
  const [isPolicyModalShown, setIsPolicyModalShown] = useState(false);

  const navigate = useNavigate();
  const isUserAuthenticated = useIsUserAuthenticated();
  
   if (isUserAuthenticated === undefined) {
     return <Loader />;
   } else if (isUserAuthenticated) {
     navigate("/all-activity");
     return <></>;
   }


  const showTermModal = () => {
    setIsTermModalShown(true);
  };

  const closeTermModal = () => {
    setIsTermModalShown(false);
  };

  const showPolicyModal = () => {
    setIsPolicyModalShown(true);
  };

  const closePolicyModal = () => {
    setIsPolicyModalShown(false);
  };

 
  return (
    <div className="flex">
      <LeftPage />
      {/*Right Page  */}
      <div className="flex-1 w-50 bg-theme-right">
        <div className="flex flex-col h-screen">
          <div className="my-auto">
            <div className="flex justify-center items-center md:hidden">
              <img src={login_Logo} />
            </div>
            <div className="text-center text-blue-950">
              <h1 className="font-semibold text-5xl mb-10">Welcome</h1>
              <p className="text-sm ">Embark On Your Fitness Journey</p>
              <p className="text-sm ">With Our Track Excercise App!</p>
              <p className="text-sm ">
                Join Now And Let's Get Moving Together.
              </p>
            </div>
            <div className="pt-5">
              <div>
                <Link
                  to={"/login"}
                  className="w-3/5 block m-auto p-3 rounded-xl bg-[#66d2e8] font-bold text-md font-inter text-white text-center"
                >
                  Login
                </Link>
              </div>
              {/* <div className="mt-2 pt-3">
                <Link
                  to="#"
                  className="w-3/5 rounded-xl m-auto block p-3 bg-gray-300 font-semibold text-md font-inter text-blue-950 text-center"
                >
                  Get Start
                </Link>
              </div> */}
            </div>
            <div className="mt-5 mx-10 text-xs text-center">
              <p>
                By Logging In Or Registering. You Have Agreed To
                <a
                  href="#"
                  onClick={() => {
                    showTermModal();
                  }}
                  className="text-red-600 mr-1 ml-1"
                >
                  The Terms And Conditions
                </a>
                And
                <a
                  href="#"
                  onClick={() => {
                    showPolicyModal();
                  }}
                  className="text-red-600 ml-1"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalTerm show={isTermModalShown} onClose={closeTermModal} />
      <ModalPolicy show={isPolicyModalShown} onClose={closePolicyModal} />
    </div>
  );
};

export default Welcome;
