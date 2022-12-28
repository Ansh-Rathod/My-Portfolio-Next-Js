import React from "react";
import ProjectComponent from "@/components/Project";
import { projects } from "data/projects";
import { motion } from "framer-motion";

const textUpAnimate = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
function AllProjects() {
  return (
    <motion.div
      variants={textUpAnimate}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
      id="projects"
      className="bg-no-repeat  bg-fill bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')] bg-cover"
    >
      <div className="backdrop-blur-[100px] bg-white/60 pb-24">
        <div className="desktop:container">
          <div className="max-w-[1000px] m-auto p-2 tablet:max-w-[550px] ">
            <div className="py-20 px-4">
              <motion.h1
                variants={textUpAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 3 }}
                className="font-poppins pb-1 text-3xl uppercase text-black text-center"
              >
                Completed Projects
              </motion.h1>

              <motion.p
                variants={textUpAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 3 }}
                className="font-proxima text-slate-900 text-[18px] text-center"
              >
                I have worked with multiple technologies as a developer to build
                and maintain my projects.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {projects.map((project: any, i: number) => (
                <ProjectComponent key={project.name} project={project} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AllProjects;
