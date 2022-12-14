import React, { useContext } from "react";
import Image from "next/image";
import ModelContext from "@/contexts/showModelContext";

function ProjectComponent(props: any) {
  const { project } = props;
  const { openModel } = useContext(ModelContext);

  return (
    <div
      onClick={() => openModel(project)}
      className={`select-none cursor-pointer items-center scale-100 hover:scale-105
       font-apple rounded-md flex flex-row shadow transition-all easy-in 
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
        </div>

        <p className="font-proxima text-white font-normal">
          {project.description}{" "}
        </p>
        <div className="px-0.5 pt-2.5 flex flex-row items-center justify-between">
          <p
            className="uppercase text-[12px] mobile:text-[10px]
           text-gray-100 border-b-[1px] border-gray-200 hover:text-white hover:border-white"
          >
            Read More
          </p>
          {/* <p className="text-gray-100  uppercase text-[12px]">{project.date}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
