import React from "react";
import Image from "next/image";
import Link from "next/link";
function GithubCard({ data }: { data: any }) {
  return (
    <div className="select-none">
      <div
        className="w-[1000px] c-laptop:w-full mini-laptop:w-full 
        tablet:w-full mobile:w-full  rounded-3xl 
  bg-gradient-to-t to-[#253142fd] from-[#010409]  mobile:rounded-xl
  pt-7 pb-4 px-6"
      >
        <div className="px-6 py-5 text-center justify-center items-center flex">
          <h1
            className="text-2xl tracking-wider font-poppins text-center 
            text-gray-100 mb-2 w-fit"
          >
            MY GITHUB PROFILE
          </h1>
        </div>

        {/* <div className="border-[1px] border-white opacity-20 max-w-[1000px] mx-auto"></div> */}
        <div
          className="flex flex-row max-w-[900px] mx-auto mt-4 justify-center
         items-center px-6 tablet:flex-col mobile:flex-col  "
        >
          <div>
            <div className="flex justify-center items-center">
              <div
                className="border-b-[4px] border-l-[6px] 
                border-l-blue-300
                border-red-400 rounded-full shadow-md
                shadow-[#9f6b64] relative w-[280px] h-[280px] 
                mini-laptop:w-[250px] mini-laptop:h-[250px] 
                mobile:w-[150px] mobile:h-[150px]
                tablet:w-[150px] tablet:h-[150px]
                
                "
              >
                <Image
                  src={data.avatar}
                  layout="fill"
                  className="rounded-full "
                  alt="profile"
                  unoptimized
                />
              </div>
            </div>
            <h1 className="font-poppins text-white mt-5 mb-2 text-center opacity-80 tracking-wider">
              @Ansh-Rathod
            </h1>

            <div className="flex flex-row items-center justify-center  mb-8 opacity-60">
              <p className=" tracking-wide  font-medium text-white text-sm">
                <strong className="text-white mr-1.5"> {data.followers}</strong>
                Followers
              </p>

              <p className="tracking-wide  font-medium  text-white text-sm">
                <strong className="text-white mr-1.5">
                  &nbsp;&nbsp;•&nbsp;&nbsp;{data.repos}
                </strong>
                Repositories
              </p>
            </div>
          </div>
          <div
            className="tablet:mt-10 mobile:mt-10 desktop:pl-24
           laptop:pl-24 mini-laptop:pl-10"
          >
            <div className="max-w-[400px]">
              <p
                className=" text-white opacity-90 mb-8 text-[17px]
               leading-[25px] tracking-wide mobile:text-center font-semibold font-proxima"
              >
                I consistently contributing to open-source with my full-stack
                projects since 2020.
              </p>
            </div>
            <div className="flex flex-row items-center mb-4 ">
              <div className="mr-3 bg-[#d19d0d] w-fit rounded-full p-2 text-center flex justify-center items-center text-white">
                <i className="fa-solid fa-star text-[15px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px] text-[16px]">
                Earned <b>{data.stars}</b> Stars this year with my open source
                project.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-3 bg-[#3ed10d] w-fit rounded-full p-2 text-center flex justify-center items-center text-white">
                <i className="fa-solid fa-code-commit my-[2px] text-[15px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px] text-[16px]">
                Total 1000+ commits to {data.repos} Repositories.
              </p>
            </div>

            <h1 className="font-poppins text-white mt-8 mb-4 opacity-80 tracking-wider mobile:text-center">
              Achievements
            </h1>
            <div className="flex flex-wrap mobile:items-center mobile:justify-center">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <div
                    className={`cursor-pointer ml-1 relative w-[40px] h-[40px] mobile:w-[40px] mobile:h-[40px]`}
                    key={item}
                  >
                    <Image
                      src={`/${item}.png`}
                      layout="fill"
                      className="rounded-full "
                      alt="profile"
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex w-full mobile:justify-center">
              <Link href="https://github.com/Ansh-Rathod" target={"_blank"}>
                <button
                  className="border px-4 text-white mt-10 rounded-md font-semibold tracking-wider
             hover:bg-white  hover:text-black py-2
               bg-[#1e252e] text-proxima text-sm"
                >
                  VISIT GITHUB
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-14"></div>
      </div>
    </div>
  );
}

export default GithubCard;
