"use client";

import { useEffect, useState } from "react";

export default function ChantCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch("/api/chant-count")
      .then((res) => res.json())
      .then((data: { count: number }) => setCount(data.count))
      .catch(() => {});
  }, []);

  async function handleChant() {
    if (pending) return;
    setPending(true);
    setCount((c) => (c ?? 0) + 1);
    try {
      const res = await fetch("/api/chant-count", { method: "POST" });
      const data: { count: number } = await res.json();
      setCount(data.count);
    } catch {
      // keep the optimistic value if the request fails
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="font-heading text-4xl font-semibold text-maroon">
        {count === null ? "—" : count.toLocaleString("en-US")}
      </p>
      <p className="text-sm text-foreground/70">
        times &quot;Radhe Radhe&quot; has been chanted here, together
      </p>
      <button
        type="button"
        onClick={handleChant}
        className="rounded-full bg-maroon px-8 py-4 text-lg font-medium text-cream shadow-md transition-transform hover:bg-maroon-dark active:scale-95"
      >
        Chant Radhe Radhe 🙏
      </button>
    </div>
  );
}
