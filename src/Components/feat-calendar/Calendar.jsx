import React, { useState, useEffect } from "react";
import "./styles/Calendar.css";
import { Link } from "react-router-dom";
import CalendarBody from "./CalendarBody";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";
import ActicityCardMobile from "../feat-activity/ActicityCardMobile";
import { axiosRequest } from "../../axios";

const Calendar = () => {
  const [activitiesByDate, setactivitiesByDate] = useState([]);
  const [dateByUser, setDateByUser] = useState(new Date());
  const [labelNoActivity, setLabelNoActivity] = useState(true);

  const getAvtivityByDate = async (date) => {
    const outputDateString = date.toDateString();

    // console.log("outputDateString => ", outputDateString);
    try {
      const response = await axiosRequest.get(
        `/api/calendar/date/${outputDateString}`
      );
      if (response.status === 200) {
        const dataResult = response.data;
        console.log(dataResult);
        setactivitiesByDate(dataResult);
        if (dataResult.length > 0) {
          setLabelNoActivity(false);
        } else {
          setLabelNoActivity(true);
        }
      }
    } catch (error) {
      console.error("Error from .get(api/activity/) => ", error);
      // setactivitiesByDate("No actitity");
    }
  };

  useEffect(() => {
    // console.log("dateByUser => ", dateByUser);
    getAvtivityByDate(dateByUser);
  }, [dateByUser]);

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
          <CalendarBody setDateByUser={setDateByUser} />
        </section>

        <section className="mt-8 md:hidden flex flex-col gap-y-5 mb-10">
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

          <div className="text-base font-normal text-gray-500 text-center">
            {labelNoActivity && <h3 className="">No activity</h3>}
            {!labelNoActivity && (
              <div className="pl-6 flex flex-col gap-3 mb-24">
                {activitiesByDate.map((userActivityItem) => {
                  return (
                    <ActicityCardMobile
                      userActivityItem={userActivityItem}
                      key={userActivityItem.activityId}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </NavbarDesktop>
  );
};

export default Calendar;
