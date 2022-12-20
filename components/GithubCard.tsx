import React from "react";
import Image from "next/image";
import Link from "next/link";
function GithubCard({ data }: { data: any }) {
  return (
    <div className=" select-none  mobile:px-0">
      <div
        className="w-full
  bg-gradient-to-t to-[#1e252e] from-[#010409]  py-14 rounded-none mobile:rounded-none "
      >
        <div className="px-6 py-5">
          <h1 className="text-2xl tracking-wider font-poppins text-center text-gray-100 mb-2">
            GITHUB PROFILE
          </h1>
          {/* <p className="text-center text-white opacity-80">
            I consistently contributing to open-source with my Full-stack
            projects since 2020.
          </p>
          <div className="flex flex-row items-center justify-center mt-3  mb-8 opacity-60">
            <p className=" tracking-wide  font-medium text-white text-sm">
              <strong className="text-white mr-1.5"> {data.followers}</strong>
              Followers
            </p>

            <p className="tracking-wide  font-medium  text-white text-sm">
              <strong className="text-white mr-1.5">
                &nbsp;&nbsp;•&nbsp;&nbsp;{data.repos}
              </strong>
              Repositories
            </p> */}
          {/* </div> */}
        </div>

        {/* <div className="border-[1px] border-white opacity-20 max-w-[1000px] mx-auto"></div> */}
        <div
          className="flex flex-row max-w-[900px] mx-auto mt-8 justify-center
         items-center px-6 tablet:flex-col mobile:flex-col  "
        >
          <div>
            <div>
              <div
                className="border-b-[4px] border-l-[6px] 
                border-l-blue-300
                border-red-400 rounded-full shadow-md
                shadow-[#9f6b64] relative w-[300px] h-[300px] 
                mini-laptop:w-[250px] mini-laptop:h-[250px] mobile:w-[200px] mobile:h-[200px]"
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
              <p className=" text-white opacity-80 mb-10 leading-[25px] ">
                I consistently contributing to open-source with my Full-stack
                projects since 2020.
              </p>
            </div>
            <div className="flex flex-row items-start mb-4 ">
              <div className="mr-4 bg-[#d19d0d] w-fit rounded-full p-2 text-center flex justify-center items-center text-white">
                <i className="fa-solid fa-star text-[15px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px]">
                Earned <b>{data.stars}</b> Stars this year with my open source
                project.
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-4 bg-[#3ed10d] w-fit rounded-full p-2 text-center flex justify-center items-center text-white">
                <i className="fa-solid fa-code-commit my-[2px] text-[15px]"></i>
              </div>
              <p className="tracking-wide opacity-80 font-medium text-white max-w-[350px]">
                Total 1000+ commits to {data.repos} Repositories.
              </p>
            </div>

            <h1 className="font-poppins text-white mt-8 mb-4 opacity-80 tracking-wider">
              Achievements
            </h1>
            <div className="flex flex-wrap">
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
            <Link href="https://github.com/Ansh-Rathod" target={"_blank"}>
              <button
                className="border px-4 text-white mt-10 rounded-md font-semibold tracking-wider
             hover:bg-white mt-2 hover:text-black py-2
               bg-[#1e252e] text-proxima text-sm"
              >
                VISIT GITHUB
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-14"></div>
      </div>
    </div>
  );
}

export default GithubCard;
