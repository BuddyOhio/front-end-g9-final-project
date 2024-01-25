import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";

// Owen Import
import CreateAccount from "./components/feat-profile/CreateAccount.jsx";
import Notification from "./components/feat-profile/Notification.jsx";
import Privacy from "./components/feat-profile/Privacy.jsx";
import Profile from "./components/feat-profile/Profile.jsx";
import EditProfile from "./components/feat-profile/EditProfile.jsx";
import Security from "./components/feat-profile/Security.jsx";
import Contact from "./components/feat-profile/Contact.jsx";
import ChangePasswordProfile from "./components/feat-profile/ChangePasswordProfile.jsx";
import ChangeEmail from "./components/feat-profile/ChangeEmail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/changepassword",
    element: <ChangePasswordProfile />,
  },
  {
    path: "/changeemail",
    element: <ChangeEmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </React.StrictMode>
);
