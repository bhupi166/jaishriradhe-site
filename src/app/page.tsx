import Image from "next/image";

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
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <p className="font-heading text-3xl font-semibold text-maroon">
          Chant Karo 🙏
        </p>
      </section>

      <section className="border-t border-saffron-light/40 bg-cream-deep px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-heading text-3xl font-semibold text-maroon">
            Chant Benefits
          </h2>
          <ul className="mt-8 space-y-4 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-saffron">🙏</span>
              Brings peace and calmness to the mind
            </li>
            <li className="flex gap-3">
              <span className="text-saffron">🙏</span>
              Reduces stress and anxiety
            </li>
            <li className="flex gap-3">
              <span className="text-saffron">🙏</span>
              Deepens devotion and connection with the divine
            </li>
            <li className="flex gap-3">
              <span className="text-saffron">🙏</span>
              Purifies thoughts and emotions
            </li>
            <li className="flex gap-3">
              <span className="text-saffron">🙏</span>
              Cultivates gratitude and inner positivity
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
