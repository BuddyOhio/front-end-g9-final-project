import axios from "axios";
import { useEffect, useState } from "react";

export const useIsUserAuthenticated = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:3000/edit-profile", {
        withCredentials: true,
      })
      .then(() => {
        setIsUserAuthenticated(true);
      })
      .catch((e) => {
        console.log("useIsUserAuthenticated error", e);
        setIsUserAuthenticated(false);
      });
  }, []);

  return isUserAuthenticated;
};
