import ProjectComponent from "@/components/Project";
import { projects } from "data/projects";

function AllProjects() {
  return (
    <div
      id="projects"
      className="bg-no-repeat  bg-fill bg-[url('/daniel-huniewicz-iQaFCjuMTfo-unsplash.webp')] bg-cover"
    >
      <div className="backdrop-blur-[100px] bg-white/60 pb-24">
        <div className="desktop:container">
          <div className="max-w-[1000px] m-auto p-2 tablet:max-w-[550px] ">
            <div className="py-20 px-4 max-w-[600px] mx-auto">
              <h1 className="font-poppins pb-1 text-3xl uppercase text-black ">
                Some useless apps he built
              </h1>

              <p className="font-proxima text-slate-500 text-[18px] mt-4">
                He built some useless but fully functional apps in order to
                learn and improve the building skills. click on the card to view
                some images and information about the app.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {projects.map((project: any, i: number) => (
                <ProjectComponent key={project.name} project={project} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
