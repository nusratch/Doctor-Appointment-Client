import { Link } from "react-router-dom";

const Navbar = () => {

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/appointments">Appointments</Link>
      </li>

      <li>
        <Link to="/dashboard/my-bookings">Dashboard</Link>
      </li>
    </>
  );

  return (

    <div className="navbar bg-white shadow-md px-4 md:px-8">

      <div className="navbar-start">

        <div className="dropdown lg:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-2xl"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>

        </div>

        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-blue-500"
        >
          DocAppoint
        </Link>

      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>

      </div>

      <div className="navbar-end gap-2">

        <Link
          to="/login"
          className="btn btn-dash btn-info"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="btn btn-dash btn-info"
        >
          Register
        </Link>

      </div>

    </div>

  );
};

export default Navbar;