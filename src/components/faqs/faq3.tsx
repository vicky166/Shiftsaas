"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetStartedButton from "../button";

gsap.registerPlugin(ScrollTrigger);

export default function Faq3() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
        paragraphRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        buttonsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight"
        >
          Streamline Your Workflow with
          <br />
          Seamless Integration
        </h1>

        <p ref={paragraphRef} className="text-black text-sm">
          Integrate our solution seamlessly into your workflow for
          <br />
          enhanced efficiency and productivity.
        </p>

        <div
          ref={buttonsRef}
          className="flex items-center justify-center gap-6 pt-4"
        >
          <GetStartedButton />

          <Link
            href="/learn-more"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            • Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
