import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import InjectTailwind from "./InjectTailwind.jsx";
import { CustomContextProvider } from "./Components/Context";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <InjectTailwind>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </InjectTailwind>
  // </React.StrictMode>
);
