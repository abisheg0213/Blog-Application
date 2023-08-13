import { React } from "react";
import "../styles.css";
export default function Card(props) {
  function createtopic(data) {
    return <li>{data}</li>;
  }
  console.log(props.topic);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <br />
      <img src={props.image} alt="lop.pic"></img>
      <p>{props.content}</p>
      <ul>{props.topic.map(createtopic)}</ul>
    </div>
  );
}
