import {
  useContext,
  useEffect,
  useState,
} from "react";

import axiosPublic from "../../../services/axiosPublic";

import {
  AuthContext,
} from "../../../providers/AuthProvider";

import { toast } from "react-toastify";

const MyBookings = () => {

  const { user } =
    useContext(AuthContext);

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (user?.email) {

      axiosPublic
        .get(
          `/appointments?email=${user.email}`
        )
        .then((res) => {

          setBookings(res.data);

          setLoading(false);

        });

    }

  }, [user]);

  const handleDelete = async (id) => {

    try {

      const res =
        await axiosPublic.delete(
          `/appointments/${id}`
        );

      if (res.data.deletedCount > 0) {

        const remaining =
          bookings.filter(
            (booking) =>
              booking._id !== id
          );

        setBookings(remaining);

        toast.success(
          "Appointment deleted successfully!"
        );

      }

    } catch (error) {

      toast.error(
        "Failed to delete appointment"
      );

    }

  };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center">

        <span className="loading loading-spinner loading-lg text-info"></span>

      </div>

    );

  }

  return (

    <div className="bg-[#f4fbff] min-h-screen py-12 px-4">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#3BA5F3] mb-12">
          My Bookings
        </h2>

        {
          bookings.length === 0 ? (

            <div className="text-center text-gray-500 text-lg">
              No appointments booked yet.
            </div>

          ) : (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {
                bookings.map((booking) => (

                  <div
                    key={booking._id}
                    className="bg-white rounded-3xl shadow-lg p-6"
                  >

                    <div className="space-y-3">

                      <h3 className="text-2xl font-bold text-[#3BA5F3]">
                        {booking.doctorName}
                      </h3>

                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Patient:
                        </span>{" "}
                        {booking.patientName}
                      </p>

                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Gender:
                        </span>{" "}
                        {booking.gender}
                      </p>

                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Phone:
                        </span>{" "}
                        {booking.phone}
                      </p>

                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Date:
                        </span>{" "}
                        {booking.appointmentDate}
                      </p>

                      <p className="text-gray-700">
                        <span className="font-semibold">
                          Time:
                        </span>{" "}
                        {booking.appointmentTime}
                      </p>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">

                      <button className="btn flex-1 bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
                        Update
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            booking._id
                          )
                        }
                        className="btn flex-1 bg-red-500 hover:bg-red-600 border-none text-white rounded-xl"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>

  );
};

export default MyBookings;