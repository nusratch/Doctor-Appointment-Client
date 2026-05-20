import { Link } from "react-router-dom";

const Login = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-[#eef9ff] px-4 py-10">

      <div className="w-full max-w-md bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-8">
          Login
        </h2>

        <form className="space-y-5">

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:border-sky-400 bg-white text-gray-700"
            />

          </div>

          <div className="text-right">

            <a className="text-sm text-sky-500 hover:underline cursor-pointer">
              Forgot Password?
            </a>

          </div>

          <button className="btn w-full bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl">
            Login
          </button>

        </form>

        <div className="divider text-gray-400">
          OR
        </div>

        <button className="btn btn-outline w-full border-sky-300 text-sky-500 hover:bg-sky-500 hover:text-white rounded-xl">
          Continue with Google
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">

          Don’t have an account?

          <Link
            to="/register"
            className="text-sky-500 font-semibold ml-1 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
};

export default Login;