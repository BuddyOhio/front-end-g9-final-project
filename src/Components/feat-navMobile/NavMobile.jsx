import React from "react";
import { Link } from "react-router-dom";

const NavMobile = () => {
  return (
    <footer className="footer fixed bottom-0 left-0 md:hidden z-50">
      <nav className="footer__nav-menu w-screen h-[70px] rounded-t-[20px] bg-cyan-400">
        <ul className="nav__list h-full flex justify-between items-center mx-4">
          <li className="nav__item list-none">
            <Link
              to={"/home"}
              className="nav__link text-white text-[40px] transition-all duration-500 hover:text-cyan-700"
            >
              <i className="ri-home-6-fill"></i>
            </Link>
          </li>

          <li className="nav__item list-none">
            <Link
              to={"/calendar"}
              className="nav__link text-white text-4xl active-link transition-all duration-500 hover:text-cyan-700"
            >
              <i className="ri-calendar-2-fill"></i>
            </Link>
          </li>

          <li className="nav__item nav__add-act list-none relative w-[50px] h-[50px] border-[3px] border-white hover:border-cyan-700 rounded-full cursor-pointer transition-all duration-500">
            <Link
              to={"/add-activity"}
              className="nav__link text-white text-4xl font-medium transition-all duration-500 hover:text-cyan-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <i className="ri-add-line"></i>
            </Link>
          </li>

          <li className="nav__item list-none">
            <Link
              to={"/pet"}
              className="nav__link text-white text-3xl transition-all duration-500 hover:text-cyan-700"
            >
              <i className="fa-solid fa-dog"></i>
            </Link>
          </li>

          <li className="nav__item list-none">
            <Link
              to={"/profile"}
              className="nav__link text-white text-[34px] transition-all duration-500 hover:text-cyan-700"
            >
              <i className="ri-user-fill"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavMobile;
