import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Box } from "@mui/material";
import ActicityCardMobile from "./ActicityCardMobile";

// import actFootballImg from "../../../public/activity-football.png"

const NavActivity = () => {
  const { userActivities } = useGlobalContext();

  const sortedUpcommingAct = userActivities
    .filter((activities) => activities.activityStatus === "up comming")
    .sort((a, b) => a.activityDate - b.activityDate);

  const sortedCompletedAct = userActivities
    .filter((activities) => activities.activityStatus === "completed")
    .sort((a, b) => b.activityDate - a.activityDate);

  const userActivitiesShow = [
    ...sortedUpcommingAct,
    ...sortedCompletedAct,
  ].slice(0, 8);

  return (
    <Box py={1} px={2}>
      {/* <img src={actFootballImg} alt="actFootballImg" /> */}
      <article className="flex-col h-full gap-3 text-xs bg-white px-2 hidden md:flex lg:min-w-[16rem] xl:w-[22rem]">
        <div className="py-3">
          <h2 className="text-blue-900 text-xl font-extrabold xl:text-2xl">
            Latest Activities
          </h2>
        </div>

        <div className="px-6 flex flex-col gap-3">
          {userActivitiesShow.map((userActivityItem) => {
            return (
              <ActicityCardMobile
                userActivityItem={userActivityItem}
                key={userActivityItem.activityId}
              />
            );
          })}
        </div>
      </article>
    </Box>
  );
};

export default NavActivity;
