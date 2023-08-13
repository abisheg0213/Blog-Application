import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
export default function Signup() {
  const navigate = useNavigate();
  const [email, setemail] = React.useState("");
  const [pass, setpass] = React.useState("");
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <center>
        <h3 className="message">Create New Account</h3>
        <form>
          <label>Email Id : </label>{" "}
          <input
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <label>Password : </label>{" "}
          <input
            type="password"
            onChange={(e) => {
              setpass(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button
            className="sumbitbut"
            onClick={(e) => {
              e.preventDefault();
              createUserWithEmailAndPassword(auth, email, pass)
                .then((user) => {
                  console.log(user);
                  navigate("/profile");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Sign Up
          </button>
        </form>
      </center>
    </div>
  );
}
