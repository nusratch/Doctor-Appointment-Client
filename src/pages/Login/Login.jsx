import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    const userInfo = {
      email,
      password,
    };

    try {

      const res = await fetch(
        "https://doctor-appointment-server-seven.vercel.app/login",
        {
          method: "POST",

          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(userInfo),
        }
      );

      const data = await res.json();

      if (data.token) {

        localStorage.setItem(
          "access-token",
          data.token
        );

        toast.success("Login Successful");

        navigate("/");

      } else {

        toast.error(data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error("Login Failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#eef9ff] px-4 py-10">

      <div className="w-full max-w-md bg-white border border-blue-100 shadow-xl rounded-3xl p-6 sm:p-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-8">
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

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
            Login
          </button>

        </form>

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