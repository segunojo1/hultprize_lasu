"use client"
import Image from "next/image";
import { useRef } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Winners = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className="bg-[#15223E] overflow-visible winners relative text-[#F9F7F4] flex flex-col py-[142px] items-center ">
      <h2 className="text-[24px] poppins-regular mb-2">Gentle Rise</h2>
      <span className="relative">
        <h3 className="text-[48px] poppins-extrabold">
          Meet Our 2025 LASU Champions
        </h3>
        <Image
          src="/assets/green_wavy_line.svg"
          alt=""
          width={232}
          height={20}
          className="absolute right-5 -bottom-3"
        />
      </span>

      <section className="w-full mt-16">
        <div className="relative">
          {/* Custom Nav Buttons */}
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute left-[9%] top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-[#E6E6E6] text-[#111] shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex items-center justify-center"
          >
            <span className="inline-block rotate-180 text-[18px] leading-none">➜</span>
          </button>
          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute right-[9%] top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-[#E6E6E6] text-[#111] shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex items-center justify-center"
          >
            <span className="text-[18px] leading-none">➜</span>
          </button>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              // @ts-ignore - navigation types allow element or string, we pass elements via refs
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            className="w-full"
          >
          <SwiperSlide>
            <div className="mx-auto max-w-[1100px] rounded-2xl border-4 border-[#FFFFFF] px-[60px]  py-[93.5px] relative">
              <div className="flex items-center gap-10">
                <div className="relative shrink-0">
                  <div className="absolute -left-10 -top-6 h-[297px] w-[297px] rounded-full bg-[#1BBF85]" />
                  <div className="relative h-[231px] w-[272px] overflow-hidden rounded-2xl ring-4 ring-[#F9F7F4]">
                    <Image src="/assets/winner_1.jpg" alt="winner" fill className="object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[28px] poppins-extrabold text-primary">Team Konsume (2025 Winners)</h4>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#F9F7F4]/80 max-w-[620px]">
                    “Hult Prize gave us more than a platform; it gave us the mentors and momentum to turn our idea into a real-world impact. We're proof that a team from LASU can build a solution that leads the change on a global stage”.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto max-w-[1100px] rounded-2xl border border-[#F9F7F4]/80 p-8 relative">
              <div className="flex items-center gap-10">
                <div className="relative shrink-0">
                  <div className="absolute -left-10 top-6 h-[170px] w-[170px] rounded-full bg-[#1BBF85]" />
                  <div className="relative h-[190px] w-[250px] overflow-hidden rounded-2xl ring-2 ring-white/70">
                    <Image src="/assets/winner_2.jpg" alt="winner" fill className="object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-[28px] poppins-extrabold text-primary">Team Clark</h4>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#F9F7F4]/80 max-w-[620px]">
                    Short description about the team goes here to match the card layout.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Image
        src="/assets/blob-green.svg"
        alt="blob"
        width={156}
        height={156}
        className="absolute top-[73px] left-[31px]"
      />
      <Image
        src="/assets/blob-pink.svg"
        alt="blob"
        width={133}
        height={133}
        className="absolute top-[145px] right-[142px]"
      />
      <Image
        src="/assets/cross.svg"
        alt="cross"
        width={25}
        height={25}
        className="absolute top-[323px] left-[735px]"
      />
      <Image
        src="/assets/blob-pink.svg"
        alt="blob"
        width={80}
        height={80}
        className="absolute bottom-[33px] left-[232px]"
      />
<Image
        src="/assets/blob-green.svg"
        alt="blob"
        width={414}
        height={414}
        className="absolute -bottom-[155px] z-[99999999] -right-[150px]"
      />
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 44px;
          height: 44px;
          background: #e6e6e6;
          color: #111;
          border-radius: 9999px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 16px;
          font-weight: 700;
        }
        .swiper-button-prev { left: 9%; }
        .swiper-button-next { right: 9%; }
        @media (max-width: 1024px) {
          .swiper-button-prev { left: 2%; }
          .swiper-button-next { right: 2%; }
        }
        .swiper-pagination-bullet {
          background: #ff3ea5;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Winners;
