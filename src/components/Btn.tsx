import { FC } from "react";

type PropsType = {
  label: string;
};

const Btn: FC<PropsType> = ({ label }) => {
  return (
    <button className="appearance-none outline-0 cursor-pointer bg__blue_1 txt__yell_0 py-[8px] px-[16px] rounded-[8px] font-semibold">
      <span className="txt__btn_0">{label}</span>
    </button>
  );
};

export default Btn;
