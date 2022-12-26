import React from "react";
import ProjectComponent from "@/components/Project";
import { projects } from "data/projects";
import Model from "./Model";
import { useRouter } from "next/router";

function AllProjects() {
  return (
    <div
      id="projects"
      className="bg-no-repeat border-t-[0.6px] border-slate-200 bg-fill bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.jpg')] bg-cover"
    >
      <div className="backdrop-blur-[200px] bg-white/60 pb-24">
        <div className="desktop:container">
          <div className="max-w-[1000px] m-auto p-2 tablet:max-w-[550px] ">
            <div className="py-20 px-4">
              <h1 className="font-poppins pb-1 text-3xl uppercase text-black text-center">
                Completed Projects
              </h1>

              <p className="font-proxima text-slate-900 text-[18px] text-center">
                I have worked with multiple technologies as a developer to build
                and maintain my projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {projects.map((project: any) => (
                <ProjectComponent key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
