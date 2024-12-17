"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const buttons = [
  { label: "Get Started", link: "/get-started" },
  { label: "Learn More", link: "/learn-more" }
];

export default function Features3() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              end: "top 70%",
              scrub: false,
            },
          }
        );
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
      <div
        ref={cardRef}
        className="bg-[#babbff] rounded-3xl p-6 sm:p-10 lg:p-16"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Your All-in-One
              <br /> Solution for
              <br /> Business Success
            </h2>

            <p className="text-black text-sm sm:text-base">
              Integrate our solution seamlessly into your workflow for enhanced
              efficiency and productivity.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4 sm:gap-6 pt-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`
                    inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
                    text-sm font-semibold transition-colors relative overflow-hidden group no-underline
                    ${index === 0
                      ? "bg-white border border-black text-black hover:bg-black hover:text-white"
                      : "bg-[#babbff] text-black hover:bg-[#9fa8d5]"
                    }
                  `}
                >
                  <span className="z-10 transition-colors duration-500 group-hover:text-white">
                    {button.label}
                  </span>

                  <ArrowRight className="w-6 h-6 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-black group-hover:text-white z-10" />
                  <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Adjusted the size and moved the border outside the circle */}
            <div className="w-6 h-6 bg-black rounded-full outline-4 outline-black" />
            <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <div className="w-24 h-24 border-4 border-black rounded-full" />
            <div className="w-12 h-12 border-4 border-black rounded-full" />

            <div className="w-22 h-24 border-4 border-black rounded-full" />
            <div className="w-6 h-6 bg-black border-4 border-black rounded-full" />
            <div className="w-2 h-2 bg-black rounded-full outline-4 outline-black" />
            <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>

            <div className="w-2 h-2 bg-black rounded-full outline-4 outline-black" />
            <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            <div className="w-12 h-12 border-4 border-black rounded-full" />
            <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
