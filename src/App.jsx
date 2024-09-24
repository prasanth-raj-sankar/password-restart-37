import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import VerifyAccount from "./pages/VerifyAccount";
import ForgetPassword from "./pages/forgetpassword";
import ResetPassword from "./pages/resetpassword";

const PrivateRoute = ({ component }) => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));

  if (isAuthenticated) {
    return component;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Private Routes */}
        <Route
          path="/posts"
          element={<PrivateRoute component={<h1>Welcome To Post Page</h1>} />}
        />
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
