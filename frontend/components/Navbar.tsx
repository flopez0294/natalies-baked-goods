import Link from "next/link";
import { Wheat } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/20 bg-background/80 backdrop-blur-md">
      <div className="w-full mx-auto max-w-8xl px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="inline-flex items-center gap-2">
          <Wheat className="h-8 w-8 text-primary" />
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-foreground"
          >
            
            Natalie's Baked Goods
          </Link>
        </div>

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
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-primary/60 sm:text-base"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}