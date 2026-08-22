import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-heading text-4xl font-semibold text-maroon">
        Get in Touch
      </h1>
      <p className="mt-4 text-foreground/80">
        Questions, feedback, or just want to say Radhe Radhe? Reach out by
        email or phone and I&apos;ll get back to you.
      </p>
      <a
        href="mailto:hello@jaishriradhe.com"
        className="mt-6 inline-block rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-maroon-dark"
      >
        hello@jaishriradhe.com
      </a>

      <div className="mt-10 rounded-lg border border-saffron-light/50 bg-white/60 p-6">
        <h2 className="font-heading text-2xl font-semibold text-maroon">
          Pandit Vaibhav
        </h2>
        <p className="mt-3 text-foreground/80">
          Phone:{" "}
          <a href="tel:+918708665655" className="text-maroon underline underline-offset-4">
            8708665655
          </a>
        </p>
        <p className="mt-1 text-foreground/80">
          Availability: 6:00 AM &ndash; 9:00 PM, every day
        </p>
      </div>
    </section>
  );
}
