import React, { useEffect } from "react";
import { auth } from "../firebase_config";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Axios from "axios";
import Card from "./Card";
import Navinner from "./navinner";
export default function Profile() {
  const navi = useNavigate();
  const [currentUser, setuser] = React.useState({ email: "lop" });
  const [userblogs, setuserblogs] = React.useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);
  function createCard(data) {
    return (
      <Card
        title={data.title}
        image={data.imgurl}
        content={data.content}
        topic={data.topics}
      />
    );
  }
  return (
    <div>
      <Navinner />
      <center>
        <br />
        <button
          className="viewbut"
          onClick={(e) => {
            Axios.get(
              "http://localhost:3000/blog/person/" + currentUser.email
            ).then((res) => {
              console.log(res.data);
              setuserblogs(res.data);
            });
          }}
        >
          <strong>See Your Blogs</strong>
        </button>
      </center>
      <div>{userblogs.map(createCard)}</div>
    </div>
  );
}
