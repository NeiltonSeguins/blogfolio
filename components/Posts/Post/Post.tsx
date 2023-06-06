import { BlogPost } from "../../../types/schema";
import Image from "next/image";
import React from "react";

export type PostProps = {
  post: BlogPost;
};

const Post = ({ post }: PostProps) => {
  return (
    <li className="mt-4 mb-4 flex flex-col gap-4">
      <a href="#" className="flex items-center justify-between">
        <div className="mt-4 mb-4 flex flex-col gap-4">
          <span className="font-firaCode text-left text-secondary text-sm">
            {post.date}
          </span>
          <h2 className="font-poppins text-left text-primary text-3xl font-semibold hover:text-hover">
            {post.title}
          </h2>
          <p className="font-poppins text-left text-secondary text-base w-11/12">
            {post.description}
          </p>
        </div>
        <Image
          className="rounded-sm"
          src="https://placehold.co/600x400.png"
          width={350}
          height={250}
          alt="Qualquer descrição"
        />
      </a>
      <div className="border-b-[1px] border-primary"></div>
    </li>
  );
};

export default Post;
