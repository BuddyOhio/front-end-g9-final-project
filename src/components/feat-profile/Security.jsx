import { Link } from "react-router-dom";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Security = () => {
  return (
    <NavbarDesktop>
      <div className="grow">
        <header>
          <div className="bg-blue-100 pb-14 md:bg-white md:py-5 pt-[60px] md:pt-[0] md:mt-[80px]">
            {/* <!-- Header (Notificaiton) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!-- GO Back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md"
              >
                <img
                  src="../../../public/chevron-left-solid.svg"
                  alt="Button to go back"
                />
              </Link>
              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-lg md:text-3xl">
                <h2 className="">Security</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-blue-100 md:bg-white h-full">
          <div className="bg-white rounded-t-3xl pt-8 h-full">
            {/* <!--Row 1 --> */}
            <Link to="/changepassword">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/key-solid.svg"
                    alt="key"
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Change Password</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt="email"
                    className="h-1/3"
                  />
                </div>
              </div>
            </Link>

            {/* <!--Row 2 --> */}
            <Link to="/changeemail">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <img
                    src="../../../public/envelope-regular.svg"
                    alt=""
                    className="h-1/2"
                  />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Change Email</h3>
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
};

export default Security;
