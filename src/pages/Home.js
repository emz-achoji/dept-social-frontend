import React, {useState, useEffect} from "react";
import api from "../api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    if (!token) return alert("You must log in first.");
    try {
      await api.post(
        "/posts",
        {content},
        {headers: {Authorization: `Bearer ${token}`}}
      );
      setContent("");
      fetchPosts();
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{maxWidth: 500, margin: "auto", paddingTop: 40}}>
      <h2>Department Feed</h2>
      <form onSubmit={handlePost}>
        <textarea
          rows="3"
          placeholder="what's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">Post</button>
      </form>

      <button onClick={handleLogout} style={{marginTop: 20}}>
        Logout
      </button>

      <div style={{marginTop: 30}}>
        {posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 6,
              marginBottom: 10,
              padding: 10,
            }}>
            <strong>@{post.userId?.username || "Unknown"}</strong>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
