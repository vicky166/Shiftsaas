"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
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
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
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
        imageRef.current,
        { y: 50, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 65%",
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
          <span className="inline-block px-4 py-1 text-sm border border-black rounded-full">
            The Vision
          </span>

          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1]"
          >
            Empower Your <br />
            Business with
            <br /> Cutting-Edge <br />
            Features.
          </h2>

          <p ref={paragraphRef} className="text-black text-sm max-w-lg">
            Manage your team effortlessly with our user-friendly
            <br /> reports. Filter, export, and drill down on data to measure
            <br /> what matters. Amplify your marketing impact and unlock
            <br /> insights with data-driven solutions.
          </p>
        </div>

        <div
          ref={imageRef}
          className="lg:col-span-3 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-violet-100/50 mix-blend-multiply z-10"></div>
          <Image
            src="/img/image2.webp?height=1080&width=1080"
            alt="Person working on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
