import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InjectTailwind from "./InjectTailwind.jsx";
import { CustomContextProvider } from "./Components/Context";

// Owen Import
import Calendar from "./components/feat-calendar/Calendar";
import CreateAccount from "./components/feat-profile/CreateAccount";
import Notification from "./components/feat-profile/Notification.jsx";
import Privacy from "./components/feat-profile/Privacy.jsx";
import Profile from "./components/feat-profile/Profile.jsx";
import EditProfile from "./components/feat-profile/EditProfile.jsx";
import Security from "./components/feat-profile/Security.jsx";
import Contact from "./components/feat-profile/Contact.jsx";
import ChangePasswordProfile from "./components/feat-profile/ChangePasswordProfile";
import ChangeEmail from "./components/feat-profile/ChangeEmail.jsx";
import AllActivity from "./components/feat-activity/AllActivity.jsx";
import App from "./App.jsx";
import Welcome from "./Components/feat-login-register/Welcome";
import Login from "./Components/feat-login-register/Login";
import Register from "./Components/feat-login-register/Register";
import SuccessPassWord from "./Components/feat-login-register/SuccessPassWord";
import SubmitEmail from "./Components/feat-login-register/SubmitEmail";
import ForgetPassword from "./Components/feat-login-register/ForgetPassword";
import ChangePasswordAccount from "./Components/feat-login-register/ChangePasswordAccount";
import AddActivity from "./Components/feat-addActivity/AddActivity.jsx";
import EditActivity from "./Components/feat-editActivity/EditActivity";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/submit-email", element: <SubmitEmail /> },
  { path: "/change-password-account", element: <ChangePasswordAccount /> },
  { path: "/success-password", element: <SuccessPassWord /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/add-activity", element: <AddActivity /> },
  { path: "/edit-activity/:activityId", element: <EditActivity /> },
  { path: "/all-activity", element: <AllActivity /> },
  { path: "/profile", element: <Profile /> },
  { path: "/edit-profile", element: <EditProfile /> },
  { path: "/notification", element: <Notification /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/security", element: <Security /> },
  { path: "/contact", element: <Contact /> },
  { path: "/createaccount", element: <CreateAccount /> },
  { path: "/changepassword", element: <ChangePasswordProfile /> },
  { path: "/changeemail", element: <ChangeEmail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <InjectTailwind>
    <CustomContextProvider>
      <RouterProvider router={router} />
    </CustomContextProvider>
  </InjectTailwind>
  // </React.StrictMode>
);
