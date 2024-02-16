import React from "react";
import { Link } from "react-router-dom";
import Gear from "../../../public/settings-gear-svgrepo-com.svg";
import Clock from "../../../public/clock-regular.svg";

const ActicityCardMobile = ({ userActivityItem }) => {
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
    activityStatus,
  } = userActivityItem;
  return (
    <div
      key={activityId}
      className="text-gray-600 font-medium bg-[#ecfcff] pl-8 pr-4 py-2 flex flex-col relative rounded-full justify-center gap-1"
    >
      <div
        className={
          activityType === "Swim" ||
          activityType === "Run" ||
          activityType === "Walk" ||
          activityType === "Hike" ||
          activityType === "Bicycle"
            ? "absolute left-[-25px] w-[50px] 2xl:left-[-35px] 2xl:w-[60px]"
            : "absolute left-[-50px] w-[100px] 2xl:left-[-55px] 2xl:w-[105px]"
        }
      >
        <img
          src={
            activityType === "Swim"
              ? "../../../public/activity-swim.png"
              : activityType === "Run"
              ? "../../../public/activity-run.png"
              : activityType === "Walk"
              ? "../../../public/activity-walk.png"
              : activityType === "Hike"
              ? "../../../public/activity-hike.png"
              : activityType === "Bicycle"
              ? "../../../public/activity-bicycle-ride.png"
              : "../../../public/activity-trophy.svg"
          }
          alt="trophie"
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-between userActivity-center items-start">
        <div className="text-base text-start xl:text-lg text-wrap">
          {activityName}
        </div>
        <div className="text-end flex justify-end items-center gap-3 min-w-[150px] lg:pt-1">
          <h3 className="min-w-[80px]">{activityDateStr}</h3>
          <Link to={`/edit-activity/${activityId}`} className="hover:scale-110">
            <img src={Gear} alt="edit" className="w-4 xl:w-5" />
          </Link>
        </div>
      </div>

      <div className="flex justify-between userActivity-center">
        <h3
          className={`font-normal px-2 py-1 text-white ${
            activityStatus === "completed" ? "bg-green-500" : "bg-yellow-400"
          } rounded-r-[12px] rounded-l-[12px]`}
        >
          {activityStatus}
        </h3>
        <div className="flex justify-end gap-2">
          <h3>{activityTimeStr}</h3>
          <h3>{activityDuration} min.</h3>
          <img src={Clock} alt="clock" className="w-4 xl:w-5" />
        </div>
      </div>
    </div>
  );
};

export default ActicityCardMobile;
