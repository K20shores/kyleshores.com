"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col lg:flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Mobile Menu Button */}
          <div className="flex justify-between w-full lg:hidden z-51">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-2xl p-2 ${isOpen ? "text-white" : ""}`} // Apply text-white class when menu is open
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center lg:hidden`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="text-white text-8xl py-2 px-4 hover:underline"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:flex-row lg:space-x-4 space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
