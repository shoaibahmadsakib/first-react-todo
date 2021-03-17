import React from "react";
import "../Pages/Statingpage.css";
import { Link } from "react-router-dom";
const StatingPage = () => {
  return (
    <>
      <div className="background_start">
        <div className="mainpart_start">
          <div className="component_start">
            <h1>ToDo List app</h1>
            <div className="twopart_start">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Login</p>
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p>Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatingPage;
