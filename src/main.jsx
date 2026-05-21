import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import {
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import router from "./routes/router";

import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <AuthProvider>

      <RouterProvider router={router} />
<ToastContainer />
    </AuthProvider>

  </React.StrictMode>

);