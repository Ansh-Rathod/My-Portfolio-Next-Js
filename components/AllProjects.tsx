import ProjectComponent from "@/components/Project";
import { projects } from "data/projects";

function AllProjects() {
  return (
    <div>
      <div className="backdrop-blur-[100px] bg-white/60 ">
        <div className="desktop:container">
          <div className="max-w-[1000px] m-auto p-2 tablet:max-w-[550px] ">
            <div className="py-10 px-4 max-w-[600px] mx-auto">
              <h1 className="font-poppins pb-1 text-3xl lowercase text-black ">
                OPEN SOURCE APPS HE BUILT BEFORE 2022
              </h1>

              <p className="font-proxima text-slate-500 text-[18px] mt-4">
                He built some open-source fully functional apps in order to
                learn and improve the building skills. click on the card to view
                some images and information about the app.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-4">
              {projects.map((project: any, i: number) => (
                <ProjectComponent key={project.name} project={project} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-4 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
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
