import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";
import {
  getPublishedBlogPosts,
  getSingleBlogPost,
} from "../../services/notion-service";
import {
  Button,
  Footer,
  Menu,
  Profile,
  Sidebar,
  SocialNetwork,
  CodeBlock,
} from "../../components";

const BlogPost = ({
  post,
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const components = {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-poppins font-bold text-primary mb-11 hover:text-hover">
        # {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-poppins font-bold text-primary my-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-poppins font-bold text-primary my-6">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="text-lg font-poppins text-secondary text-justify my-6">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc text-secondary text-lg font-poppins">
        {children}
      </ul>
    ),
    li: ({ children }: any) => <li className=" my-4">{children}</li>,
    code: ({ children }: any) => <CodeBlock codeString={children} />,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary px-4 py-2 bg-[#282C34]">
        {children}
      </blockquote>
    ),
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          title="description"
          content={post.description}
        />
        <meta name="og:title" title="og:title" content={post.title} />
        <meta
          name="og:description"
          title="og:description"
          content={post.description}
        />
        <meta name="og:image" title="og:image" content={post.cover} />
      </Head>
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
          <div className="p-8 w-full flex flex-col items-center pr-12 pl-12">
            <article className="my-0 mx-auto w-4/5 overflow-auto">
              <div
                className="rounded-md mb-11 bg-cover bg-center h-[280px] w-full"
                style={{
                  backgroundImage: `url(${post.cover})`,
                }}
              ></div>
              <div className="markdown-img:w-3/4 markdown-img:h-[450px] markdown-img:mx-auto markdown-img:rounded-lg">
                <ReactMarkdown
                  children={markdown}
                  components={components}
                  remarkPlugins={[gfm]}
                />
              </div>
            </article>
          </div>
          <Sidebar className="py-8 px-8 pt-10 pb-10  w-20 flex flex-col justify-between items-center border-l-[1px] border-primary">
            <Button tipo="theme" />
            <Button tipo="scrollUp" />
          </Sidebar>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  //@ts-ignore
  const p = await getSingleBlogPost(context.params?.slug);

  if (!p) {
    throw new Error("Não há conteúdo");
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export async function getStaticPaths() {
  const posts = await getPublishedBlogPosts();

  const paths = posts.map((post) => {
    return `/post/${post.slug}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
