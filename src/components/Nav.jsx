import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div id="sidebar" className="hidden lg:block h-screen">
        <nav className="h-full w-[16.5rem] bg-[#b8ecf7] pl-5 pt-5 flex flex-col sticky top-0">
          <div className="sidebar-logo relative items-center h-full">
            <div className="sidebar-logo relative items-center">
              <a
                href="#"
                className="logo h-full w-11/12 flex items-center list-none transition-all text-xl text-cyan-400 font-bold p-4 bg-white hover:bg-white hover:text-cyan-400 rounded-2xl gap-5"
              >
                <img
                  src="../picture/Dog-3.svg"
                  className="logo-image max-h-full w-[40px]"
                  alt="Dog Logo"
                />
                DOG GO
              </a>
            </div>
            <div className="flex-grow">
              <ul className="menu-items w-11/12 list-none transition-all text-lg py-6 text-blue-950 flex flex-col gap-3">
                <li className="item hover:bg-cyan-400 hover:text-white bg-cyan-400 text-white rounded-2xl">
                  <Link to="/profile" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className="item hover:bg-cyan-400 hover:text-white rounded-2xl transition-all duration-500">
                  <a href="#" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-calendar-days"></i> Calendar
                  </a>
                </li>
                <li className="item hover:bg-cyan-400 hover:text-white rounded-2xl transition-all duration-500">
                  <a href="#" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-trophy"></i> All Activity
                  </a>
                </li>
                <li className="item hover:bg-cyan-400 hover:text-white rounded-2xl transition-all duration-500">
                  <a href="#" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-dog"></i> Dog
                  </a>
                </li>
                <li className="item hover:bg-cyan-400 hover:text-white rounded-2xl transition-all duration-500">
                  <a href="#" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-user"></i> Profile
                  </a>
                </li>
                <li className="item hover:bg-cyan-400 hover:text-white rounded-2xl transition-all duration-500">
                  <a href="#" className="p-[16px] inline-block w-full">
                    <i className="fa-solid fa-gear"></i> Setting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="side-bar-button w-11/12">
            <ul className="menu-items list-none transition-all text-lg text-blue-950 flex flex-col gap-3">
              <li className="item hover-bg-cyan-400 hover:bg-white rounded-2xl transition-all duration-500">
                <a href="#" className="p-[16px] inline-block w-full">
                  <i className="fa-solid fa-circle-info"></i> Help
                </a>
              </li>
              <li className="item hover-bg-cyan-400 hover:bg-white rounded-2xl transition-all duration-500 mb-10">
                <a href="#" className="p-[16px] inline-block w-full">
                  <i className="fa-solid fa-right-from-bracket"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
