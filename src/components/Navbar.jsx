import { Link } from "react-router-dom";
import React from "react";
import navaimg from "../assets/homeimg/navimg.jpg";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container pt-3 pb-3">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={navaimg} // Replace with your logo path
            alt="Arunachalam Residency Logo"
            className="rounded-3"
            style={{ height: "60px",  }} // adjust as needed
          />
          Arunachalam Residency
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="nav"
          className="collapse navbar-collapse justify-content-center"
        >
          <ul className="navbar-nav mx-auto gap-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/amenities">
                Amenities
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
