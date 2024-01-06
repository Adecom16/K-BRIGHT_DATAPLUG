import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "male",
    username: "",
    nin: "",
    referral: "",
  });

  const [formErrors, setFormErrors] = useState({});
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

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.nin.trim()) {
      errors.nin = "NIN is required";
    } else if (formData.nin.length !== 11) {
      errors.nin = "NIN must be 11 digits";
    }

    if (!formData.gender) {
      errors.gender = "Gender is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
    }

    if (!formData.referral.trim()) {
      errors.referral = "Referral code is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://wirelesspay.ng/api/v1/register_without_bvn",
          formData
        );

        alert("Registration successful:", response.data);
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error.response?.data);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="center">
      <div className="login-form">
        <h1>Register</h1>
        <div className="form">
          <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              size={43}
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? "error" : ""}
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}

            <label htmlFor="email">Email</label>
            <br />
            <input
              size={43}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? "error" : ""}
            />
            {formErrors.email && (
              <p className="error-message">{formErrors.email}</p>
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
              <p className="error-message">{formErrors.password}</p>
            )}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <br />
            <input
              size={43}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={formErrors.confirmPassword ? "error" : ""}
            />
            {formErrors.confirmPassword && (
              <p className="error-message">{formErrors.confirmPassword}</p>
            )}

            <label htmlFor="referral">Referral Code</label>
            <br />
            <input
              size={43}
              type="text"
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className={formErrors.referral ? "error" : ""}
            />
            {formErrors.referral && (
              <p className="error-message">{formErrors.referral}</p>
            )}

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
              <p className="error-message">{formErrors.username}</p>
            )}

            <label htmlFor="gender">Gender</label>
            <br />
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={formErrors.gender ? "error" : ""}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formErrors.gender && (
              <p className="error-message">{formErrors.gender}</p>
            )}

            <br />
            <label htmlFor="nin">National Identity Number</label>
            <br />
            <input
              size={43}
              type="text"
              id="nin"
              name="nin"
              value={formData.nin}
              onChange={handleChange}
              className={formErrors.nin ? "error" : ""}
            />
            {formErrors.nin && (
              <p className="error-message">{formErrors.nin}</p>
            )}

            <label htmlFor="phone">Phone</label>
            <br />
            <input
              size={43}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={formErrors.phone ? "error" : ""}
            />
            {formErrors.phone && (
              <p className="error-message">{formErrors.phone}</p>
            )}

            <br />
            <button className="button-cta" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
