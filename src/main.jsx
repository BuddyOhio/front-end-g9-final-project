import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";
import { CustumnContextProvider } from "./components/activity/Context.jsx";

// Owen Import

import ActivityCreate from "./components/activity/ActivityCreate.jsx";
import AllActivity from "./components/activity/AllActivity.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/card",
    element: <AllActivity />,
  },
  {
    path: "/add",
    element: <ActivityCreate />,
  },
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
