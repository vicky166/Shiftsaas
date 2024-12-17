"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null); 
  const headingRef = useRef<HTMLDivElement>(null); 
  const cardsRef = useRef<HTMLDivElement[]>([]);

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
          },
        }
      );

      cardsRef.current.forEach((card,) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 65%",
                scrub: false,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { title: "Grow Fast", subtitle: "Get Help" },
    { title: "Grow Fast", subtitle: "Get Help" },
    { title: "Grow Fast", subtitle: "Get Help" },
  ];

  return (
    <section
      ref={sectionRef} 
      className="container mx-auto px-4 py-12"
    >
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Manage Your Marketing
          <br />
          Team{" "}
          <Image
            src="/img/image4..webp"
            alt="Team member 1"
            width={48}
            height={48}
            className="inline-block rounded-full mx-1"
          />
          <Image
            src="/img/image4..webp"
            alt="Team member 2"
            width={48}
            height={48}
            className="inline-block rounded-full mx-1"
          />
          Efficiently
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Join our community of partners on the journey to
          <br />
          excellence, with over{" "}
          <span className="text-[#babbff]">26,000</span> satisfied users.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el; 
            }}
            className="bg-[#babbff] rounded-3xl p-8 flex flex-col items-center"
          >
            <h3 className="text-3xl font-medium mt-6">{card.title}</h3>
            <p className="text-2xl mb-6">{card.subtitle}</p>

            <div className="mb-6 flex justify-center items-center">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="32"
                  r="20"
                  fill="url(#dotPattern)"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <circle cx="42" cy="32" r="20" stroke="black" strokeWidth="1.5" />
                <defs>
                  <pattern
                    id="dotPattern"
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="0.5" fill="black" />
                  </pattern>
                </defs>
              </svg>
            </div>

            <p className="text-black text-sm">
              Provide exceptional customer service with our all-in-one platform.
              Leverage automation for speed, offer human interactions for a
              personal touch, and automate customer support to close leads
              faster.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
