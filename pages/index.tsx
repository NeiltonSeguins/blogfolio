"use client";

import { getPublishedBlogPosts } from "../services/notion-service";
import {
  Button,
  Footer,
  Menu,
  Profile,
  Search,
  Sidebar,
  SocialNetwork,
} from "../components";

import { GetStaticProps, InferGetStaticPropsType } from "next";
import Post from "../components/Post/Post";
import { BlogPost } from "@/types/schema";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPublishedBlogPosts();

  if (!posts || posts.length === 0) {
    return {
      props: {
        posts: [],
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="h-screen flex flex-1">
      <div className="flex flex-col items-center justify-between w-1/4 border-r-[1px] border-primary">
        <Sidebar className="h-2/3 p-8 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center text-center">
            <Profile />
            <SocialNetwork />
          </div>
          <Menu />
        </Sidebar>
        <Footer />
      </div>
      <main className="w-full flex justify-between">
        <div className="p-8 w-full flex flex-col items-end pr-12 pl-12">
          <Search />
          <div className="w-full flex flex-col mt-11  overflow-auto">
            {/* <Posts /> */}
            <ul className="flex flex-col">
              {(!posts || posts.length === 0) && (
                <p className="text-primary">Nenhum post encontrado</p>
              )}
              {posts?.map((post: BlogPost) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </div>
        </div>
        <Sidebar className="py-8 px-8 pt-10 pb-10  w-20 flex flex-col justify-between items-center border-l-[1px] border-primary">
          <Button tipo="theme" />
          <Button tipo="scrollUp" />
        </Sidebar>
      </main>
    </div>
  );
};

export default Home;
