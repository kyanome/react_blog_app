import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { API_BASE_URL } from "../config/constants";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        fetch(`${API_BASE_URL}/posts`)
          .then((res) => res.json())
          .then(({ posts }) => setPosts(posts))
          .catch(console.error);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Home;
