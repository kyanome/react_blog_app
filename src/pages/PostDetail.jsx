import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import Layout from "../components/Layout";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts.find((item) => item.id === Number(id));
    setPost(post);
  }, [id]);

  if (!post) {
    return <Layout>Loading...</Layout>;
  }

  return (
    <Layout>
      <article>
        <img src={post.thumbnailUrl} alt={post.title} />
        <div className="mt-4 mb-2 mx-4">
          <div className="flex justify-between items-center">
            <time className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
            <div className="flex gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="text-sm text-blue-600 border border-blue-600 px-2 py-1 rounded"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl mt-2 mb-4">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </Layout>
  );
}

export default PostDetail;
