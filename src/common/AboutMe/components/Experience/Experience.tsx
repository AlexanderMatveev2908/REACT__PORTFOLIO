import { FC } from "react";
import { experiences } from "../../../../config/fieldsData/experiences";
import ExperienceItem from "./ExperienceItem";
import Title from "../../../../components/Title";

const Experience: FC = () => {
  return (
    <div className="w-full grid gap-[4px] lg:order-2">
      <Title
        {...{
          title: "Experience",
          style: "justify-start txt__h_0 txt__yell_0 font-bold",
        }}
      />

      <div className="w-full grid gap-[16px]">
        {experiences.map((el) => (
          <ExperienceItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
