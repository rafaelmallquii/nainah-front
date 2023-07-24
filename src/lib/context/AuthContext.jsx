"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import api from "../helpers/api/local";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserFromCookie() {
      const token = Cookies.get("token");

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        try {
          const { data: user } = await api.get("api/auth/account/me");

          if (user) setUser(user);
        } catch (error) {
          throw error?.response?.data;
        }
      }

      setIsLoading(false);
    }

    fetchUserFromCookie();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("api/auth/login", {
        email,
        password
      });

      const { access: token } = data.data;

      if (token) {
        Cookies.set("token", token, { expires: 1 });

        api.defaults.headers.Authorization = `Bearer ${token}`;

        try {
          const { data: user } = await api.get("api/auth/account/me");
          if (user) setUser(user);
        } catch (error) {
          throw error?.response?.data;
        }
      }

      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const signup = async (username, email, password) => {
    try {
      const { data } = await api.post("api/auth/signup", {
        username,
        email,
        password
      });

      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const resetPassword = async (email) => {
    try {
      const { data } = await api.post("api/auth/password/reset-password", {
        email
      });

      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const resetPasswordConfirm = async (uid, token, new_password) => {
    try {
      const { data } = await api.post(
        "api/auth/password/reset-password-confirm",
        {
          uid,
          token,
          new_password
        }
      );

      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const activateAccount = async (uid, token) => {
    try {
      const { data } = await api.post("api/auth/account/activation", {
        uid,
        token
      });
      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const resendActivationEmail = async (email) => {
    try {
      const { data } = await api.post("api/auth/account/resend-activation", {
        email
      });
      return data;
    } catch (error) {
      throw error?.response?.data;
    }
  };

  const logout = () => {
    Cookies.remove("token");

    setUser(null);

    delete api.defaults.headers.Authorization;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        signup,
        activateAccount,
        resetPassword,
        resendActivationEmail,
        resetPasswordConfirm,
        loading: isLoading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
