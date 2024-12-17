"use client";

import { Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function blog3() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const faqs = [
    {
      question: "What is ShiftSaaS?",
      answer:
        "ShiftSaaS is a [brief description of your company/service]. We specialize in [key offerings or services] to help businesses [achieve specific goals or solve particular problems]. Our dedicated team is committed to providing innovative solutions tailored to meet your unique needs.",
    },
    {
      question: "How can ShiftSaaS benefit my business?",
      answer:
        "[Your Company/Service] offers a range of benefits, including [highlight key advantages or features]. Whether you're looking to [solve a specific problem, enhance efficiency, or boost growth], our solutions are designed to empower your business and drive success.",
    },
    {
      question: "Is ShiftSaaS suitable for small businesses?",
      answer:
        "Absolutely! [Your Company/Service] caters to businesses of all sizes. Our solutions are scalable and customizable, making them ideal for startups, small businesses, and larger enterprises. We believe in providing tools that grow with your business.",
    },
  ];

  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      faqRefs.current.forEach((faqCard, index) => {
        if (faqCard) {
          gsap.fromTo(
            faqCard,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: faqCard,
                start: "top 85%",
                end: "top 70%",
                scrub: false,
              },
            }
          );
        }
      });
    }, faqRefs);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-4 py-12">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl overflow-hidden"
            ref={(el) => {
              faqRefs.current[index] = el;
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-black" />
                ) : (
                  <Plus className="h-5 w-5 text-black" />
                )}
              </div>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <span className="text-black text-sm">{faq.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
