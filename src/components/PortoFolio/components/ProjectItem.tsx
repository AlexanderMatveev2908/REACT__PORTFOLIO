import { FC } from "react";
import { ProjectFieldType } from "../../../config/fieldsData/projects";

type PropsType = ProjectFieldType;

const ProjectItem: FC<PropsType> = ({ img, url, description, title }) => {
  return (
    <div className="w-full rounded-[12px] overflow-hidden grid grid-cols-1 h-fit lg:h-full bg__black_0">
      <a href={url} className="w-full lg:min-h-[324px] lg:max-h-[324px]">
        <img
          src={img}
          alt=""
          className="object-cover w-full max-h-full min-h-full"
        />
      </a>

      <div className="p-[36px] grid justify-items-start items-center ">
        <h1 className="txt__yell_0 txt__h_0 font-bold">{title}</h1>

        <p className="txt__yell_0 txt__btn_0">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
