import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="form">
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info">
        <div className="form-group m-2">
          <label htmlFor="email">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Login
        </button>
        <div>
          I don't have an account
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
