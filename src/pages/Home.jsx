import React, { useEffect, useState } from 'react';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';

function Home() {
  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Home;
