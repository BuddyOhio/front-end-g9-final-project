import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import './login.css';
import InjectTailwind from "./InjectTailwind.jsx";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import SuccessPassWord from "./Components/SuccessPassWord";
import SubmitEmail from "./Components/SubmitEmail";
import ForgetPassword from "./Components/ForgetPassword";
import ChangePassword from "./Components/ChangePassword";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/welcome", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/createaccount", element: <CreateAccount /> },
  { path: "/successpassword", element: <SuccessPassWord /> },
  { path: "/submitemail", element: <SubmitEmail /> },
  { path: "/forgetpassword", element: <ForgetPassword /> },
  { path: "/changepassword", element: <ChangePassword /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <RouterProvider router={router} />
    </InjectTailwind>
  </React.StrictMode>
);
