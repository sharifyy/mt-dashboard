import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { loginRequest, logoutRequest, meRequest } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { username, name, role }
  const [checkingSession, setCheckingSession] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  // On first load, try to restore the session from the cookie.
  useEffect(() => {
    let active = true;
    meRequest()
      .then((data) => {
        if (active) setUser(data);
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setCheckingSession(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(async (username, password) => {
    setLoginError("");
    setLoggingIn(true);
    try {
      const data = await loginRequest(username, password);
      setUser(data);
      return true;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        (err?.response?.status === 401
          ? "نام کاربری یا رمز عبور اشتباه است"
          : "خطا در برقراری ارتباط با سرور");
      setLoginError(message);
      return false;
    } finally {
      setLoggingIn(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutRequest();
    } catch {
      // even if the request fails, clear local state so the UI
      // reflects a logged-out condition
    } finally {
      setUser(null);
    }
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    checkingSession,
    loginError,
    loggingIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
