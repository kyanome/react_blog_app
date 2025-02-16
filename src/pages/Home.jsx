import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";

function Home() {
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
