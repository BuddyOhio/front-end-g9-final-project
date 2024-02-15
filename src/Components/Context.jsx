import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  const [acctivitiesReload, setActivitiesReload] = useState(false);

  // Get Activities By userId in Token -----------------------------
  const getUserActivities = async () => {
    setCardActivityloading(true);

    // แนบ cookie ส่งไปกับ axios ทุกครั้ง
    try {
      const response = await axios.get("http://localhost:3000/api/activity", {
        withCredentials: true,
      });

      if (response.status === 200) {
        const changeActTypeDate = response.data.map((activity) => {
          const { activityDate, ...rest } = activity;

          return {
            ...rest,
            activityDate: new Date(activityDate),
          };
        });

        console.log("allActivity => ", changeActTypeDate);
        setUserActivities(changeActTypeDate);
      }

      setCardActivityloading(false);
    } catch (error) {
      console.error("error from /get-act", error);
    }
  };

  // Create Activities By userId(cookie: token) ----------------------------
  const createUserActivity = async (newActivity) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/activity",
        newActivity,
        { withCredentials: true }
      );

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
    try {
      const response = await axios.put(
        "http://localhost:3000/api/activity",
        newActivity,
        { withCredentials: true }
      );

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
      const response = await axios.delete(
        `http://localhost:3000/api/activity/${activityId}`,
        { withCredentials: true } // Use the 'data' property here
      );

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
      const response = await axios.patch(
        `http://localhost:3000/api/activity/${activityId}`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        // console.log(response);
        setActivitiesReload((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData !== undefined) {
      getUserActivities();
    }
  }, [acctivitiesReload, userData]);

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
