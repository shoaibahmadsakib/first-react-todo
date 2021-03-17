import React from "react";
import { Link } from "react-router-dom";
import "../Pages/About.css";
import sakibImg from "../image/upwork.jpg";

const About = (props) => {
  return (
    <div>
      <div className="hrader">
        <div className="app_name">
          <h1>
            <Link
              to="/homepage"
              style={{ textDecoration: "none", color: "black" }}
            >
              ToDo List
            </Link>
          </h1>
        </div>
        <div className="nav_bar">
          <ul>
            <li>
              <Link to="/homepage">home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* heading part */}
      <div className="container2">
        <div className="two_part">
          <div className="picture_part">
            <img
              src={sakibImg}
              alt="sakib image"
              height="200px"
              width="200px"
            />
          </div>
          <div className="information_part">
            <p>Hi I am sakib a professional react js developer</p>
            <hr />
            <p style={{ padding: "10px 0px", textAlign: "justify" }}>
              this is my first react todo project.this is my first react todo
              projectthis is my first react todo projectthis is my first react
              todo project
            </p>
          </div>
        </div>
      </div>
      <footer className="footer_item">
        <p>Copyrignt by sakib</p>
      </footer>
    </div>
  );
};

export default About;
