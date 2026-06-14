import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  async function login(formData) {
    try {
      const data = await loginUser(formData);

      setUser(data.data);

      localStorage.setItem(
        "user",
        JSON.stringify(data.data)
      );

      localStorage.setItem(
        "token",
        data.data.token
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  async function register(formData) {
    try {
      const data = await registerUser(formData);
      return data;
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    setUser(null);
    
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);