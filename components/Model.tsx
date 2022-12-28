import React from "react";
import Image from "next/image";
import Slider from "./slider";
import Icon from "@/components/Icon";
import { Router, useRouter } from "next/router";
import { motion } from "framer-motion";
function Model({ project, isOpen }: { project: any; isOpen: boolean }) {
  const router = useRouter();
  return (
    <div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-500 bg-opacity-60 
            backdrop-blur-sm z-10"
        >
          <div
            className="w-screen h-screen max-w-full 
          flex justify-center items-start pt-4 tablet:pt-0 mobile:pt-0 "
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0.9, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className={`items-center
                    font-proxima rounded-lg flex flex-col bg-white 
                     w-[700px] max-w-[700px] shadow-xl 
                     tablet:rounded-none mobile:rounded-none
                     `}
            >
              <div
                className="py-2.5 px-4 w-full  border-b-[0.5px] border-gray-300 font-poppins
               font-bold text-xl flex flex-row 
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Model;
