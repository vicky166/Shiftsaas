"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faq1() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 mt-6 py-16">
      <div
        ref={imageRef}
        className="relative w-full h-[350px] sm:h-[400px] lg:h-[350px] rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 mix-blend-multiply z-10"></div>
        <Image
          src="/img/faq.webp"
          alt="Person working on laptop"
          layout="fill"
          objectFit="cover"
          objectPosition="object-cover object-center"
          priority
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
        <div className="space-y-6">
          <span
            ref={titleRef}
            className="inline-block px-2 py-2 text-4xl sm:text-5xl lg:text-6xl bg-white text-black"
          >
            FAQs: Your Questions Answered
          </span>
        </div>
      </div>
    </section>
  );
}
