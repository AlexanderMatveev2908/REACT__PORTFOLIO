import { FC } from "react";
import Title from "../../../components/Title";
import { icons } from "../../../assets/assets";

const Tools: FC = () => {
  return (
    <div className="about_me_cont">
      <Title
        {...{
          title: "Tools",
          style: "txt__h_0 txt__yell_0 font-bold justify-start",
        }}
      />

      <div className="w-full flex gap-[16px] items-center">
        <img
          src={icons.fig}
          alt=""
          className="object-cover w-[20px] h-[30px]"
        />
      </div>
    </div>
  );
};

export default Tools;
