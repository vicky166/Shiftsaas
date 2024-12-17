import React from "react";
import Marquee from "@/components/ui/marquee";

const services: string[] = [
  "Your All-in-One Solution ",
  "Your All-in-One Solution ",
  "Your All-in-One Solution ",
];

const MarqueeSection: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden border-t border-b border-black">
      <Marquee
        pauseOnHover={true}
        className="[--duration:70s] text-black font-thin bg-white h-[80px] font-poppins"
      >
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={`https://framerusercontent.com/images/wBwc8XOSjt9tQlYgqYYjRFeoIH0.jpg?scale-down-to=512${index + 1}`}
              alt={`Service ${index + 1}`}
              className="w-11 h-11 rounded-full object-cover"
            />
            <span className="text-5xl whitespace-nowrap">{service}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
