"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials1() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

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

      if (paragraphRef.current) {
        gsap.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 90%",
              end: "top 75%",
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
          src="/img/testimonials.webp"
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
            Discover What Our Clients Say
          </span>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-6 lg:justify-start mt-6 lg:mt-0 ml-0 lg:ml-[50px]">
          <p
            ref={paragraphRef}
            className="text-sm sm:text-base lg:text-sm text-black text-center lg:text-left"
          >
            Explore the impact of [Your Company/Service] through the words of
            our valued clients. Dive into real stories of success, innovation,
            and growth as they share their experiences with our transformative
            features. From CEOs to startup founders, marketers to operations
            managers, discover how [Your Company/Service] has become an integral
            part of their journey.
          </p>
        </div>
      </div>
    </section>
  );
}
