import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Navbar from "@/components/navbar";
import Winners from "@/components/winners";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F9F7F4]">
     <Navbar />
     <Hero />
     <Impact />
     <Winners />
    </div>
  );
}
