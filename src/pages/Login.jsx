import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authenticationSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const USERNAME = import.meta.env.VITE_USERNAME;
const PASSWORD = import.meta.env.VITE_PASSWORD;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      id: nanoid(),
      username: USERNAME,
    };
    if (username === USERNAME && password === PASSWORD) {
      dispatch(login(userData));
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <>
      Username:{" "}
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      Password:{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log me in</button>
    </>
  );
};

export default Login;
