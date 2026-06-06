"use client";

import { useState } from "react";
import Link from "next/link";
import { Wheat, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/20 bg-background/80 backdrop-blur-md">
      <div className="w-full mx-auto max-w-8xl px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Brand */}
        <div className="inline-flex items-center gap-2">
          <Wheat className="h-8 w-8 text-primary" />
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-foreground"
            onClick={closeMenu}
          >
            Natalie's Baked Goods
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/menu" className="hover:text-primary">Menu</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>

          <Link
            href="/order"
            className="rounded-md bg-primary px-4 py-2 font-semibold hover:bg-primary/60"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-6 py-6">
            <nav className="flex flex-col items-center gap-3 text-center bg-background/60 border border-foreground/10 rounded-xl py-6 shadow-sm">
              
              <Link href="/" onClick={closeMenu} className="w-full py-2 rounded-md hover:text-primary transition">
                Home
              </Link>

              <Link href="/menu" onClick={closeMenu} className="w-full py-2 rounded-md hover:text-primary transition">
                Menu
              </Link>

              <Link href="/contact" onClick={closeMenu} className="w-full py-2 rounded-md hover:text-primary transition">
                Contact
              </Link>

              <Link
                href="/order"
                onClick={closeMenu}
                className="w-[80%] mt-2 rounded-md bg-primary px-4 py-2 font-semibold hover:bg-primary/60 transition"
              >
                Order Now
              </Link>

            </nav>
          </div>
        </div>
      )}
    </header>
  );
}