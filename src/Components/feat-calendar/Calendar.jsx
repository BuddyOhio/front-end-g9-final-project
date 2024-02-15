import React, { useState, useEffect } from "react";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./styles/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
import CalendarBody from "./CalendarBody";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Calendar = () => {
  return (
    <NavbarDesktop>
      <header className="header relative mt-12">
        <div className="header__bg-cycle absolute top-0 left-0 w-full h-[35vh] rounded-b-[20%] -z-10 bg-cyan-100"></div>

        <div className="header__container relative flex justify-center items-center pt-8 gap-x-12">
          <h1 className="header__title text-blue-900 text-2xl font-semibold text-center lg:text-3xl">
            Calendar Activity
          </h1>
        </div>
      </header>

      <main className="content bg-white mx-4 md:mx-7 lg:mx-6">
        <section className="calendar__container bg-white rounded-2xl my-8 shadow-2xl">
          {/* MUI CALENDAR */}
          <CalendarBody />
        </section>

        <section className="mt-8 md:hidden">
          <div className="flex justify-between items-end">
            <h2 className="text-xl font-semibold text-center">
              Today Activity
            </h2>
            <p className="">
              <Link to={"/all-activity"} className="text-black">
                See all
              </Link>
            </p>
          </div>

          <div className="mt-12 text-base font-normal text-gray-500 text-center">
            <h3 className="">No activity</h3>
          </div>
        </section>
      </main>
    </NavbarDesktop>
  );
};

export default Calendar;
