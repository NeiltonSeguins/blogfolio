import { BlogPost } from "../../../types/schema";
import Image from "next/image";
import React from "react";

export type PostProps = {
  post: BlogPost;
};

//Aplicar clean code nesta parte de código
const dateFormatter = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  }).format(Date.parse(date));
};

const Post = ({ post }: PostProps) => {
  const dataFormatada = dateFormatter(post.date);
  return (
    <li className="mt-4 mb-4 flex flex-col gap-4">
      <a href="#" className="flex items-center justify-between">
        <div>
          <div className="mt-4 mb-4 flex flex-col gap-4">
            <span className="font-firaCode text-left text-secondary text-sm">
              {dataFormatada}
            </span>
            <h2 className="font-poppins text-left text-primary text-3xl font-semibold hover:text-hover">
              {post.title}
            </h2>
            <p className="font-poppins text-left text-secondary text-base w-11/12">
              {post.description}
            </p>
          </div>
          <div className=" flex items-center justify-start py-1">
            {/* Melhorar este trecho de código */}
            {post.tags.map((tag) => {
              // Abstrair este objeto para uma função para melhorar a legibilidade
              const colorMap: any = {
                purple: "bg-purple-900",
                blue: "bg-blue-900",
                red: "bg-red-900",
                green: "bg-green-800",
                yellow: "bg-yellow-600",
              };

              return (
                <span
                  className={`p-2 mr-3 font-semibold font-firaCode ${
                    colorMap[tag.color]
                  } text-sm text-primary rounded-md text-center`}
                >
                  #{tag.name}
                </span>
              );
            })}
          </div>
        </div>
        <Image
          className="rounded-xl"
          src={post.cover ? post.cover : `https://placehold.co/600x400.png`}
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
