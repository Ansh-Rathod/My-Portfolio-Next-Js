import ProjectComponent from "@/components/Project";
import { projects } from "data/projects";
import { smallContainer, textBody, textDes, textH1 } from "pages/_app";

function AllProjects() {
  return (
    <div>
      <div className={`mt-20 mb-10 py-10 border-t ${smallContainer} `}>
        <h1 className={`${textH1} pb-1 `}>
          OPEN SOURCE APPS HE BUILT BEFORE 2022
        </h1>

        <p className={`${textBody} mt-4`}>
          He built some open-source fully functional apps in order to learn and
          improve the building skills.
        </p>
        <br />
        <p className={`mt-4 ${textDes}`}>
          click on the card to view some images and information about the app.
        </p>
      </div>
      <div className="max-w-[1000px] m-auto   px-6 ">
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1  ">
          {projects.map((project: any, i: number) => (
            <ProjectComponent key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>
      {/* <div className="my-10 text-[17px] max-w-[600px]  px-6  py-2  
        <p>Message from him:</p>
        <div className="bg-[#0B82FE] text-white p-4 rounded-3xl mt-2">
          <p>
            These useless apps are avaialble on github go use/fork them. but i
            no longer maintain them.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default AllProjects;
