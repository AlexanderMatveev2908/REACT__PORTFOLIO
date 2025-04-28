import { FC } from "react";
import "./PortoFolio.css";

const PortoFolio: FC = () => {
  return (
    <section className="w-full grid justify-items-center pt-[64px] pm-[128px] gap-[68px]">
      <div className="w-full max-w-[252px] sm:max-w-[475px] grid justify-items-center gap-[16px]">
        <h1 className="txt___h_1 txt__yell_0 font-bold">My Portfolio</h1>
        <p className="txt__btn_0 txt__yell_0 text-center">
          From projects to experiments that I do in my spare time.
        </p>
      </div>
    </section>
  );
};

export default PortoFolio;
