import Content from "@/components/content";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Features from "@/components/features"
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
  <>
  <Hero />
  <Marquee />
  <Features />
  <Team />
  <Testimonial />
  <Pricing />
  <Content  />
  </>  
  );
}
