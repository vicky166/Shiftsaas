"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog2() {
  const posts = [
    {
      date: "Dec 14, 2023",
      title: "Strategies for Success: Customer Engagement Art Copy",
      description:
        "Customers in a competitive business landscape. Explore proven techniques to engage and retain.",
      image: "/img/blog2.webp?height=300&width=600",
    },
    {
      date: "Dec 13, 2023",
      title: "Strategies for Success: Customer Engagement Art",
      description:
        "Customers in a competitive business landscape. Explore proven techniques to engage and retain.",
      image: "/img/blog3.webp?height=300&width=600",
    },
    {
      date: "Dec 12, 2023",
      title: "The Art of Customer Engagement: Strategies for Success",
      description:
        "Explore proven techniques to engage and retain customers in a competitive business landscape.",
      image: "/img/blog4.webp?height=300&width=600",
    },
  ];

  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 70%",
                scrub: false,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            key={index}
            href="#"
            className="group"
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            <article className="space-y-4">
              <div className="relative h-48 rounded-3xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <span className="inline-block px-4 py-1 bg-black text-white text-xs font-medium rounded-full">
                  {post.date}
                </span>

                <h2 className="text-xl font-medium leading-tight group-hover:text-gray-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
