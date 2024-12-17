import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GetStartedButton = () => {
  return (
    <Link
      href="/get-started"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#babbff] text-black text-sm font-medium transition-colors relative overflow-hidden group no-underline"
    >
      <span className="z-10 transition-colors duration-500 group-hover:text-white">
        Get Started
      </span>

      <ArrowRight className="w-6 h-6 bg-black rounded-full text-white transition-colors duration-500 group-hover:bg-white group-hover:bg-opacity-0 group-hover:text-white z-10" />

      <span className="absolute inset-0 bg-black transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-right z-0"></span>
    </Link>
  );
};

export default GetStartedButton;
