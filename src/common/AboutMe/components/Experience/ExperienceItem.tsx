import { FC } from "react";
import { ExpType } from "../../../../config/fieldsData/experiences";

type PropsType = ExpType;

const Splitter = ({
  pair,
  styleCustom,
}: {
  pair: string[];
  styleCustom: string;
}) => (
  <div className="w-full grid grid-cols-2">
    <div className="w-full flex justify-start">
      <h3 className={`txt__b_0 text-nowrap ${styleCustom}`}>{pair[0]}</h3>
    </div>

    <div className="w-full flex justify-end">
      <h3 className="txt__b_0 txt__yell_0">{pair[1]}</h3>
    </div>
  </div>
);

const ExperienceItem: FC<PropsType> = ({ title, type, at, when }) => {
  return (
    <div className="w-full grid grid-cols-1">
      {/* HEADER */}
      <Splitter {...{ pair: [title, type], styleCustom: "txt__blue_0" }} />
      {/* BODY */}

      <Splitter
        {...{ pair: [at, when], styleCustom: "txt__yell_0 font-semibold" }}
      />
    </div>
  );
};

export default ExperienceItem;
