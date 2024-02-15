import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGlobalContext } from "../Context";

const Logout = () => {
  const navigate = useNavigate();
  const { setUserData } = useGlobalContext();
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/logout", { withCredentials: true })
      .then(() => {
        Swal.fire({
          iconHtml: '<img src="public/login_forLogout.png">',
          customClass: {
            icon: "no-border",
          },
          text: "Logged out",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "i will back",
        });

        // clear user data
        setUserData(undefined);

        // redirect to login
        navigate("/login");
      });
  }, []);

  return <></>;
};

export default Logout;
