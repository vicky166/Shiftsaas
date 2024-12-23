"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetStartedButton from "./button";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current, 
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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

      gsap.fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]"
          >
            Your All-in-One Solution for
            <br />
            Business Success
          </h2>

          <p ref={textRef} className="text-black text-sm max-w-lg">
            Integrate our solution seamlessly into your workflow for
            <br /> enhanced efficiency and productivity.
          </p>

          <div ref={buttonRef}>
            <GetStartedButton />
          </div>
        </div>

        <div className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-violet-100/50 mix-blend-multiply z-10"></div>
          <Image
            src="/img/image5.webp?height=1080&width=1080"
            alt="Person working on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
