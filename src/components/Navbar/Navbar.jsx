import { Link } from "react-router-dom";
import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  AuthContext,
} from "../../providers/AuthProvider";

const Navbar = () => {

  const {
    logoutUser,
  } = useContext(AuthContext);

  const [loggedUser, setLoggedUser] =
    useState(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("logged-user");

    if (storedUser) {

      setLoggedUser(
        JSON.parse(storedUser)
      );

    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "access-token"
    );

    localStorage.removeItem(
      "logged-user"
    );

    setLoggedUser(null);

    if (logoutUser) {
      logoutUser();
    }

  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/appointments">
          Appointments
        </Link>
      </li>

      <li>
        <Link to="/dashboard/my-bookings">
          Dashboard
        </Link>
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
          className="text-2xl md:text-3xl font-bold text-sky-500"
        >
          DocAppoint
        </Link>

      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>

      </div>

      <div className="navbar-end gap-3">

        {
          loggedUser ? (
            <>

              <div className="flex items-center gap-2">

                <img
                  src={
                    loggedUser?.photo
                      ? loggedUser.photo
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="User"
                  className="w-11 h-11 rounded-full object-cover border-2 border-sky-300"
                />

                <p className="hidden md:block font-semibold text-sky-500">
                  {loggedUser?.name}
                </p>

              </div>

              <button
                onClick={handleLogout}
                className="btn bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl"
              >
                Logout
              </button>

            </>
          ) : (
            <>

              <Link
                to="/login"
                className="btn border-sky-300 text-sky-500 hover:bg-sky-500 hover:text-white rounded-xl"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn bg-sky-500 hover:bg-sky-600 border-none text-white rounded-xl"
              >
                Register
              </Link>

            </>
          )
        }

      </div>

    </div>

  );
};

export default Navbar;