import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newSubmit = { input: input, password: password };
    setSubmit([...submit, newSubmit]);
    alert(`username ${input} password ${password}`);
  };
  const handleName = (e) => {
    setInput(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container">
      <div className="twopart_start1">
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <p>Login</p>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <p>Sign Up</p>
        </Link>
      </div>

      <div className="inline_container">
        <form onSubmit={submitHandler}>
          <div className="userName">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name=""
              id=""
              value={input}
              onChange={handleName}
            />
          </div>
          <br></br>
          <div className="passWord">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="textbox">
            <input type="submit" value="Submit" />
          </div>
          <Link to="/Homepage">
            <button className="demo_button">Demo Submit</button>
          </Link>
        </form>
      </div>
      <h2>
        {submit.map((someThing) => {
          return (
            <>
              <p>{someThing.input}</p>
              <p>{someThing.password}</p>
            </>
          );
        })}
      </h2>
    </div>
  );
}

export default Login;
