import React, { useState, useContext, createContext, useEffect } from "react";
import Swal from "sweetalert2";
import { axiosRequest } from "../axios";

const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [userInfo, setUserInfo] = useState("");
  const [reload, setReload] = useState(false);
  // const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  const [acctivitiesReload, setActivitiesReload] = useState(false);

  // Get Activities By userId in Token -----------------------------
  const getUserActivities = async () => {
    // setCardActivityloading(true);

    // แนบ cookie ส่งไปกับ axios ทุกครั้ง
    try {
      const response = await axiosRequest.get("/api/activity");

      if (response.status === 200) {
        const changeActTypeDate = response.data.map((activity) => {
          const { activityDate, ...rest } = activity;

          return {
            ...rest,
            activityDate: new Date(activityDate),
          };
        });

        // console.log("allActivity from get => ", changeActTypeDate);
        setUserActivities(changeActTypeDate);
      }

      // setCardActivityloading(false);
    } catch (error) {
      console.error("Error from .get(api/activity/) => ", error);
    }
  };

  // Create Activities By userId(cookie: token) ----------------------------
  const createUserActivity = async (newActivity) => {
    // console.log("newActivity from post => ", newActivity);
    try {
      const response = await axiosRequest.post("/api/activity", newActivity);

      if (response.status === 200) {
        // window.alert(response.data);
        // console.log(response);
        setActivitiesReload((prev) => !prev);

        // Show success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your activities has been added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      const errRes = error.response.data;
      console.error(errRes);
      alert(errRes);
    }
  };

  // Update Activities By activityId --------------------------
  const updateUserActivity = async (newActivity) => {
    // console.log("updateActivity from put => ", newActivity);
    try {
      const response = await axiosRequest.put("/api/activity", newActivity);

      if (response.status === 200) {
        // window.alert(response.data);
        // console.log(response);
        setActivitiesReload((prev) => !prev);

        // Show success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your activities has been update",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      const errRes = error.response.data;
      console.error(errRes);
      alert(errRes);
    }
  };

  // Delete Activities By activityId --------------------------
  const deleteUserActivity = async (activityId) => {
    try {
      const response = await axiosRequest.delete(`/api/activity/${activityId}`);

      if (response.status === 200) {
        // console.log(response);
        setActivitiesReload((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Update Users Status//
  const updateActivityStatus = async (activityId) => {
    try {
      const response = await axiosRequest.patch(`/api/activity/${activityId}`);

      if (response.status === 200) {
        // console.log(response);
        setActivitiesReload((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axiosRequest.get("/edit-profile", {
        withCredentials: true,
      }); // Make HTTP GET request to your backend endpoint
      const userInfomation = response.data; // Extract user data from response

      setUserInfo(userInfomation);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (userData !== undefined) {
      getUserActivities();
    }
    getUserInfo();
  }, [acctivitiesReload, userData]);

  useEffect(() => {
    getUserInfo();
  }, [reload]);

  // ------------------------------------------------
  return (
    <CustomContext.Provider
      value={{
        userData,
        setUserData,
        userActivities,
        createUserActivity,
        updateUserActivity,
        deleteUserActivity,
        acctivitiesReload,
        updateActivityStatus,
        getUserInfo,
        userInfo,
        reload,
        setReload,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CustomContext);
};

export { CustomContext, CustomContextProvider };
