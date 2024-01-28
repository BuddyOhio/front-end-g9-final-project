import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { mockDataActivity } from "./mockActivityData";

const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  const [userId, setUserId] = useState("45db858f-b5de-48fd-aed4-19c2a0c34fa5");
  const [fetchActivities, setFetchActivities] = useState(false);
  

  // Get Activities By userId -----------------------------
  const getUserActivities = async () => {
    setCardActivityloading(true);

    try {
      setUserActivities(() => {
        return mockDataActivity.filter(
          (activity) => userId === activity.userId
        );
      });

      setCardActivityloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Create Activities By userId ----------------------------
  const createUserActivity = async (newActivity) => {
    const newActivityAndUserId = { userId, ...newActivity };
    const addUserActivities = [newActivityAndUserId, ...userActivities];
    setUserActivities(addUserActivities);
    setFetchActivities(!fetchActivities);
  };

  // Edit Activities By activityId ----------------------------

  // Delete Activities By activityId --------------------------
  const deleteUserActivity = async (activityId) => {
    const newUserActivities = userActivities.filter(
      (activity) => activity.activityId !== activityId
    );
    setUserActivities(newUserActivities);
    setFetchActivities(!fetchActivities);
  };

  useEffect(() => {
    getUserActivities();
  }, []);

  // useEffect(() => {
  //   console.log("userActivities: ", userActivities);
  // }, [userActivities]);

  // ------------------------------------------------
  return (
    <CustomContext.Provider
      value={{ userActivities, createUserActivity, deleteUserActivity }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CustomContext);
};

export { CustomContext, CustomContextProvider };
