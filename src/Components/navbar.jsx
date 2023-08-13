import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
export default function Navbar() {
  return (
    <div className="navbar">
      {"   "}
      <h3>Welcome to BLogBit</h3>
      {"                              "}
      <nav>
        <a>
          <Link to="/">Home</Link>
        </a>{" "}
        <a>
          <Link to="/signup">SignUp</Link>
        </a>{" "}
        <a>
          <Link to="/login">LogIn</Link>
        </a>
      </nav>
      <br />
    </div>
  );
}
