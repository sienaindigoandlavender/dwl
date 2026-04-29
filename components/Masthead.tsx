import Link from "next/link";

const NAV = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" }
];

export default function Masthead() {
  return (
    <header className="w-full border-b-0">
      <div className="mx-auto max-w-content px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="mono uppercase-meta text-text hover:text-text"
          aria-label="Dancing with Lions — Home"
        >
          DANCING WITH LIONS
        </Link>
        <nav className="flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono uppercase-meta text-text-secondary hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
