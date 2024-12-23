"use client";
import Image from "next/image";
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
      className="container md:mt-10  mx-auto px-4 py-8 sm:py-12 md:py-16  relative overflow-hidden"
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

            <div
        className="w-8 h-8 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-white group-hover:bg-opacity-0 group-hover:text-white z-10"
      >
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
