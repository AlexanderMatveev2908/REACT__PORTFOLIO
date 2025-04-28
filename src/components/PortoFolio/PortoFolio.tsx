import { FC } from "react";
import "./PortoFolio.css";
import { myProjects } from "../../config/fieldsData/projects";
import ProjectItem from "./components/ProjectItem";

const PortoFolio: FC = () => {
  return (
    <section className="w-full grid justify-items-center pt-[64px] pm-[128px] gap-[68px] padding__app">
      <div className="w-full max-w-[252px] sm:max-w-[475px] grid justify-items-center gap-[16px]">
        <h1 className="txt___h_1 txt__yell_0 font-bold">My Portfolio</h1>
        <p className="txt__btn_0 txt__yell_0 text-center">
          From projects to experiments that I do in my spare time.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 gap-[32px] lg:grid-cols-2">
        {myProjects.map((el) => (
          <ProjectItem key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default PortoFolio;
