import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Administrators from "./components/administrators/Administrators";
import Beneficiaries from "./components/Beneficiaries";
import reportWebVitals from "./reportWebVitals";
import RegisterAdmin from "./components/administrators/RegisterAdmin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Donation from "./components/Donation";
import AdminPage from "./components/administrators/AdminPage";
import Volunteers from "./components/Volunteers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/beneficiaries",
    element: <Beneficiaries />,
  },
  {
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/donation",
    element: <Donation />,
  },

  {
    path: "/admin",
    element: <Administrators />,
  },
  {
    path: "/admin/register",
    element: <RegisterAdmin />,
  },
  {
    path: "/admin/page",
    element: <AdminPage />,
  },

  //here goes the other routes
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
