// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

const handleLogin = async (e) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://wirelesspay.ng/api/v1/login",
        formData
      );

      const token = response.data.token;
      localStorage.setItem("userToken", token);

      const userData = response.data.user;
      login(userData);

  
navigate("/dashboard");



    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  }
};

  return (
    <div className="center">
      <div className="login-form">
        <h1>Login</h1>
        <div className="form">
          {loginError && (
            <p style={{ color: "red" }} className="error-message">
              {loginError}
            </p>
          )}
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              size={43}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={formErrors.username ? "error" : ""}
            />
            {formErrors.username && (
              <p style={{ color: "red" }} className="error-message">
                {formErrors.username}
              </p>
            )}

            <label htmlFor="password">Password</label>
            <br />
            <input
              size={43}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? "error" : ""}
            />
            {formErrors.password && (
              <p style={{ color: "red" }} className="error-message">
                {formErrors.password}
              </p>
            )}

            <br />
            <input
              className="button-cta"
              type="submit"
              value={loading ? "Logging in..." : "Login"}
              disabled={loading}
            />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
