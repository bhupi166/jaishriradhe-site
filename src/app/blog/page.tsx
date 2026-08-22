import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Reflections",
  description: "All reflections and teachings on devotion and the spiritual path.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-heading text-4xl font-semibold text-maroon">
        Reflections
      </h1>
      <p className="mt-3 text-foreground/75">
        Writings on devotion, practice, and everyday spiritual life.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
