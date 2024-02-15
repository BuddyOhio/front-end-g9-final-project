import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavbarDesktop from "../feat-navDesktop/NavbarDesktop";

function Profile() {
  // <--- ปรับแต่ง CSS ของปุ่มได้ที่นี่ --->(มีปุ่ม logoot สำหรับเฉพาะ mobile แยกที่บรรทัด 163)
  const ProfileButton = (props) => {
    return (
      <Link to={props.link}>
        <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full md:shadow-lg md:shadow-blue-400 md:hover:bg-white md:bg-cyan-50">
          <div className="bg- rounded-full h-11 w-11 flex justify-center items-center">
            <img src={props.image} alt="" className="h-1/2" />
          </div>

          <div className="flex justify-between items-center grow pl-4">
            <h3 className="text-lg">{props.title}</h3>
            <img
              src="../../../public/chevron-right-solid.svg"
              alt=""
              className="h-1/3"
            />
          </div>
        </div>
      </Link>
    );
  };
  // Logout Alert Function
  const navigate = useNavigate();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Your are now logout.",
          icon: "success",
        });
        navigate("/logout");
      }
    });
  };

  // Set Profile Picture by Gender
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/edit-profile", {
          withCredentials: true,
        });
        const userData = response.data;
        const userGender = userData.gender;
        const userFullname = userData.fullName;
        setGender(userGender);
        setFullName(userFullname);
      } catch (error) {
        console.error("Error fetching gender:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <NavbarDesktop>
      <div className="grow bg-sky-100 md:py-5 md:bg-white flex flex-col pb-[60px] pt-[60px] md:pb-0 md:pt-0 md:mt-[80px]">
        <header>
          <div className="flex flex-col bg-sky-100 items-center gap-2 py- md:bg-white">
            {/* <!-- Header (Profile) --> */}
            <div className="grid md:grid-cols-1 w-full items-center">
              {/* <!-- Go back button --> */}
              <Link
                to="/profile"
                className="bg-white justify-self-center py-3.5 px-4 rounded-xl shadow-md hidden"
              >
                <img src="../../../public/chevron-left-solid.svg" alt="" />
              </Link>

              {/* <!-- Header Text --> */}
              <div className="justify-self-center text-blue-900 font-extrabold text-xl md:text-2xl 2xl:text-3xl">
                <h2 className="">PROFILE</h2>
              </div>
            </div>

            {/* <!-- Profile Picutre --> */}
            <div className="h-40 w-40 rounded-full border-[10px] border-solid border-white">
              <a href="#">
                <img
                  alt="name"
                  src={
                    gender === "male"
                      ? "/avatar-male.png"
                      : gender === "female"
                      ? "avatar-female.png"
                      : "avatar-non.png"
                  }
                  className="w-full h-full object-cover rounded-full"
                />
              </a>
            </div>
            {/* <!-- Name --> */}
            <div className="text-blue-900 text-xl font-bold">
              <h3>{fullName ? fullName : "Guest"}</h3>
            </div>
            {/* <!-- BMI --> */}
            <div className="bg-[#0eb400] text-white text-sm px-2 py-1 rounded-lg">
              <h3>BMI: 20 | Healthy Range</h3>
            </div>
          </div>
        </header>

        <main className="bg-sky-100 flex justify-center grow w-full mt-4 md:mt-0 md:bg-white md:pb-8">
          <div className="bg-white rounded-t-3xl pt-8 w-full md:w-10/12 md:flex md:flex-col  md:gap-2 xl:gap-4 xl:min-w-[460px] md:max-w-[560px] xl:w-7/12 h-full">
            {/* <!--Row 1 --> */}
            <ProfileButton
              link="/edit-profile"
              image="/user-regular.svg"
              title="Profile"
            />

            {/* <!--Row 2 --> */}
            <ProfileButton
              link="/notification"
              image="/bell-regular.svg"
              title="Notification"
            />
            {/* <!--Row 3 --> */}
            <ProfileButton
              link="/privacy"
              image="/exclamation-solid.svg"
              title="Privacy"
            />
            {/* <!--Row 4 --> */}
            <ProfileButton
              link="/security"
              image="/lock-solid.svg"
              title="Security"
            />

            {/* <!-- Help --> */}
            <div className="px-10 py-2 text-lg font-bold md:hidden">
              <h3>Help</h3>
            </div>

            {/* <!--Row 5 --> */}
            <ProfileButton
              link="/contact"
              image="/phone-solid.svg"
              title="Contact"
            />
            {/* <--Row 6 Logout **Only on mobile**--> */}
            <div onClick={handleDelete} className="md:hidden">
              <div className="flex gap-0.5 py-4 px-10 hover:bg-gray-200 md:rounded-full lg-bg-nav-lightblue md:shadow-lg md:shadow-gray-400 md:hover:bg-white md:bg-[#d4f7ff]">
                <div className="bg-gray-200 rounded-full h-11 w-11 flex justify-center items-center">
                  <LogoutIcon />
                </div>

                <div className="flex justify-between items-center grow pl-4">
                  <h3 className="text-lg">Logout</h3>
                  <img
                    src="../../../public/chevron-right-solid.svg"
                    alt=""
                    className="h-1/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NavbarDesktop>
  );
}

export default Profile;
