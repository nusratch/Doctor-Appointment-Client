import {
  useEffect,
  useState,
} from "react";

import {
  Helmet,
} from "react-helmet-async";

import DoctorCard from "../../components/DoctorCard/DoctorCard";

const AllAppointments = () => {

  const [doctors, setDoctors] =
    useState([]);

  const [searchText, setSearchText] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      "https://doctor-appointment-server-seven.vercel.app/doctors"
    )
      .then((res) => res.json())

      .then((data) => {

        setDoctors(data);

        setLoading(false);

      })

      .catch((error) => {

        console.log(error);

        setLoading(false);

      });

  }, []);

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );

  return (

    <>

      <Helmet>

        <title>
          All Appointments | DocAppoint
        </title>

        <meta
          name="description"
          content="Browse all available doctors and book appointments easily with DocAppoint."
        />

      </Helmet>

      <div className="bg-[#f4fbff] py-12 md:py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-5xl font-bold text-[#3BA5F3]">
              All Appointments
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find experienced doctors and book your appointment easily.
            </p>

          </div>

          <div className="max-w-xl mx-auto mb-12">

            <input
              type="text"
              placeholder="Search doctor by name..."
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
              className="w-full px-5 py-4 rounded-2xl border border-sky-200 focus:outline-none focus:border-sky-400"
            />

          </div>

          {
            loading ? (

              <div className="flex justify-center items-center py-20">

                <span className="loading loading-spinner loading-lg text-sky-500"></span>

              </div>

            ) : (

              <>

                {
                  filteredDoctors.length === 0 ? (

                    <div className="text-center text-gray-500 text-lg py-20">
                      No doctors found.
                    </div>

                  ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                      {
                        filteredDoctors.map(
                          (doctor) => (

                            <DoctorCard
                              key={
                                doctor._id
                              }
                              doctor={doctor}
                            />

                          )
                        )
                      }

                    </div>

                  )
                }

              </>

            )
          }

        </div>

      </div>

    </>

  );

};

export default AllAppointments;