import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Navbar />
     <Hero />
     <Impact />
    </div>
  );
}
