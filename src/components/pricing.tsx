"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const plans = [
    {
      name: "Starter Plan",
      price: "$19.99",
      features: [
        "Empower Your Business with Oasis",
        "Transformative Analytics",
        "24/7 Email Support",
      ],
      highlighted: false,
    },
    {
      name: "Business Plan  ",
      price: "$39.99",
      features: [
        "Empower Your Business with Oasis",
        "Transformative Analytics",
        "24/7 Email Support",
        "Enhanced Customer Support",
      ],
      highlighted: true,
    },
    {
      name: "Premium Plan",
      price: "$59.99",
      features: [
        "Empower Your Business with Oasis",
        "Transformative Analytics",
        "24/7 Email Support",
        "Enhanced Customer Support",
        "Advanced Analytics",
        "Custom Integrations",
      ],
      highlighted: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
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
              start: "top 90%",

              end: "top 70%",
              scrub: false,
            },
          }
        );
      }

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
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

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16">
      <div ref={headingRef} className="text-center mb-12">
        <h1 className="text-6xl text-gray-600">
          Choose the Right
          <br />
          Plan for You
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`
              relative rounded-3xl border p-6 flex flex-col justify-center items-center
              ${
                plan.highlighted
                  ? "bg-[#babbff] shadow-xl"
                  : "bg-white shadow-md"
              } 
              ${index === 0 ? "h-[400px] border-black" : ""}
              ${index === 1 ? "h-[430px]" : ""}
              ${index === 2 ? "h-[460px] border-black" : ""}
              transition-transform transform hover:scale-105 duration-300
            `}
          >
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-1 bg-black text-white text-xs font-medium rounded-full mb-6">
                {plan.name}
              </span>
              <div className="text-3xl font-medium">
                {plan.price}
                <span className="text-gray-600">/month</span>
              </div>

              <div className="flex-grow space-y-3 text-center">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-center gap-2 text-sm"
                  >
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/get-started"
              className={`
                inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full 
                text-sm font-semibold transition-colors relative overflow-hidden group no-underline
                ${
                  index === 1
                    ? "bg-white border border-black text-black hover:bg-black hover:text-white"
                    : "bg-[#babbff] text-black hover:bg-[#9fa8d5]"
                }
              `}
            >
              <span className="z-10 transition-colors duration-500 group-hover:text-white">
                Get Started
              </span>

              <div className="w-8 h-8 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-white group-hover:bg-opacity-0 group-hover:text-white z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 37 37"
                  className="w-full h-full"
                >
                  <path
                    d="M 0 18.5 C 0 8.283 8.283 0 18.5 0 C 28.717 0 37 8.283 37 18.5 C 37 28.717 28.717 37 18.5 37 C 8.283 37 0 28.717 0 18.5 Z"
                    fill="rgb(0,0,0)"
                  />
                  <path
                    d="M 8.457 17.971 C 7.873 17.971 7.4 18.445 7.4 19.029 C 7.4 19.612 7.873 20.086 8.457 20.086 Z M 24.005 19.776 C 24.417 19.363 24.417 18.694 24.005 18.281 L 17.277 11.553 C 16.864 11.141 16.195 11.141 15.782 11.553 C 15.369 11.966 15.369 12.636 15.782 13.048 L 21.762 19.029 L 15.782 25.009 C 15.369 25.422 15.369 26.091 15.782 26.504 C 16.195 26.917 16.864 26.917 17.277 26.504 Z M 8.457 20.086 L 23.257 20.086 L 23.257 17.971 L 8.457 17.971 Z"
                    fill="rgb(255,255,255)"
                  />
                  <path
                    d="M 30.348 19.776 C 30.76 19.363 30.76 18.694 30.348 18.281 L 23.62 11.553 C 23.207 11.141 22.538 11.141 22.125 11.553 C 21.712 11.966 21.712 12.636 22.125 13.048 L 28.105 19.029 L 22.125 25.009 C 21.712 25.422 21.712 26.091 22.125 26.504 C 22.538 26.917 23.207 26.917 23.62 26.504 Z M 28.543 20.086 L 29.6 20.086 L 29.6 17.971 L 28.543 17.971 Z"
                    fill="rgb(255,255,255)"
                  />
                </svg>
              </div>
              <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
