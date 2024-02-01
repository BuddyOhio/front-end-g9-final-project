import React, { useState, useEffect } from "react";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./styles/Calendar.css";
import { Link } from "react-router-dom";
import CalendarBody from "./CalendarBody";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

const Calendar = () => {
  // const [dateValue, setdateValue] = useState(new Date());
  // const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  // const getDateClick = (newValue) => {
  //   setdateValue(newValue);

  //   const date = {
  //     day: newValue.$D,
  //     month: newValue.$M,
  //     year: newValue.$y,
  //   };
  //   console.log("Date: ", date);
  // };

  //   useEffect(() => {
  //     console.log(typeof dateValue);
  //   }, [dateValue]);
  return (
    <>
      <header className="header relative">
        <div className="header__bg-cycle absolute top-0 left-0 w-full h-[35vh] rounded-b-[20%] -z-10 bg-cyan-100"></div>

        <div className="header__container relative flex justify-center items-center pt-8 gap-x-12">
          <h1 className="header__title text-blue-900 text-2xl font-semibold text-center lg:text-3xl">
            Calendar Activity
          </h1>
        </div>
      </header>

      <main className="content bg-white mx-4 md:mx-7 lg:mx-6">
        <section className="calendar__container bg-white rounded-2xl mt-8 shadow-2xl">
          {/* MUI CALENDAR */}
          <CalendarBody />

          {/* <LocalizationProvider dateAdapter={AdapterDayjs} sx={{}}>
            <DemoContainer
              components={["DateCalendar", "DateCalendar", "DateCalendar"]}
            >
              <DateCalendar
                value={dayjs(dateValue)}
                views={["year", "month", "day"]}
                showDaysOutsideCurrentMonth
                onChange={(newValue) => getDateClick(newValue)}
                renderDay={(day, _value, DayComponentProps) => {
                  const isSelected =
                    !DayComponentProps.outsideCurrentMonth &&
                    highlightedDays.indexof(day.getDate()) > 0;

                  return (
                    <Badge
                      key={day.toString()}
                      overlap="circular"
                      badgeContent={isSelected ? "🌚" : undefined}
                    >
                      <PickersDay {...DayComponentProps} />
                    </Badge>
                  );
                }}
              />
            </DemoContainer>
          </LocalizationProvider> */}
        </section>

        <section className="today-act__container mt-8 lg:hidden">
          <div className="today-act__header flex justify-between items-end">
            <h2 className="today-act__title text-xl font-semibold text-center">
              Today Activity
            </h2>
            <p className="today-act__see-all">
              <Link to={"/allact"} className="text-black">
                See all
              </Link>
            </p>
          </div>

          <div className="act__card__container mt-12 text-base font-normal text-gray-500 text-center">
            <h3 className="act__card__title">No activity</h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calendar;
