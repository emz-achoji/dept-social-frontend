import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <nav style={{margin: 10}}>
        <Link to="/login" style={{marginRight: 10}}>
          Login
        </Link>
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
