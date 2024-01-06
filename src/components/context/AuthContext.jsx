
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userToken", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedToken = localStorage.getItem("userToken");

      if (storedToken) {
        try {
          const response = await axios.get(
            "https://wirelesspay.ng/api/v1/user/get-profile",
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );

          const userData = response.data;
          login(userData);
        } catch (error) {
          console.error("Error fetching user profile:", error);
          if (error.response && error.response.status === 401) {
            // Handle token expiration or invalid token
            logout();
          }
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext.js
// ... (your existing code)

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

