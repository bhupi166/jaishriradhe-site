import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Reflections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-saffron-light/40 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-heading text-xl font-semibold tracking-wide text-maroon">
          Jai Shri Radhe
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-foreground/80">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
