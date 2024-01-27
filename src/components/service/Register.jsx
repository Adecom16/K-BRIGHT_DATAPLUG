import { useState } from "react";
import AuthenticationUtility from "../Utils/AuthenticationUtility";
import { useNavigate, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  font-family: Arial, sans-serif;
`;

const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { http } = AuthenticationUtility();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormErrors({});

    const requiredFields = [
      "name",
      "email",
      "password",
      "confirmPassword",
      "username",
      "gender",
      "nin",
      "phone",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `Please provide ${
            field === "confirmPassword" ? "a confirmation" : "your"
          } ${field}`,
        }));
      }
    });

    if (formData.phone && !/^\d{11}$/.test(formData.phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please provide a valid 11-digit phone number",
      }));
      setLoading(false);
      return;
    }

    if (formData.nin && !/^\d{9}$/.test(formData.nin)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nin: "Please provide a valid 9-digit National Identity Number",
      }));
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      setLoading(false);
      return;
    }

    try {
      const res = await http.post("/register", formData);
      const data = res.data;

      Swal.fire({
        icon: "success",
        title: "Registration successful",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate("/login"));
    } catch (err) {
      setFormErrors(err?.response?.data || {});
      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "Invalid Data. Please input the right information.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleRegister}>
        <StyledTitle>Register</StyledTitle>
        {/* Your form inputs */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className={`form-control ${formErrors.name && "is-invalid"}`}
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className={`form-control ${formErrors.email && "is-invalid"}`}
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className={`form-control ${formErrors.password && "is-invalid"}`}
          />
          {formErrors.password && (
            <div className="invalid-feedback">{formErrors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            className={`form-control ${
              formErrors.confirmPassword && "is-invalid"
            }`}
          />
          {formErrors.confirmPassword && (
            <div className="invalid-feedback">{formErrors.confirmPassword}</div>
          )}
        </div>

        {/* Referral Code */}
        <div className="form-group">
          <label htmlFor="referral">Referral Code</label>
          <input
            type="text"
            id="referral"
            name="referral"
            onChange={handleChange}
            className={`form-control ${formErrors.referral && "is-invalid"}`}
          />
          {formErrors.referral && (
            <div className="invalid-feedback">{formErrors.referral}</div>
          )}
        </div>

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className={`form-control ${formErrors.username && "is-invalid"}`}
          />
          {formErrors.username && (
            <div className="invalid-feedback">{formErrors.username}</div>
          )}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={handleChange}
            className={`form-control ${formErrors.gender && "is-invalid"}`}
          >
            <option value="male">--Select Gender--</option>

            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formErrors.gender && (
            <div className="invalid-feedback">{formErrors.gender}</div>
          )}
        </div>

        {/* National Identity Number */}
        <div className="form-group">
          <label htmlFor="nin">National Identity Number</label>
          <input
            type="text"
            id="nin"
            name="nin"
            onChange={handleChange}
            className={`form-control ${formErrors.nin && "is-invalid"}`}
          />
          {formErrors.nin && (
            <div className="invalid-feedback">{formErrors.nin}</div>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            className={`form-control ${formErrors.phone && "is-invalid"}`}
          />
          {formErrors.phone && (
            <div className="invalid-feedback">{formErrors.phone}</div>
          )}
        </div>
        {/* <StyledInput
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className={formErrors.name ? "error" : ""}
        />
        {formErrors.name && <ErrorText>{formErrors.name}</ErrorText>}
        Other input fields */}
        <SubmitButton type="submit" disabled={loading}>
          {loading ? <Spinner animation="border" /> : "Register"}
        </SubmitButton>
        <p>
          Already have an account?{" "}
          <StyledLink to="/login">Login here</StyledLink>
        </p>
      </StyledForm>
    </StyledContainer>
  );
};



export default Register;

