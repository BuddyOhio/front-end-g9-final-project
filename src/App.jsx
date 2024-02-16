import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddActivity from "./Components/feat-addActivity/AddActivity";
import EditActivity from "./Components/feat-editActivity/EditActivity";
import PageNotFound from "./Components/feat-error/PageNotFound";
import ChangePasswordAccount from "./Components/feat-login-register/ChangePasswordAccount";
import ForgetPassword from "./Components/feat-login-register/ForgetPassword";
import Register from "./Components/feat-login-register/Register";
import SubmitEmail from "./Components/feat-login-register/SubmitEmail";
import SuccessPassWord from "./Components/feat-login-register/SuccessPassWord";
import Welcome from "./Components/feat-login-register/Welcome";
import WelcomeToApplication from "./Components/feat-login-register/WelcomeToApplication";
import Pet from "./Components/feat-pet/Pet";
import AllActivity from "./Components/feat-activity/AllActivity";
import ChangeEmail from "./Components/feat-profile/ChangeEmail";
import ChangePasswordProfile from "./Components/feat-profile/ChangePasswordProfile";
import Contact from "./Components/feat-profile/Contact";
import EditProfile from "./Components/feat-profile/EditProfile";
import Privacy from "./Components/feat-profile/Privacy";
import Profile from "./Components/feat-profile/Profile";
import Notification from "./Components/feat-profile/Notification";
import Login from "./Components/feat-login-register/Login";
import Logout from "./Components/feat-login-register/Logout";
import Security from "./Components/feat-profile/Security";
import Calendar from "./Components/feat-calendar/Calendar";
import Home from "./Components/feat-dashboard/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
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
    { path: "/home", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
