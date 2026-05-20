import { Link } from "react-router-dom";

const Login = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f4fbff] px-4 py-10">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-500 mb-6">
          Login
        </h2>

        <form className="space-y-4">

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
                Password
              </span>

            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-sm sm:text-base"
            />

          </div>

          <div className="text-right">

            <a className="text-sm text-blue-500 hover:underline cursor-pointer">
              Forgot Password?
            </a>

          </div>

          <button className="btn btn-primary w-full text-sm sm:text-base">
            Login
          </button>

        </form>

        <div className="divider text-sm">
          OR
        </div>

        <button className="btn btn-outline w-full text-sm sm:text-base">
          Continue with Google
        </button>

        <p className="text-center mt-5 text-sm sm:text-base text-gray-600">

          Don’t have an account?

          <Link
            to="/register"
            className="text-blue-500 font-semibold ml-1 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
};

export default Login;