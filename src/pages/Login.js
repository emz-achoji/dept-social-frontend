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
      setMessage("❌ Wrong username or password");
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

// export default function Login() {
//   const [formData, setFormData] = useState({username: "", password: ""});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login data:", formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-700">
//       <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-whhite mb-6">
//           Welcome Back 👋
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Username"
//             value={formData.username}
//             onChange={(e) =>
//               setFormData({...formData, username: e.target.value})
//             }
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({...formData, password: e.target.value})
//             }
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-200">
//             Login
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
