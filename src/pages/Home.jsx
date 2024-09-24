import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Welcome to the Home Page!</h1>
        <div className="mt-3">
          <Link to="/login" className="btn btn-primary m-2">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary m-2">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;