"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Flights", href: "/flights" },
  { label: "Check-in", href: "/checkin", active: true },
  { label: "Manage Booking", href: "/manage-booking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="bg-white"
      style={{ borderBottom: "1px solid var(--color-nav-border)" }}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Airplane icon - tilted */}
          <svg
            className="-rotate-12"
            width="36"
            height="36"
            viewBox="0 0 32 32"
            fill="#2a7cc7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28.4 4.8c-0.8-0.8-2.2-0.6-3.2 0.4l-5.6 5.6-12-3.6c-0.4-0.1-0.8 0-1.1 0.3l-1.6 1.6c-0.4 0.4-0.2 1 0.3 1.2l9 4.2-4.8 4.8-3.2-0.8c-0.3-0.1-0.6 0-0.8 0.2l-1.2 1.2c-0.3 0.3-0.2 0.8 0.2 1l4 2.4 2.4 4c0.2 0.4 0.7 0.5 1 0.2l1.2-1.2c0.2-0.2 0.3-0.5 0.2-0.8l-0.8-3.2 4.8-4.8 4.2 9c0.2 0.5 0.8 0.7 1.2 0.3l1.6-1.6c0.3-0.3 0.4-0.7 0.3-1.1l-3.6-12 5.6-5.6c1-1 1.2-2.4 0.4-3.2z" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight" style={{ color: "var(--color-text-dark)" }}>
              Qoomlee
            </span>
            <span
              className="text-[11px] font-medium leading-none"
              style={{ color: "var(--color-primary-blue)", marginTop: "1px" }}
            >
              Airline
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  link.active
                    ? "font-medium underline underline-offset-[22px] decoration-2"
                    : "hover:opacity-80"
                }`}
                style={{
                  color: link.active
                    ? "var(--color-text-dark)"
                    : "rgba(30,41,59,0.6)",
                  textDecorationColor: link.active
                    ? "var(--color-text-dark)"
                    : undefined,
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          style={{ color: "var(--color-text-dark)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="bg-white px-6 pb-4 md:hidden"
          style={{ borderTop: "1px solid var(--color-nav-border)" }}
        >
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    link.active ? "font-medium" : ""
                  }`}
                  style={{
                    color: link.active
                      ? "var(--color-primary-blue)"
                      : "rgba(30,41,59,0.6)",
                    backgroundColor: link.active
                      ? "rgba(42,124,199,0.1)"
                      : undefined,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
