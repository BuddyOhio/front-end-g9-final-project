import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { mockDataActivity } from "./mockActivityData";
import axios from "axios";
import LoginRegisterTab from "./feat-login-register/LoginRegisterTab";
import Swal from "sweetalert2";

const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  // const [userId, setUserId] = useState(undefined);
  const [userProfile, setUserProfile] = useState(undefined);

  const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  const [acctivitiesReload, setActivitiesReload] = useState(false);

  // Get user profile
  // const getUserProfile = async () => {
  //   if (userProfile) {
  //     return userProfile;
  //   }
  //   try {
  //     const response = await axios.get("http://localhost:3000/me", {
  //       withCredentials: true,
  //       withXSRFToken: true,
  //     });

  //     if (response.status === 200) {
  //       console.log(response.data);
  //       setUserProfile(response.data);
  //       return response.data;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      const actDelete = {
        activityIdDelete: activityId,
      };

      const response = await axios.delete(
        "http://localhost:3000/api/activity",
        { data: actDelete, withCredentials: true } // Use the 'data' property here
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
    getUserActivities();
  }, [acctivitiesReload]);

  //Update Users Status//
  const updateActivityStatus = async (activityId) => {
    try {
      const actStatus = {
        activityIdStatus: activityId,
      };

      const response = await axios.patch(
        "http://localhost:3000/api/activity",
        { data: actStatus} ,
        {
          withCredentials: true
        }
      );

      if (response.status === 200) {
        // console.log(response);
        setActivitiesReload((prev) => !prev);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ------------------------------------------------
  return (
    <CustomContext.Provider
      value={{
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
