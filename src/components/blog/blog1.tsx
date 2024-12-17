"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog1() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              end: "top 60%",
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
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: "top 60%",
              scrub: false,
            },
          }
        );
      }
    }, [imageRef, textRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0" ref={imageRef}>
          <Image
            src="/img/blog.webp?height=1080&width=1920"
            alt="Person walking up stairs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        </div>

        <div
          className="relative h-full flex flex-col justify-end p-8 sm:p-12"
          ref={textRef}
        >
          <span className="inline-block px-4 py-1 bg-[#e6e6ff] text-black text-sm rounded-full mb-6 max-w-max">
            Dec 16, 2023
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-tight mb-6">
            Strategies The Art of Customer
            <br />
            Engagement: for Success
          </h1>

          <p className="text-base sm:text-sm text-white/90 max-w-2xl">
            Techniques Explore proven to engage and retain customers in a
            competitive
            <br />
            business landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
