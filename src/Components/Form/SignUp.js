import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
function Login() {
  const [data, setData] = useState({
    userName: "",
    passWord: "",
    email: "",
    number: "",
  });
  const [submit, setSubmit] = useState([]);

  const submitChange = (e) => {
    e.preventDefault();
    const newdata = { ...data };
    setSubmit([...submit, newdata]);
    console.log(submit);
  };
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setData({ ...data, [name]: value });
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
        <form onSubmit={submitChange}>
          <div className="userName">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="userName"
              id=""
              value={data.userName}
              onChange={changeHandler}
            />
          </div>
          <br></br>
          <div className="passWord">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="passWord"
              id=""
              value={data.passWord}
              onChange={changeHandler}
            />
          </div>
          <br></br>
          <div className="Email">
            <label htmlFor="">email</label>
            <input
              type="email"
              name="email"
              id=""
              value={data.email}
              onChange={changeHandler}
            />
          </div>
          <br></br>
          <div className="number">
            <label htmlFor="">number</label>
            <input
              type="number"
              name="number"
              id=""
              value={data.number}
              onChange={changeHandler}
            />
          </div>
          <div className="textbox">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
