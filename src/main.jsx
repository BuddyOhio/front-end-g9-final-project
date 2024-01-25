import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./components/Calendar.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InjectTailwind from "./InjectTailwind.jsx";

import App from "./App.jsx";
import Welcome from "./Components/feat-login-register/Welcome";
import Login from "./Components/feat-login-register/Login";
import Register from "./Components/feat-login-register/Register";
import SuccessPassWord from "./Components/feat-login-register/SuccessPassWord";
import SubmitEmail from "./Components/feat-login-register/SubmitEmail";
import ForgetPassword from "./Components/feat-login-register/ForgetPassword";
import ChangePasswordAccount from "./Components/feat-login-register/ChangePasswordAccount";
import AllActivity from "./components/feat-activity/AllActivity.jsx";
import AddActivity from "./Components/feat-addActivity/AddActivity.jsx";
import EditActivity from "./Components/feat-editActivity/EditActivity";
import { CustumnContextProvider } from "./components/feat-activity/Context.jsx";

// ลบได้
import ActivityCreate from "./components/feat-activity/ActivityCreate.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/submit-email", element: <SubmitEmail /> },
  { path: "/change-password-account", element: <ChangePasswordAccount /> },
  { path: "/success-password", element: <SuccessPassWord /> },
  { path: "/card", element: <AllActivity /> },
  { path: "/add", element: <ActivityCreate /> },
  { path: "/add-activity", element: <AddActivity /> },
  { path: "/edit-activity", element: <EditActivity /> },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <CustumnContextProvider>
        <RouterProvider router={router} />
      </CustumnContextProvider>
    </InjectTailwind>
  </React.StrictMode>
);
