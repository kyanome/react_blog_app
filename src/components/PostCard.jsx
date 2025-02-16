import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block p-4 border border-gray-300 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between text-sm mb-2">
        <time className="text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </time>
        <div className="flex gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-0.5 text-blue-600 border border-blue-600 rounded"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <h2 className="text-[25px] mb-4">{post.title}</h2>
      <div
        className="text-gray-600 line-clamp-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Link>
  );
}

export default PostCard;
