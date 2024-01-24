import { Link } from "react-router-dom";

import { CustumnContext } from "./Context.jsx";
import { useContext } from "react";

const NavActivity = () => {
  const { activities } = useContext(CustumnContext);
  return (
    <div>
      <article className="flex-col h-full gap-3 text-xs bg-white px-6 hidden lg:flex lg:min-w-[16rem] xl:w-[22rem] 2xl:w-[26rem] 2xl:text-lg">
        <div className="py-3">
          <h2 className="text-blue-900 text-xl font-extrabold xl:text-2xl">
            Latest Activity
          </h2>
        </div>

        {activities.map((items, index) => (
          <div
            key={index}
            className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
          >
            <div className="absolute left-[-12%]  lg:w-[50px] xl:w-[65px] 2xl:left-[-10%]">
              <img
                src={
                  items.name === "Football"
                    ? "../picture/activity-football.png"
                    : items.name === "Swimming"
                    ? "../picture/activity-swim.png"
                    : items.name === "Run"
                    ? "../picture/activity-run.png"
                    : items.name === "Walk"
                    ? "../picture/activity-walk.png"
                    : items.name === "Hike"
                    ? "../picture/activity-hike.png"
                    : items.name === "Bicycle Ride"
                    ? "../picture/activity-bicycle-ride.png"
                    : "../picture/activity.png"
                }
                alt="trophie"
                className="w-full h-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-base xl:text-xl 2xl:text-2xl">
                {items.name}
              </div>
              <div className="flex justify-end gap-3">
                <h3>{items.date}</h3>

                <Link to="/card" className=" hover:scale-110">
                  <img
                    src="../picture/settings-gear-svgrepo-com.svg"
                    alt="clock"
                    className="lg:w-4 xl:w-5"
                  />
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div
                className={
                  items.status === "Upcoming"
                    ? "bg-[#ffd05b] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                    : items.status === "Ongoing"
                    ? "bg-[#FF4545] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                    : items.status === "Finished"
                    ? "bg-[#0eb400] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                    : "bg-gray-200 px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                }
              >
                {items.status}
              </div>
              <div className="flex justify-end gap-2 2xl:gap-3">
                <h3>{items.time}</h3>
                <h3>{items.duration}</h3>
                <img
                  src="../picture/clock-regular.svg"
                  alt="clock"
                  className="lg:w-4 xl:w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default NavActivity;
