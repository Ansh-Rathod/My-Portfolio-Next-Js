import { newProjects, usefulProjects } from "data/projects";

import Image from "next/image";
import Link from "next/link";
function UsefulProducts() {
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
                The real Products he built
              </h1>

              <p className="font-proxima text-slate-500 text-[18px] mt-4">
                The actual useful product he built which{" "}
                <span className="bg-slate-100"> generates revenue</span> for him
                are listed below. click on the card to view some images and
                information about the app.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {usefulProjects.map((project: any, i: number) => (
                <ProjectComponent key={project.name} project={project} i={i} />
              ))}
            </div>
            <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
              <p>Message from him:</p>
              <div className="bg-gray-100 p-2 rounded-lg mt-2">
                <p>
                  My one rule is to build super simple apps with best possible
                  user exprience and dont ship mediocre apps. I design all my
                  apps btw
                </p>
                <br />
                <p>
                  I&apos;ll continue to build more useful apps like Pimosa and i
                  have so many ideas in my notion stay tuned! 🔔. i build and
                  ship apps fast now.
                </p>
              </div>
            </div>
          </div>
          <div className="py-20 px-4 max-w-[600px] mx-auto">
            <h1 className="font-poppins pb-1 text-3xl uppercase text-black ">
              few Good ones after 2022
            </h1>

            <p className="font-proxima text-slate-500 text-[18px] mt-4">
              After 2022 as he got more exprience, he started to get picky with
              what apps to build. he won 1st runner up prices in supabase launch
              week hackathon with that Tweet schedular desktop app in may 2023.
              but after in july 2023 he started building graphic design tool and
              spending months on that was mistake but that tool was super good.
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:grid-cols-1 tablet:px-4 mobile:px-2">
              {newProjects.map((project: any, i: number) => (
                <ProjectComponent2 key={project.name} project={project} i={i} />
              ))}
            </div>
          </div>
          <div className="mt-10 font-proxima text-[17px] max-w-[600px]  px-6 mobile:px-2 py-2 tablet:w-full mobile:w-full  text-gray-500 mx-auto">
            <p>Message from him:</p>
            <div className="bg-gray-100 p-2 rounded-lg mt-2">
              <p>
                First time i abandoned building any of my app
                &apos;Craftor&apos; felt bad but well i made something better:
                &apos;Pimosa&apos; which brings revenue and also now i have
                lession that i shouldnt build apps that consumes so much time.
              </p>
              <br />
              <p>
                but yeah doesnt mean i will build half baked ugly apps. look at
                the apps i built after Craftor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefulProducts;

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
       font-apple  flex flex-col  hover:border-blue-600 bg-gray-100 
       p-2 rounded-lg `}
      >
        <div className="w-full h-[200px] mobile:h-[300px] tablet:h-[150px] relative rounded-lg my-2">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            objectFit="contain"
            layout="fill"
            className="unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div>
        {/* <div className="w-[100px] h-[100px]  relative rounded-lg mx-2">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            objectFit="contain"
            layout="fill"
            className="unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
          />
        </div> */}

        <div className="px-2 py-6 w-full">
          <div className="flex flex-row items-center justify-between pb-1">
            <h1 className="font-poppins text-[18px] uppercase text-black">
              {project.name}
            </h1>
          </div>

          <p className="font-proxima  text-gray-500 ">{project.description} </p>
          <div className="px-0.5 pt-2.5 flex flex-row items-center justify-between">
            <p
              className="uppercase text-[12px] mobile:text-[10px]
           text-gray-500 border-b-[1px] border-gray-500 hover:text-black hover:border-black"
            >
              Read More
            </p>
            <p className="text-gray-500  uppercase text-[12px]">
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
       font-apple  flex flex-row  hover:border-blue-600 bg-gray-100 
       px-2 rounded-lg `}
      >
        {/* <div className="w-full h-[200px] mobile:h-[300px] tablet:h-[150px] relative rounded-lg ">
          <Image
            src={`/imgs/` + project.image}
            alt="image"
            objectFit="contain"
            layout="fill"
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
            objectFit="contain"
            layout="fill"
            className="unselectable rounded-lg"
            width={0}
            sizes="100vw"
            height={0}
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
            <p
              className="uppercase text-[12px] mobile:text-[10px]
           text-gray-500 border-b-[1px] border-gray-500 hover:text-black hover:border-black"
            >
              Read More
            </p>
            <p className="text-gray-500  uppercase text-[12px]">
              {project.date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
