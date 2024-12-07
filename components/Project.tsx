import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function ProjectComponent(props: any) {
  const { project, i } = props;

  return (
    <Link
      scroll={false}
      href={`/?slug=${project.name.toLowerCase()}`}
      as={`/projects/${project.name.toLowerCase()}`}
    >
      <div
        className={`select-none cursor-pointer items-center 
       font-apple    hover:border-blue-600 bg-[#FAFAFA] border-[#EFEFF1]
       p-2 bg-gradient-to-r border-[2px] rounded-lg ${
         project.type == "horizontal" ? "flex flex-row" : "flex flex-col"
       }`}
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
            <h1 className="font-poppins text-[18px] uppercase text-black">
              {project.name}
            </h1>
          </div>

          <p className="font-proxima  text-gray-500 ">{project.description} </p>
          <div className="px-0.5 pt-2.5 flex flex-row items-center justify-between">
            <motion.p
              whileHover={{}}
              className="uppercase text-[12px] mobile:text-[10px]
           text-gray-500 border-b-[1px] border-gray-500 hover:text-black hover:border-black"
            >
              Read More
            </motion.p>
            <p className="text-gray-500  uppercase text-[12px]">
              {project.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectComponent;
