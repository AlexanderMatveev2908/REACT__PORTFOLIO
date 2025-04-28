import { FC } from "react";

type PropsType = {
  label: string;
  href: string;
};

const Btn: FC<PropsType> = ({ label, href }) => {
  return (
    <a
      href={href}
      target={href?.startsWith("https:") ? "_blank" : "_parent"}
      className="appearance-none outline-0 cursor-pointer bg__blue_1 txt__yell_0 py-[8px] px-[16px] rounded-[8px] font-semibold btn__app"
    >
      <span className="txt__btn_0">{label}</span>
    </a>
  );
};

export default Btn;
