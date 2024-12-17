"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact1() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-4 mt-6 py-16">
      <div
        ref={containerRef}
        className="relative w-full h-[350px] sm:h-[400px] lg:h-[350px] rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 mix-blend-multiply z-10"></div>
        <Image
          src="/img/blog.webp"
          alt="Person working on laptop"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
        <div className="space-y-6">
          <span
            ref={textRef}
            className="inline-block px-2 py-2 text-4xl sm:text-5xl lg:text-6xl bg-white text-black"
          >
            Get in Touch. Feel free to reach out to us for{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
