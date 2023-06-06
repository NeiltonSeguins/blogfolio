import React from "react";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <ul className="flex flex-col">
      {/* {(!posts || posts.length === 0) && (
        <p className="text-primary">Nenhum post encontrado</p>
      )}
      {posts?.map((post: BlogPost) => (
        <Post key={post.id} post={post} />
      ))} */}
    </ul>
  );
};

export default Posts;
