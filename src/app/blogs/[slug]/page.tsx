import React from "react";
import { getPosts } from "../../../lib/posts";
import { getPostsBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}
export default function SlugPage({ params }: blogPostParams) {
  const post = getPostsBySlug(params.slug);
  if (!post) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
