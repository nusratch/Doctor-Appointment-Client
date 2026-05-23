import {
  createContext,
  useEffect,
  useState,
} from "react";

import { authClient } from "../services/auth-client";

export const AuthContext =
  createContext(null);

const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const checkSession =
      async () => {

        try {

          const session =
            await authClient.getSession();

          if (
            session?.data?.user
          ) {

            const loggedUser =
              session.data.user;

            setUser(
              loggedUser
            );

            localStorage.setItem(
              "logged-user",
              JSON.stringify(
                loggedUser
              )
            );

          } else {

            const storedUser =
              localStorage.getItem(
                "logged-user"
              );

            if (
              storedUser
            ) {

              setUser(
                JSON.parse(
                  storedUser
                )
              );

            }

          }

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    checkSession();

  }, []);

  const loginUser = (
    userData
  ) => {

    setUser(userData);

    localStorage.setItem(
      "logged-user",
      JSON.stringify(userData)
    );

  };

  const logoutUser =
    async () => {

      try {

        await authClient.signOut();

      } catch (error) {

        console.log(error);

      }

      localStorage.removeItem(
        "logged-user"
      );

      localStorage.removeItem(
        "access-token"
      );

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

    <AuthContext.Provider
      value={authInfo}
    >

      {children}

    </AuthContext.Provider>

  );

};

export default AuthProvider;