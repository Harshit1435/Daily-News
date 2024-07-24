import React from "react";
import { Link } from "react-router-dom";

export default function BlogPostDetails() {
  return (
    <div className="navbar">
      <h1>Today's news</h1>
      <ul className="list">
        <li className="nav">
          <Link to="/">General</Link>
        </li>
        <li className="nav">
          <Link to="/business">Business</Link>
        </li>
        <li className="nav">
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav">
          <Link to="/health">Health</Link>
        </li>
        <li className="nav">
          <Link to="/science">Science</Link>
        </li>
        <li className="nav">
          <Link to="/sports">Sport</Link>
        </li>
        <li className="nav">
          <Link to="/technology">Technology</Link>
        </li>
      </ul>
    </div>
  );
}
