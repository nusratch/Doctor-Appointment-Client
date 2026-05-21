import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";


const DoctorDetails = () => {

  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {

fetch("http://localhost:5000/doctors")
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

    <div className="bg-[#f4fbff] py-12 md:py-20 min-h-screen">

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">

          <div>

            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full rounded-3xl object-cover"
            />

          </div>

          <div className="flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-4">

              <span className="bg-[#e8f5ff] text-[#3BA5F3] px-4 py-1 rounded-full text-sm font-semibold">
                ⭐ {doctor.rating}
              </span>

              <span className="bg-[#e8f5ff] text-[#3BA5F3] px-4 py-1 rounded-full text-sm font-semibold">
                {doctor.specialty}
              </span>

            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">
              {doctor.name}
            </h2>

            <p className="text-gray-600 leading-8 mb-6 text-base md:text-lg">
              Experienced specialist dedicated to providing trusted healthcare support and quality treatment for patients.
            </p>

            <div className="space-y-3 text-gray-700 text-base md:text-lg">

              <p>
                <span className="font-bold">
                  Experience:
                </span>{" "}
                {doctor.experience}
              </p>

              <p>
                <span className="font-bold">
                  Hospital:
                </span>{" "}
                {doctor.hospital}
              </p>

              <p>
                <span className="font-bold">
                  Location:
                </span>{" "}
                {doctor.location}
              </p>

              <p>
                <span className="font-bold">
                  Consultation Fee:
                </span>{" "}
                ৳{doctor.fee}
              </p>

            </div>

           <Link to={`/book-appointment/${doctor.id}`}>

  <button className="btn mt-8 bg-[#3BA5F3] hover:bg-[#2593e8] border-none text-white w-full sm:w-fit px-10 rounded-xl">
    Book Appointment
  </button>

</Link>
          </div>

        </div>

      </div>

    </div>

  );
};

export default DoctorDetails;