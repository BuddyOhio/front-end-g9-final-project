import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InjectTailwind from "./InjectTailwind.jsx";
import { CustomContextProvider } from "./Components/Context";

import App from "./App.jsx";

import Welcome from "./Components/feat-login-register/Welcome";
import Register from "./Components/feat-login-register/Register";
import Login from "./Components/feat-login-register/Login";
import ForgetPassword from "./Components/feat-login-register/ForgetPassword";
import SubmitEmail from "./Components/feat-login-register/SubmitEmail";
import ChangePasswordAccount from "./Components/feat-login-register/ChangePasswordAccount";
import SuccessPassWord from "./Components/feat-login-register/SuccessPassWord";
import WelcomeToApplication from "./Components/feat-login-register/WelcomeToApplication.jsx";
import Logout from "./Components/feat-login-register/Logout.jsx";

import Calendar from "./components/feat-calendar/Calendar";
import Pet from "./Components/feat-pet/Pet.jsx";

import Profile from "./components/feat-profile/Profile.jsx";
import EditProfile from "./components/feat-profile/EditProfile.jsx";
import Notification from "./components/feat-profile/Notification.jsx";
import Privacy from "./components/feat-profile/Privacy.jsx";
import Security from "./components/feat-profile/Security.jsx";
import ChangeEmail from "./components/feat-profile/ChangeEmail.jsx";
import ChangePasswordProfile from "./components/feat-profile/ChangePasswordProfile";
import Contact from "./components/feat-profile/Contact.jsx";

import AllActivity from "./components/feat-activity/AllActivity.jsx";
import AddActivity from "./Components/feat-addActivity/AddActivity.jsx";
import EditActivity from "./Components/feat-editActivity/EditActivity";
import PageNotFound from "./Components/feat-error/PageNotFound.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/change-password-account", element: <ChangePasswordAccount /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/submit-email", element: <SubmitEmail /> },
  { path: "/success-password", element: <SuccessPassWord /> },
  { path: "/welcome-to-application", element: <WelcomeToApplication /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/pet", element: <Pet /> },
  { path: "/profile", element: <Profile /> },
  { path: "/edit-profile", element: <EditProfile /> },
  { path: "/notification", element: <Notification /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/security", element: <Security /> },
  { path: "/changeemail", element: <ChangeEmail /> },
  { path: "/changepassword", element: <ChangePasswordProfile /> },
  { path: "/contact", element: <Contact /> },
  { path: "/all-activity", element: <AllActivity /> },
  { path: "/add-activity", element: <AddActivity /> },
  { path: "/edit-activity/:activityId", element: <EditActivity /> },
  { path: "*", element: <PageNotFound/>},
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
