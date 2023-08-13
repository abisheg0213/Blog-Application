import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase_config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Navinner() {
  const navi = useNavigate();
  return (
    <div className="navbar">
      <center>
        <nav>
          <a className="innera">
            <Link to="/">Home</Link>
          </a>{" "}
          <a className="innera">
            <Link to="/newblog">New Blog</Link>
          </a>{" "}
          <a
            className="innera"
            onClick={(e) => {
              e.preventDefault();
              signOut(auth)
                .then(() => {
                  console.log("signed out");
                })
                .catch((err) => {
                  console.log(err);
                });
              navi("/");
            }}
          >
            Logout
          </a>
        </nav>
        <br />
      </center>
    </div>
  );
}
