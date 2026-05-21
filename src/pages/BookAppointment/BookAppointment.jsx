import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookAppointment = () => {

  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {

    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => {

        const singleDoctor = data.find(
          (doctor) => doctor.id === id
        );

        setDoctor(singleDoctor);

      });

  }, [id]);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>
    );
  }

  return (

    <div className="bg-[#f4fbff] min-h-screen py-12">

      <div className="max-w-3xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3BA5F3] mb-10">
            Book Appointment
          </h2>

          <form className="space-y-5">

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Doctor Name
              </label>

              <input
                type="text"
                value={doctor.name}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-gray-100"
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Patient Name
              </label>

              <input
                type="text"
                placeholder="Enter patient name"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Gender
              </label>

              <select className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400">

                <option>Male</option>
                <option>Female</option>

              </select>

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
              />

            </div>

            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Appointment Date
              </label>

              <input
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400"
              />

            </div>

            <button className="btn w-full bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white rounded-xl">
              Confirm Appointment
            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default BookAppointment;