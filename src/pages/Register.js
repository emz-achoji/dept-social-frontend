import React, {useState} from "react";
import api from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", {username, password});

      setMessage("Registered successfully! You can now login.");
      setUsername("");
      setPassword("");
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage("❌ Registration failed. Try again.");
    }
  };

  return (
    <div style={{maxWidth: 400, margin: "auto", paddingTop: 40}}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Register;
