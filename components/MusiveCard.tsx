import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function MusiveCard() {
  return (
    <div className="select-none">
      <div
        className="w-[1000px] c-laptop:w-full mini-laptop:w-full 
        tablet:w-full mobile:w-full rounded-3xl
  bg-gradient-to-br to-[#2bb540] via-[#228046] from-[#228347]  pt-4 pb-6 px-6 mobile:rounded-xl"
      >
        <div
          className="flex flex-row-reverse max-w-[900px] mx-auto mt-4 justify-center
         items-center px-6 tablet:flex-col mobile:flex-col  "
        >
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              viewport={{ once: true, amount: 1 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3 },
                autoReverse: false,
              }}
              transition={{ staggerChildren: 0.5 }}
              className="flex justify-center items-center"
            >
              <div
                className="w-[380px] h-[300px] relative
               mobile:w-[280px] mobile:h-[280px] tablet:w-[300px] tablet:h-[200px]
              mini-laptop:w-[300px] mini-laptop:h-[200px] c-laptop:w-[350px] c-laptop:h-[200px]"
              >
                <Image
                  src="/musive-featured.png"
                  layout="fill"
                  objectFit="contain"
                  className="object-left h-screen "
                  alt="intro"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true, amount: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3 },
              autoReverse: false,
            }}
            transition={{ staggerChildren: 0.5 }}
            className="tablet:mt-10 mobile:mt-10 desktop:pr-16
           laptop:pr-16 mini-laptop:pr-10"
          >
            <h1
              className="text-2xl tracking-wider font-poppins 
            text-gray-100 my-6 mobile:text-center"
            >
              MUSIVE
            </h1>

            <div className="max-w-[400px]">
              <p
                className=" text-white opacity-90 mb-8 text-[17px]
               leading-[25px] tracking-wide mobile:text-center font-semibold font-proxima"
              >
                Explore & download free stock music and use it anywhere you like
                with spotify web player experience.
              </p>
            </div>
            <div className="flex flex-row items-center mb-4 ">
              <div className="mr-4 bg-[#29a111] w-fit rounded-full p-2.5 text-center flex justify-center items-center text-white">
                <i className="fa-solid fa-window-restore text-[16px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px] text-[16px]">
                Web App: built with Next.js, Tailwind CSS, Algolia.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-4 bg-[#279811] w-fit rounded-full p-2.5 text-center flex justify-center items-center text-white">
                <i className="fa-brands fa-app-store-ios text-[16px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px] text-[16px]">
                Android and Ios app: built with Flutter.
              </p>
            </div>
            {/* <p className="mt-4 racking-wide opacity-80 font-medium text-white max-w-[350px] text-[16px]">
              All music on the platform is non-copyright and free to use
              anywhere you like.
            </p> */}

            {/* <h1 className="font-poppins text-white mt-8 mb-4 opacity-80 tracking-wider mobile:text-center"></h1> */}

            <div className="flex w-full mobile:justify-center">
              <Link href="https://musive.anshrathod.com/" target={"_blank"}>
                <button
                  className="border px-4 text-white mt-10 rounded-md font-semibold tracking-wider
             hover:bg-white  hover:text-black py-2
               bg-[#26623a] text-proxima text-sm"
                >
                  VISIT WEB APP
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mt-14"></div>
      </div>
    </div>
  );
}

export default MusiveCard;
