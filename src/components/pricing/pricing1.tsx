"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Pricing1() {
  // Refs for image and text elements
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animation for the background image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 50 }, // Initial state (fade and slide in from below)
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

      // Scroll animation for the title text
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

      // Scroll animation for the description text
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <section className="container mx-auto px-4 mt-6 py-16">
      <div
        className="relative w-full h-[350px] sm:h-[400px] lg:h-[350px] rounded-3xl overflow-hidden"
        ref={imageRef}
      >
        <div className="absolute inset-0 mix-blend-multiply z-10"></div>
        <Image
          src="/img/pricing1.webp"
          alt="Person working on laptop"
          layout="fill"
          objectFit="cover"
          objectPosition="object-cover object-center"
          priority
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8 items-start">
        <div className="space-y-6" ref={titleRef}>
          <span className="inline-block px-2 py-2 text-4xl sm:text-5xl lg:text-6xl bg-white text-black">
            Tailored Every Business Need
          </span>
        </div>

        <div
          className="flex flex-col items-center lg:items-start space-y-6 lg:justify-start mt-6 lg:mt-0 ml-0 lg:ml-[50px]"
          ref={descriptionRef}
        >
          <p className="text-sm sm:text-base lg:text-sm text-black text-center lg:text-left">
            Explore our carefully crafted subscription plans designed to meet
            the unique requirements of businesses at every stage. Whether you&apos;re
            just starting or looking to scale, choose from our Starter,
            Business, or Premium plans, each packed with features to empower
            your business with Oasis. Select the plan that aligns perfectly with
            your goals and takes your business to new heights.
          </p>
        </div>
      </div>
    </section>
  );
}
