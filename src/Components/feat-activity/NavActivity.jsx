import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
// import actFootballImg from "../../../public/activity-football.png"

const NavActivity = () => {
  const { userActivities } = useGlobalContext();
  const userActivitiesShow = userActivities
    .filter((activities) => activities.activityStatus === "uncompleted")
    .sort((a, b) => a.activityDateTime - b.activityDateTime)
    .slice(0, 5);
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
          {userActivitiesShow.map((userActivity, index) => (
            <div
              key={index}
              className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
            >
              <div className="absolute left-[-12%]  lg:w-[50px] xl:w-[65px] 2xl:left-[-10%]">
                {/* {
    userId: "45db858f-b5de-48fd-aed4-19c2a0c34fa5",
    activityId: "3bf92c64-2f19-4e13-b527-867c7d4eaf87",
    activityName: "Evening Bike Ride",
    activityDesc:
      "Cruised along the city streets on my bike, enjoying the cool breeze.",
    activityType: "Cycling",
    activityDateTime: new Date("2024-01-27T18:45:00"),
    activityDuration: "40 minutes",
    activityStatus: "completed",
  }, */}
                <img
                  src={
                    userActivity.activityType === "Football"
                      ? "../../../public/activity-football.png"
                      : userActivity.activityType === "Swimming"
                      ? "../../../public/activity-swim.png"
                      : userActivity.activityType === "Run"
                      ? "../../../public/activity-run.png"
                      : userActivity.activityType === "Walk"
                      ? "../../../public/activity-walk.png"
                      : userActivity.activityType === "Hike"
                      ? "../../../public/activity-hike.png"
                      : userActivity.activityType === "Bicycle Ride"
                      ? "../../../public/activity-bicycle-ride.png"
                      : "../../../public/activity.png"
                  }
                  alt="trophie"
                  className="w-full h-full"
                />
              </div>
              <div className="flex justify-between userActivity-center">
                <div className="text-base xl:text-xl 2xl:text-2xl">
                  {userActivity.activityType}
                </div>
                <div className="flex justify-end gap-3">
                  <h3>{userActivity.activityDateTime.toString()}</h3>
                  <Link to={`/edit-activity/${userActivity.activityId}`} className=" hover:scale-110">
                    <img
                      src="../../../public/settings-gear-svgrepo-com.svg"
                      alt="clock"
                      className="lg:w-4 xl:w-5"
                      onClick={() =>
                        console.log(
                          "Edit Activity ID: ",
                          userActivity.activityId
                        )
                      }
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between userActivity-center">
                <div
                  className={
                    userActivity.activityStatus === "uncompleted"
                      ? "bg-[#ffd05b] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : userActivity.activityStatus === "Ongoing"
                      ? "bg-[#FF4545] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : userActivity.activityStatus === "completed"
                      ? "bg-[#0eb400] px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                      : "bg-gray-200 px-1 py-0.5 text-[0.5rem] text-white font-bold rounded-full xl:text-xs"
                  }
                >
                  {userActivity.activityStatus}
                </div>
                <div className="flex justify-end gap-2 2xl:gap-3">
                  <h3>{userActivity.time}</h3>
                  <h3>{userActivity.duration}</h3>
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
