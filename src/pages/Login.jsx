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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setLoading(true);
    setError("");

    const userData = {
      id: nanoid(),
      username: USERNAME,
    };
    if (username === USERNAME && password === PASSWORD) {
      dispatch(login(userData));
      navigate("/");
    } else {
      setError("Invalid credentials");
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Asset Tracker</h1>
          <p className="text-slate-500 text-sm mt-1">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your username"
            className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 transition-colors text-slate-700"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your password"
            className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 transition-colors text-slate-700"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold text-base rounded-xl transition-colors"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Login;
