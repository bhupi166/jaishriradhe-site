import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="border-b border-saffron-light/40 bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-16">
          <Image
            src="/ShreeRadhe.png"
            alt="Shree Radhe"
            width={941}
            height={1672}
            className="hidden w-40 shrink-0 rounded-lg object-cover shadow-md md:block lg:w-56"
            priority
          />

          <div className="max-w-xl text-center">
            <h1 className="font-heading text-5xl font-semibold text-maroon sm:text-6xl">
              Jai Shri Radhe
            </h1>
            <p className="mx-auto mt-6 text-lg text-foreground/80">
              Reflections, teachings, and stories on devotion, bhakti, and the
              spiritual path — for anyone curious enough to slow down and look
              inward.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-maroon-dark"
              >
                Read the Reflections
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-maroon px-6 py-3 text-sm font-medium text-maroon transition-colors hover:bg-maroon/10"
              >
                About This Space
              </Link>
            </div>
          </div>

          <Image
            src="/ShreeRadhe.png"
            alt="Shree Radhe"
            width={941}
            height={1672}
            className="hidden w-40 shrink-0 rounded-lg object-cover shadow-md md:block lg:w-56"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-heading text-3xl font-semibold text-maroon">
          Recent Reflections
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
