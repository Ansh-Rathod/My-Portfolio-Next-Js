import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const textUpAnimate = {
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.6 },
  },
};
function ProjectComponent(props: any) {
  const { project, i } = props;

  return (
    <Link
      scroll={false}
      href={`/?slug=${project.name.toLowerCase()}`}
      as={`/projects/${project.name.toLowerCase()}`}
    >
      <motion.div
        variants={textUpAnimate}
        initial={{ y: 50 * (i * 0.7), opacity: 0 }}
        whileInView={{ y: 0, transition: { duration: 0.3, delay: i * 0.4 } }}
        viewport={{ once: true, amount: 0.7 }}
        whileHover={{
          scale: 0.98,
          transition: { type: "spring", bounce: 0.4, duration: 0.2 },
        }}
        className={`select-none cursor-pointer items-center 
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
            <motion.p
              whileHover={{}}
              className="uppercase text-[12px] mobile:text-[10px]
           text-gray-100 border-b-[1px] border-gray-200 hover:text-white hover:border-white"
            >
              Read More
            </motion.p>
            {/* <p className="text-gray-100  uppercase text-[12px]">{project.date}</p> */}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectComponent;
