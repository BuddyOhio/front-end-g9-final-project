import { Link } from "react-router-dom";
import { CustumnContext } from "./Context.jsx";
import { useContext } from "react";
import { Box } from "@mui/material";
// import actFootballImg from "../../../public/activity-football.png"
const getActivityIconFileName = (activityName) => {
  switch (activityName) {
    case "Football":
      return "activity-football.png";
    case "Swim":
      return "activity-swim.png";
    case "Run":
      return "activity-run.png";
    case "Walk":
      return "activity-walk.png";
    case "Hike":
      return "activity-hike.png";
    case "Bicycle Ride":
      return "activity-bicycle-ride.png";
    default:
      return "activity.png";
  }
};
const getActivityStatusColorCode = (status) => {
  switch (status) {
    case "Finished":
      return "[#0eb400]";
    case "Ongoing":
      return "[#FF4545]";
    case "Upcoming":
      return "[#FF4545]";
    default:
      return "gray-200";
  }
};

const NavActivity = () => {
  const { activities } = useContext(CustumnContext);
  return (
    <Box py={1} px={2}>
      {/* <img src={actFootballImg} alt="actFootballImg" /> */}
      <article className="flex-col h-full gap-3 text-xs bg-white px-2 hidden md:flex lg:min-w-[16rem] xl:w-[22rem] 2xl:text-lg">
        <div className="py-3">
          <h2 className="text-blue-900 text-xl font-extrabold xl:text-2xl">
            Latest Activities
          </h2>
        </div>

        <div className="pl-6 flex flex-col gap-3">
          {activities.map((items, index) => (
            <div
              key={index}
              className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1 transition delay-150 duration-300 ease-in-out"
            >
              <div className="absolute left-[-12%]  lg:w-[50px] xl:w-[65px] 2xl:left-[-10%]">
                <img
                  src={"../../../public/" + getActivityIconFileName(items.name)}
                  alt="trophie"
                  className="w-full h-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-base xl:text-xl">{items.name}</div>
                <div className="flex justify-end gap-3">
                  <h3>{items.date}</h3>
                  <Link to="/card" className=" hover:scale-110">
                    <img
                      src="../../../public/settings-gear-svgrepo-com.svg"
                      alt="clock"
                      className="lg:w-4 xl:w-5"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div
                  className={`bg-${getActivityStatusColorCode(
                    items.status
                  )} px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs`}
                >
                  {items.status}
                </div>
                <div className="flex justify-end gap-2 2xl:gap-3">
                  <h3>{items.time}</h3>
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
    </Box>
  );
};

export default NavActivity;
