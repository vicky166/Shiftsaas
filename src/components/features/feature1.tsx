"use client";

import Image from "next/image";
import GetStartedButton from "../button";
import Marquee from "@/components/marquee";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features1() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLSpanElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

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

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
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
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
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

      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 95%",
              end: "top 80%",
              scrub: false,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <div
        ref={imageRef}
        className="relative w-full h-[350px] sm:h-[400px] lg:h-[350px] rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 mix-blend-multiply z-10"></div>
        <Image
          src="/img/image6.webp"
          alt="Person working on laptop"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
        <div className="space-y-6">
          <span
            ref={headingRef}
            className="inline-block px-4 py-2 text-6xl rounded-full bg-white text-black"
          >
            Innovate with Powerful Features
          </span>
        </div>

        <div className="flex flex-col items-center lg:items-start space-y-6 lg:justify-start">
          <p ref={paragraphRef} className="text-sm text-black text-center lg:text-left">
            Welcome to the forefront of [Your Industry] solutions. Immerse yourself in a world of cutting-edge features meticulously crafted to elevate your business. Explore the innovation that sets us apart.
          </p>

          <div ref={buttonRef} className="text-center lg:text-left">
            <GetStartedButton />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Marquee />
      </div>
    </section>
  );
}
