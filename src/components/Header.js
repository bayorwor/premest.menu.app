import React, { useContext, useEffect } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Header() {
  const { user, success, authLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!success) {
  //       navigate("/");
  //     }
  //   }, [user, navigate]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PREMEST MENU APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-between">
            <div className="nav-item">
              <FaUser className="mr-2" />
              <span className="text-white">
                <strong>{user ? user.username : "User User"}</strong>
              </span>
            </div>
            <div className="nav-item ml-3">
              <FaSignOutAlt className="ml-2" onClick={() => authLogout()} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
