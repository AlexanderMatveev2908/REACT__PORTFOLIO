import { FC } from "react";
import Title from "../../../components/Title";

const Education: FC = () => {
  return (
    <div className="about_me_cont">
      <Title
        {...{
          title: "Education",
          style: "txt__h_0 txt__yell_0 font-bold justify-start",
        }}
      />

      <div className="w-full grid justify-items-start h-fit items-start">
        <span className="txt__b_0 txt__blue_0">
          International Bartender Course - EBS (European Bartender School)
        </span>
        <span className="txt__btn_0 txt__yell_0 font-semibold">
          Hotel Management Diploma - Front of House and Sales
        </span>
      </div>
    </div>
  );
};

export default Education;
