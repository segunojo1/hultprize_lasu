"use client";

import Image from "next/image";
import { InvolvementCard } from "./involvement-card";

const GetInvolved = () => {
  const cardData = [
    {
      id: 1,
      title: "Compete and Innovate",
      description: "Build a start-up, solve a global challenge, and aim for the $1M prize.",
      buttonText: "Register Team",
      buttonColor: "bg-white text-pink-600 hover:bg-gray-50",
      backgroundColor: "bg-[#ED2089]",
      imageSrc: "/assets/hult-img.png",
      imageAlt: "Compete and Innovate",
      buttonHref: "/"
    },
    {
      id: 2,
      title: "Lead Local Movement",
      description: "Drive the Hult Prize program at LASU. Gain leadership experience.",
      buttonText: "Join the Team",
      buttonColor: "bg-white text-[#06B479] hover:bg-gray-50",
      backgroundColor: "bg-[#06B479]",
      imageSrc: "/assets/hult-img.png",
      imageAlt: "Lead Local Movement",
      buttonHref: "/"
    },
    {
      id: 3,
      title: "Guide Our Innovators",
      description: "Share your expertise and inspire the next generation of entrepreneurs.",
      buttonText: "Offer Expertise",
      buttonColor: "bg-white text-[#1E3A5F] hover:bg-gray-50",
      backgroundColor: "bg-[#15223E]",
      imageSrc: "/assets/hult-img.png",
      imageAlt: "Guide Our Innovators",
      buttonHref: "https://forms.gle/VSbfrwGT4bnfZv31A"
    },
    {
      id: 4,
      title: "Community & Socials",
      description: "Stay updated, find teammates, and engage with our vibrant community.",
      buttonText: "Follow Us & Join Group",
      buttonColor: "bg-white text-black hover:bg-gray-50",
      backgroundColor: "bg-[#191919]",
      imageSrc: "/assets/hult-img.png",
      imageAlt: "Community & Socials",
      buttonHref: "https://lnk.bio/hultprize_lasu"
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F0] px-4 py-16 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 font-poppins text-[18px] font-normal leading-[100%] tracking-[0px] text-gray-600 sm:text-[24px]">
            Get involved
          </p>
          <h2 className="font-poppins text-[32px] font-semibold leading-[110%] tracking-[0px] text-[#15223E] sm:text-[40px] lg:text-[48px] lg:leading-[100%]">
            Your Role in <span className="relative inline-block">
              Shaping
              <Image
                src="/assets/line.png"
                alt=""
                width={172}
                height={20}
                className="absolute bottom-0 left-1/2 h-3 w-[120px] -translate-x-1/2 sm:h-4 sm:w-[150px] sm:translate-y-0.5 lg:h-5 lg:w-[172px] lg:translate-y-2"
                aria-hidden="true"
              />
            </span> the Future
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-8">
          {cardData.map((card) => (
            <InvolvementCard
              key={card.id}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonColor={card.buttonColor}
              backgroundColor={card.backgroundColor}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              buttonHref={card.buttonHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
