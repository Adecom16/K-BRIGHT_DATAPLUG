import { useState } from "react";
import AuthenticationUtility from "../Utils/AuthenticationUtility";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate, Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledFormContainer = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  margin-top: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ForgotPassword = styled.div`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const RegisterLink = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const Login = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { http } = AuthenticationUtility();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.username) {
      setFormErrors((form) => ({
        ...form,
        username: "Please provide your username",
      }));
    }

    if (!formData.password) {
      setFormErrors((form) => ({
        ...form,
        password: "Please provide your password",
      }));
      setLoading(false);
      return;
    }

    try {
      const res = await http.post("/login", formData);
      const data = res.data;

      if (
        signIn({
          auth: {
            token: data.access_token,
            tokenType: data.token_type,
            authState: data.user,
            expiresIn: data.expires_in,
          },
          userState: data.user,
        })
      ) {
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate("/dashboard"));
      } else {
        setFormErrors(data || {});
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Please check your credentials and try again.",
        });
      }
    } catch (err) {
      setFormErrors(err?.response?.data || {});
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledTitle>Login</StyledTitle>
        <StyledForm onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <StyledInput
              type="text"
              className={`form-control ${
                formErrors.username ? "is-invalid" : ""
              }`}
              id="username"
              name="username"
              onChange={handleChange}
            />
            {formErrors.username && (
              <ErrorMessage>{formErrors.username}</ErrorMessage>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <StyledInput
              type="password"
              className={`form-control ${
                formErrors.password ? "is-invalid" : ""
              }`}
              id="password"
              name="password"
              onChange={handleChange}
            />
            {formErrors.password && (
              <ErrorMessage>{formErrors.password}</ErrorMessage>
            )}
          </div>
          <FormFooter>
            <ForgotPassword>
              <Link to="/forgot-password">Forgot Password?</Link>
            </ForgotPassword>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Login"}
            </SubmitButton>
          </FormFooter>
        </StyledForm>
        <RegisterLink>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>.
          </p>
        </RegisterLink>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Login;
