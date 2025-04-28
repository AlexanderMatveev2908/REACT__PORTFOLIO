import { FC } from "react";
import { experiences } from "../../../../config/fieldsData/experiences";
import ExperienceItem from "./ExperienceItem";

const Experience: FC = () => {
  return (
    <div className="w-full grid gap-[4px]">
      <div className="w-full flex justify-start">
        <h1 className="txt__h_0 txt__yell_0 font-bold">Experience</h1>
      </div>

      <div className="w-full grid gap-[16px]">
        {experiences.map((el) => (
          <ExperienceItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
