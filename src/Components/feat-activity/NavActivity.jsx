import { Link } from "react-router-dom";
import { CustumnContext } from "./Context.jsx";
import { useContext } from "react";
// import actFootballImg from "../../../public/activity-football.png"

const NavActivity = () => {
  const { activities } = useContext(CustumnContext);
  return (
    <div>
      {/* <img src={actFootballImg} alt="actFootballImg" /> */}
      <article className="flex-col h-full gap-3 text-xs bg-white px-2 hidden md:flex lg:min-w-[16rem] xl:w-[22rem] 2xl:w-[26rem] 2xl:text-lg">
        <div className="py-3">
          <h2 className="text-blue-900 text-xl font-extrabold xl:text-2xl">
            Latest Activity
          </h2>
        </div>

        <div className="pl-6 flex flex-col gap-3">
          {activities.map((items, index) => (
            <div
              key={index}
              className="text-gray-600 font-medium bg-[#ecfcff] pl-[1.25rem] lg:pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
            >
              {/* Activity Image Logo | Trophy */}
              <div
                className={
                  items.name === "Football" ||
                  items.name === "Swimming" ||
                  items.name === "Run" ||
                  items.name === "Walk" ||
                  items.name === "Hike" ||
                  items.name === "Bicycle Ride"
                    ? "absolute left-[-12%] w-[40px] lg:w-[50px] xl:w-[65px] 2xl:left-[-10%]"
                    : "absolute left-[-25%] lg:left-[-18%] w-[80px] lg:w-[90px] xl:w-[120px] 2xl:left-[-15%]"
                }
              >
                <img
                  src={
                    items.name === "Football"
                      ? "../../../public/activity-football.png"
                      : items.name === "Swimming"
                      ? "../../../public/activity-swim.png"
                      : items.name === "Run"
                      ? "../../../public/activity-run.png"
                      : items.name === "Walk"
                      ? "../../../public/activity-walk.png"
                      : items.name === "Hike"
                      ? "../../../public/activity-hike.png"
                      : items.name === "Bicycle Ride"
                      ? "../../../public/activity-bicycle-ride.png"
                      : "../../../public/activity-trophy.svg"
                  }
                  alt="trophie"
                  className="w-full h-full"
                />
              </div>
              {/* Activity: name / date / เฟือง edit */}
              <div className="flex justify-between items-center">
                <div className="lg:text-base xl:text-xl 2xl:text-2xl">
                  {items.name}
                </div>
                <div className="flex justify-end md:gap-1 lg:gap-2 text-xs lg:text-sm xl:text-lg">
                  <h3>{items.date}</h3>
                  <Link to="/edit-activity" className=" hover:scale-110">
                    <img
                      src="../../../public/settings-gear-svgrepo-com.svg"
                      alt="clock"
                      className="w-4 xl:w-5"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div
                  className={
                    items.status === "Upcoming"
                      ? "bg-[#ffd05b] px-1 py-0.5 text-[0.4rem] lg:text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : items.status === "Ongoing"
                      ? "bg-[#FF4545] px-1 py-0.5 text-[0.4rem] lg:text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : items.status === "Finished"
                      ? "bg-[#0eb400] px-1 py-0.5 text-[0.4rem] lg:text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : "bg-gray-200 px-1 py-0.5 text-[0.4rem] lg:text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                  }
                >
                  {items.status}
                </div>
                <div className="flex justify-end gap-1 lg:gap-2 xl:text-lg 2xl:gap-3">
                  <h3 className="hidden lg:block">{items.time}</h3>
                  <h3>{items.duration}</h3>
                  <img
                    src="../../../public/clock-regular.svg"
                    alt="clock"
                    className="lg:w-4 xl:w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default NavActivity;
