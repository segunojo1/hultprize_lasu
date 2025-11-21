import GetInvolved from "@/components/get-involved";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Navbar from "@/components/navbar";
import New from "@/components/new";
import Winners from "@/components/winners";
import PartnerWithUs from "@/components/partner-with-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-[#F9F7F4]">
      <Navbar />
      <Hero />
      <Impact />
      <Winners />
      {/* <New /> */}
      <GetInvolved />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}
