"use client";

import { useEffect } from "react";
import GetStartedButton from "../button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact2() {
  const contactCards = [
    {
      title: "Help and\nSupport",
      description:
        "Have a question or need assistance? Our dedicated support team is ready to help you. For immediate assistance, you can also check our [Help Center] for useful resources.",
      highlighted: true,
    },
    {
      title: "Sales and\nPlans",
      description:
        "Have a question or need assistance? Our dedicated support team is ready to help you. For immediate assistance, you can also check our [Help Center] for useful resources.",
      highlighted: false,
    },
    {
      title: "General\nInquiries",
      description:
        "For all other inquiries or if you're not sure who to contact, you can reach us through our general contact information.",
      highlighted: false,
    },
  ];

  useEffect(() => {
    gsap.utils.toArray(".contact-card").forEach((card: unknown, index) => {
      const element = card as HTMLElement;

      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 70%",
            scrub: false,
          },
        }
      );
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {contactCards.map((card, index) => (
          <div
            key={index}
            className="contact-card rounded-3xl border border-black p-8 flex flex-col justify-between min-h-[300px] bg-white transition duration-300 hover:bg-gradient-to-t hover:from-[#babbff] hover:to-white"
          >
            <div className="space-y-4">
              <h2 className="text-5xl mb-12 font-medium leading-tight whitespace-pre-line">
                {card.title}
              </h2>

              <p className="text-sm mb-12">{card.description}</p>
            </div>

            <div className="mt-8">
              <GetStartedButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
