import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Box } from "@mui/material";

// import actFootballImg from "../../../public/activity-football.png"

const NavActivity = () => {
  const { userActivities } = useGlobalContext();
  const userActivitiesShow = userActivities
    .sort((a, b) => a.activityDate - b.activityDate)
    .slice(0, 8);
  //   .filter((activities) => activities.activityStatus === "uncompleted")
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
          {userActivitiesShow.map((userActivityMap) => {
            const {
              activityDate,
              activityDateStr,
              activityDesc,
              activityDuration,
              activityId,
              activityName,
              activityTimeStr,
              activityType,
              activityTypeOther,
            } = userActivityMap;

            return (
              <div
                key={activityId}
                className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
              >
                <div className="absolute left-[-12%] lg:w-[50px] xl:w-[65px] 2xl:left-[-10%]">
                  <img
                    src={
                      activityType === "Football"
                        ? "../../../public/activity-football.png"
                        : activityType === "Swimming"
                        ? "../../../public/activity-swim.png"
                        : activityType === "Run"
                        ? "../../../public/activity-run.png"
                        : activityType === "Walk"
                        ? "../../../public/activity-walk.png"
                        : activityType === "Hike"
                        ? "../../../public/activity-hike.png"
                        : activityType === "Bicycle Ride"
                        ? "../../../public/activity-bicycle-ride.png"
                        : "../../../public/activity.png"
                    }
                    alt="trophie"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex justify-between userActivity-center">
                  <div className="text-base xl:text-xl 2xl:text-2xl">
                    {/* {activityName} */}
                    {activityType}
                  </div>
                  <div className="flex justify-end gap-3">
                    <h3>{activityDateStr}</h3>
                    <Link
                      to={`/edit-activity/${activityId}`}
                      className="hover:scale-110"
                    >
                      <img
                        src="../../../public/settings-gear-svgrepo-com.svg"
                        alt="edit"
                        className="w-4 xl:w-5"
                      />
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between userActivity-center">
                  <div className="flex justify-end gap-2 2xl:gap-3">
                    <h3>{activityTimeStr}</h3>
                    <h3>{activityDuration} min.</h3>
                    <img
                      src="../../../public/clock-regular.svg"
                      alt="clock"
                      className="w-4 xl:w-5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </Box>
  );
};

export default NavActivity;
