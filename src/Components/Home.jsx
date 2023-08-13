import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from "./navbar";
export default function Home() {
  const [topic, settopic] = React.useState("");
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
  const [data, setdata] = React.useState([]);
  return (
    <div className="home">
      <Navbar />
      <div>
        <center>
          <nav></nav>
        </center>
      </div>
      <div>
        <br />
        <br />
        <center>
          <input
            className="inputstyle"
            placeholder="Enter a topic to view blogs"
            onChange={(e) => {
              settopic(e.target.value);
            }}
          ></input>
          {"       "}
          <button
            className="formbut"
            onClick={() => {
              Axios.get("http://localhost:3000/blog/topic/" + topic).then(
                (res) => {
                  setdata(res.data);
                }
              );
            }}
          >
            Search
          </button>
        </center>
        <br />
        <div>{data.map(createCard)}</div>
      </div>
    </div>
  );
}
