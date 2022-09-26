import React, { useContext } from "react";
import Image from "next/image";
import ModelContext from "@/contexts/showModelContext";

function ProjectComponent(props: any) {
  const { project } = props;
  const { openModel } = useContext(ModelContext);

  return (
    <div
      onClick={() => openModel(project)}
      className={`select-none cursor-pointer items-center scale-100 hover:scale-[1.02]
       font-apple rounded-md flex flex-row shadow transition-all
       p-2 bg-gradient-to-r ${project.name.toLowerCase()}`}
    >
      <div className="w-[100px] ">
        <Image
          src={`/imgs/` + project.image}
          alt="image"
          objectFit="contain"
          width={100}
          height={200}
        />
      </div>
      <div className="px-2 py-6 w-full">
        <div className="flex flex-row items-center justify-between pb-1">
          <h1 className="font-poppins text-[18px] uppercase text-white">
            {project.name}
          </h1>
          {/* <Image
            src={
              project.name != "Cineast"
                ? `https://img.shields.io/github/stars/${project.url.replace(
                    "https://github.com/",
                    ""
                  )}?style=social`
                : "https://img.shields.io/static/v1?label=Downloads&message=1k&color=%3CCOLOR%3E"
            }
            alt="stars"
            height={17}
            width={100}
            objectFit="contain"
            unoptimized
          /> */}
          {/* <b className="px-4 text-slate-100 uppercase font-thin text-[12px] font-apple">
              {project.date}
            </b> */}
        </div>

        <p className="font-proxima text-white font-normal">
          {project.description}
        </p>
        <p className="text-gray-100  uppercase pt-2 text-[12px]">
          {project.date}
        </p>
      </div>
    </div>
  );
}

export default ProjectComponent;
