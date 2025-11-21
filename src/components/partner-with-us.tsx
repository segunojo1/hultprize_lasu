"use client";

import { Button } from "./ui/button";

const PartnerWithUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#15223E] pb-20 pt-32 sm:pt-40 lg:pb-32 lg:pt-48">
      <div 
        className="absolute left-0 top-0 h-32 w-full origin-top-left -skew-y-2 bg-[#F5F5F0] sm:h-40 lg:h-48"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[805px] text-center opacity-100 lg:gap-10">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-white/80 sm:text-base lg:mb-10">
          Partner with Us
        </p>

        <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl lg:mb-10 lg:text-4xl xl:text-5xl">
          Powering Impact Together
        </h2>

        <p className="mb-10 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg xl:text-xl">
          Are you a business, organization, or individual passionate about
          youth innovation? Partner with Hult Prize LASU to champion
          social entrepreneurship and shape the future.
        </p>

        <Button
          className="h-[50px] w-full gap-2.5 rounded-[30px] bg-[#ED2089] px-8 py-2.5 font-poppins text-[16px] font-semibold uppercase leading-[100%] tracking-[0px] text-white opacity-100 transition-all duration-300 hover:bg-[#D91A7A] hover:text-white hover:shadow-lg sm:w-auto sm:px-12 sm:text-[18px] lg:w-[502px] lg:px-[60px] lg:text-[20px]"
          aria-label="Explore partnership opportunities with Hult Prize LASU"
          tabIndex={0}
        >
          Explore Partnership Opportunities
        </Button>
      </div>
    </section>
  );
};

export default PartnerWithUs;
