import { FC, useState } from "react";
import Title from "../../../components/Title";
import { mySkills } from "../../../assets/assets";
import { v4 } from "uuid";

const Skills: FC = () => {
  const [ids] = useState(Array.from({ length: mySkills.length }, () => v4()));

  return (
    <div className="about_me_cont">
      <Title
        {...{
          title: "Skills",
          style: "txt__h_0 txt__yell_0 font-bold justify-start",
        }}
      />

      <div className="w-full flex items-center gap-[16px]">
        {mySkills.map((src, i) => (
          <img
            key={ids[i]}
            src={src}
            alt=""
            className="object-cover w-[30px] h-[30px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
