import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navhome">
      <div className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/form">
          <div>Form</div>
        </Link>
        <Link to="/form">
          <div>Download</div>
        </Link>
        <div>Login</div>
        <div>
          <button>Click me</button>
        </div>
      </div>
    </div>
  );
}
