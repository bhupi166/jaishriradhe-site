import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) return {};

  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getPostBySlug(slug);

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-medium uppercase tracking-wide text-saffron">
        {formatDate(post.date)}
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold text-maroon">
        {post.title}
      </h1>
      <div
        className="prose prose-neutral mt-8 max-w-none prose-headings:font-heading prose-headings:text-maroon prose-a:text-maroon"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
