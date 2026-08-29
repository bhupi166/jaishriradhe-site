import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="border-b border-saffron-light/40 bg-gradient-to-b from-cream-deep to-cream px-6 py-16 text-center">
        <h1 className="font-heading text-5xl font-semibold text-maroon sm:text-6xl">
          Jai Shri Radhe
        </h1>
        <p className="mt-4 font-heading text-3xl font-semibold text-maroon">
          Chant Karo 🙏
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start">
          <Image
            src="/ShreeRadhe.webp"
            alt="Shree Radhe"
            width={600}
            height={900}
            className="w-48 shrink-0 rounded-lg object-cover shadow-md sm:w-56 md:w-64"
            priority
          />

          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-semibold text-maroon">
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
        </div>
      </section>
    </>
  );
}
