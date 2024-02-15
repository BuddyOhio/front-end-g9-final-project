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
import AllActivity from "./components/feat-activity/AllActivity";
import ChangeEmail from "./components/feat-profile/ChangeEmail";
import ChangePasswordProfile from "./components/feat-profile/ChangePasswordProfile";
import Contact from "./components/feat-profile/Contact";
import EditProfile from "./components/feat-profile/EditProfile";
import Privacy from "./components/feat-profile/Privacy";
import Profile from "./components/feat-profile/Profile";
import Notification from "./components/feat-profile/Notification";
import Login from "./Components/feat-login-register/Login";
import Logout from "./Components/feat-login-register/Logout";
import Security from "./Components/feat-profile/Security";
import Calendar from "./Components/feat-calendar/Calendar";

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
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;