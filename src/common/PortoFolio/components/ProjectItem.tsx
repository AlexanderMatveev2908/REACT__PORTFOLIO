import { FC } from "react";
import { ProjectFieldType } from "../../../config/fieldsData/projects";

type PropsType = ProjectFieldType & {
  index: number;
};

const ProjectItem: FC<PropsType> = ({
  img,
  url,
  description,
  title,
  index,
}) => {
  return (
    <div className="w-full rounded-[12px] overflow-hidden grid bg__black_0 grid-cols-1 h-fit items-start">
      <a
        target="_blank"
        href={url}
        className={`w-full sm:h-[324px] ${!index ? "h-[146px]" : "h-[210px]"}`}
      >
        <img src={img} alt="" className="object-cover w-full h-full" />
      </a>

      <div className="p-[36px] grid justify-items-start max-h-fit items-start lg:flex lg:flex-col">
        <h1 className="txt__yell_0 txt__h_0 font-bold">{title}</h1>

        <p className="txt__yell_0 txt__btn_0">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
