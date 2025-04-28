import { FC } from "react";
import { icons, imgs } from "../assets/assets";
import Btn from "../components/Btn";

const Hero: FC = () => {
  return (
    <section className="w-full grid py-[64px] h-fit items-start gap-[64px] px-[16px] sm:px-[128px]">
      {/* LEFT / UP */}
      <div className="w-full grid grid-cols-1 items-start h-fit">
        <div className="w-full grid grid-cols-1 h-fit items-start justify-items-center">
          <h6 className="txt__yell_0 txt_p_hero">Hey, I'm</h6>
          <h1 className="txt__yell_0 title_hero">ALEXANDER MATVEEV</h1>
          <h1 className="title_hero txt__blue_0 ">Software Developer</h1>
          <p className="txt__yell_0 txt_p_hero text-center">
            I am currently a student at SDA Academy where I study frontend
            development while also exploring backend development and creating
            full-stack projects.
          </p>
        </div>
        <div className="mt-[16px] w-full flex items-center gap-[16px] justify-center">
          <a
            href="https://github.com/AlexanderMatveev2908"
            className="w-[32px] h-[32px]"
          >
            <img src={icons.git} alt="" className="w-full h-full" />
          </a>
        </div>
        <div className="mt-[24px] w-full flex justify-center">
          <Btn {...{ label: "Let's work together" }} />
        </div>
      </div>
      {/* RIGHT / DOWN */}
      <div className="w-full flex justify-center items-center">
        <div className="w-full relative flex justify-center items-center">
          <div className="w-[314px] h-[324px] ">
            <div className="h-[64px] w-[80px] bg__blue_1 absolute z-10 rounded-xl bottom-0 translate-y-1/2 left-0"></div>
            <img
              src={imgs.hero_0}
              alt=""
              className="min-w-full min-h-full object-cover relative z-20"
            />
            <div className="h-[82px] w-[106px] bg__blue_1 absolute z-10 rounded-xl top-0 right-0 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
