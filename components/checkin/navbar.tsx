"use client";

import { Plane } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Flights", href: "#" },
  { label: "Check-in", href: "#", active: true },
  { label: "Manage Booking", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <header className="bg-card">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Plane className="h-8 w-8 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-foreground">Qoomlee</span>
            <span className="text-xs text-primary">Airline</span>
          </div>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.active
                    ? "border-b-2 border-foreground pb-0.5 text-foreground"
                    : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </button>
      </nav>
    </header>
  );
}
