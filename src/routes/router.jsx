import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import AllAppointments from "../pages/AllAppointments/AllAppointments";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import BookAppointment from "../pages/BookAppointment/BookAppointment";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import MyBookings from "../pages/Dashboard/MyBookings/MyBookings";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";

import ErrorPage from "../pages/ErrorPage/ErrorPage";

import PrivateRoute from "../components/privateRoute/privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/appointments",
        element: <AllAppointments />,
      },

      {
        path: "/doctor/:id",
        element: (
          <PrivateRoute>
            <DoctorDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/book-appointment/:id",
        element: (
          <PrivateRoute>
            <BookAppointment />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        path: "my-bookings",
        element: <MyBookings />,
      },

      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);

export default router;