import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="clip relative flex items-center pl-[59px]">
        <div className="flex max-w-[80%] flex-col relative gap-6 my-auto h-fit">
            <h1 className="text-[64px] poppins-bold  text-[#F5F5F7]">
              Lead the Change at LASU. Win $1M Globally.
            </h1>
            <Image
              src="/assets/circle.svg"
              alt="circle"
              width={25}
              height={25}
              className="absolute -top-3 left-[77px]"
            />
            <Image
              src="/assets/cross.svg"
              alt="cross"
              width={25}
              height={25}
              className="absolute -top-14 left-[281px]"
            />
             <Image
              src="/assets/cross.svg"
              alt="cross"
              width={25}
              height={25}
              className="absolute -bottom-3.5 right-[90px]"
            />
          <p className="text-2xl max-w-[70%] poppins text-[#ffffffb1]">
            Join the 2026 Hult Prize OnCampus Program at Lagos State University.
          </p>
          <Button className="w-fit h-fit poppins bg-primary py-2.5 px-[60px] text-[20px] font-semibold rounded-[30px]">
            Register Team
          </Button>
        </div>
        <Image
          src="/assets/circle1.svg"
          alt="circle"
          width={133}
          height={128}
          className="absolute bottom-[11px] left-2 rotate-175"
        />
      </div>

      <div className="self-end relative">
        <Image
          src="/assets/hero_woman.png"
          width={809}
          height={679}
          alt="woman"
        />

        <Image
          src="/assets/circle1.svg"
          alt="circle"
          width={133}
          height={128}
          className="absolute top-[41px] right-0"
        />
        <Image
          src="/assets/cross.svg"
          alt="circle"
          width={25}
          height={25}
          className="absolute bottom-[43px] right-[35px]"
        />
        <Image
          src="/assets/circle.svg"
          alt="circle"
          width={25}
          height={25}
          className="absolute bottom-[165px] left-[46px]"
        />
      </div>
    </div>
  );
};

export default Hero;
