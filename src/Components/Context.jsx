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

const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  // const [userId, setUserId] = useState(undefined);
  const [userProfile, setUserProfile] = useState(undefined);

  const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  const [getActivities, setGetActivities] = useState(false);

  // Get user profile
  // const getUserProfile = async () => {
  //   if (userProfile) {
  //     return userProfile;
  //   }
  //   try {
  //     const response = await axios.get("http://127.0.0.1:3000/me", {
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

    try {
      const response = await axios.get("http://127.0.0.1:3000/api/get-act", {
        withCredentials: true,
      });

      // แนบ cookie ส่งไปกับ axios ทุกครั้ง

      if (response.status === 200) {
        // console.log(response.data);

        const changeActTypeDate = response.data.map((activity) => {
          const { activityDate, ...rest } = activity;

          return {
            ...rest,
            activityDate: new Date(activityDate),
          };
        });

        console.log("changeActTypeDate => ", changeActTypeDate);
        // setUserActivities(response.data);
        setUserActivities(changeActTypeDate);
      }

      setCardActivityloading(false);
    } catch (error) {
      console.error("error from /get-act", error);
    }
  };

  // Create Activities By userId(cookie: token) ----------------------------
  const createUserActivity = async (newActivity) => {
    const response = await axios.post(
      "http://127.0.0.1:3000/api/add-act",
      newActivity
    );

    // if (response.status === 200) {
    //   window.alert(response.data);
    // }
    console.log(response);
    setGetActivities(!getActivities);
  };

  // Delete Activities By activityId --------------------------
  const deleteUserActivity = async (activityId) => {
    const actDelete = {
      activityDelete: activityId,
    };

    try {
      const response = await axios.delete(
        "http://127.0.0.1:3000/api/delete-act",
        { data: actDelete } // Use the 'data' property here
      );

      console.log(response);
      setGetActivities(!getActivities);
    } catch (error) {
      console.error(error);
    }
  };

  // Update Activities By activityId --------------------------
  const updateUserActivity = async (newActivity) => {
    // const actUpdate = {
    //   activityUpdate: newActivity,
    // };

    try {
      const response = await axios.put(
        "http://127.0.0.1:3000/api/update-act",
        newActivity
        // { data: actUpdate } // Use the 'data' property here
      );

      if (response.status === 200) {
        window.alert(response.data);
      }
      console.log(response);
      setGetActivities(!getActivities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserActivities();
  }, [getActivities]);

  // ------------------------------------------------
  return (
    <CustomContext.Provider
      value={{
        userActivities,
        createUserActivity,
        deleteUserActivity,
        updateUserActivity,
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
