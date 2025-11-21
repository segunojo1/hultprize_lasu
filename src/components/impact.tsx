import Image from "next/image";
import { Button } from "./ui/button";

const impactData = [
  { number: "30+", title: " Teams Coached & Supported", icon: "circle", iconPosBottom: "205px", iconPosLeft: "27px", iconSize: 25},
  { number: "70+", title: "Student Entrepreneurs", icon: "circle", iconPosBottom: "36px", iconPosLeft: "56px", iconSize: 40 },
  { number: "3", title: "Teams at the nationals", icon: "cross", iconPosBottom: "200px", iconPosLeft: "290px", iconSize: 25 },
];
const Impact = () => {
  return (
    <section className="md:mt-[100px] md:py-20 mt-[30px] md:px-[57px] px-[30px] mb-[72px] flex items-center flex-col relative">
      <h2 className="md:text-[24px] text-[14px] poppins-regular mb-2">
        Why Join
      </h2>
      <div className="relative ">
        <h3 className="text-[clamp(20px,3vw,48px)] poppins-extrabold">
          LASU's Impact by the Numbers
        </h3>
        <Image
          src="/assets/wavy_line.svg"
          alt=""
          width={172}
          height={20}
          className="absolute lg:left-52 left-20 lg:w-[172px] w-[69px] lg:-bottom-3 -bottom-2"
        />
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-5 md:mt-[98px] mt-[30px]">
        {impactData.map((data, index) => (
          <ImpactBox key={index} iconSize={data.iconSize} number={data.number} title={data.title} icon={data.icon} iconPosBottom={data.iconPosBottom} iconPosLeft={data.iconPosLeft} />
        ))}
      </div>

      <div className="space-y-[38px] md:mt-[98px] mt-[20px] items-center max-w-[662px] text-center">
        <p className="text-[16px] md:text-[24px] poppins-regular">
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
        className="absolute md:block hidden bottom-[90px] left-[175px]"
      />
      <Image
        src="/assets/circle1.svg"
        alt="circle"
        width={133}
        height={128}
        className="absolute md:block hidden bottom-[165px] right-[46px] rotate-175"
      />
    </section>
  );
};

export default Impact;

export const ImpactBox = ({
  number,
  title,
  icon,
  iconPosBottom,
  iconPosLeft,
  iconSize
}: {
  number: string;
  title: string;
  icon: string;
  iconPosBottom: string
  iconPosLeft: string;
  iconSize: number
}) => {
  return (
    <div className="relative h-[321px] shadow-[0_4px_60px_4px_rgba(0,0,0,0.1)] pt-16 pr-[116px] pb-[50px] pl-[90px] rounded-[20px] flex items-center flex-col justify-center text-center bg-[url(/assets/stat_bg.png)] bg-size-[173px] bg-no-repeat bg-center ">
      <h4 className="text-[clamp(40px,4vw,96px)] poppins-extrabold text-[#15223E]">
        {number}
      </h4>
      <p className="md:text-[24px] text-[20px] poppins-extrabold text-[#191919CC]">
        {title}
      </p>

      <Image
        src={`/assets/${icon}.svg`}
        alt={icon}
        width={iconSize}
        height={40}
        style={{
          bottom: iconPosBottom,
          left: iconPosLeft
        }}
        className={`absolute `}
      />
    </div>
  );
};
