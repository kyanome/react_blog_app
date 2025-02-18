import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../config/constants";

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/posts`);
      const { posts } = await res.json();
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return { posts, loading };
}

export default usePosts;
