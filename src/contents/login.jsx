import React from "react";
import "../css/login.css";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", { username, password })
      .then((resp) => {
        if (resp.data === "Login Successful") {
          navigate("/dashboard");
        }
        if (resp.data === "User not Found") {
          alert("User not Found Please Try Again");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="login-page">
        <div className="login-container"></div>
        <div className="login-form-container">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              placeholder="username"
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
          <div className="head"></div>
          <a>Forgotten Password ?</a>
          <button className="btn btn-success">Create an Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
