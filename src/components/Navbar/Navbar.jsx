import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/all-appointments">All Appointments</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/my-bookings">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto py-2">

        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />

              </svg>

            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-60 space-y-2"
            >
              {navLinks}
            </ul>

          </div>

          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-bold text-[#009dff]"
          >
            DocAppoint
          </NavLink>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-medium gap-2">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-3">

          <NavLink
            to="/login"
            className="border border-[#009dff] text-[#009dff] px-5 py-2 rounded-xl font-medium hover:bg-[#009dff] hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-[#009dff] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#0284c7] transition"
          >
            Register
          </NavLink>

        </div>

      </div>
    </div>
  );
};

export default Navbar;