import { Link } from "react-router-dom";

const Doctorcard = ({ doctor }) => {

  const {
    id,
    name,
    specialty,
    image,
    experience,
    hospital,
    fee,
  } = doctor;

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      <div className="p-5">

        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover rounded-2xl"
        />

        <div className="mt-5 space-y-3">

          <h2 className="text-2xl font-bold text-[#0f172a]">
            {name}
          </h2>

          <p className="text-[#009dff] font-semibold">
            {specialty}
          </p>

          <p className="text-gray-500">
            {experience} Experience
          </p>

          <p className="text-gray-500">
            {hospital}
          </p>

          <p className="text-[#0f172a] font-semibold">
            Consultation Fee: ৳{fee}
          </p>

          <Link to={`/doctor/${id}`}>
            <button className="w-full mt-4 bg-[#009dff] text-white py-3 rounded-xl font-semibold hover:bg-[#0284c7] transition">
              View Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Doctorcard;