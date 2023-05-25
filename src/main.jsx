import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/Routers";
import AuthProvider from "./Components/Provider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ToastContainer position="top-center" />
    <RouterProvider router={router} />
  </AuthProvider>
);