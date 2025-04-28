import { FC } from "react";
import { imgs } from "../../assets/assets";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education";
import Title from "../../components/Title";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Tools from "./components/Tools";

const AboutMe: FC = () => {
  return (
    <section
      id="aboutMe"
      className="w-full padding__app pt-[64px] pb-[128px] grid grid-cols-1 gap-[15px] justify-items-center"
    >
      <Title
        {...{
          title: "About Me",
          style: "justify-center txt__h_1 txt__yell_0 font-bold",
        }}
      />

      <div className="w-full grid gap-[32px] sm:max-w-[576px] lg:max-w-full ">
        {/* LEFT / UP */}
        <div className="w-full grid gap-[32px] lg:grid-cols-2">
          <div className="w-full flex justify-center items-center xl:h-full">
            <div className="flex justify-center w-full h-fit items-center">
              <div className="w-[80%] h-fit relative xl:w-full">
                <div className="h-[60px] w-[60px] bg__blue_1 absolute z-10 rounded-xl top-0 -translate-y-[30%] left-0 -translate-x-[40%]"></div>
                <img
                  src={imgs.about}
                  alt=""
                  className="w-full object-cover relative z-20"
                />

                <div className="h-[40px] w-[40px] bg__blue_1 absolute z-10 rounded-xl bottom-0 right-[2%] translate-y-1/2 translate-x-1/2"></div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <p className="txt__btn_0 txt__yell_0">
              Hi, I'm Alex. A couple of years ago, due to some health issues, I
              could no longer continue my work as a barman. I decided to use
              that free time to focus on something new and quickly I become
              became passionate about software development. Currently, I am a
              student at SDA Academy, following the front-end development
              course,meanwhile I also study backend development on my own. To
              practice and strengthen my skills, I build full-stack
              applications. I'm always eager to learn new technologies that help
              me broaden my understanding of development.
            </p>
          </div>
        </div>
        {/* RIGHT / DOWN */}
        <div className="w-full grid lg:grid-cols-2 gap-[32px] lg:items-start lg:h-fit">
          <Experience />

          <div className="w-full grid gap-[16px]">
            <Education />

            <Languages />

            <Skills />

            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
