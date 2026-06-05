import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-foreground"
        >
          Natalie's Baked Goods
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-foreground transition hover:text-primary sm:text-base"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="text-sm font-medium text-foreground transition hover:text-primary sm:text-base"
          >
            Menu
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-foreground transition hover:text-primary sm:text-base"
          >
            Contact
          </Link>

          <Link
            href="/order"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:opacity-90 sm:text-base"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}