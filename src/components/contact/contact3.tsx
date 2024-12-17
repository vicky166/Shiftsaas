"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact3() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-heading", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".contact-description",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-description", start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#e6e6ff] to-white py-24 px-4 rounded-3xl">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="contact-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Your All-in-One Solution
          <br />
          for Business Success
        </h2>

        <p className="contact-description text-gray-600 mb-12 max-w-xl mx-auto">
          Integrate our solution seamlessly into your workflow for enhanced
          efficiency and productivity.
        </p>

        <form
          onSubmit={handleSubmit}
          className="contact-form relative max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black pr-32"
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1 px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
