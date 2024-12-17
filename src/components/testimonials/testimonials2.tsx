"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials2() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setTestimonialRef = (el: HTMLDivElement | null) => {
    if (el && !testimonialRefs.current.includes(el)) {
      testimonialRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      testimonialRefs.current.forEach((testimonial, index) => {
        if (testimonial) {
          gsap.fromTo(
            testimonial,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: testimonial,
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

  const testimonials = [
    {
      name: "John D",
      role: "CEO, Tech Innovations Inc.",
      image: "/img/test1.webp?height=100&width=100",
      quote:
        "Provide exceptional customer service with our all-in-one platform. Leverage automation for speed, offer human interactions for a personal touch, and automate customer support to close leads faster.",
    },
    {
      name: "Samantha M",
      role: "Marketing Manager",
      image: "/img/test2.webp?height=100&width=100",
      quote:
        "The unified customer service hub is a lifesaver for our team. It streamlined our interactions and allowed us to provide personalized support effortlessly. [Your Company/Service] has become an integral part of our daily operations.",
    },
    {
      name: "Carlos R",
      role: "Startup Founder",
      image: "/img/test3.webp?height=100&width=100",
      quote:
        "Being a startup, scalability was crucial for us. [Your Company/Service] proved to be scalable and adaptable to our evolving needs. The tailored features allowed us to customize our workflow effectively.",
    },
    {
      name: "Samantha M",
      role: "Marketing Manager",
      image: "/img/test2.webp?height=100&width=100",
      quote:
        "The unified customer service hub is a lifesaver for our team. It streamlined our interactions and allowed us to provide personalized support effortlessly. [Your Company/Service] has become an integral part of our daily operations.",
    },
    {
      name: "Carlos R",
      role: "Startup Founder",
      image: "/img/test3.webp?height=100&width=100",
      quote:
        "Being a startup, scalability was crucial for us. [Your Company/Service] proved to be scalable and adaptable to our evolving needs. The tailored features allowed us to customize our workflow effectively.",
    },
    {
      name: "John D",
      role: "CEO, Tech Innovations Inc.",
      image: "/img/test1.webp?height=100&width=100",
      quote:
        "Provide exceptional customer service with our all-in-one platform. Leverage automation for speed, offer human interactions for a personal touch, and automate customer support to close leads faster.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={setTestimonialRef}
            className={`rounded-3xl border border-black p-8 flex flex-col items-center text-center bg-white hover:bg-[#e6e6ff] transition-colors duration-300`}
          >
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-lg font-medium mb-2 text-black">
              {testimonial.name}
            </h3>

            <span className="inline-block px-4 py-1 bg-black text-white text-xs font-medium rounded-full mb-4">
              {testimonial.role}
            </span>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#babbff] text-[#babbff]"
                />
              ))}
            </div>

            <p className="text-sm text-black">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
