import { Link } from "react-router-dom";

const Register = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f4fbff] px-4 py-10">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-500 mb-6">
          Register
        </h2>

        <form className="space-y-4">

          <div>

            <label className="label">

              <span className="label-text font-medium text-sm sm:text-base">
                Name
              </span>

            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full text-sm sm:text-base"
            />

          </div>

          <div>

            <label className="label">

              <span className="label-text font-medium text-sm sm:text-base">
                Email
              </span>

            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-sm sm:text-base"
            />

          </div>

          <div>

            <label className="label">

              <span className="label-text font-medium text-sm sm:text-base">
                Photo URL
              </span>

            </label>

            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full text-sm sm:text-base"
            />

          </div>

          <div>

            <label className="label">

              <span className="label-text font-medium text-sm sm:text-base">
                Password
              </span>

            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full text-sm sm:text-base"
            />

          </div>

          <button className="btn btn-primary w-full text-sm sm:text-base">
            Register
          </button>

        </form>

        <div className="divider text-sm">
          OR
        </div>

        <button className="btn btn-outline w-full text-sm sm:text-base">
          Continue with Google
        </button>

        <p className="text-center mt-5 text-sm sm:text-base text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-500 font-semibold ml-1 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
};

export default Register;