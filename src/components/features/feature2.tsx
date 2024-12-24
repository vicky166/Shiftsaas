"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Feature2() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    { title: "Workflow\nHarmony", className: "self-start" },
    { title: "User-Centric\nDesign", className: "self-center mt-16" },
    { title: "Visual\nReports", className: "self-start" },
    { title: "Collaboration\nNirvana", className: "self-end" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      featureRefs.current.forEach((feature, ) => {
        if (feature) {
          gsap.fromTo(
            feature,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: feature,
                start: "top 85%",
                end: "top 70%",
                scrub: false,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="container  mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 min-h-[300px]">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
            className={`feature w-full md:w-64 bg-[#babbff] rounded-3xl p-8 text-center ${feature.className}`}
          >
            <h3 className="text-2xl font-medium whitespace-pre-line">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
