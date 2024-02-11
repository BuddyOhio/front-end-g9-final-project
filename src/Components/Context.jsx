import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from "react";
import { mockDataActivity } from "./mockActivityData";
import axios from "axios";


const CustomContext = createContext();

const CustomContextProvider = ({ children }) => {
  const [cardActivityloading, setCardActivityloading] = useState(false);
  const [userActivities, setUserActivities] = useState([]);
  // const [userId, setUserId] = useState("45db858f-b5de-48fd-aed4-19c2a0c34fa5");
  const [getActivities, setGetActivities] = useState(false);

  // Get Activities By userId -----------------------------
  const getUserActivities = async () => {
    setCardActivityloading(true);

    try {
      const response = await axios.get("http://127.0.0.1:3000/get-activities");
      // แนบ cookie ส่งไปกับ axios ทุกครั้ง

      if (response.status === 200) {
        console.log(response.data);
        setUserActivities(response.data);
      }

      setCardActivityloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Create Activities By userId(cookie: token) ----------------------------
  const createUserActivity = async (newActivity) => {
    const response = await axios.post(
      "http://127.0.0.1:3000/add-activity",
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
        "http://127.0.0.1:3000/delete-activity",
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
        "http://127.0.0.1:3000/update-activity",
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
