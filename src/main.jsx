import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";

// Owen Import
import CreateAccount from "./components/CreateAccount.jsx";
import Notification from "./components/Notification.jsx";
import Privacy from "./components/Privacy.jsx";
import Profile from "./components/Profile.jsx";
import EditProfile from "./components/EditProfile.jsx";
import Security from "./components/Security.jsx";
import Contact from "./components/Contact.jsx";
import AllActivity from "./components/AllActivity.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import ChangeEmail from "./components/ChangeEmail.jsx";

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
    element: <ChangePassword />,
  },
  {
    path: "/changeemail",
    element: <ChangeEmail />,
  },
  {
    path: "/card",
    element: <AllActivity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </React.StrictMode>
);
