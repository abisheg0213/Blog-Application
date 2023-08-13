import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase_config";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbar";
export default function Signin() {
  const navi = useNavigate();
  const [email, setemail] = React.useState("");
  const [pass, setpass] = React.useState("");
  const [error, seterror] = React.useState("");
  return (
    <div>
      <Navbar />
      <br /> <br />
      <center>
        <form>
          <h3 className="message">Log In to your Account</h3>
          <label>Email : </label>{" "}
          <input
            type="email"
            placeholder="enter ur email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <br /> <br />
          <label>Password : </label>{" "}
          <input
            type="password"
            placeholder="enter ur password"
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
              signInWithEmailAndPassword(auth, email, pass)
                .then((user) => {
                  console.log(user);
                  navi("/profile");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Log In{" "}
          </button>
          <p>{error}</p>
        </form>
      </center>
    </div>
  );
}
