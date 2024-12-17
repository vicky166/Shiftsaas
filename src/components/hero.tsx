"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const btnRef = useRef(null); 
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    timeline.fromTo(
      btnRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 10 },
      "<0.1"
    );
  }, []);

  return (
    <section
      ref={btnRef}
      className="container mx-auto px-4 py-8 sm:py-12 md:py-16 md:mt-2 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] col-span-3 lg:col-span-3 rounded-2xl lg:rounded-3xl overflow-hidden">
          <Image
            src="/img/image1.webp"
            alt="Office workspace"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-[#babbff] p-6 sm:p-8 lg:p-12 col-span-2 lg:col-span-2 flex flex-col justify-between rounded-2xl lg:rounded-3xl h-auto lg:h-[550px]">
          <div className="space-y-4 sm:space-y-6 lg:space-y-20">
            <span className="inline-block px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
              Grow Fast
            </span>

            <h1
              className="text-3xl sm:text-4xl text-semibold lg:text-5xl xl:text-7xl leading-tight"
            >
              Welcome to
              <br />
              Your Business
              <br />
              Success
            </h1>

            <p className="text-black text-sm sm:text-base lg:text-sm max-w-sm lg:max-w-md">
              Transform your business with our powerful software <br /> that
              puts you on the path to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6  lg:mt-0 lg:absolute lg:bottom-12 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full lg:w-[calc(50%-1rem)] lg:right-4 lg:pr-12">
        <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row justify-between items-center sm:items-start w-full">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 md:ml-[170px] px-5 py-2.5 rounded-full bg-[#babbff] text-black text-sm font-medium transition-colors relative overflow-hidden group no-underline"
          >
            <span className="z-10 transition-colors duration-500 group-hover:text-white">
              Features
            </span>

            <ArrowRight className="w-6 h-6 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-black group-hover:text-white z-10" />

            <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
          </Link>

          <p className="text-black text-sm sm:text-base lg:text-sm max-w-[300px] sm:max-w-[400px] lg:max-w-[480px] mb-4 md:ml-[250px] lg:ml-0 ">
            Amplify your marketing impact and 
            unlock <br></br>insights with data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
