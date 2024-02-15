import { Link } from "react-router-dom";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Notification = () => {
  return (
    <NavbarDesktop>
      <div className="grow">
        <header>
          <div className="bg-sky-100 pb-14 md:bg-white md:py-5 pt-[60px] md:pt-[0] md:mt-[80px]">
            {/* <!-- Header (Notificaiton) --> */}
            <div className="grid grid-cols-3 w-full items-center">
              {/* <!--Go Back Button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md md:"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>

              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-lg md:text-3xl">
                <h2 className="">Notification</h2>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-sky-100 h-full md:bg-white">
          <div className="flex flex-col bg-white rounded-t-3xl gap-2 pt-8 px-10 h-full md:px-16">
            {/* <!-- Header (Activity) --> */}
            <div className="font-extrabold text-md md:text-xl">
              <h3>Activity</h3>
            </div>

            <div className="flex justify-between">
              {/* <!--Text: Remind me later --> */}
              <div className="text-sm md:text-xl">
                <h3>Remind me later</h3>
              </div>

              {/* <!-- Button toggle --> */}
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
};

export default Notification;
