import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Navinner from "./navinner";
export default function Dataentryform() {
  const navi = useNavigate();
  const [title, settitle] = React.useState("");
  const [content, setcontent] = React.useState("");
  const [url, seturl] = React.useState("");
  const [topics, settopics] = React.useState([]);
  const [creator, setcreator] = React.useState("");
  return (
    <div>
      <div>
        <Navinner />
      </div>
      <br />
      <center>
        <h3 className="message">Blog Enrty</h3>
        <label>Title of the Blog : </label>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            settitle(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <label>Email of the Creator : </label>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setcreator(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <label>Content : </label>
        <textarea
          rows="10"
          cols="20"
          onChange={(e) => {
            console.log(e.target.value);
            setcontent(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <label>Topics : </label>
        <select
          multiple
          onChange={(e) => {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            console.log(selectedOptions);
            settopics(selectedOptions);
          }}
        >
          <option>Science</option>
          <option>Computer</option>
          <option>Programming</option>
          <option>Mathematics</option>
          <option>Electronics</option>
          <option>Civil</option>
          <option>Cyber Security</option>
          <option>Blockchain Technology</option>
        </select>
        <br />
        <br />
        <label>Image URL : </label>
        <input
          type="url"
          onChange={(e) => {
            console.log(e.target.value);
            seturl(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <button
          className="sumbitbut"
          onClick={() => {
            Axios.post("http://localhost:3000/blog", {
              titleofblog: title,
              con: content,
              user: creator,
              topicsrel: topics,
              urlimg: url
            });
            navi("/profile");
          }}
        >
          Sumbit
        </button>
      </center>
    </div>
  );
}
