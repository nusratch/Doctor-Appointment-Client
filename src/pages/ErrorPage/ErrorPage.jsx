import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f4fbff] px-4">

      <div className="text-center max-w-xl">

        <h1 className="text-7xl md:text-8xl font-bold text-[#009dff]">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/">
          <button className="mt-8 bg-[#009dff] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0284c7] transition">
            Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;