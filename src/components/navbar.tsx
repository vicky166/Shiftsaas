"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="mx-auto max-w-8xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <div className="w-5 h-5 bg-black border-white border-2 rounded-full -ml-2"></div>
          </div>
          <span className="text-xl font-bold md:ml-[-5px] tracking-tight">
            ShiftSaaS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 flex-grow justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 hover:text-gray-900 transition-colors no-underline"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/learn-more"
            className="hidden md:block text-sm text-gray-600 hover:text-gray-900 no-underline"
          >
            • Learn More
          </Link>

          {isClient && (
            <Link
              href="/get-started"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#babbff] text-black text-sm font-medium transition-colors relative overflow-hidden group no-underline"
            >
              <span className="z-10 transition-colors duration-500 group-hover:text-white">
                Get Started
              </span>

              <ArrowRight className="w-6 h-6 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-white group-hover:bg-opacity-0 group-hover:text-white z-10" />

              <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
            </Link>
          )}
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 py-2 hover:text-gray-900 transition-colors no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/learn-more"
              className="text-sm text-gray-600 py-2 hover:text-gray-900 transition-colors no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Learn More
            </Link>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-5 py-2.5 mt-4 rounded-full bg-[#babbff] text-black text-sm font-medium transition-colors relative overflow-hidden group no-underline"
              onClick={() => setMenuOpen(false)}
            >
              <span className="z-10 transition-colors duration-500 group-hover:text-white">
                Get Started
              </span>

              <ArrowRight className="w-6 h-6 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-white group-hover:bg-opacity-0 group-hover:text-white z-10" />

              <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
