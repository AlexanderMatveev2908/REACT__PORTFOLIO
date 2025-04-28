import { FC } from "react";

type PropsType = {
  title: string;
  style: string;
};

const Title: FC<PropsType> = ({ title, style }) => {
  return (
    <div className={`w-full flex ${style}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
