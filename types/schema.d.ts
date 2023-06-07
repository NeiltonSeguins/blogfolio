export type Tag = {
  color: string;
  id: string;
  name: string;
};

export type BlogPost = {
  id: string;
  cover: string;
  slug: string;
  title: string;
  description: string;
  tags: Tag[];
  date: string;
};

export type PostPage = {
  post: BlogPost;
  markdown: string;
};
