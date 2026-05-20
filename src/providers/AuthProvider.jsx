import {
  createContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storedUser = localStorage.getItem("docappoint-user");

    if (storedUser) {

      setUser(JSON.parse(storedUser));

    }

    setLoading(false);

  }, []);

  const loginUser = (userData) => {

    setUser(userData);

    localStorage.setItem(
      "docappoint-user",
      JSON.stringify(userData)
    );

  };

  const logoutUser = () => {

    setUser(null);

    localStorage.removeItem("docappoint-user");

    localStorage.removeItem("access-token");

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