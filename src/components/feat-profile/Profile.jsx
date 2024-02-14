import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

function Profile() {
  // Logout Alert Function
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Your are now logout.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  // Set Profile Picture by Gender
  const [gender, setGender] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/edit-profile");
        const userData = response.data;
        const userGender = userData.gender;
        setGender(userGender);
      } catch (error) {
        console.error("Error fetching gender:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <NavbarDesktop>
      <div className="grow bg-blue-100 md:py-5 md:bg-white flex flex-col pb-[60px] pt-[60px] md:pb-0 md:pt-0 md:mt-[80px]">
        <header>
          <div className="flex flex-col bg-blue-100 items-center gap-2 py- md:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid md:grid-cols-1 w-full items-center">
              {/* <!-- Go back button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md hidden"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>

              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl md:text-2xl 2xl:text-3xl">
                <h2 className="">PROFILE</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-40 w-40 rounded-full border-[10px] border-solid border-white">
              <a href="#">
                <img
                  alt="name"
                  src={
                    gender === "male"
                      ? "/avatar-male.png"
                      : gender === "female"
                      ? "avatar-female.png"
                      : "avatar-non.png"
                  }
                  className="w-full h-full object-cover rounded-full"
                />
              </a>
            </div>
            {/* <!-- Name --> */}
            <div className="text-blue-900 text-xl font-bold">
              <h3>Jonathan Sompong</h3>
            </div>
            {/* <!-- BMI --> */}
            <div className="bg-[#0eb400] text-white text-sm px-2 py-1 rounded-lg">
              <h3>BMI: 20 | Healthy Range</h3>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 flex justify-center grow w-full mt-4 md:mt-0 md:bg-white md:pb-8">
          <div className="bg-white rounded-t-3xl pt-8 w-full md:w-10/12 md:flex md:flex-col  md:gap-2 xl:gap-4 xl:min-w-[460px] md:max-w-[560px] xl:w-7/12 h-full">
            {/* <!--Row 1 --> */}
            <Link to="/edit-profile">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-blue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#3f72af] ">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/user-regular.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Profile</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>

            {/* <!--Row 2 --> */}
            <Link to="/notification">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-blue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#3f72af]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/bell-regular.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Notification</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>
            {/* <!--Row 3 --> */}
            <Link to="/privacy">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-jsd-yellow md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#ffd05b]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/exclamation-solid.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Privacy</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>
            {/* <!--Row 4 --> */}
            <Link to="/security">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-lightblue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#d4f7ff]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/lock-solid.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Security</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>
            {/* <!-- Help --> */}
            <div className="px-10 py-2 text-lg font-bold md:hidden">
              <h3>Help</h3>
            </div>

            {/* <!--Row 5 --> */}
            <Link to="/contact">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-lightblue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#d4f7ff]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/phone-solid.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Contact Us</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>
            {/* <--Row 6 Logout **Only on mobile**--> */}
            <div onClick={handleDelete} className="md:hidden">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-lightblue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#d4f7ff]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <LogoutIcon />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Logout</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
}

export default Profile;
