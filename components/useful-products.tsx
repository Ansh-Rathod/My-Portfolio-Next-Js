import { newProjects, usefulProjects } from "data/projects";

import Image from "next/image";
import Link from "next/link";
import { message, smallContainer, textBody, textDes, textH1 } from "pages/_app";
export default function UsefulProducts() {
  return (
    <div id="projects" className="bg-no-repeat  bg-cover">
      <div className={`my-10 ${smallContainer} border-t py-10`}>
        <h1 className={`pb-1  text-black ${textH1}`}>
          useful Products he built
        </h1>

        <p className={`${textBody} mt-4 `}>
          The actual useful products he built, which{" "}
          <span className="bg-slate-100"> generates revenue</span> for him are
          listed below.
        </p>
        <br />
        <p className={`mt-4 ${textDes}`}>
          click on the card to view some images and information about the app.
        </p>
      </div>
      <div className="max-w-[1000px] m-auto   px-6 mt-10 ">
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1  ">
          {usefulProjects.map((project: any, i: number) => (
            <ProjectComponent key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>
      <div className={`${smallContainer} mt-10 py-10 border-b`}>
        <p>Message from him:</p>
        <div className={message}>
          <p>
            I design all my apps with a single rule: keep them simple, clean,
            and uncluttered, while delivering the best possible user experience,
            something anyone can pick up and use it without thinking much.
          </p>
          <br />
          <p>(probably because of ADHD)</p>
        </div>
      </div>
      <div className={`mt-20 border-t py-10  ${smallContainer}`}>
        <h1 className={`${textH1} pb-1 `}>few Good ones after 2022</h1>

        <p className="mt-4 text-[18px] text-slate-500   ">
          After 2022 as he got more exprience, he started to get picky with what
          apps to build. he won 1st runner up prices in supabase launch week
          hackathon with Tweet schedular desktop app(schedurio) in may 2023.
        </p>
        <p className="mt-4 text-[18px] text-slate-500   ">
          after in july 2023 he started building graphic design tool(craftor)
          and was spending months on building it then he burned out while
          building it.
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto px-6 mt-10">
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1   ">
          {newProjects.map((project: any, i: number) => (
            <ProjectComponent2 key={project.name} project={project} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectComponent2(props: any) {
  const { project, i } = props;

  return (
    <Link
      scroll={false}
      href={`/?slug=${project.name.toLowerCase()}`}
      as={`/projects/${project.name.toLowerCase()}`}
    >
      <div
        className={`select-none cursor-pointer items-center 
       tracking-tighter lowercase  flex flex-col  hover:border-blue-600 bg-gray-100 
       p-2 rounded-lg `}
      >
        <div className="w-full h-[200px]   relative rounded-lg my-2">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            fill
            className="object-contain unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div>
        {/* <div className="w-[100px] h-[100px]  relative rounded-lg mx-2">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            className="object-contain"
            fill
            className="unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div> */}

        <div className="px-2 py-6 w-full">
          <div className="flex flex-row items-center justify-between pb-1">
            <h1 className="text-[18px] lowercase text-black">{project.name}</h1>
          </div>

          <p className=" text-gray-500 ">{project.description} </p>
          <div className="px-0.5 pt-2.5 flex flex-row items-center justify-between">
            <p
              className="lowercase text-[12px] 
           text-gray-500 border-b-[1px] border-gray-500 hover:text-black hover:border-black"
            >
              Read More
            </p>
            <p className="text-gray-500  lowercase text-[12px]">
              {project.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

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
       tracking-tighter lowercase  flex flex-row  hover:border-blue-600 bg-gray-100 
        rounded-lg px-2`}
      >
        {/* <div className="w-full h-[200px]   relative rounded-lg ">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            className="object-contain"
            fill
            className="unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div> */}
        <div className="w-[100px] h-[100px]  relative rounded-lg mx-2">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            fill
            className="object-contain unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div>

        <div className="px-2 py-6 w-full">
          <div className="flex flex-row items-center justify-between pb-1">
            <h1 className="text-[18px] lowercase text-black">{project.name}</h1>
          </div>

          <p className=" text-gray-500 ">{project.description} </p>
          <div className="px-0.5 pt-2.5 flex flex-row items-center justify-between">
            <p
              className="lowercase text-[12px] 
           text-gray-500 border-b-[1px] border-gray-500 hover:text-black hover:border-black"
            >
              Read More
            </p>
            <p className="text-gray-500  lowercase text-[12px]">
              {project.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
