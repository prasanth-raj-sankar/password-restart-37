import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userLoginAPI } from "../apis";

const Login = () => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLoginAPI({ email, password });
      alert(response.msg);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/posts");
    } catch (e) {
      console.log("error", e);
      alert(e.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/posts" />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Don&apos;t have an account? <Link to="/register">Register</Link>
          </p>

          <p>
            <Link to="/forget-password">Forgot Password?</Link> {/* Add this */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;