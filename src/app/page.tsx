import Image from "next/image";
import ChantCounter from "@/components/ChantCounter";

export default function Home() {
  return (
    <>
      <section className="border-b border-saffron-light/40 bg-gradient-to-b from-cream-deep to-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-16">
          <Image
            src="/ShreeRadhe.webp"
            alt="Shree Radhe"
            width={600}
            height={900}
            className="order-1 w-28 shrink-0 rounded-lg object-cover shadow-md sm:w-32 md:w-40 lg:w-56"
            priority
          />

          <Image
            src="/ShreeRadhe.webp"
            alt="Shree Radhe"
            width={600}
            height={900}
            className="order-2 w-28 shrink-0 rounded-lg object-cover shadow-md sm:w-32 md:order-3 md:w-40 lg:w-56"
          />

          <div className="order-3 basis-full text-center md:order-2 md:basis-auto md:max-w-xl">
            <h1 className="font-heading text-5xl font-semibold text-maroon sm:text-6xl">
              Jai Shri Radhe
            </h1>
            <p className="mx-auto mt-6 text-lg text-foreground/80">
              A shared space to chant Radhe Radhe together, one tap at a
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-maroon">
            Chant Together
          </h2>
          <p className="mt-3 text-foreground/75">
            Every tap adds to one shared count, kept for everyone who visits
            this page.
          </p>
          <div className="mt-8">
            <ChantCounter />
          </div>
        </div>
      </section>
    </>
  );
}
