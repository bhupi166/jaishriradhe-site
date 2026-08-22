import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Jai Shri Radhe and the intention behind this space.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-heading text-4xl font-semibold text-maroon">
        About This Space
      </h1>
      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-heading prose-headings:text-maroon">
        <p>
          Jai Shri Radhe is a small, ongoing collection of reflections on
          devotion, bhakti, and the everyday spiritual life. It isn&apos;t a
          formal teaching or a claim to authority — it&apos;s a set of notes
          written along the way, shared in case they&apos;re useful to
          someone else walking a similar path.
        </p>
        <p>
          The name itself is a greeting used by devotees of Radha and
          Krishna, and it felt like the right way to welcome anyone who
          finds their way here.
        </p>
        <p>
          If something here resonates with you, take it with you. If it
          doesn&apos;t, that&apos;s alright too — every path looks different
          up close.
        </p>
      </div>
    </section>
  );
}
