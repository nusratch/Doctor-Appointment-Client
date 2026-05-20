import {
  useContext,
} from "react";

import {
  Navigate,
  useLocation,
} from "react-router-dom";

import {
  AuthContext,
} from "../../providers/AuthProvider";

import LoadingSpinner from "../Loadingspinner/Loadingspinner";

const PrivateRoute = ({ children }) => {

  const {
    user,
    loading,
  } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      state={location.pathname}
      to="/login"
    />
  );
};

export default PrivateRoute;