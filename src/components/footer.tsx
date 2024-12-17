"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetStartedButton from "./button";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const socialRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logoRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        navRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        socialRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            end: "top 65%",
            scrub: false,
          },
        }
      );

      gsap.fromTo(
        copyrightRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: false,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const navigation = {
    main: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQs", href: "/faqs" },
      { name: "Blog", href: "/blog" },
      { name: "Docs", href: "/docs" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
    ],
  };

  return (
    <footer ref={sectionRef} className="border-t border-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <Link
            href="/"
            ref={logoRef}
            className="flex items-center gap-2 no-underline"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div className="w-5 h-5 bg-black border-white border-2 rounded-full -ml-2"></div>
            </div>
            <span className="text-xl font-bold md:ml-[-5px] tracking-tight">
              ShiftSaaS
            </span>
          </Link>

          <nav ref={navRef} className="grid grid-cols-2 gap-x-8 gap-y-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 mt-2 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div ref={socialRef} className="flex flex-col items-start gap-4">
            <GetStartedButton />

            <div className="flex flex-col gap-2">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={copyrightRef}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8"
        >
          <p className="text-sm text-gray-500">
            © 2023 All rights reserved - ShiftSaaS Template by FogShif Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
