export default function Footer() {
  return (
    <footer className="mt-auto border-t border-saffron-light/40 bg-cream-deep">
      <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-foreground/70">
        <p className="font-heading text-lg text-maroon">Radhe Radhe 🙏</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Jai Shri Radhe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
