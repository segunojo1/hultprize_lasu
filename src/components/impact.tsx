import Image from "next/image";
import { Button } from "./ui/button";

const impactData = [
  { number: "30+", title: " Teams Coached & Supported" },
  { number: "70+", title: "Student Entrepreneurs" },
  { number: "3", title: "Teams at the nationals" },
];
const Impact = () => {
  return (
    <section className="mt-[100px] py-20 px-[57px] flex items-center flex-col relative">
      <h2 className="text-[24px] poppins-regular mb-2">Why Join</h2>
      <div className="relative ">
        <h3 className="text-[48px] poppins-extrabold">
          LASU's Impact by the Numbers
        </h3>
        <Image
          src="/assets/wavy_line.svg"
          alt=""
          width={172}
          height={20}
          className="absolute left-52 -bottom-3"
        />
      </div>

      <div className="flex items-center gap-5 mt-[98px]">
        {impactData.map((data, index) => (
          <ImpactBox key={index} number={data.number} title={data.title} />
        ))}
      </div>

      <div className="space-y-[38px] mt-[98px] items-center max-w-[662px] text-center">
        <p className="text-[24px] poppins-regular">
          Join a legacy of changemakers. We provide the mentorship, you provide
          the idea.
        </p>
        <Button className="h-full poppins-semibold bg-primary py-2.5 px-[60px] text-[20px] font-semibold rounded-[30px]">
          Register Team
        </Button>
      </div>
      <Image
                src="/assets/circle2.svg"
                alt="circle"
                width={133}
                height={128}
                className="absolute bottom-[90px] left-[175px]"
              />
              <Image
                src="/assets/circle1.svg"
                alt="circle"
                width={133}
                height={128}
                className="absolute bottom-[165px] right-[46px] rotate-[175deg]"
              />
    </section>
  );
};

export default Impact;

export const ImpactBox = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => {
  return (
    <div className="shadow-[0_4px_60px_4px_rgba(0,0,0,0.1)] pt-16 pr-[116px] pb-[50px] pl-[90px] rounded-[20px] flex items-center flex-col justify-center text-center bg-[url(/assets/stat_bg.png)] bg-size-[173px] bg-no-repeat bg-center ">
      <h4 className="text-[96px] poppins-extrabold text-[#15223E]">{number}</h4>
      <p className="text-[24px] poppins-extrabold text-[#191919CC]">{title}</p>
    </div>
  );
};
