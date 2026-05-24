import {
  Navigate,
  useLocation,
} from "react-router-dom";

import {
  useContext,
} from "react";

import LoadingSpinner from "../Loadingspinner/Loadingspinner";

import {
  AuthContext,
} from "../../providers/AuthProvider";

const PrivateRoute = ({
  children,
}) => {

  const location =
    useLocation();

  const {
    user,
    loading,
  } = useContext(
    AuthContext
  );

  if (loading) {

    return (
      <LoadingSpinner />
    );

  }

  if (user) {

    return children;

  }

  return (
    <Navigate
      to="/login"
      state={location.pathname}
      replace
    />
  );

};

export default PrivateRoute;