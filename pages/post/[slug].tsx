import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {
  getPublishedBlogPosts,
  getSingleBlogPost,
} from "../../services/notion-service";

const BlogPost = ({
  post,
  markdown,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <div className="min-h-screen">
        <article className="prose">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
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
