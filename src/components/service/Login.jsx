// Login.js
import { useState } from "react";
import AuthenticationUtility from "../Utils/AuthenticationUtility";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, login } = useState({});
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

    // Validating user inputs
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
        // Redirect or do-something
        navigate("/dashboard");
      } else {
        // Throw error
        setFormErrors(data || {});
      }
    } catch (err) {
      setFormErrors(err?.response?.data || {});
    }
  };

  return (
    <div style={styles.center}>
      <div style={styles.loginForm}>
        <h1>Login</h1>

        <div style={styles.form}>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              style={styles.input}
              size={43}
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className={formErrors.username ? "error" : ""}
            />
            {formErrors.username && (
              <p style={styles.errorMessage}>{formErrors.username}</p>
            )}
            <label htmlFor="password">Password</label>
            <br />
            <input
              style={styles.input}
              size={43}
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className={formErrors.password ? "error" : ""}
            />
            {formErrors.password && (
              <p style={styles.errorMessage}>{formErrors.password}</p>
            )}

            <div style={styles.checkboxSection}>
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <div style={styles.formFooter}>
              <div style={styles.forgotPassword}>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <button style={styles.buttonCta} type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>

        <div style={styles.registerLink}>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>.
          </p>
        </div>

        <div style={styles.socialiteSection}>
          {/* Add your socialite buttons here */}
          <button style={styles.socialiteButton}>Google</button>
          <button style={styles.socialiteButton}>Facebook</button>
          {/* Add more socialite buttons as needed */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loginForm: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  errorMessage: {
    marginTop: "5px",
    fontSize: "14px",
    color: "red",
  },
  checkboxSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  formFooter: {
    display: "flex",
    justifyContent: "space-between",
  },
  forgotPassword: {
    fontSize: "14px",
  },
  buttonCta: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
  registerLink: {
    marginTop: "15px",
    textAlign: "center",
  },
  socialiteSection: {
    marginTop: "20px",
  },
  socialiteButton: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    padding: "10px",
    marginRight: "10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default Login;
