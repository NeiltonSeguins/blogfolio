import { Client } from "@notionhq/client";
import { BlogPost, PostPage } from "../types/schema";
const { NotionToMarkdown } = require("notion-to-md");

const notionClient = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
const n2m = new NotionToMarkdown({ notionClient });

async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";
  // list blog posts
  const response = await notionClient.databases.query({
    database_id: database,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results.map((res) => pageToPostTransformer(res));
}

function pageToPostTransformer(page: any): BlogPost {
  return {
    id: page.id,
    cover: page.cover.external.url,
    title: page.properties.Name.title[0].plain_text,
    description: page.properties.Description.rich_text[0].plain_text,
    slug: page.properties.Slug.rich_text[0].plain_text,
    tags: page.properties.Tags.multi_select,
    date: page.properties.Date.date.start,
  };
}

async function getSingleBlogPost(slug: string): Promise<PostPage> {
  let post;

  const database = process.env.NOTION_BLOG_DATABASE_ID ?? "";
  const response = await notionClient.databases.query({
    database_id: database,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  if (!response.results[0]) {
    throw new Error("Sem resultados");
  }

  const page = response.results[0];

  const mdblocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdblocks);
  post = pageToPostTransformer(page);

  return {
    post,
    markdown: markdown.parent,
  };
}

export { getPublishedBlogPosts, getSingleBlogPost };
