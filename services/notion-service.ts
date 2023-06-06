import { Client } from "@notionhq/client";
import { BlogPost } from "../types/schema";
import { NotionToMarkdown } from "notion-to-md";

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
    title: page.properties.Name.title[0].plain_text,
    description: page.properties.Description.rich_text[0].plain_text,
    slug: page.properties.Slug.rich_text[0].plain_text,
    tags: page.properties.Tags.multi_select,
    date: page.properties.Date.date.start,
  };
}

export { getPublishedBlogPosts };
