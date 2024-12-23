import Link from "next/link";

const GetStartedButton = () => {
  return (
    <Link
      href="/get-started"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#babbff] text-black text-sm font-medium transition-colors relative overflow-hidden group no-underline"
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
  );
};

export default GetStartedButton;
