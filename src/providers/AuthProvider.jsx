import {
  createContext,
  useEffect,
  useState,
} from "react";

import { authClient } from "../lib/auth-client";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    authClient.getSession()
      .then((data) => {

        setUser(data?.data?.user || null);

        setLoading(false);

      });

  }, []);

  const loginUser = (userData) => {

    setUser(userData);

  };

  const logoutUser = async () => {

    await authClient.signOut();

    setUser(null);

  };

  const authInfo = {
    user,
    setUser,
    loginUser,
    logoutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;