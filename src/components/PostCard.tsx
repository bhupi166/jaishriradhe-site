import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-lg border border-saffron-light/50 bg-white/60 p-6 transition-shadow hover:shadow-md"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-saffron">
        {formatDate(post.date)}
      </p>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-maroon">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-foreground/75">{post.excerpt}</p>
      <span className="mt-3 inline-block text-sm font-medium text-maroon underline underline-offset-4">
        Read more
      </span>
    </Link>
  );
}
