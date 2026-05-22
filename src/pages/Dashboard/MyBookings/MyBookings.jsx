import {
  useContext,
  useEffect,
  useState,
} from "react";

import Modal from "react-modal";

import axiosPublic from "../../../services/axiosPublic";

import {
  AuthContext,
} from "../../../providers/AuthProvider";

import { toast } from "react-toastify";

Modal.setAppElement("#root");

const MyBookings = () => {

  const { user } =
    useContext(AuthContext);

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [isOpen, setIsOpen] =
    useState(false);

  const [selectedBooking, setSelectedBooking] =
    useState(null);

  useEffect(() => {

    const fetchBookings =
      async () => {

        try {

          const res =
            await axiosPublic.get(
              "/appointments"
            );

          const userBookings =
            res.data.filter(
              (booking) =>
                booking.email ===
                user?.email
            );

          setBookings(
            userBookings
          );

          setLoading(false);

        } catch (error) {

          console.log(error);

          setLoading(false);

        }

      };

    if (user?.email) {

      fetchBookings();

    } else {

      setLoading(false);

    }

  }, [user]);

  const openModal = (
    booking
  ) => {

    setSelectedBooking(
      booking
    );

    setIsOpen(true);

  };

  const closeModal = () => {

    setIsOpen(false);

    setSelectedBooking(null);

  };

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      const form =
        e.target;

      const updatedData = {

        patientName:
          form.patientName.value,

        gender:
          form.gender.value,

        phone:
          form.phone.value,

        appointmentDate:
          form.appointmentDate.value,

        appointmentTime:
          form.appointmentTime.value,

      };

      try {

        const res =
          await axiosPublic.patch(
            `/appointments/${selectedBooking._id}`,
            updatedData
          );

        if (
          res.data.modifiedCount >
          0
        ) {

          const updatedBookings =
            bookings.map(
              (booking) => {

                if (
                  booking._id ===
                  selectedBooking._id
                ) {

                  return {
                    ...booking,
                    ...updatedData,
                  };

                }

                return booking;

              }
            );

          setBookings(
            updatedBookings
          );

          closeModal();

          toast.success(
            "Appointment updated successfully!"
          );

        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to update appointment"
        );

      }

    };

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this appointment?"
        );

      if (!confirmDelete) {
        return;
      }

      try {

        const res =
          await axiosPublic.delete(
            `/appointments/${id}`
          );

        if (
          res.data.deletedCount >
          0
        ) {

          const remaining =
            bookings.filter(
              (booking) =>
                booking._id !==
                id
            );

          setBookings(
            remaining
          );

          toast.success(
            "Appointment deleted successfully!"
          );

        }

      } catch (error) {

        console.log(error);

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
          bookings.length ===
          0 ? (

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No appointments booked yet
              </h3>

              <p className="text-gray-500">
                Please book an appointment first.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {
                bookings.map(
                  (booking) => (

                    <div
                      key={
                        booking._id
                      }
                      className="bg-white rounded-3xl shadow-lg p-6"
                    >

                      <div className="space-y-3">

                        <h3 className="text-2xl font-bold text-[#3BA5F3]">
                          {
                            booking.doctorName
                          }
                        </h3>

                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Patient:
                          </span>{" "}
                          {
                            booking.patientName
                          }
                        </p>

                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Gender:
                          </span>{" "}
                          {
                            booking.gender
                          }
                        </p>

                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Phone:
                          </span>{" "}
                          {
                            booking.phone
                          }
                        </p>

                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Date:
                          </span>{" "}
                          {
                            booking.appointmentDate
                          }
                        </p>

                        <p className="text-gray-700">
                          <span className="font-semibold">
                            Time:
                          </span>{" "}
                          {
                            booking.appointmentTime
                          }
                        </p>

                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-8">

                        <button
                          onClick={() =>
                            openModal(
                              booking
                            )
                          }
                          className="btn flex-1 bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl"
                        >
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

                  )
                )
              }

            </div>

          )
        }

        <Modal
          isOpen={isOpen}
          onRequestClose={
            closeModal
          }
          className="max-w-2xl mx-auto mt-20 bg-white rounded-3xl p-8 outline-none"
          overlayClassName="fixed inset-0 bg-black/40 flex justify-center items-start px-4 z-50 overflow-y-auto"
        >

          <h2 className="text-3xl font-bold text-center text-sky-500 mb-8">
            Update Appointment
          </h2>

          <form
            onSubmit={
              handleUpdate
            }
            className="space-y-5"
          >

            <input
              type="text"
              name="patientName"
              defaultValue={
                selectedBooking?.patientName
              }
              className="w-full px-4 py-3 rounded-xl border border-sky-200"
              required
            />

            <select
              name="gender"
              defaultValue={
                selectedBooking?.gender
              }
              className="w-full px-4 py-3 rounded-xl border border-sky-200"
            >

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

            </select>

            <input
              type="text"
              name="phone"
              defaultValue={
                selectedBooking?.phone
              }
              className="w-full px-4 py-3 rounded-xl border border-sky-200"
              required
            />

            <input
              type="date"
              name="appointmentDate"
              defaultValue={
                selectedBooking?.appointmentDate
              }
              className="w-full px-4 py-3 rounded-xl border border-sky-200"
              required
            />

            <input
              type="time"
              name="appointmentTime"
              defaultValue={
                selectedBooking?.appointmentTime
              }
              className="w-full px-4 py-3 rounded-xl border border-sky-200"
              required
            />

            <div className="flex gap-4">

              <button className="btn flex-1 bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
                Save Changes
              </button>

              <button
                type="button"
                onClick={
                  closeModal
                }
                className="btn flex-1 bg-gray-300 hover:bg-gray-400 border-none text-black rounded-xl"
              >
                Cancel
              </button>

            </div>

          </form>

        </Modal>

      </div>

    </div>

  );

};

export default MyBookings;