import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Calendar from "./components/Calendar.jsx";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/calendar", element: <Calendar /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </React.StrictMode>
);
