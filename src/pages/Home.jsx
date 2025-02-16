import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { API_BASE_URL } from "../config/constants";

function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
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

  if (loading) {
    return "読み込み中...";
  }

  if (!loading && !posts) {
    return <div>記事が見つかりません</div>;
  }

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
