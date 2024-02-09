import { Link } from "react-router-dom";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

function Profile() {
  return (
    <NavbarDesktop>
      <div className="grow bg-blue-100 md:py-5 md:bg-white flex flex-col">
        <header>
          <div className="flex flex-col bg-blue-100 items-center gap-2 py- md:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!-- Go back button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>

              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl md:just md:text-2xl 2xl:text-3xl">
                <h2 className="">PROFILE</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-44 w-44 rounded-full border-[10px] border-solid border-white">
              <a href="#">
                <img
                  alt="name"
                  src="../../../public/pack.PNG"
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
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
}

export default Profile;
