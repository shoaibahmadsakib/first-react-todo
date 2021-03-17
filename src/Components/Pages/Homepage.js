import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Homepage.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Functional from "./Functional";



function Homepage() {
  const [type, setType] = useState("");
  const [value, setValue] = useState([]);
  
  const handleChange = (e) => {
    setType(e.target.value);
  };
  const clickHandler = () => {
    setValue((oldValue) => {
      return [...oldValue, type];
    });
  };

  const deleteItem = (id) => {
    setValue((oldValue) => {
      return oldValue.filter((first, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container1">
    
      <div className="hrader">
        <div className="app_name">
         <h1><Link to="/homepage" style={{textDecoration: "none",
    color:'black'}}>ToDo List</Link></h1>
        </div>
        <div className="nav_bar">
          <ul>
            <li>
              <Link style={{color:"black"}} to="/homepage">home</Link>
            </li>
            <li>
              <Link style={{color:"black"}} to="/about">About</Link>
            </li>
            <li>
              <Link style={{color:"black"}} to="/login">Login</Link>
            </li>
            <li>
              <Link style={{color:"black"}} to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main_container">
        <input
          onChange={handleChange}
          value={type}
          className="form_style"
          type="text"
          name=""
          id=""
          placeholder="inter something"
        />
        <button type="submit" onClick={clickHandler}>
          <AddCircleIcon style={{ fontSize: "42px" }}></AddCircleIcon>
        </button>

        <div className="change_item">
          {value.map((storeHere, index) => {
            return (
              <Functional
                id={index}
                key={index}
                text={storeHere}
                onSelect={deleteItem}
              />
            );
          })}
        </div>
      </div>
     <footer className="footer_item">
       
         <p>Copyrignt by sakib</p>
     </footer>
    </div>
  );
}

export default Homepage;
