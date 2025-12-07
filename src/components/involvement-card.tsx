"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface InvolvementCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  backgroundColor: string;
  imageSrc: string;
  imageAlt: string;
  buttonHref: string
}

export const InvolvementCard = ({
  title,
  description,
  buttonText,
  buttonColor,
  backgroundColor,
  imageSrc,
  imageAlt,
  buttonHref
}: InvolvementCardProps) => {
  return (
    <div
      className={`${backgroundColor} group relative h-auto w-full overflow-hidden rounded-[20px] opacity-100 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl lg:h-[232px] lg:w-[543px]`}
      role="article"
      tabIndex={0}
      aria-label={`${title}: ${description}`}
    >
      <div className="h-auto w-full gap-5 rounded-[20px] p-6 opacity-100 lg:h-[232px] lg:w-[543px] lg:p-[40px_30px]">
        <div className="flex flex-col items-center gap-5 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <div className="flex flex-1 flex-col items-center gap-4 lg:items-start">
            <div className="flex-1">
              <h3 className="mb-2 font-poppins text-[20px] font-semibold leading-[120%] tracking-[0px] text-white lg:text-[24px] lg:leading-[100%]">
                {title}
              </h3>
              <p className="font-poppins text-[14px] font-normal leading-[120%] tracking-[0px] text-white/90 lg:text-[15px] lg:leading-[100%]">
                {description}
              </p>
            </div>

            <Button
              asChild
              className={`${buttonColor} h-10 w-full gap-2.5 rounded-[30px] px-8 py-2.5 font-semibold opacity-100 transition-all duration-200 hover:text-inherit lg:w-[288px] lg:px-[60px]`}
              aria-label={`${buttonText} for ${title}`}
              tabIndex={0}
            >
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
