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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.5 }}
      id="projects"
      className="bg-no-repeat  bg-fill bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')] bg-cover"
    >
      <div className="backdrop-blur-[100px] bg-white/60 pb-24">
        <div className="desktop:container">
          <div className="max-w-[1000px] m-auto p-2 tablet:max-w-[550px] ">
            <div className="py-20 px-4 max-w-[600px] mx-auto">
              <motion.h1
                variants={textUpAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 3 }}
                className="font-poppins pb-1 text-3xl uppercase text-black "
              >
                Some useless apps he built
              </motion.h1>

              <motion.p
                variants={textUpAnimate}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 3 }}
                className="font-proxima text-slate-500 text-[18px] mt-4"
              >
                He built some useless but fully functional apps in order to
                learn and improve the building skills. click on the card to view
                some images and information about the app.
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
