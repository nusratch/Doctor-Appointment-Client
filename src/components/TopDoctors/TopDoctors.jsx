import { useEffect, useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";

const TopDoctors = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    fetch("https://doctor-appointment-server-era2ha38a-nusrats-projects-299df817.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoctors(data);
      })
      .catch((error) => console.log(error));

  }, []);

  return (

    <div className="py-16 md:py-20 bg-[#f4fbff]">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-[#3BA5F3]">
            Top Rated Doctors
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Meet our highly experienced and trusted doctors who provide the best healthcare support for patients.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            doctors?.map((doctor) => (
              <DoctorCard
                key={doctor._id}
                doctor={doctor}
              />
            ))
          }

        </div>

      </div>

    </div>

  );
};

export default TopDoctors;