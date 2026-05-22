import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const email = form.email.value;

    const photo = form.photo.value;

    const password = form.password.value;

    const userInfo = {
      name,
      email,
      photo,
      password,
    };

    try {

      const res = await fetch(
        "https://doctor-appointment-server-seven.vercel.app/register",
        {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(userInfo),
        }
      );

      const data = await res.json();

      if (data.insertedId) {

        toast.success("Registration Successful");

        navigate("/login");

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      console.log(error);

      toast.error("Registration Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#eef9ff] px-4 py-10">

      <div className="w-full max-w-md bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-8">
          Register
        </h2>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
              required
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
              required
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
              required
            />

          </div>

          <button className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
            Register
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-sky-500 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
};

export default Register;