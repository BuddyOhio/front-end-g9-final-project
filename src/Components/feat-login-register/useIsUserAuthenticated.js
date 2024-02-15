import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";

export const useIsUserAuthenticated = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(undefined);
  const { userData, setUserData } = useGlobalContext();

  useEffect(() => {
    setIsUserAuthenticated(undefined);
    if (!userData) {
      console.log("User data unavailable... Fetching new user data");
      axios
        .get("http://localhost:3000/me", {
          withCredentials: true,
        })
        .then((res) => {
          setUserData(res.data);
          console.log("Store user data into global context");
          setIsUserAuthenticated(true);
        })
        .catch((e) => {
          console.log("useIsUserAuthenticated error", e);
          setIsUserAuthenticated(false);
        });
    } else {
      console.log("Reuse user data straight from global context");
      setIsUserAuthenticated(true);
    }
  }, []);

  return isUserAuthenticated;
};
