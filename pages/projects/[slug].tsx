import Icon from "@/components/Icon";
import Slider from "@/components/slider";
import { GetServerSidePropsContext } from "next";
import { projects } from "../../data/projects";

import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
function Project({ project }: { project: any }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{project.name + " | Ansh Rathod"}</title>
        <meta property="og:title" content={project.name + " | Ansh Rathod"} />
        <meta
          property="og:site_name"
          content={project.name + " | Ansh Rathod"}
        />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:url"
          content={`https://anshrathod.com/projects/${project.name.toLowerCase()}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content={`https://anshrathod.com/projects/${project.name.toLowerCase()}`}
        />
        <meta name="twitter:creator" content="@AnshhRathod" />
        <meta name="twitter:title" content={project.name + " | Ansh Rathod"} />
        <meta name="twitter:description" content={project.description} />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://anshrathod.com/intro_image_meta.png"
        />
      </Head>

      <div className="overflow-y-hidden h-screen">
        <div
          className="py-2.5 px-4 w-screen  border-b-[0.5px] border-gray-300 font-poppins
               font-bold text-xl  "
        >
          <div
            className=" w-[700px] max-w-[700px] mx-auto
                     tablet:rounded-none mobile:rounded-none flex flex-row 
               justify-between items-center "
          >
            <div
              className="cursor-pointer hover:bg-blue-100 px-2 
                rounded-md text-gray-400 hover:text-gray-700"
              onClick={() => router.push("/", "/", { shallow: true })}
            >
              <i className="fa-sharp fa-solid fa-xmark fa-sm"></i>
            </div>
            <p>{project.name}</p>
            <div
              className="cursor-pointer hover:bg-blue-100 px-2 
                rounded-md text-gray-400 hover:text-gray-700 invisible"
            >
              <i className="fa-sharp fa-solid fa-xmark fa-sm"></i>
            </div>
          </div>
        </div>
        <div
          className={`items-center
                    font-proxima  flex flex-col bg-white 
                     w-[700px] max-w-[700px] mx-auto
                     tablet:rounded-none mobile:rounded-none
                     `}
        >
          <div
            className="h-screen max-h-full
               w-full overflow-y-scroll "
          >
            <div className="flex justify-center">
              <Slider images={project.images} />
            </div>

            <div
              className="mb-12 flex flex-row justify-center text-center items-end 
                w-full px-10 tablet:px-5 mobile:px-5"
            >
              <div>
                <b className="pl-1.5 font-poppins">Share on</b>
                <div className="pt-5 flex flex-row">
                  <Icon
                    classes="fa-brands fa-linkedin"
                    url={`https://www.linkedin.com/sharing/share-offsite/?url=${project.url}`}
                  />

                  <Icon
                    classes="fa-brands fa-twitter"
                    url={`http://twitter.com/share?text=Check out this amazing app built by @AnshhRathod on github. view all projects on anshrathod.com&url=${project.url}&hashtags=flutter,opensource,github`}
                  />
                  <Icon classes="fa-regular fa-copy" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-row justify-start w-full px-12 tablet:px-6 mobile:px-6">
              <div>
                <b className="font-poppins">Description</b>
                <div
                  className="mt-1.5"
                  dangerouslySetInnerHTML={{
                    __html: project.long_description,
                  }}
                />
              </div>
            </div>

            <div className="my-6 flex flex-row justify-start w-full px-12 tablet:px-6 mobile:px-6">
              <div>
                <b className="font-poppins">Tech stack</b>
                <p className="mt-1.5 ">{project.madeWith}</p>
              </div>
            </div>
            <div className="my-6 flex flex-row justify-start w-full px-12 tablet:px-6 mobile:px-6">
              <div>
                <b className="font-poppins">Created on</b>
                <p className="mt-1.5 ">{project.date}</p>
              </div>
              <div className="mx-6">
                <b className="font-poppins">
                  {project.name != "Cineast" ? "Earned Stars" : "Downloads"}
                </b>
                <p className="mt-1">
                  <Image
                    src={
                      project.name != "Cineast"
                        ? `https://img.shields.io/github/stars/${project.url.replace(
                            "https://github.com/",
                            ""
                          )}?style=social`
                        : "https://img.shields.io/static/v1?label=Downloads&message=1k&color=%3CCOLOR%3E"
                    }
                    alt="stars"
                    height={26}
                    width={100}
                    objectFit="contain"
                    unoptimized
                  />
                </p>
              </div>
            </div>
            <div className="mt-2 flex flex-row justify-center">
              <a href={project.url} target="_blank" rel="noreferrer">
                <div
                  className="pr-4 pl-3 py-2 uppercase font-proxima rounded-lg 
                  flex flex-row justify-center items-center text-center cursor-pointer bg-blue-500 text-white 
                   transition-all ease-in-out shadow-md shadow-blue-400 "
                >
                  {project.name != "Cineast" ? (
                    <>
                      <i className="fa-brands fa-github px-2" />
                      <p className="text-[12px]">view source code</p>
                    </>
                  ) : (
                    <>
                      <i className="fa-brands fa-google-play px-2" />
                      <p className="text-[12px]">Download now</p>
                    </>
                  )}
                </div>
              </a>
            </div>
            <div className="mb-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  try {
    const data = projects.find(
      (project: any) => project.name.toLowerCase() == params.query.slug
    );
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        project: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Project;
