import { FC } from "react";
import { ProjectFieldType } from "../../../config/fieldsData/projects";

type PropsType = ProjectFieldType;

const ProjectItem: FC<PropsType> = ({ img, url, description, title }) => {
  return (
    <div className="w-full rounded-[12px] overflow-hidden grid bg__black_0 grid-cols-1 lg:grid-rows-2">
      <a
        target="_blank"
        href={url}
        className="w-full lg:min-h-[324px] lg:max-h-[324px]"
      >
        <img
          src={img}
          alt=""
          className="object-cover w-full max-h-full lg:min-h-full"
        />
      </a>

      <div className="p-[36px] grid justify-items-start max-h-fit items-start lg:flex lg:flex-col">
        <h1 className="txt__yell_0 txt__h_0 font-bold">{title}</h1>

        <p className="txt__yell_0 txt__btn_0">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
