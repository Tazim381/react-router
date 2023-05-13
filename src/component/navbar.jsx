import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navhome">
      <div className="nav px-5">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/form">
          <div>Form</div>
        </Link>
        <Link to="/counter">
          <div>Counter</div>
        </Link>
        <Link to="/fetchData">
          <div>Fetch Data </div>
        </Link>
        <Link to="/timer">
          <div>Timer</div>
        </Link>
        
      </div>
    </div>
  );
}
