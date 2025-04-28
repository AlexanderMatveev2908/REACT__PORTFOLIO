import { FC } from "react";
import { icons, imgs } from "../../assets/assets";
import Btn from "../../components/Btn";
import "./Hero.css";

const Hero: FC = () => {
  return (
    <section className="w-full grid xl:grid-cols-2 xl:gap-[310px] py-[64px] h-fit items-start gap-[64px] padding__app">
      {/* LEFT / UP */}
      <div className="w-full grid grid-cols-1 items-start h-fit max-w-[354px] justify-self-center sm:max-w-[429px]">
        <div className="w-full grid grid-cols-1 h-fit items-start justify-items-center xl:justify-items-start">
          <h6 className="txt__yell_0 txt_p_hero">Hey, I'm</h6>
          <h1 className="txt__yell_0 title_hero">ALEXANDER MATVEEV</h1>
          <h1 className="title_hero txt__blue_0 xl:text-start ">
            Software Developer
          </h1>
          <p className="txt__yell_0 txt_p_hero text-center xl:text-start">
            I am currently a student at SDA Academy where I study frontend
            development, while I am exploring backend on my own and creating
            full-stack projects.
          </p>
        </div>
        <div className="mt-[16px] w-full flex items-center gap-[16px] justify-center xl:justify-start">
          <a
            target="_blank"
            href="https://github.com/AlexanderMatveev2908"
            className="w-[32px] h-[32px]"
          >
            <img src={icons.git} alt="" className="w-full h-full" />
          </a>
        </div>
        <div className="mt-[24px] w-full flex justify-center xl:justify-start">
          <Btn {...{ label: "Let's work together", href: "#myFooter" }} />
        </div>
      </div>
      {/* RIGHT / DOWN */}
      <div className="w-full flex justify-center items-center xl:h-full">
        <div className="flex justify-center w-full h-fit items-center">
          <div className="w-[80%] h-fit relative xl:w-full">
            <div className="h-[64px] w-[80px] bg__blue_1 absolute z-10 rounded-xl bottom-0 translate-y-1/2 left-0 -translate-x-[40%]"></div>
            <img
              src={imgs.hero_0}
              alt=""
              className="w-full object-cover relative z-20"
            />

            <div className="h-[82px] w-[106px] bg__blue_1 absolute z-10 rounded-xl top-0 right-[2%] -translate-y-[30%] translate-x-[40%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
