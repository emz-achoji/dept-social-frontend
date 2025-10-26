import React, {useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", {username, password});
      const token = res.data.token;
      localStorage.setItem("token", token);
      setMessage("✅ Login successful");
      console.log("Token:", token);
      window.location.href = "/"; // redirect to homepage
    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage("❌ Invalid username or password");
    }
  };

  return (
    <div style={{maxWidth: 400, margin: "auto", paddingTop: 40}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
