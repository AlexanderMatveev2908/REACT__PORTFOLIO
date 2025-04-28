import { FC } from "react";
import Title from "../../../components/Title";
import { lang } from "../../../config/fieldsData/lang";

const Languages: FC = () => {
  return (
    <div className="about_me_cont">
      <Title
        {...{
          title: "Languages",
          style: "txt__h_0 txt__yell_0 font-bold justify-start",
        }}
      />

      <ul className="w-full grid justify-items-start">
        {lang.map((el) => (
          <li key={el.id} className="txt__yell_0 font-semibold txt__btn_0">
            {el.el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
